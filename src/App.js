import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import NoteList from './Component/NoteList';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <NoteList></NoteList>
      
     
    </div>
  );
}

export default App;
