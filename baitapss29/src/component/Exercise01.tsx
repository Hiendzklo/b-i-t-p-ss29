import React from 'react';

const Exercise01: React.FC = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Exercise01;
