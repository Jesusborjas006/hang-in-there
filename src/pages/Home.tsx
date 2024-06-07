import { useState } from "react";
import { images, titles, quotes } from "../data";

const getRandomNumber = (arr: string[]) => {
  return Math.floor(Math.random() * arr.length);
};

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
    <main>
      <img src={"src/" + images[imageIndex]} alt="Random Picture" />
      <h1 className="text-4xl font-semibold font-serif">
        {titles[titlesIndex]}
      </h1>
      <p>{quotes[quotesIndex]}</p>

      <button onClick={handleRandomPoster}>Show Random Poster</button>
    </main>
  );
};

export default Home;
