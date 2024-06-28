import Poster from "../components/Poster";
import PosterNavigation from "../components/PosterNavigation";
import { getRandomNumber } from "../utils";

interface HomeProps {
  images: string[];
  titles: string[];
  quotes: string[];
  indices: {
    imgIndex: number;
    titleIndex: number;
    quoteIndex: number;
  };
  setIndices: React.Dispatch<
    React.SetStateAction<{
      imgIndex: number;
      titleIndex: number;
      quoteIndex: number;
    }>
  >;
  addToSavedPosters: () => void;
}

const Home = ({
  images,
  titles,
  quotes,
  indices,
  setIndices,
  addToSavedPosters,
}: HomeProps) => {
  const handleRandomIndex = () => {
    setIndices({
      imgIndex: getRandomNumber(images),
      titleIndex: getRandomNumber(titles),
      quoteIndex: getRandomNumber(quotes),
    });
  };
  return (
    <section className="text-center px-6">
      <Poster
        images={images}
        titles={titles}
        quotes={quotes}
        indices={indices}
      />

      <PosterNavigation
        handleRandomIndex={handleRandomIndex}
        addToSavedPosters={addToSavedPosters}
      />
    </section>
  );
};

export default Home;
