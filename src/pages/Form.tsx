import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h3>Create your owm motivational poster</h3>

      <button
        onClick={() => navigate(-1)}
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-purple-900"
      >
        Nevermind, take me back!
      </button>
    </section>
  );
};

export default Form;
