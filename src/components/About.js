import { Component, useEffect, useState } from "react";
import UserClass from "./UserClass";

const About = () => {
  const [userData, setUserData] = useState({});

  const fetchGithubUser = async () => {
    const data = await fetch("https://api.github.com/users/NishantCoder108");
    const dataJson = await data.json();
    setUserData(dataJson);
    console.log(dataJson);
  };

  useEffect(() => {
    const fetchGithubUserApi = fetchGithubUser();
    console.log({ fetchGithubUserApi });
    return () => {
      console.log("Returning...");
    };
  }, []);

  if (Object.keys(userData).length === 0)
    return (
      <>
        <h2>Nishant Kumar</h2>
        <h2>Web Engineer</h2>
      </>
    );
  const { name, avatar_url, location, bio, blog } = userData;
  return (
    <>
      <div className="about">
        <img src={avatar_url} alt="logo" />
        <h2>{name}</h2>
        <h2>{bio}</h2>
        <h2> {location} </h2>
      </div>
    </>
  );
};
export default About;
