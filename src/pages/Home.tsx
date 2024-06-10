import { useState } from "react";
import Poster from "../components/Poster";
import { getRandomNumber } from "../utils";
import PosterNavigation from "../components/PosterNavigation";
import { imagesData, quotesData, titlesData } from "../data";

const Home = () => {
  const [images, setImages] = useState<string[]>(imagesData);
  const [titles, setTitles] = useState<string[]>(titlesData);
  const [quotes, setQuotes] = useState<string[]>(quotesData);

  const [indices, setIndices] = useState({
    imgIndex: getRandomNumber(images),
    titleIndex: getRandomNumber(titles),
    quoteIndex: getRandomNumber(quotes),
  });

  const handleRandomIndex = () => {
    setIndices({
      imgIndex: getRandomNumber(images),
      titleIndex: getRandomNumber(titles),
      quoteIndex: getRandomNumber(quotes),
    });
  };

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
