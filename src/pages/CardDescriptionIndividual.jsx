import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MainData } from "../data";

const CardDescriptionIndividual = () => {
  const params = useParams();
  console.log(params);
  const [courseIndividual, setCourseIndividual] = useState({});
  let newParam = Object.values(params);
  let newArray = newParam[0]?.split(",");
  return (
    <div className="h-[100vh] overflow-y-auto bg-slate-100 p-8">
      <h1 className="text-3xl font-light">More details</h1>
      <ul className="p-8">
        {newArray?.map((ele, key) => {
          return (
            <li
              key={key}
              className="list-decimal font-bold uppercase text-indigo-900"
            >
              {ele}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardDescriptionIndividual;
