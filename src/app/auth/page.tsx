"use client";
import axios from 'axios'
import React, { useState } from 'react'
import { Button } from '../components/UI/Button';
import { InputNum } from '../components/UI/InputNum';
export default function page() {
 const [username,setUsername]=useState();
  const handleLogin = async ()=>{
  try {
    const user = await axios.get("https://randomuser.me/api/?results=1&nat=us");
    const username1 = user.data.results[0].name.first;
    setUsername(username1);
    localStorage.setItem("username", username1);
  } catch (error) {
    console.error("something went wrong", error);
  }
 }
  return (
    <div>
      <InputNum/>
      <Button onClick={handleLogin}> log In</Button>
      <p>{username}</p>
    </div>
  );
}
