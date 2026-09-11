'use client';

import { useState, useEffect } from 'react';

export default function WeatherWidget() {
  const [weatherText, setWeatherText] = useState('18°C Sunny Valley');

  useEffect(() => {
    const month = new Date().getMonth();
    if (month >= 11 || month <= 1) {
      setWeatherText('-2°C Winter Snow');
    } else if (month >= 2 && month <= 4) {
      setWeatherText('14°C Crisp Spring');
    } else if (month >= 5 && month <= 8) {
      setWeatherText('21°C Pleasant Alpine');
    } else {
      setWeatherText('16°C Golden Autumn');
    }
  }, []);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '20px',
        background: 'rgba(35, 24, 21, 0.65)',
        backdropFilter: 'blur(12px)',
        padding: '8px 24px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid rgba(229, 169, 60, 0.4)',
        fontSize: '0.86rem',
        color: '#FFFFFF',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            display: 'inline-block',
          }}
        />
        <span>Pahalgam: <strong>{weatherText}</strong></span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span>Altitude: <strong>7,200 ft</strong></span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span>Lidder River: <strong>Glacial Stream</strong></span>
      </div>
    </div>
  );
}
