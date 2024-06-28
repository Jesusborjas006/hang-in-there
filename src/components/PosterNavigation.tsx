import { Link } from "react-router-dom";
import Button from "./Button";

interface PosterNavigationProps {
  handleRandomIndex: () => void;
  addToSavedPosters: () => void;
}

const PosterNavigation = ({
  handleRandomIndex,
  addToSavedPosters,
}: PosterNavigationProps) => {
  return (
    <nav className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
      <button
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-purple-900"
        onClick={addToSavedPosters}
      >
        Save This Poster
      </button>
      <Link to="/saved">
        <Button>View Saved Posters</Button>
      </Link>
      <button
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-purple-900"
        onClick={handleRandomIndex}
      >
        Show Random Poster
      </button>
      <Link to="/form">
        <Button>Make Your Own Poster</Button>
      </Link>
    </nav>
  );
};

export default PosterNavigation;
