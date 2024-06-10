import Poster from "../components/Poster";
import PosterNavigation from "../components/PosterNavigation";

interface HomeProps {
  images: string[];
  titles: string[];
  quotes: string[];
  indices: {
    imgIndex: number;
    titleIndex: number;
    quoteIndex: number;
  };
  handleRandomIndex: () => void;
}

const Home = ({
  images,
  titles,
  quotes,
  indices,
  handleRandomIndex,
}: HomeProps) => {
  return (
    <section className="text-center ">
      <Poster
        images={images}
        titles={titles}
        quotes={quotes}
        indices={indices}
      />

      <PosterNavigation handleRandomIndex={handleRandomIndex} />
    </section>
  );
};

export default Home;
