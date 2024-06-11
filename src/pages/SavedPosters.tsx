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
  removeSavedPoster: (id: number) => void;
}

const SavedPosters = ({
  savedPosters,
  removeSavedPoster,
}: SavedPosterProps) => {
  const navigate = useNavigate();

  const savedPosterElements = savedPosters.map((poster) => (
    <div
      key={poster.id}
      className="bg-black text-white border mx-auto py-6 px-4 relative pb-20"
    >
      <img
        className="w-[60%] object-cover mx-auto border-white border-2"
        src={"src/" + poster.imgUrl}
        alt="Random Picture"
      />
      <h1 className="text-xl font-semibold mt-2 uppercase">{poster.title}</h1>
      <p className="mt-2 text-[15px]">{poster.quote}</p>

      <div className="flex items-center justify-center">
        <button
          className="bg-white text-black py-1 px-4 rounded-md bottom-6 absolute mx-auto hover:bg-red-700 hover:text-white"
          onClick={() => removeSavedPoster(poster.id)}
        >
          Remove Poster
        </button>
      </div>
    </div>
  ));

  return (
    <section className="text-center">
      <h3 className="text-xl mb-6 font-semibold">Saved Posters</h3>

      {savedPosters.length > 0 ? (
        <div className="grid grid-cols-3 px-6 gap-6 max-w-[1650px] mx-auto text-center">
          {savedPosterElements}
        </div>
      ) : (
        <p className="my-20 text-lg">No Saved Posters</p>
      )}

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
