import React from "react";

const Home = () => {
  return (
    <div className="w-4xl mx-auto h-full shadow-lg my-3 p-2 grid sm:grid-cols-2 grid-cols-1">
      <form
        action=""
        className="flex flex-col gap-2 items-center sm:justify-center"
      >
        <div className="w-4/6">
          <label htmlFor="id" className="hidden sm:block">
            Id
          </label>
          <input
            type="text"
            id="id"
            className="border-2 border-teal-800 rounded-md placeholder-slate-500 
            text-center w-full"
            placeholder="enter your Id"
          />
        </div>
        <div className="w-4/6 sm:w-auto">
          <input
            type="submit"
            className=" bg-sky-300 shadow-md p-1 rounded-md  w-full h-18"
            autoComplete="off"
          />
        </div>
      </form>
      <div className="result md:mx-3 border border-sky-400 border-dashed">
        my result
      </div>
    </div>
  );
};

export default Home;
