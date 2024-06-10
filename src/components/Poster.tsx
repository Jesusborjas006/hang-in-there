interface PosterProps {
  images: string[];
  titles: string[];
  quotes: string[];
  indices: {
    imgIndex: number;
    titleIndex: number;
    quoteIndex: number;
  };
}

const Poster = ({ images, titles, quotes, indices }: PosterProps) => {
  return (
    <div className="bg-black text-white border w-[70%] mx-auto py-10 mt-10">
      <img
        className="w-[80%] max-h-[420px] object-cover mx-auto border-white border-2"
        src={"src/" + images[indices.imgIndex]}
        alt="Random Picture"
      />
      <h1 className="text-5xl font-semibold mt-4 uppercase">
        {titles[indices.titleIndex]}
      </h1>
      <p className="mt-4">{quotes[indices.quoteIndex]}</p>
    </div>
  );
};

export default Poster;
