import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LinePlot from './components/LinePlot';

function App() {
  // Generate data that trends upwards but includes randomness
  const generateTrendingRandomData = (numPoints: number, startValue = 0, stepMin = -50, stepMax = 50) => {
    let data = [startValue];
    for (let i = 1; i < numPoints; i++) {
      // Ensure the next value is higher than the last but includes some randomness
      const step = Math.random() * (stepMax - stepMin) + stepMin;
      data.push(data[i - 1] + step);
    }
    return data;
  };

  // Example usage: Generate 50 data points starting from 10
  const sampleData = generateTrendingRandomData(50);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <LinePlot data={sampleData} width={640} height={400} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR updates.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
