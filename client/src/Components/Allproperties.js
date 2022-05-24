import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllPropFetch from './AllPropFetch';
import ResponsiveAppBar from './ResponsiveAppBar'

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
        <ResponsiveAppBar/>
        <AllPropFetch details={posts}/>

    </div>
  )
}

export default Allproperties