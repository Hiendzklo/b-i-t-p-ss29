import React, { useState } from 'react';

const RandomGender: React.FC = () => {
  const genders = ['Nam', 'Nữ', 'Khác'];
  const [gender, setGender] = useState('Nam');

  const getRandomGender = () => {
    const randomIndex = Math.floor(Math.random() * genders.length);
    setGender(genders[randomIndex]);
  };

  return (
    <div>
      <h3>Trước khi click:</h3>
      <p>Gender: {gender}</p>
      <button onClick={getRandomGender}>Random gender</button>
      <h3>Sau khi click:</h3>
      <p>Gender: {gender}</p>
      <button onClick={getRandomGender}>Random gender</button>
    </div>
  );
};

export default RandomGender;
