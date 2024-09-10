import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import { store } from "./lib/store";
import { Toaster } from "react-hot-toast";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <HelmetProvider>
        <Provider store={store}>
          <RouterProvider router={x}></RouterProvider>
          <Toaster
            toastOptions={{
              position: "top-right", // Global position for all toasts
              style: {
                zIndex: 999, // Custom z-index for all toasts
                marginTop: "30px",
              },
            }}
          />
        </Provider>
      </HelmetProvider>
    </>
  );
}

export default App;
