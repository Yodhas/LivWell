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


function HomePage(props) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/new");
      console.log(res.data);
      setPosts(res.data);
      setloggedIn(localStorage.getItem('isLogged'))
    };
    fetchPosts();
  }, [posts.length]);

  const [loggedIn, setloggedIn] = useState(false);

  const userLogin = (isLogin)=>{
    setloggedIn(isLogin);
  }


  return (
    <>
      <div className="fluid-container" style={{height: "100vh", width: "auto", position: "relative", overflowX: "hidden !important",backgroundColor: "#3c3d41"}}>
      <ResponsiveAppBar loggedIn = {loggedIn} userLogin = {userLogin}/>
      <Carousels />
      <Search/>
      </div>

      <div className="container">
      <h2 className="text-center my-4" ><strong>PROPERTIES</strong></h2>
      <Posts style={{}}details = {posts}/>
      </div>
      <div className="row" style={{paddingLeft:"30vh", paddingTop:"10vh",backgroundColor: "#3c3d41"}}>
              <div className="col-md-6">
              <h2>ChatBot <i><strong>LivWell</strong></i></h2>
              <h4><i>Ask Anything</i></h4><br></br>
              <p>
              Here, we have a live ChatBot to answer all your doubts.
              </p>
              <p>© 2022 LivWell.Co, All rights reserved</p>
              </div>
              <div className="col-md-4">
              {/* <iframe width="300" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/99ebea4f-2483-4090-b5ec-505c8002a301"></iframe> */}
              <iframe style={{borderRadius:"10px"}}
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/20cc55b6-2687-4141-a81c-341abc8bdf8d">
</iframe>
              </div>
      </div>
      <div className="container row" style={{width: "100%", padding: "0", margin: "auto"}}>
        <div className="col-md-4 col-sm-12">
      <Testimonials  name="Anik Mukherjee"
       tagl="Comfortable Stay!! Thanks a lot." desc="" likes={20} disl = {3}/>
       </div>
       <div className="col-md-4 col-sm-12">
       <Testimonials  name="Ritesh Parkhi" 
      tagl="Got my Flat. At a very affordable Price." desc="" likes={17} disl = {4}/>
       </div>
       <div className="col-md-4 col-sm-12">
       <Testimonials  name="Mihir Patwari" 
      tagl="Amazing Portal.. Very helpful for outsiders." desc="" likes={10} disl = {2}/>
       </div>
      
     
      </div>
      <Info />
      <Footer />
    </>
  );
}

export default HomePage;
