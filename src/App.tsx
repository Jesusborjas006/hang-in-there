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

  const handleRandomIndex = () => {
    setIndices({
      imgIndex: getRandomNumber(images),
      titleIndex: getRandomNumber(titles),
      quoteIndex: getRandomNumber(quotes),
    });
  };

  const addImage = (newImage: string) => {
    setImages([...images, newImage]);
  };

  const addTitle = (newTitle: string) => {
    setTitles([...titles, newTitle]);
  };

  const addQuote = (newQuote: string) => {
    setQuotes([...quotes, newQuote]);
  };

  const displayNewTitle = () => {
    setIndices({
      imgIndex: images.length,
      titleIndex: titles.length,
      quoteIndex: quotes.length,
    });
  };

  return (
    <main className="h-screen overflow-hidden bg-slate-200 font-serif">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              titles={titles}
              images={images}
              quotes={quotes}
              indices={indices}
              handleRandomIndex={handleRandomIndex}
            />
          }
        />
        <Route
          path="/form"
          element={
            <CreatePoster
              addImage={addImage}
              addTitle={addTitle}
              addQuote={addQuote}
              displayNewTitle={displayNewTitle}
            />
          }
        />
        <Route path="/saved" element={<SavedPosters />} />
      </Routes>
    </main>
  );
}

export default App;
