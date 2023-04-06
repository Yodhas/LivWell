import React from 'react'
import { FaSearchLocation } from "react-icons/fa";

function SearchIcon() {
  return (
    <>
    <span
        style={{
          position: "absolute",
          zIndex: "15",
          top: "50%",
          left: "75%",
          width: "3rem",    
          opacity: "0.3",
        }}>
        <FaSearchLocation size="xs" />
      </span>
    </>
  )
}

export default SearchIcon