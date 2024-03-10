import React from "react";

const HeroComponent = () => {
  return (
    <div
      className="bg-contain h-[50vh] rounded-br-3xl shadow-xl rounded-bl-3xl"
      style={{
        background:
          "url('https://images.unsplash.com/photo-1709653634251-a4d35295da50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center justify-center h-full p-4">
        <div className="text-left md:text-center">
          <h1 className="text-4xl md:text-6xl text-white font-light">
            Welcome to Acharya Institute Computer Class
          </h1>
          <hr className="mt-4" />
          <p className="mt-4 text-lg text-white tracking-widest">
            Empowering minds through technology education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
