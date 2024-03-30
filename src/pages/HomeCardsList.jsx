import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import { Link, NavLink } from "react-router-dom";
import { MainData } from "../data";
const HomeCardsList = () => {
  return (
    <div className="mt-4 flex flex-col gap-8 items-center justify-center">
      <div>
        <a
          href="https://forms.gle/Cqmdn66NPHBoWJCm6"
          className="bg-fuchsia-100 text-fuchsia-900 capitalize border font-semibold border-fuchsia-900 hover:bg-fuchsia-200 px-8 py-4 rounded-lg"
        >
          fill the form
        </a>
      </div>
      <div className="flex items-center justify -center gap-8 flex-wrap p-8 hover:cursor-pointer">
        {MainData?.map((ele, index) => {
          return (
            <NavLink to={`/course-details/${ele?.course}`}>
              <HomeCard
                key={index}
                imageSrc={ele.imageSrc}
                title={ele.course}
                description="first description"
                courseDetails={ele.courseDetails}
              ></HomeCard>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCardsList;
