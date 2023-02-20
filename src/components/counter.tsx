import { useReducer, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="px-2 border border-black"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        count: {count}
      </button>
    </div>
  );
}
