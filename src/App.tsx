import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

const App = () => {
  return (
    <>
    {/* <DndProvider backend={HTML5Backend}> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* </DndProvider> */}
    </>
  )
}

export default App;