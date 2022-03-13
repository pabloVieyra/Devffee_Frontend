import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LazyLoad from "./Components/LazyLoad/LazyLoad";
const About = lazy(() => import("./Components/Pages/About/About"));
const Home = lazy(() => import("./Components/Pages/Home/Home"));
const Products = lazy(() => import("./Components/Pages/Products/Products"));
const Layout = lazy(() => import("./Components/Pages/Layout"));
const Stores = lazy(() => import("./Components/Pages/Stores/Stores"));
const Contact = lazy(() => import("./Components/Pages/Contact/Contact"));
const Franchises = lazy(() =>
  import("./Components/Pages/Franchises/Franchises")
);

const App = () => {
  return (
    <>
      <Suspense fallback={<LazyLoad></LazyLoad>}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/franchises" element={<Franchises />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
