import { useRef } from "react";

function BoxColor({ color, inputValue }) {

  const boxRef = useRef(null);

  const isMatch = inputValue === color;

  return (
    <div
      ref={boxRef}
      className={`box ${color}`}
      style={{ backgroundColor: isMatch ? color : "" }}
    >

      <p style={{ color: color }}>
        {isMatch
          ? `Yes, I'm ${color} color`
          : `I'm not a ${inputValue} color`}
      </p>

    </div>
  );
}

export default BoxColor;