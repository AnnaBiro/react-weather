
import './App.css';
import Weather from './Weather';

 export default function App() {
  return (
    <div className="App">
      <div className="container">
      
         <Weather defaultCity="New York"/>
       
     <footer>
       This project was coded by Anna Biro and is {" "}
       <a href="https://github.com/AnnaBiro/react-weather" target="_blank" rel="noreferrer">
         open-sourced on GitHub.

     </a>
     </footer>
      </div>
    
     
    </div>
  );
}


