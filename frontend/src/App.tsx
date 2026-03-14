import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar'
import MachineLearning from './page/MachineLearning'
//import NeuralNetWork from './page/NeuralNetWork'
//import DemoML from './page/DemoML'
//import DemoNN from './page/DemoNN'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MachineLearning />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
    
      </Routes>
    </BrowserRouter>
  );
}

