import "./App.css";
import FifthAnim from "./components/first/FifthAnim";
import FirstAnim from "./components/first/firstAnim";
import FourthAnim from "./components/first/FourthAnim";
import SecondAnim from "./components/first/SecondAnim";
import ThirdAnim from "./components/first/ThirdAnim";

function App() {
  return (
    <>
      <div>
        <h1>Learning Framer Motion js</h1>

        <FirstAnim />
        <SecondAnim />
        <ThirdAnim />
        <FourthAnim />
        <FifthAnim />
      </div>
    </>
  );
}
export default App;
