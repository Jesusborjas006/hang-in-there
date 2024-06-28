import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormProps {
  addPosterContent: (
    newImage: string,
    newTitle: string,
    newQuote: string
  ) => void;
  displayNewTitle: () => void;
}

const Form = ({ addPosterContent, displayNewTitle }: FormProps) => {
  const navigate = useNavigate();
  const [poster, setPoster] = useState({
    imgUrl: "",
    title: "",
    quote: "",
  });

  const condition = poster.imgUrl && poster.title && poster.quote;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoster({ ...poster, [e.target.name]: e.target.value });
  };

  const submitPoster = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    if (condition) {
      addPosterContent(poster.imgUrl, poster.title, poster.quote);
      displayNewTitle();
      setPoster({ imgUrl: "", title: "", quote: "" });
      navigate("/");
    }
  };

  return (
    <form className="flex flex-col mx-auto">
      <label className="mt-10 mb-1" htmlFor="img-url">
        Image URL
      </label>
      <input
        className="py-1 pl-2"
        id="img-url"
        type="text"
        name="imgUrl"
        onChange={handleChange}
        value={poster.imgUrl}
      />

      <label className="mt-6 mb-1" htmlFor="title">
        Motivational Poster-Title
      </label>
      <input
        className="py-1 pl-2"
        id="title"
        type="text"
        name="title"
        onChange={handleChange}
        value={poster.title}
      />

      <label className="mt-6 mb-1" htmlFor="quote">
        Motivational Poster-Quoteg
      </label>
      <input
        className="py-1 pl-2"
        id="quote"
        type="text"
        name="quote"
        onChange={handleChange}
        value={poster.quote}
      />

      <button
        className={`mt-8 py-2 px-4 rounded-md w-fit mx-auto ${
          condition
            ? "cursor-pointer bg-black text-white hover-hover:bg-purple-900"
            : "bg-[#ccc] text-[#666] cursor-not-allowed"
        }`}
        onClick={(e) => submitPoster(e)}
        disabled={!condition}
      >
        Show my poster
      </button>
    </form>
  );
};

export default Form;
