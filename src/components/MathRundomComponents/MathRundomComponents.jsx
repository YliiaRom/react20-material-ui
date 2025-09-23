import { useRef, useState } from "react";

function MathRundomComponents() {
  console.log(`_____render MathRundomComponents`);
  const inputRef = useRef("");
  const dataRef = useRef("");
  const handlerChange = () => {
    dataRef.current.innerText = "Hello " + inputRef.current.value;
  };
  if (Math.random() > 0.5) {
    let data;
    data.wrongFn;
  }

  return (
    <>
      <h2 ref={dataRef}>Hello</h2>

      <label className="form">
        name:
        <input
          type="text"
          ref={inputRef}
          onChange={handlerChange}
          placeholder="yuliia "
        />
      </label>
    </>
  );
}

export default MathRundomComponents;
