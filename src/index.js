import React from 'react'; // Used to create and manage components
import ReactDOM from 'react-dom'; // Used to intract with actual DOM

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyD1w_PbRJlmKU2_b-HoNuur5J3Cw5x-ZDE";


// Create a new element
const App = () => {
  return (
   <div>
    <SearchBar />
  </div>
  );
}


//Put element in the Dom
ReactDOM.render(<App />, document.querySelector('.container')); // (element, HTML Node)

