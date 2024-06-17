// App.jsx
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

const App = () => {
  const [qrValue, setQrValue] = useState('');
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshCount(refreshCount + 1);
      setQrValue(`https://example.com?count=${refreshCount}`);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, [refreshCount]);

  return (
    <div className="qr-container">
      <QRCode value={qrValue} size={256} />
      <p>Refreshed {refreshCount} times</p>
    </div>
  );
};

export default App;