interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-purple-900 active:bg-purple-300 w-full">
      {children}
    </button>
  );
};

export default Button;
