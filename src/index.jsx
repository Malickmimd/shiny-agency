import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Survey from './pages/Survey/';
import Header from './Components/Header';
import Results from './pages/Results';
import Freelance from './pages/Freelances';
import Error from './Components/Error';
import Footer from './Components/Footer';
import ThemeProvider from './utils/context/ThemeProvider'
import GlobalStyle from './utils/style/GlobalStyle'
import SurveyProvider from './utils/context/SurveyProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle/>
          <Header/>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/survey/:idQuestion" element={<Survey/>} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/freelance" element={<Freelance />} />
                  <Route path="*" element={<Error />} />
              </Routes>
          <Footer/>
        </SurveyProvider>  
      </ThemeProvider> 
    </Router>
  </React.StrictMode>
);
