import './App.css';
import List from './list';
import {data} from './data'
import {useState } from 'react'

function App() {
  const [person  , setPerson] = useState(data);
  return (
    <div className='container'>
      <h3> 0 birthday today</h3>
      <List person={person}/> 
      <button > clear all</button>
    </div>
  );
}

export default App;
