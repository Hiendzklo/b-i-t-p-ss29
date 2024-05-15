import React, { useState } from 'react';

const Exercise05: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hiện' : 'Ẩn'}
      </button>
    </div>
  );
};

export default Exercise05;
