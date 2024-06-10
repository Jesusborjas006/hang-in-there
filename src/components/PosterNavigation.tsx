import { Link } from "react-router-dom";
import Button from "./Button";

interface PosterNavigationProps {
  handleRandomPoster: () => void;
}

const PosterNavigation = ({ handleRandomPoster }: PosterNavigationProps) => {
  return (
    <nav className="mt-10 space-x-4">
      <Link to="/saved">
        <Button>View Saved Posters</Button>
      </Link>
      <button
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-purple-900"
        onClick={handleRandomPoster}
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
