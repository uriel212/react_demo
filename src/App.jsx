// import Greeting from './Components/Greeting';
// import ProductInfo from './Components/PorductInfo';
// import JSXRules from './Components/JSXRules';
// import MainContent from './MainContent';

// import ProductsProps from "./Components/Exercises/ProductsProps";
import Childs from "./Components/Teaching/Childs";
// import Props from "./Components/Teaching/Props";

// import ExerciseLists from "./Components/Exercises/ExerciseLists";
// import Lists from "./Components/Lists";

const App = () => {
  return (
    <>
      {/* <ProductsProps name="Dark Souls cheat" price="$1.99" /> PROPS Explanation */} 
      <Childs>
        <h1>Childs</h1>
        <p>This is my content to pass from Parent to child component</p>
      </Childs>
    </>
  );
}

export default App;