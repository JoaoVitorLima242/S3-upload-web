import { useRef } from 'react'
import './App.css';

function App() {
  const inputRef = useRef()

  const onSubmit = () => console.log(inputRef.current.files[0])

  return (
    <div className="App">
      <input type='file' name='image' ref={inputRef}/>
      <button onClick={onSubmit}>CLICK</button>
    </div>
  );
}

export default App;
