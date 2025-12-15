import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Lyout from "../layouts/Lyout"

const Routes = () => {
  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/" element={<Lyout/>}>
       
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      
        
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products">
            <Route index element={<ProductsList />} />
            <Route path="add" element={<AddProducts />} />
       
          <Route path="contact" element={<Contact />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};


export default Routes