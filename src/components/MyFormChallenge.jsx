import { useState } from "react";
import BoxColor from "./BoxColor";

function MyForm() {

  const [inputValue, setInputValue] = useState("");

  const colors = ['red','green','pink','yellow','purple','white','blue','aqua','olive'];

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  return (
    <>
      <input
        type="text"
        placeholder="Escribe un color..."
        value={inputValue}
        onChange={handleChange}
      />

      <div className="container">
        {colors.map((color, index) => (
          <BoxColor
            key={index}
            color={color}
            inputValue={inputValue}
          />
        ))}
      </div>
    </>
  );
}

export default MyForm;