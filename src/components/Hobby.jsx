import React from "react";

function Hobby() {
  return (
    <div className="absolute top-0 right-0 float-right max-h-fit bg-slate-600 rounded-xl w-1/5 p-5 z-10 m-10 shadow-lg text-white">
      <h1 className="text-2xl mb-5 text-center font-bold bg-gray-800 rounded-md p-2">
        Ability
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="card rounded-lg bg-slate-500 hover:bg-slate-400 hover:text-black cursor-pointer text-center p-1">
          <label for="frontend">Front-End Engineer (80%)</label>
          <br />
          <progress id="frontend" value="80" max="100" className="rounded-lg" />
        </div>
        <div className="card rounded-lg bg-slate-500 hover:bg-slate-400 hover:text-black cursor-pointer text-center p-1">
          <label for="Backend">Back-End Engineer (60%)</label>
          <br />
          <progress id="Backend" value="60" max="100" className="rounded-lg" />
        </div>
        <div className="card rounded-lg bg-slate-500 hover:bg-slate-400 hover:text-black cursor-pointer text-center p-1">
          <label for="Fullstack">Fullstack Engineer (75%)</label>
          <br />
          <progress
            id="Fullstack"
            value="75"
            max="100"
            className="rounded-lg"
          />
        </div>
        <div className="card rounded-lg bg-slate-500 hover:bg-slate-400 hover:text-black cursor-pointer text-center p-1">
          <label for="Database">Database Engineer (70%)</label>
          <br />
          <progress id="Database" value="70" max="100" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Hobby;
