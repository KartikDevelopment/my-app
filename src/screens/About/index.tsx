import React from "react";

export const About = () => {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => navigator.clipboard.writeText("i am kartik")}
        type="button"
      >
        yo kartik
      </button>
    </>
  );
};
