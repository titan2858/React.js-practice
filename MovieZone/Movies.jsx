import React from "react";
import { movies } from "./Data";
import { useState } from "react";
const Movies = () => {
  const [movieList, setmovieList] =
    useState(movies);
    const filerbyCategory = (cat)=>{
      setmovieList(movies.filter((data)=>data.category==cat))
    }
  return (
    <>  
    <div className="my-3" style={{width:'100%', margin:"auto" ,display:"flex",justifyContent:"center"}}>
      <button onClick={()=>setmovieList(movies)}
        type="button"
        className="btn btn-outline-primary mx-3"
      >
       All
      </button>
      <button onClick={()=>filerbyCategory("Action")}
        type="button"
        className="btn btn-outline-secondary mx-3"
      >
        Action
      </button>
      <button onClick={()=>filerbyCategory("Animation")}
        type="button"
        className="btn btn-outline-success mx-3"
      >
        Animation
      </button>
      <button onClick={()=>filerbyCategory("Thriller")}
        type="button"
        className="btn btn-outline-danger mx-3"
      >
        Thriller
      </button>
      <button onClick={()=>filerbyCategory("Horror")}
        type="button"
        className="btn btn-outline-warning mx-3"
      >
        Horror
      </button>
      <button onClick={()=>filerbyCategory("Drama")}
        type="button"
        className="btn btn-outline-info mx-3"
      >
        Drama
      </button>
      <button onClick={()=>filerbyCategory("Sci-Fi")}
        type="button"
        className="btn btn-outline-light mx-3"
      >
        Sci-Fi
      </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "1300px",
          margin: "auto",
        }}
      >
        {movieList.map((data) => (
          <div
            key={data.id}
            style={{
              maxWidth: "300px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: "10px",
              }}
              className="hover_effect"
            >
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  border:
                    "1px solid yellow",
                  borderRadius: "10px",
                }}
              />
            </div>
            <h5
              style={{ color: "white" }}
            >
              {data.title}
            </h5>
            <h5
              style={{ color: "white" }}
            >
              {data.release_date}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
