import { useState } from "react";
import Poster from "../components/Poster";
import { getRandomNumber } from "../utils";
import PosterNavigation from "../components/PosterNavigation";
import { imagesData, quotesData, titlesData } from "../data";

const Home = () => {
  const [images, setImages] = useState<string[]>(imagesData);
  const [titles, setTitles] = useState<string[]>(titlesData);
  const [quotes, setQuotes] = useState<string[]>(quotesData);

  const handleRandomIndex = () => {
    const posterImg = getRandomNumber(images);
    const posterTitle = getRandomNumber(titles);
    const posterQuote = getRandomNumber(quotes);

    return { posterImg, posterTitle, posterQuote };
  };

  return (
    <section className="text-center ">
      <Poster
        images={images}
        titles={titles}
        quotes={quotes}
        handleRandomIndex={handleRandomIndex}
      />

      {/* <PosterNavigation handleRandomPoster={handleRandomPoster} /> */}
    </section>
  );
};

export default Home;
