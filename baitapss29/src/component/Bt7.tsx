import React, { useState } from 'react';

const AddElement: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addElement = () => {
    const newNumber = Math.floor(Math.random() * 10) + 1; // Generate a random positive integer between 1 and 10
    setNumbers([...numbers, newNumber]);
  };

  return (
    <div>
      <h3>Trước khi bấm:</h3>
      <p>Mảng số: [{numbers.join(', ')}]</p>
      <button onClick={addElement}>Add element</button>
      <h3>Sau khi bấm:</h3>
      <p>Mảng số: [{numbers.join(', ')}]</p>
    </div>
  );
};

export default AddElement;
