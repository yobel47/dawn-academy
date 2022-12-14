import { Routes, Route } from "react-router-dom";
import React from "react";
import { About, Category, Course, DetailCourse, Home, Login, Register } from "../pages";

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Register />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/kategori" element={<Category />} />
        <Route path="/kelas" element={<Course />} />
        <Route path="/detail" element={<DetailCourse />} />
      </Routes>
    </>
  );
}

export default MainRoute;
