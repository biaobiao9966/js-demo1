
import React from 'react';
import ownloadImage from './download.jpg'; // 导入本地图片

function ImageDisplay() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <img
        src={ownloadImage}
        alt="示例图片"
        style={{
          maxWidth: '600px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
}

export default ImageDisplay;<
