import React from "react";

function AboutCard() {
  return (
    <div className="card max-h-fit bg-slate-500 rounded-xl w-1/4 p-5 absolute z-10 m-10 shadow-lg text-center text-white">
      <img
        src="https://picsum.photos/200/300"
        className="card-img-top rounded-full w-52 h-52 mb-3 mx-auto"
        alt="..."
      />
      <div className="card-body">
        <h5 className="text-xl font-bold my-2">Arya Wijaya</h5>
        <p className="card-text text-justify">
          Undergraduate Student at the University of Pembangunan Jaya majoring
          in Information Systems. I started my journey in the Information
          Technology field when I entered Vocational High School majoring in
          Software Engineering, where I started and was able to learn
          programming.
        </p>
        <br />
        <a
          href="https://www.linkedin.com/in/arya-wijaya-b30224165/"
          className="btn hover:text-black"
        >
          <div className="w-full text-center p-2 shadow-lg bg-blue-500 hover:bg-blue-300 rounded-lg ">
            Contact This Hero
          </div>
        </a>
      </div>
    </div>
  );
}

export default AboutCard;
