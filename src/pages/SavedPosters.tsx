import { useNavigate } from "react-router-dom";

interface SavedPosterProps {
  savedPosters:
    | []
    | {
        id: number;
        imgUrl: string;
        title: string;
        quote: string;
      }[];
}

const SavedPosters = ({ savedPosters }: SavedPosterProps) => {
  const navigate = useNavigate();

  const savedPosterElements = savedPosters.map((poster) => (
    <div
      key={poster.id}
      className="bg-black text-white border mx-auto py-6 px-4"
    >
      <img
        className="w-[60%] object-cover mx-auto border-white border-2"
        src={"src/" + poster.imgUrl}
        alt="Random Picture"
      />
      <h1 className="text-xl font-semibold mt-2 uppercase">{poster.title}</h1>
      <p className="mt-2 text-[15px]">{poster.quote}</p>
    </div>
  ));

  return (
    <section className="text-center">
      <h3 className="text-xl mb-6">Saved Posters</h3>

      <div className="grid grid-cols-3 px-6 gap-6 max-w-[1650px] mx-auto">
        {savedPosterElements}
      </div>

      <button
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-purple-900 my-10"
        onClick={() => navigate(-1)}
      >
        Back to Main
      </button>
    </section>
  );
};

export default SavedPosters;
