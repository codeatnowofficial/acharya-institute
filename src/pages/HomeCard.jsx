import React from "react";

const HomeCard = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 uppercase">{title}</div>
      </div>
    </div>
  );
};

export default HomeCard;
