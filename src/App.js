import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { EditPage } from "./routes/edit/EditPage";
import HomePage from "./routes/Home/HomePage";
import { NewPage } from "./routes/new/NewPage";
import { NotFound } from "./routes/notFound/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/edit/:toDo" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
