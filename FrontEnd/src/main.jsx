import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CreateFlashCard from './components/CreateFlashCard.jsx';
import Home from './components/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EditFlashCard from './components/EditFlashCard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "createFlashCard",
    element: <CreateFlashCard />,
  },
  {
  path: "home",
  element: <Home />,
  },
  {
    path: "edit-flashcards/:flashCardId",
    element: <EditFlashCard  />,
    },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
