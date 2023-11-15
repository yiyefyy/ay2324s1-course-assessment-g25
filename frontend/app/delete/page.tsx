import { getServerSession } from 'next-auth';
import Image from 'next/image';
import SideBarWrapper from '@/wrappers/SideBarWrapper';
import SignInButtonWrapper from '@/wrappers/SignInButtonWrapper';
import SignUpButtonWrapper from '@/wrappers/SignUpWrapper';
import UserIconWrapper from '@/wrappers/UserIconWrapper';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { deleteUserById } from '../api/user/routes';

export default async function Home() {
  const session: any = await getServerSession(authOptions);
  const handleDelete = await deleteUserById(session.user.id)


  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="bg-theme flex justify-between items-center h-20 px-5 mb-10">
          <div className='flex items-center'>
            {/*<Link href="#" className="ml-7 mr-2 text-black text-2xl">
              <FaIcons.FaBars />
            </Link> */}
            <SideBarWrapper role={session?.user?.role ?? "user"} />
            <Image src="/logo.svg" alt="Logo" width="100" height="100" />

          </div>
          {
            session
              ?
              // show user icon if logged in
              <div>
                <UserIconWrapper session={session}></UserIconWrapper>
                <p>My role is: {session.user?.role}</p>
                {
                  session.user?.role === 'admin'
                    ?
                    <div>
                      <p>Secret Admin Sentence</p>
                    </div>
                    :
                    <div />
                }
              </div>
              :
              // else show sign in and sign up buttons
              <div className='flex flex-row '>
                <SignInButtonWrapper>Sign in</SignInButtonWrapper>
                <SignUpButtonWrapper>Sign up</SignUpButtonWrapper>
              </div>
          }
        </div>

        <main className='flex justify-center items-center flex-col'>
          <div className="bg-white rounded-lg p-4 shadow-md w-1/2 flex flex-col items-center">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-4">
              <Image
                src={session.user?.image}
                alt="Profile Image"
                width={240}
                height={240}
              />
            </div>
            <h1 className="text-xl font-semibold">{session.user?.name}</h1>
            <p className="text-gray-500">{session.user?.email}</p>
            <p className="text-gray-500 text-sm">{session.user?.role}</p>
          </div>
          <button
            className={`bg-red-400 bg-opacity-50 text-gray-700 font-semibold py-2 px-4 rounded mt-4 text-lg
      transition-all duration-300 ease-in-out `}
          >      Confirm Delete?
          </button>
        </main>
      </div>
    </>
  )
}
