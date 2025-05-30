import React, { useEffect } from 'react';
import { useThemeStore } from './store/useThemeStore';

function App() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.body.style.background = theme === 'dark' ? '#222' : '#fafafa';
    document.body.style.color = theme === 'dark' ? '#fff' : '#222';
  }, [theme]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <button
        onClick={toggleTheme}
        style={{
          padding: '16px 32px',
          marginBottom: 40,
          border: 'none',
          borderRadius: 8,
          background: theme === 'light' ? '#eee' : '#333',
          color: theme === 'light' ? '#222' : '#ffe066',
          fontWeight: 700,
          fontSize: 18,
          cursor: 'pointer',
        }}
      >
        {theme === 'light' ? '🌙 Koyu Moda Geç' : '☀️ Açık Moda Geç'}
      </button>
      <div style={{ fontSize: 32, fontWeight: 700 }}>
        With Zustand {theme === 'dark' ? 'Koyu' : 'Açık'} Theme Active!
      </div>
      <p style={{ marginTop: 32, fontSize: 18 }}>
        Manage theme status <b>globally</b> with Zustand.
      </p>
    </div>
  );
}

export default App;
