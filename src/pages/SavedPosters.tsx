import { useNavigate } from "react-router-dom";

const SavedPosters = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h3>Saved Posters</h3>

      <button
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-purple-900"
        onClick={() => navigate(-1)}
      >
        Back to Main
      </button>
    </section>
  );
};

export default SavedPosters;
