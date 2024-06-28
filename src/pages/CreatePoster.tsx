import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

interface CreatePosterProps {
  addPosterContent: (
    newImage: string,
    newTitle: string,
    newQuote: string
  ) => void;
  displayNewTitle: () => void;
}

const CreatePoster = ({
  addPosterContent,
  displayNewTitle,
}: CreatePosterProps) => {
  const navigate = useNavigate();

  return (
    <section className="text-center mt-20 w-fit mx-auto px-6">
      <h3 className="text-2xl font-semibold">
        Create your own motivational poster
      </h3>
      <Form
        addPosterContent={addPosterContent}
        displayNewTitle={displayNewTitle}
      />

      <hr className="my-10 py-[.5px] bg-black w-[50%] mx-auto" />
      <button
        onClick={() => navigate(-1)}
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-purple-900"
      >
        Nevermind, take me back!
      </button>
    </section>
  );
};

export default CreatePoster;
