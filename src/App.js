
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import RootLayout from "./root/RootLayout";
import AboutP from "./pages/AboutP";
import ContactP from "./pages/ContactP";

const myrouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/about" element={<AboutP/>}></Route>
    <Route path="/contact" element={<ContactP/>}></Route>
  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={myrouter}/>
    </>
  );
}

export default App;
