"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };
  let rendertask = <h2>No Task available</h2>;
  if (mainTask.length > 0) {
    rendertask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex align-middle justify-evenly my-5">
            <h3 className="text-3xl font-bold">{t.title}</h3>
            <h4 className="text-xl font-semibold">{t.desc}</h4>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="rounded font-semibold bg-red-700 text-white w-1/12"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white font-bold p-5 text-2xl text-center">
        MY SIMPLE TODO LIST
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col m-auto items-center py-3 w-full "
      >
        <input
          className="px-2 py-2 m-8 border-4 border-zinc-800 rounded w-1/4"
          placeholder="Enter Title here"
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <input
          className="px-2 py-2 m-8 border-4 border-zinc-800 rounded w-1/4"
          placeholder="Enter disc here"
          type="text"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        ></input>
        <button className="bg-black text-center font-semibold text-white rounded px-3 py-2 m-8 w-1/4">
          Add Task
        </button>
      </form>
      <hr />
      <div className=" text-black px-10 py-10 bg-gray-400 w-full">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
