import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { api } from './API';

export const App = () => (
  <div className="container">
    <Header />
    <Main />
  </div>
);
