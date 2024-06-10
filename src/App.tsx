import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SavedPosters from "./pages/SavedPosters";
import CreatePoster from "./pages/CreatePoster";
import { useState } from "react";
import { Poster } from "./types";

function App() {
  const [posters, setPosters] = useState([
    {
      id: 1,
      imgUrl: "idk",
      title: "Ted Lasso",
      quote: "Never Quit!",
    },
  ]);

  const addPoster = (addPoster: Poster) => {
    setPosters([...posters, addPoster]);
  };

  return (
    <main className="h-screen overflow-hidden bg-slate-200 font-serif">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<CreatePoster addPoster={addPoster} />} />
        <Route path="/saved" element={<SavedPosters />} />
      </Routes>
    </main>
  );
}

export default App;
