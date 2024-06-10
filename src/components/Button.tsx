interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-black text-white py-2 px-4 rounded-md">
      {children}
    </button>
  );
};

export default Button;