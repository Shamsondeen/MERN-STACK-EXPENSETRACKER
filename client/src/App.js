import React from 'react';
import { Header }  from './components/Header';
import { Balance }  from './components/Balance';
import { IncomeExpense }  from './components/IncomeExpense';
import { TranscList }  from './components/TranscList';
import { AddTransc }  from './components/AddTransc';


import { GlobalProvider } from './context/GlobalState';


import './App.css';


function App() {
 return (
   <GlobalProvider>
   <Header />
   <div className="container">
     <Balance />
     <IncomeExpense />
     <TranscList />
     <AddTransc />
   </div>
   </GlobalProvider>
 )
}

export default App;
