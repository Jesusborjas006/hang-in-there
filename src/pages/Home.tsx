import { images, titles, quotes } from "../data";

const getRandomNumber = (arr: string[]) => {
  return Math.floor(Math.random() * arr.length) + 1;
};

const Home = () => {
  return (
    <main>
      <img
        src={"src/" + images[getRandomNumber(images)]}
        alt="Random Picture"
      />
      <h1 className="text-4xl font-semibold font-serif">
        {titles[getRandomNumber(titles)]}
      </h1>
      <p>{quotes[getRandomNumber(quotes)]}</p>
    </main>
  );
};

export default Home;
