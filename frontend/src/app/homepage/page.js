import Link from 'next/link';

export default function Homepage() {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto">
                <Link href="../profile" className="text-white text-2xl font-bold">
                    View Profile
                </Link> 
                {/* Add more navigation links here */}
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto mt-8 text-center">
                <h1 className="text-4xl font-semibold">STAY TUNED</h1>
            </div>
        </div>
    )
}