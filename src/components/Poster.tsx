import { images, titles, quotes } from "../data";

interface PosterProps {
  imageIndex: number;
  titlesIndex: number;
  quotesIndex: number;
}

const Poster = ({ imageIndex, titlesIndex, quotesIndex }: PosterProps) => {
  return (
    <div className="bg-black text-white border w-[70%] mx-auto py-10 mt-10">
      <img
        className="w-[80%] max-h-[420px] object-cover mx-auto border-white border-2"
        src={"src/" + images[imageIndex]}
        alt="Random Picture"
      />
      <h1 className="text-5xl font-semibold mt-4 uppercase">
        {titles[titlesIndex]}
      </h1>
      <p className="mt-4">{quotes[quotesIndex]}</p>
    </div>
  );
};

export default Poster;
