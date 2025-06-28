"use client";
import React from 'react'

export default function page() {
    const username = localStorage.getItem("username");
  return <div>hello this is dashboard page
    <h1>
        {username}
    </h1>
  </div>;
}
