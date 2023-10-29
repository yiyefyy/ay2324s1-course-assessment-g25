import SignInButtonWrapper from '../wrappers/SignInButtonWrapper';
import MatchButtonWrapper from '../wrappers/MatchButtonWrapper';
import WhiteboardButtonWrapper from '../wrappers/WhiteboardButtonWrapper';
import DifficultySelectionWrapper from '../wrappers/DifficultySelectionWrapper';
import UserIconWrapper from '../wrappers/UserIconWrapper';
import SideBarWrapper from '../wrappers/SideBarWrapper';
import { getServerSession } from 'next-auth';
import QuestionsTableWrapper from '../wrappers/QuestionsTableWrapper';
import * as FaIcons from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { SignInIcon } from '../icons';
import { signIn } from "next-auth/react";


export default async function Home() {

  const session = await getServerSession(authOptions);


  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="bg-theme flex justify-between items-center h-20 px-5">
          <div className='flex items-center'>
            {/*<Link href="#" className="ml-7 mr-2 text-black text-2xl">
              <FaIcons.FaBars />
            </Link> */}
            <SideBarWrapper/>
            FANCY P 
          </div>
          {session
          ?<UserIconWrapper session={session}></UserIconWrapper>
          :<SignInButtonWrapper>Sign in</SignInButtonWrapper>        
          }
        </div>
        <main className='my-10 mx-40'>
          <h1 className='font-dmserif font-semibold text-7xl mb-5'>PeerPrep</h1>
          <h2 className='font-dmserif italic text-xl'>prep with peers for technical assessments</h2>
          <div id='matchRequestBox' className='flex items-center justify-between bg-white shadow-md py-4 px-8 rounded-md my-10'>
            <div className='flex items-center'>
              <h1 className='font-dmserif font-semibold text-xl'>prepare for a </h1>
              <DifficultySelectionWrapper/>
              <h1 className='font-dmserif font-semibold text-xl'>question today</h1>
            </div>
            <MatchButtonWrapper session={session}>MATCH</MatchButtonWrapper>
          </div>
          
          {/* TO BE DELETED : I use this whiteboard wrapper button to test the whiteboard */}
          <WhiteboardButtonWrapper>
            <button>Go to Whiteboard</button>
          </WhiteboardButtonWrapper>


        </main>
      </div>
    </>


  )
}

/* export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      {session ? (
        <div>
          <p>Signed in as {session?.user?.name}</p>
            <Link href="/dashboard">| Dashboard |</Link>
            <Link href="/homepage">| Homepage |</Link>
            <Link href="/profile">| Profile |</Link>
            <Link href="/sign_in">| Sign In |</Link>
            <Link href="/sign_up">| Sign Up |</Link>
            <Link href="/api/auth/signout">| Sign Out |</Link>
        </div>
      ) : (
        <div>
          <p>Please sign in to view links</p>
        </div>
      )}

      <div>
        <SignInButtonWrapper>
          Sign in
        </SignInButtonWrapper>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

    </main>
  )
} */
