import { flow } from "lodash-es";
import { addUUIDToItem, doubleArray, shuffleArray } from "./utils";
import { IMAGES } from "./data";
import { FlipCard, Score } from "./components";

function App() {
  const data = flow(doubleArray, shuffleArray, addUUIDToItem)(IMAGES);

  return (
    <div className="flex flex-col gap-2 w-full h-full justify-center items-center">
      <Score />
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {data.map((image) => (
          <FlipCard key={image.uuid} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
