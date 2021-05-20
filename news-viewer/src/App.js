import React, { useCallback, useState } from 'react';
import { Route } from 'react-router';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage}/>;
};

export default App;
