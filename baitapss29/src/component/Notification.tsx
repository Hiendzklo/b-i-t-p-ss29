import React, { useState, useEffect } from 'react';

const Notification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showNotification = () => {
    setIsVisible(true);
  };

  const closeNotification = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div>
      <button
        onClick={showNotification}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Show notification
      </button>
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            padding: '20px',
            backgroundColor: 'red',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '300px',
          }}
        >
          <span>Hiển thị thông báo ở đây</span>
          <button
            onClick={closeNotification}
            style={{
              marginLeft: '20px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
