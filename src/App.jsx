import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input); // ⚠️ eval puede ser peligroso con entradas no controladas
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Calculadora</h1>
      <div style={styles.display}>
        <input type="text" value={input} readOnly style={styles.input} />
        <div style={styles.result}>{result !== null ? `= ${result}` : ''}</div>
      </div>
      <div style={styles.buttons}>
        {['7', '8', '9', '/', 
          '4', '5', '6', '*', 
          '1', '2', '3', '-', 
          '0', '.', '=', '+'].map((btn) =>
          btn === '=' ? (
            <button key={btn} onClick={handleCalculate} style={styles.button}>{btn}</button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)} style={styles.button}>{btn}</button>
          )
        )}
        <button onClick={handleClear} style={{ ...styles.button, backgroundColor: '#f44336', color: '#fff' }}>
          C
        </button>
      </div>
    </div>
  );
}

// 🎨 Estilos simples en JS
const styles = {
  container: {
    textAlign: 'center',
    padding: '30px',
    fontFamily: 'Arial',
  },
  display: {
    marginBottom: '20px',
  },
  input: {
    fontSize: '24px',
    width: '250px',
    padding: '10px',
    textAlign: 'right',
  },
  result: {
    fontSize: '24px',
    marginTop: '10px',
    minHeight: '30px',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 60px)',
    gap: '10px',
    justifyContent: 'center',
  },
  button: {
    fontSize: '20px',
    padding: '15px',
    cursor: 'pointer',
  },
};

export default App;
