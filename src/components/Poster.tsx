interface PosterProps {
  images: string[];
  titles: string[];
  quotes: string[];
  handleRandomIndex: () => {
    posterImg: number;
    posterTitle: number;
    posterQuote: number;
  };
}

const Poster = ({ images, titles, quotes, handleRandomIndex }: PosterProps) => {
  const posterIndexes = handleRandomIndex();

  console.log(posterIndexes);

  return (
    <div className="bg-black text-white border w-[70%] mx-auto py-10 mt-10">
      <img
        className="w-[80%] max-h-[420px] object-cover mx-auto border-white border-2"
        src={"src/" + images[posterIndexes.posterImg]}
        alt="Random Picture"
      />
      <h1 className="text-5xl font-semibold mt-4 uppercase">
        {titles[posterIndexes.posterTitle]}
      </h1>
      <p className="mt-4">{quotes[posterIndexes.posterQuote]}</p>
    </div>
  );
};

export default Poster;
