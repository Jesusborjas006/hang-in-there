import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SavedPosters from "./pages/SavedPosters";
import Form from "./pages/Form";

function App() {
  return (
    <main className="h-screen overflow-hidden bg-slate-200 font-serif">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="/saved" element={<SavedPosters />} />
      </Routes>
    </main>
  );
}

export default App;
