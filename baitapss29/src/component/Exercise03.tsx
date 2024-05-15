import React, { useState, ChangeEvent } from 'react';

const Exercise03: React.FC = () => {
  const [date, setDate] = useState<string>('');

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <h3>Trước khi nhập liệu:</h3>
      <label htmlFor="dateInput">Thời gian:</label>
      <input 
        type="date" 
        id="dateInput" 
        onChange={handleDateChange} 
        value={date}
      />
      {date && (
        <div>
          <h3>Sau khi nhập liệu:</h3>
          <p>Thời gian: {new Date(date).toISOString().split('T')[0]}</p>
          <input 
            type="date" 
            value={date} 
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default Exercise03;
