import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import EditorPage from "./components/EditorPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center"></Toaster>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/editor/:id " element={<EditorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
