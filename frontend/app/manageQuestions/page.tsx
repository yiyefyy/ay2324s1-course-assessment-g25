import { getServerSession } from 'next-auth';
import QuestionsTableWrapper from '../../wrappers/QuestionsTableWrapper';
import UserIconWrapper from '../../wrappers/UserIconWrapper';
import SideBarWrapper from '../../wrappers/SideBarWrapper';
import AddQuestionForm from '../../wrappers/AddQuestionFormWrapper';
import { PlusIcon, EditIcon } from '../../icons';

import { authOptions } from '../api/auth/[...nextauth]/authOptions';

export default async function Home() {

    const session = await getServerSession(authOptions);


    return (
        <>
            <div className="bg-white min-h-screen">
                <div className="bg-theme flex justify-between items-center h-20 px-5">
                    <div className='flex items-center'>
                        <SideBarWrapper />
                        FANCY P
                    </div>
                    {session
                        ? <UserIconWrapper session={session}></UserIconWrapper>
                        : <></>
                    }
                </div>
                <main className='my-10 mx-40'>
                    <div className='flex flex-row items-center'>

                        <PlusIcon className='mr-2'></PlusIcon>
                        <h1 className='font-dmserif text-xl text-gray-600 font-bold'>Add Question</h1>
                    </div>
                    <h2 className='font-dmserif text-base text-gray-600'>Contribute a question to PeerPrep's crowd-sourced question base!</h2>
                    <div id='matchRequestBox' className='flex flex-col items-left bg-gray-100 shadow-md py-4 rounded-md mt-5 mb-10'>
                        <AddQuestionForm />
                    </div>
                    <div className='flex flex-row items-center'>
                        <EditIcon className='mr-2'></EditIcon>
                        <h1 className='font-dmserif text-xl text-gray-600 font-bold'>Edit Question</h1>
                    </div>

                    <h2 className='font-dmserif text-base text-gray-600'>Wish to change something? You may edit the questions created by you.</h2>
                    <QuestionsTableWrapper />
                </main>
            </div>
        </>
    )
}
