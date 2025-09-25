import { useState } from "react";

 function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
      <div className="space-x-2">
        <button 
          onClick={increment} 
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>
        <button 
          onClick={decrement} 
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
        <button 
          onClick={reset} 
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
 
export default Counter;