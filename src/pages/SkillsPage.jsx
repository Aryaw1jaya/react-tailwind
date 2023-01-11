import React from "react";

function SkillsPage() {
  return (
    <div className="relative py-16 ">
      <h1 className="text-3xl mb-5 text-white text-center font-bold">
        Skills & Abilities
      </h1>
      <div className="flex flex-row gap-5 justify-center my-5">
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            alt=""
          />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img src="https://img.icons8.com/color/48/000000/css3.png" alt="" />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/javascript.png"
            alt=""
          />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img src="https://img.icons8.com/color/48/000000/php.png" alt="" />
        </div>
      </div>

      <div className="flex flex-row gap-5 justify-center my-5">
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-laravel-is-a-free-open-source-php-web-framework-logo-shadow-tal-revivo.png"
            alt=""
            width={50}
          />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png"
            alt=""
            width={50}
          />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img src="https://img.icons8.com/color/48/000000/mysql.png" alt="" />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/flutter.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-row gap-5 justify-center my-5">
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/mongodb.png"
            alt=""
          />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/express.png"
            alt=""
          />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/react-native.png"
            alt=""
          />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="" />
        </div>
      </div>

      <h1 className="text-3xl mt-16 mb-5 text-white text-center font-bold">
        Weapons & Tools
      </h1>
      <div className="flex flex-row gap-5 justify-center my-5">
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img src="https://img.icons8.com/color/48/000000/git.png" alt="" />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img src="https://img.icons8.com/color/48/000000/npm.png" alt="" />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
            alt=""
          />
        </div>
        <div className="rounded-full bg-slate-400 p-3 hover:bg-slate-200 hover:cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/figma--v1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
