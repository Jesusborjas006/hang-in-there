import { Link } from "react-router-dom";

interface PosterNavigationProps {
  handleRandomPoster: () => void;
}

const PosterNavigation = ({ handleRandomPoster }: PosterNavigationProps) => {
  return (
    <div>
      <Link to="/saved">
        <button className="bg-black text-white py-2 px-4 rounded-md">
          View Saved Posters
        </button>
      </Link>
      <button
        className="bg-black text-white py-2 px-4 rounded-md mt-10"
        onClick={handleRandomPoster}
      >
        Show Random Poster
      </button>
      <Link to="/form">
        <button className="bg-black text-white py-2 px-4 rounded-md">
          Make Your Own Poster
        </button>
      </Link>
    </div>
  );
};

export default PosterNavigation;
