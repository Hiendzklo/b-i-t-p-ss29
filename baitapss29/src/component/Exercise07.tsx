import React, { useState } from 'react';

const Exercise07: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Trước khi bấm:</h3>
      <button onClick={handleClick}>Click {count} lần</button>
      <h3>Sau khi bấm lần {count}:</h3>
      <button onClick={handleClick}>Click {count} lần</button>
    </div>
  );
};

export default Exercise07;
