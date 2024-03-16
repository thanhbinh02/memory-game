import { flow } from "lodash-es";
import { addUUIDToItem, doubleArray, shuffleArray } from "./utils";
import { IMAGES } from "./data";

function App() {
  const data = flow(doubleArray, shuffleArray, addUUIDToItem)(IMAGES);

  return <div>Memory Game</div>;
}

export default App;
