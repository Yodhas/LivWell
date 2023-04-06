import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllPropFetch from './AllPropFetch';
import ResponsiveAppBar from './ResponsiveAppBar'
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom";

function Allproperties() {
    var arryObj=[];
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const query = location.pathname.split('/')[2];
  var newquery=query;
  for( var x =0; x < query.length;x++)
  {
    newquery = newquery.replace("%20"," ");
  }
  
  console.log("check:"+ newquery);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/new");

      setPosts(res.data);
    };
    fetchPosts();
  }, [posts.length]);
  
    

  console.log(posts);
  posts.forEach(obj => {
    console.log(obj);
        if(obj.college == newquery)
        {
            arryObj.push(obj);
        }

});

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
        <AllPropFetch details={arryObj}/>

    </div>
  )
}

export default Allproperties