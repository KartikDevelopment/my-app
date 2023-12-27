import React, { useState } from "react";
export const TextForm = ({ heading = "s" }) => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <div className="mb-3">
        <h3>{heading}</h3>
        <textarea
          value={text}
          onChange={(val) => setText(val.target.value)}
          className="form-control"
          id="myBox"
          rows={3}
        />
        <button
          onClick={() => setText((val) => val.toUpperCase())}
          className="btn btn-primary"
        >
          Upper Case
        </button>
      </div>
    </>
  );
};
