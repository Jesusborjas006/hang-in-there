import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormProps {
  addImage: (newImage: string) => void;
  addTitle: (newTitle: string) => void;
  addQuote: (newQuote: string) => void;
  displayNewTitle: () => void;
}

const Form = ({ addImage, addTitle, addQuote, displayNewTitle }: FormProps) => {
  const navigate = useNavigate();
  const [poster, setPoster] = useState({
    imgUrl: "",
    title: "",
    quote: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoster({ ...poster, [e.target.name]: e.target.value });
  };

  const submitPoster = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    if (poster.imgUrl && poster.title && poster.quote) {
      addImage(poster.imgUrl);
      addTitle(poster.title);
      addQuote(poster.quote);
      displayNewTitle();
      setPoster({ imgUrl: "", title: "", quote: "" });
      navigate("/");
    }
  };

  return (
    <form className="flex flex-col w-[500px] mx-auto">
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
        Motivational Poster-Quote
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
        className="mt-8 bg-black text-white py-2 px-4 rounded-md hover:bg-purple-900 w-fit mx-auto"
        onClick={(e) => submitPoster(e)}
      >
        Show my poster
      </button>
    </form>
  );
};

export default Form;
