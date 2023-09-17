import React from "react";

//import component
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import InProgress from "./components/InProgress";
import Done from "./components/Done";
import Move from "./components/Move";
import ChildNav from "./components/ChildNav";

const Home = () => {
  return (
    <div className="flex min-h-screen z-10  ">
      <div>
        <Sidebar />
      </div>
      <div className=" main overflow-hidden w-full  ">
        <Navbar />
        <div className="w-full min-h-screen flex flex-col ">
          <ChildNav />
          <div className="mt-4 p-4 flex items-start justify-start">
            <div className="    gap-5  flex item-start justify-around">
              <TodoList />
              <InProgress />
              <Done />
              <Move />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
