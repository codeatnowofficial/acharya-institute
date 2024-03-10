import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MainData } from "../data";
import { AiOutlineFileExcel, AiOutlineFileWord } from "react-icons/ai";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import { IoGitNetworkSharp } from "react-icons/io5";

const HomeCardDescription = () => {
  const params = useParams();
  const [courseDetailsData, setCourseDetailsData] = useState({});

  const checkCourse = async () => {
    let ck = await MainData.find((ele) => ele.course === params.course);
    console.log(ck);
    setCourseDetailsData(ck);
  };
  useEffect(() => {
    checkCourse();
  }, []);

  return (
    <div className="bg-slate-100 p-4 h-[100vh] overflow-y-scroll">
      <div className="p-4">
        <h1 className="text-4xl font-light">
          Description Page for&nbsp;
          <span className="uppercase tracking-light font-light">
            {courseDetailsData?.course}
          </span>
        </h1>
      </div>
      <hr className="w-full lg:w-1/2 bg-black" />
      <div className="p-4 flex items-center justify-center border gap-8 flex-wrap">
        {courseDetailsData?.courseDetails?.map((ele, key) => {
          return (
            <NavLink
              to={`/course-individual-page/${Object.values(ele)}`}
              className="uppercase font-bold border border-indigo-500 bg-indigo-600 text-white hover:text-indigo-500 hover:bg-slate-100 transition-all ease-linear rounded-md py-4 px-8 tracking-widest flex items-center justify-center gap-4"
              key={key}
            >
              <span className="text-xl">
                {Object.keys(ele) == "Word" ? (
                  <AiOutlineFileWord />
                ) : Object.keys(ele) == "Excel" ? (
                  <AiOutlineFileExcel />
                ) : Object.keys(ele) == "PowerPoint" ? (
                  <FaRegFilePowerpoint />
                ) : Object.keys(ele) == "Typing" ? (
                  <TiMessageTyping />
                ) : Object.keys(ele) == "Internet" ? (
                  <IoGitNetworkSharp />
                ) : (
                  ""
                )}
              </span>
              <span>{Object.keys(ele)}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCardDescription;
