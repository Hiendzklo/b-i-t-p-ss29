import React, { useState } from 'react';

const Exercise02: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h3>Trước khi nhập liệu:</h3>
      {inputValue ? (
        <p>Dữ liệu người dùng nhập: {inputValue}</p>
      ) : (
        <p>Nhập dữ liệu</p>
      )}
      <h3>Sau khi nhập liệu:</h3>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default Exercise02;
