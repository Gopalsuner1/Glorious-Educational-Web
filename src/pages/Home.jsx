import React from "react";
import Poster from "../components/UI/Poster";
import Card1 from "../components/UI/Card1";
import p3 from "../assets/p3.jpg";
const Home = () => {
  console.log("home");
  return (
    <div className=" mb-5  flex flex-col gap-6 scrollbar-hide">
      <main className="w-full  h-fit flex flex-col items-center gap-10">
        <Poster />
        <Card1 image={p3} />
      </main>
    </div>
  );
};

export default Home;
