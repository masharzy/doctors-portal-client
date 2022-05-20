import React from "react";

const Loader = () => {
  return (
    <div className="w-[90vw] mx-auto flex justify-center h-[90vh] items-center">
      <div
        style={{borderTopColor:"transparent"}}
        className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Loader;
