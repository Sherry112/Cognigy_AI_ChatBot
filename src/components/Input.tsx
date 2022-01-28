import React, { useState } from "react";

interface myProp{
onSend:(arg0: string)=>void
}
export default function Input({ onSend }: myProp) {
  const [text, setText] = useState("");

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(e.target.value);
  };

  const handleSend = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <div className="input">
      <form onSubmit={handleSend}>
        <input
          type="text"
          onChange={handleInputChange}
          value={text}
          placeholder="Enter your message here"
          className="formInput"
        />
        <button className="formButton">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 500 500"       
          >
            <g>
              <g>
                <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75" />
              </g>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}
