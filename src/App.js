import React from 'react';
import Header from './components/Header/Header';
import List from './components/Expense List/List';
import Inputs from './components/Transaction Inputs/Inputs';
import './App.css';

//import ContextAPI/ Provider
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
 <>
 <GlobalProvider>
      <Header/>
      <List/>
      <Inputs/>
      </GlobalProvider>
    </>
  );
}

export default App;
