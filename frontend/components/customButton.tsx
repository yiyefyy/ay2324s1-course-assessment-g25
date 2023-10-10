'use-client'

const CustomButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick} 
      className="flex items-center bg-white text-gray-800 border rounded p-2 shadow-md cursor-pointer font-dmserif transition-all duration-300 hover:shadow-lg active:scale-95"
    >
      {children}
    </button>
  );
};

export default CustomButton;