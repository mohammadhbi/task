"use client";
import axios from 'axios'
import React, { useState } from 'react'

export default function page() {
 const [username,setUsername]=useState();
  const handleLogin = async ()=>{
  try {
    const user = await axios.get("https://randomuser.me/api/?results=1&nat=us")
    //console.log(user.data);
    const username1 = user.data.results[0].name.first;
    setUsername(username1);
    localStorage.setItem("username", username1);
  } catch (error) {
    console.error("something went wrong", error);
  }
 }
  return (
    <div>
      <button onClick={handleLogin}> log In</button>
      <p>{username}</p>
    </div>
  );
}
