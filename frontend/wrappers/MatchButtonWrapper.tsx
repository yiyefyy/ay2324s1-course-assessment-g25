'use client'

export default function MatchButtonWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button 
    onClick={() => console.log("match clicked")}
    className="flex items-center bg-[#B9E8DF] text-gray-800 font-dmserif font-medium text-lg border rounded py-2 px-5 shadow-md cursor-pointer font-dmserif transition-all duration-300 hover:shadow-lg active:scale-95">
      {children}
    </button>
  )
}
