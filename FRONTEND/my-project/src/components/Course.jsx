import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from 'axios';

import {Link} from "react-router-dom";


const Course = () => {
  const [book,setBook]=useState([]);

  useEffect(()=>{
   const getBook=async()=>{
     try{
       const res=await axios.get("http://localhost:4000/book");
       console.log(res.data)
      //  const data=await response.json();
       setBook(res.data);
     }catch(error){
       console.log("Error :",error);
     }
   }
   getBook();
  },[]);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px:20 px-4 pt-9">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl ">
            Hello, welcome here to learn something {""}
            <span className="text-pink-500">new everyday :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptas quis libero impedit error vel tempore! Sequi natus delectus
            ad expedita optio architecto numquam quia magni labore? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Vel, soluta dolorum
            maxime tempore quis cumque fuga est inventore dolorem.
          </p>
          <Link to="/">
          <button className="mt-10 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-4 md:grid-cols-3 ">
            {
                book.map((item)=>(
                    <Cards key={item.div} item={item} /> 
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Course;
