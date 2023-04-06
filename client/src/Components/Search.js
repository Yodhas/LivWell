
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "./SearchIcon";
import "../css/Search.css";
function Search() {
  const [query, setQuery] = useState("");
  const [typed, setTyped] = useState(false);

  const querys = (e) => {
    setQuery(e.target.value.toLowerCase());
    setTyped(true);
  };


  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/new");

      setPosts(res.data);
    };
    fetchPosts();
  }, [posts.length]);
console.log(posts);


return (
  <>
    <form
      className="navbar-form navbar-left"
      style={{
        position: "absolute",
        zIndex: "15",
        width: "60%",
        height: "2vh",
        top: "50%",
        left: "20%",
      }}
    >
      {/* <SearchIcon /> */}
      <input
        type="text"
        className="form-control col-lg-8 search"
        placeholder="  Search by College Name"
        style={{
          width: "-webkit-fill-available",
          margin: "auto",
          borderRadius: "30px",
          fontSize: "1.4rem",
          padding: "2rem 1rem",
          fontWeight: "500",
          marginBottom: "0.4rem",
        }}
        onChange={querys}
      />

      <button
        type="button"
        className="btn btn-primary btn-lg"
        style={{
          borderRadius: "25px",
          fontSize: "1.5rem",
          fontWeight: "500",
          display: "block",
          margin: "auto",
        }}
      >
        Explore House
      </button>

      {typed && query.length > 1 && (
        <div className="search-bar">
          <ul className="list">
            {posts.filter((asd) =>
              asd.college.toLowerCase().includes(query)
            ).map((user) => (
              <li className="listItem" key={user.id} id="Searchevent" onClick={() => {
                window.location.href = "/college/"+ user.college;

                
              }}>
                {user.college}
                <hr></hr>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  </>
);
}

export default Search;