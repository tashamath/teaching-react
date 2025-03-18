
import React, { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState([]);

  const handleAddThatBox = () => {
    setBoxes([...boxes, boxes.length + 1]);
  };

  const handleRemoveThatBox = () => {
    if (boxes.length > 0) {
      setBoxes(boxes.slice(0, -1));
    }
  };

  const getRows = () => {
    const rows = [];
    for (let i = 0; i <boxes.length; i += 5){
      rows.push(boxes.slice(i, i+5));
    }
    return rows;
  };

  return (
    <div className="p-4">
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={handleAddThatBox}
          className="border-2 border-solid border-black px-4 py-2 rounded hover:bg-gray-100"
        >
          Add Me!
        </button>
        <button
          onClick={handleRemoveThatBox}
          className="border-2 border-solid border-black px-4 py-2 rounded hover:bg-gray-100"
        >
          Remove Me!
        </button>
      </div>

      {boxes.length > 0 && ( 
      <div className="flex justify-center">
        <table className="border-collapse">
          <tbody>
            {getRows().map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((number) => (
                <td
                  key={number}
                  className="border-2 border-solid border-black w-12 h-12 text-center align-middle"
                >
                  {number}
                </td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
}

export default App;
