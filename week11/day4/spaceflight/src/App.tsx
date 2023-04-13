import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticleDetails from './components/ArticleDetails';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;