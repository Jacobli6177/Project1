import './App.css';
import Card from './components/cards';

const App = () => {
  return (
    <div className='App'>
      <div className = "Header"> 
        <img className='Headpic' src ='../src/images/Differnt.jpg'></img>
        <h1> Different Food</h1>
      </div>
      <div className='Container'>
        <Card />
      </div>
    </div>
  )
}

export default App
