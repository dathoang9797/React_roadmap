// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Home } from './Home';
// import { About } from './About';
import './App.css'
import { Application } from './components/applications/applications';


function App() {
  return (
    <>
      <Application />
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}
export default App;
