import { useState } from "react";
import Poster from "../components/Poster";
import { getRandomNumber } from "../utils";
import { images, titles, quotes } from "../data";
import PosterNavigation from "../components/PosterNavigation";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(getRandomNumber(images));
  const [titlesIndex, setTitlesIndex] = useState(getRandomNumber(titles));
  const [quotesIndex, setQuotesIndex] = useState(getRandomNumber(quotes));

  const handleRandomPoster = () => {
    setImageIndex(getRandomNumber(images));
    setTitlesIndex(getRandomNumber(titles));
    setQuotesIndex(getRandomNumber(quotes));
  };

  return (
    <section className="text-center ">
      <Poster
        imageIndex={imageIndex}
        titlesIndex={titlesIndex}
        quotesIndex={quotesIndex}
      />
      <PosterNavigation handleRandomPoster={handleRandomPoster} />
    </section>
  );
};

export default Home;
