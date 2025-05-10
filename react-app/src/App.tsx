// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Home } from './Home';
// import { About } from './About';
import './App.css'
import './Storage';
import GoogleTranslateCrashesTernaryRepro from './components/GoogleTranslate';
// import { MuiMode } from './components/mui';
import { AppProviders } from './providers/AppProviders';
// import { Application } from './components/applications/applications';
// import { Count } from './components/Count';
// import { Counter } from './components/counter';


function App() {
  return (
    <>
      <AppProviders>
        <GoogleTranslateCrashesTernaryRepro />
        {/* <div className='App'>
          <MuiMode />
        </div> */}
      </AppProviders>
      {/* <Counter /> */}
      {/* <Application /> */}
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
