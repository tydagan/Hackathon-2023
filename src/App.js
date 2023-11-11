import React from 'react';
import AppRouter from './AppRouter';
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={< AppRouter />} />
    </div>
  );
}

export default App;
