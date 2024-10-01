import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='blog' element={<Blog />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
