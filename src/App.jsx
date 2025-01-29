// import Greeting from './Components/Greeting';
// import ProductInfo from './Components/PorductInfo';
// import JSXRules from './Components/JSXRules';
// import MainContent from './MainContent';

// import ProductsProps from "./Components/Exercises/ProductsProps";
import CartConditional from "./Components/Exercises/CartConditional";
// import Childs from "./Components/Teaching/Childs";
// import ConditionalRendering from "./Components/Teaching/ConditionalRendering";
// import Props from "./Components/Teaching/Props";

// import ExerciseLists from "./Components/Exercises/ExerciseLists";
// import Lists from "./Components/Lists";

const App = () => {
  return (
    <>
      {/* <ProductsProps name="Dark Souls cheat" price="$1.99" /> PROPS Explanation */} 
      {/* <Childs>
        <h1>Childs</h1>
        <p>This is my content to pass from Parent to child component</p>
      </Childs> */}
      {/* <ConditionalRendering isTrue={false} /> */}
      <CartConditional items={["Arroz", "Frijoles", "Aceite"]} />
    </>
  );
}

export default App;