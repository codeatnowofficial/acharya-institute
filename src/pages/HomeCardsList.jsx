import React, { useEffect } from "react";
import HomeCard from "./HomeCard";
import { Link, NavLink } from "react-router-dom";
import { MainData } from "../data";
const HomeCardsList = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-center gap-8 flex-wrap p-8 hover:cursor-pointer">
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
