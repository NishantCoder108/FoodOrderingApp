import { Component, useEffect, useState } from "react";
import UserClass from "./UserClass";

const About = () => {
  const [count] = useState(0);

  const timer = setInterval(() => {
    console.log("count");
  }, 1000);

  const fetchGithubApi = async () => {
    const data = await fetch("https://api.github.com/users/NishantCoder108");
    const dataJson = await data.json();

    console.log(dataJson);
  };

  useEffect(() => {
    /**
     * Component Did Mount
     * Component Did Update
     * Component Will Unmount : when we leaving page
     */

    console.log("UseEffect");
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <>
      <div>
        <h2>Nishant Kumar</h2>
        <h2>Web Engineer</h2>
        <h2> Frontend Expert | React | JavaScript | TypeScript </h2>
      </div>
    </>
  );
};
export default About;
