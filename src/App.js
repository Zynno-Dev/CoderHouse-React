import './App.css';
import {NavBar} from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <body>
        <ItemListContainer greating="Hola"/>
        <ItemListContainer greating="Hola1"/>
        <ItemListContainer greating="Hola2"/>
        <ItemListContainer greating="Hola3"/>
      </body>
    </div>
  );
}

export default App;
