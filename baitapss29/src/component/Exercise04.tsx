import React, { useState, ChangeEvent } from 'react';

const Exercise04: React.FC = () => {
  const [city, setCity] = useState<string>('');

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <h3>Trước khi chọn dữ liệu:</h3>
      <label htmlFor="citySelect">Tỉnh / Thành phố:</label>
      <select id="citySelect" onChange={handleCityChange} value={city}>
        <option value="">--- Chọn tỉnh / Thành phố ---</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Nghệ An">Nghệ An</option>
        <option value="Hà Tĩnh">Hà Tĩnh</option>
      </select>
      {city && (
        <div>
          <h3>Sau khi chọn dữ liệu:</h3>
          <p>Tỉnh / Thành phố: {city}</p>
          <select value={city} disabled>
            <option value={city}>{city}</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Exercise04;
