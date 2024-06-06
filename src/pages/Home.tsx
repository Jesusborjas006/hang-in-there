import { images, titles, quotes } from "../data";

const getRandomNumber = (arr: string[]) => {
  return Math.floor(Math.random() * arr.length) + 1;
};

const Home = () => {
  return (
    <main>
      <h1>Trust</h1>
    </main>
  );
};

export default Home;
