import React, { useEffect } from "react";

function PortofolioCard() {
  useEffect(() => {
    fetch("../data/ListPortofolios.json")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="relative rounded-xl w-full h-96 hover:bg-slate-400 hover:cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1616161610003-8b5b0b2b5b1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="..."
        className="absolute w-full h-full object-cover rounded-xl overflow-hidden"
      />
      <div className="absolute w-full h-full bg-black bg-opacity-50 rounded-xl "></div>
      <div className="absolute w-full h-full flex justify-center items-center rounded-xl">
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold">Project 1</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PortofolioCard;
