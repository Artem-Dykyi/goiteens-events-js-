
// import './App.css';
import React from 'react';
import Title from './components/MainTitle';
import PageBoard from './components/PageBoard';
import events from '../src/events.json';



function App() {
  return (
    <>
    <Title>24th Core Worlds Coalition Conference</Title>
    <PageBoard events={events} />
    </>
  );
}

export default App;
