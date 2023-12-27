import React from "react";
import { TextForm } from "../../components/TextForm";
export const Home = () => {
  return (
    <>
      <div className="container">
        <TextForm heading="Please Enter Text" />
      </div>
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
