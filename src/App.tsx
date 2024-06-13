import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SavedPosters from "./pages/SavedPosters";
import CreatePoster from "./pages/CreatePoster";
import { imagesData, quotesData, titlesData } from "./data";
import { useState } from "react";
import { getRandomNumber } from "./utils";

function App() {
  const [images, setImages] = useState<string[]>(imagesData);
  const [titles, setTitles] = useState<string[]>(titlesData);
  const [quotes, setQuotes] = useState<string[]>(quotesData);
  const [indices, setIndices] = useState({
    imgIndex: getRandomNumber(images),
    titleIndex: getRandomNumber(titles),
    quoteIndex: getRandomNumber(quotes),
  });
  const [savedPosters, setSavedPosters] = useState<
    [] | { id: number; imgUrl: string; title: string; quote: string }[]
  >([]);

  const addPosterContent = (
    newImage: string,
    newTitle: string,
    newQuote: string
  ) => {
    setImages([...images, newImage]);
    setTitles([...titles, newTitle]);
    setQuotes([...quotes, newQuote]);
  };

  const displayNewTitle = () => {
    setIndices({
      imgIndex: images.length,
      titleIndex: titles.length,
      quoteIndex: quotes.length,
    });
  };

  const addToSavedPosters = () => {
    const newSavedPoster = {
      imgUrl: images[indices.imgIndex],
      title: titles[indices.titleIndex],
      quote: quotes[indices.quoteIndex],
    };

    const isPosterSaved = savedPosters.some((poster) => {
      return (
        poster.imgUrl === newSavedPoster.imgUrl &&
        poster.title === newSavedPoster.title &&
        poster.quote === newSavedPoster.quote
      );
    });

    if (!isPosterSaved) {
      setSavedPosters([
        ...savedPosters,
        {
          ...newSavedPoster,
          id: Date.now(),
        },
      ]);
    }
  };

  const removeSavedPoster = (id: number) => {
    const updatedSavedPoster = savedPosters.filter((poster) => {
      return poster.id !== id;
    });

    setSavedPosters(updatedSavedPoster);
  };

  return (
    <main className="pt-10">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              titles={titles}
              images={images}
              quotes={quotes}
              indices={indices}
              setIndices={setIndices}
              addToSavedPosters={addToSavedPosters}
            />
          }
        />
        <Route
          path="/form"
          element={
            <CreatePoster
              addPosterContent={addPosterContent}
              displayNewTitle={displayNewTitle}
            />
          }
        />
        <Route
          path="/saved"
          element={
            <SavedPosters
              savedPosters={savedPosters}
              removeSavedPoster={removeSavedPoster}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
