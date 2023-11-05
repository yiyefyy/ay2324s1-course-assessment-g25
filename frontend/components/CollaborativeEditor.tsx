"use client";

import * as Y from "yjs";
import { yCollab } from "y-codemirror.next";
import { EditorView, basicSetup } from "codemirror";
import { EditorState, Compartment } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { LanguageSupport } from '@codemirror/language';
import { useCallback, useEffect, useState } from "react";
import LiveblocksProvider from "@liveblocks/yjs";
import { TypedLiveblocksProvider, useRoom, useSelf } from "@/liveblocks.config";
import styles from "./CollaborativeEditor.module.css";
import { Avatars } from "@/components/Avatars";
import { Toolbar } from "@/components/Toolbar";
import LanguageSelectionWrapper from '@/wrappers/LanguageSelectionWrapper'
import selectedLanguage from '@/wrappers/LanguageSelectionWrapper'

// Collaborative code editor with undo/redo, live cursors, and live avatars
export function CollaborativeEditor() {
  const room = useRoom();
  const [element, setElement] = useState<HTMLElement>();
  const [yUndoManager, setYUndoManager] = useState<Y.UndoManager>();
  //const [lang, setLang] = useState<LanguageSupport>();

  // Get user info from Liveblocks authentication endpoint
  const userInfo = useSelf((me) => me.info);

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    setElement(node);
  }, []);

  // function updateLang(name:String){
  //   console.log("update lang");
  // }

  // Set up Liveblocks Yjs provider and attach CodeMirror editor
  useEffect(() => {
    let provider: TypedLiveblocksProvider;
    let ydoc: Y.Doc;
    let view: EditorView;

    if (!element || !room || !userInfo) {
      return;
    }

    // Create Yjs provider and document
    ydoc = new Y.Doc();
    provider = new LiveblocksProvider(room as any, ydoc);
    const ytext = ydoc.getText("codemirror");
    const undoManager = new Y.UndoManager(ytext);
    setYUndoManager(undoManager);

    // Attach user info to Yjs
    provider.awareness.setLocalStateField("user", {
      name: userInfo.name,
      color: userInfo.color,
      colorLight: userInfo.color + "80", // 6-digit hex code at 50% opacity
    });

    // let language = new Compartment();
    
    // Set up CodeMirror and extensions
    const state = EditorState.create({
      doc: ytext.toString(),
      extensions: [
        basicSetup,
        java(),
        yCollab(ytext, provider.awareness, { undoManager }),
      ],
    });

    // Attach CodeMirror to element
    view = new EditorView({
      state,
      parent: element,
    });

    // view.dispatch({
    //   effects: language.reconfigure(lang)
    // })
    // console.log("language:" + lang.language.name)

    // return () => {
    //   // ydoc?.destroy();
    //   // provider?.destroy();
    //   // view?.destroy();
    // };
  }, [element, room, userInfo]);

  useEffect(() => {
    let provider: TypedLiveblocksProvider;
    let ydoc: Y.Doc;
    let view: EditorView;

    // if (!element || !room || !userInfo) {
    //   return;
    // }

    // Create Yjs provider and document
    ydoc = new Y.Doc();
    provider = new LiveblocksProvider(room as any, ydoc);
    const ytext = ydoc.getText("codemirror");
    const undoManager = new Y.UndoManager(ytext);
    setYUndoManager(undoManager);

    // Attach user info to Yjs
    // provider.awareness.setLocalStateField("user", {
    //   name: userInfo.name,
    //   color: userInfo.color,
    //   colorLight: userInfo.color + "80", // 6-digit hex code at 50% opacity
    // });

    let language = new Compartment();
    
    // Set up CodeMirror and extensions
    const state = EditorState.create({
      doc: ytext.toString(),
      extensions: [
        basicSetup,
        language.of(java()),
        yCollab(ytext, provider.awareness, { undoManager }),
      ],
    });

    // Attach CodeMirror to element
    view = new EditorView({
      state,
      parent: element,
    });
    
    //console.log("selected language:" + selectedLanguage.name);

    if (selectedLanguage.name == "Java")
    {
      view.dispatch({
        effects: language.reconfigure(java())
      })
      console.log("language:" + selectedLanguage.name)
    } 
    else if (selectedLanguage.name == "JavaScript") 
    {
      view.dispatch({
        effects: language.reconfigure(javascript())
      })
      console.log("language:" + selectedLanguage.name)
    } 
    else if (selectedLanguage.name == "Python") 
    {
      view.dispatch({
        effects: language.reconfigure(python())
      })
      console.log("language:" + selectedLanguage.name)
    } 
    else if (selectedLanguage.name == "C++") 
    {
      view.dispatch({
        effects: language.reconfigure(cpp())
      })
      console.log("language:" + selectedLanguage.name)
    };

  }, [selectedLanguage]);

  return (
    <div className={styles.container}>
      <div className={styles.editorHeader}>
        
        <div className="flex items-center">
          <div>
            {yUndoManager ? <Toolbar yUndoManager={yUndoManager} /> : null}
          </div>
          <LanguageSelectionWrapper></LanguageSelectionWrapper>

        </div>

          <Avatars />
  
      </div>
      {/* <button onClick={()=>setLang(javascript())}>hi</button> */}
      <div className={styles.editorContainer} ref={ref}></div>
    </div>
  );
}
