import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode 두번씩 호출하면서 잘못된게 없는지 검사하기 위해서 개발과정에서만 발생
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>
);

