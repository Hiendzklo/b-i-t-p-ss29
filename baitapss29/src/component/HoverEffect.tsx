import React, { useState } from 'react';

const HoverEffect: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'block', margin: '0 auto' }}
      >
        Hover me
      </button>
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '10px',
            zIndex: 1,
          }}
        >
          <button style={{ marginBottom: '10px' }}>Button</button>
        </div>
      )}
    </div>
  );
};

export default HoverEffect;
