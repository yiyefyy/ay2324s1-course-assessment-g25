import SignInButtonWrapper from '../wrappers/SignInButtonWrapper';
import SignUpButtonWrapper from '../wrappers/SignUpWrapper';
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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



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
          :<div className='flex flex-row '>
            <SignInButtonWrapper>Sign in</SignInButtonWrapper> 
            <SignUpButtonWrapper>Sign up</SignUpButtonWrapper>
          </div>     
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
