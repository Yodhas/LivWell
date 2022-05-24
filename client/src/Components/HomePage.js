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
  }, [posts.length]);

  


  return (
    <>
      <ResponsiveAppBar />
      <Carousels />
      <Search />

      <div className="container">
      <h2 className="text-center mt-4" >PROPERTIES</h2>
      <Posts details = {posts}/>
      </div>

      <div className="container-fluid row" style={{width: "90%"}}>
      <Testimonials  name="Anik Mukherjee"
       tagl="Comfortable Stay!! Thanks a lot." desc="" likes={20} disl = {3}/>
      <Testimonials  name="Mihir Patwari" 
      tagl="Amazing Portal.. Very helpful for outsiders." desc="" likes={10} disl = {2}/>
      <Testimonials  name="Ritesh Parkhi" 
      tagl="Got my Flat. At a very affordable Price." desc="" likes={17} disl = {4}/>
      </div>
      <Info />
      <Footer />
    </>
  );
}

export default HomePage;
