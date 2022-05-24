import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearchLocation } from "react-icons/fa";

function Search() {
  return (
    <>
      <span
        style={{
          position: "absolute",
          zIndex: "15",
          top: "13.3%",
          left: "63%",
          width: "2.8%",
          opacity: "0.4",
        }}>
        <FaSearchLocation size="xs" />
      </span>

      <form
        className="navbar-form navbar-left"
        style={{
          position: "absolute",
          zIndex: "10",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "2vh",
          flexDirection: "column",
          top: "15%",
        }}>
        <input
          type="text"
          className="form-control col-lg-8"
          placeholder="Search for your Home/Location"
          style={{
            width: "35%",
            margin: "1%",
            borderRadius: "30px",
            fontSize: "1.6rem",
            padding: "2rem 1rem",
            fontWeight: "500",
          }}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{
            borderRadius: "25px",
            fontSize: "1.6rem",
            fontWeight: "500",
          }}>
          Explore House
        </button>
      </form>
    </>
  );
}

export default Search;
