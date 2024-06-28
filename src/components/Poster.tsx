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
  let imgContent;
  if (images[indices.imgIndex].slice(0, 4) === "http") {
    imgContent = images[indices.imgIndex];
  } else {
    imgContent = "/" + images[indices.imgIndex];
  }

  return (
    <div className="bg-black text-white border py-10 max-w-[800px] mx-auto">
      <img
        className="w-[80%] max-h-[420px] object-cover mx-auto border-white border-2"
        src={imgContent}
        alt="Random Picture"
      />
      <h1 className="text-2xl md:text-5xl font-semibold mt-4 uppercase">
        {titles[indices.titleIndex]}
      </h1>
      <p className="mt-4 text-sm sm:text-base px-4">
        {quotes[indices.quoteIndex]}
      </p>
    </div>
  );
};

export default Poster;
