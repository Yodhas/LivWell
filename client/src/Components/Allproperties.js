import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllPropFetch from './AllPropFetch';
import ResponsiveAppBar from './ResponsiveAppBar'
import {Link} from "react-router-dom"

function Allproperties() {

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
    <div>
        <div style={{position : "relative", height: "10vh"}}>
        <div className="container prop-b-crumbs">
        <time dateTime="2017-12-14 20:00" className="prop-date">
          Updated on May 17, 2022 at 3:42 pm
        </time>
        <ul className="b-crumbs">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/property">Catalog</Link>
          </li>
          
        </ul>
      </div>
        </div>
        <AllPropFetch details={posts}/>

    </div>
  )
}

export default Allproperties