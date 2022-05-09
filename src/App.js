import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";

function App() {
  return (
    <div>
      <h1>et eller andet</h1>
    <Routes>
      <Route exact path="/" element={<AllPosts/>} />
        <Route path="/onepost" element={<OnePost/>}/>
      
    </Routes>
    </div>
  );
}
export default App;