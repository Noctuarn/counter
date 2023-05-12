import { useState } from 'react';
import Button from './components/Button';
import './App.scss';


function App() {

  const [count, setCount] = useState(0),
          [isMouseDown, setIsMouseDown] = useState([false, false, false]);

    function Plus(){
        setCount(count + 1);
    }

    function Minus(){
        setCount(count - 1);
    }

    function Reset(){
        setCount(0);
    }

    const mouseDownHandler = (index) => {
        setIsMouseDown(prevState => {
            const newState = [...prevState]; 
            newState[index] = true; 
            return newState; 
        });
    }
    
    const mouseUpHandler = (index) => {
        setIsMouseDown(prevState => {
            const newState = [...prevState]; 
            newState[index] = false; 
            return newState; 
        });
    }
   
  return (
    <div className="App">
       <h1 className="title">Counter</h1>
            <h3 className="count">{count}</h3>
            <div className="buttons">
                <Button onButtonUp = {() => mouseUpHandler(0)} onButtonDown = {() => mouseDownHandler(0)} btnClass = {`btn-plus ${isMouseDown[0] ? "btn-active" : ""}`} label = "Плюс" onClickButton = {Plus}/>
                <Button onButtonUp = {() => mouseUpHandler(1)} onButtonDown = {() => mouseDownHandler(1)} btnClass = {`btn-reset ${isMouseDown[1] ? "btn-active" : ""}`} label = "Скинути" onClickButton = {Reset}/>
                <Button onButtonUp = {() => mouseUpHandler(2)} onButtonDown = {() => mouseDownHandler(2)} btnClass = {`btn-minus ${isMouseDown[2] ? "btn-active" : ""}`} label = "Мінус" onClickButton = {Minus}/>
            </div>
    </div>
  );
}

export default App;
