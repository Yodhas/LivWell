import ResponsiveAppBar from "./ResponsiveAppBar";
import Carousels from "./Carousels";
import Search from "./Search";
import CardsNew from "./CardsNew";
import Testimonials from "./Testimonialss";
import Info from "./Info";
import Footer from "./Footer_Home";
import Posts from "./Posts";
import { useLocation } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";


function HomePage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/new");
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);


  return (
    <>
      <ResponsiveAppBar />
      <Carousels />
      <Search />

      <div className="container">
      <h2 className="text-center mt-4" >PROPERTIES</h2>
      <Posts details = {posts}/>
      </div>
      <Testimonials name="Ashutosh" />
      <Info />
      <Footer />
    </>
  );
}

export default HomePage;
