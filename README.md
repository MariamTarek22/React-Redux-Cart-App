# Responsive React Redux Cart App
 This project demonstrates a responsive shopping cart using React.js with Redux. It features dynamic cart management and a clean, responsive design.
 
## Features

- **Responsive Design:** The interface adapts to various screen sizes and devices.
- **Cart Management:**
  - **Add to Cart:** Add products to the cart.
  - **Remove from Cart:** Remove products from the cart.
  - **Increment Quantity:** Increase the quantity of a product.
  - **Decrement Quantity:** Decrease the quantity or remove the product if quantity is zero.
  - **Clear Cart:** Clear cart items.
  - **Product Availability:** shown if item is out of stock after quantity and Product instock count change.
  - ** The cart updates in real-time, and changes are reflected in the local storage.

- **State Management:**
  - **React.js with Redux** 
  - Efficient state management and automatic updates
- **API Integration:** Uses the [Fake Store API](https://fakestoreapi.com/products) for fetching product data.

## Project Structure

- **src/**: This is the root directory of your source code, where all the main files and folders are located.
    
- **components/**: This directory holds reusable components of the application.
  - **Layout/**:provides a consistent page structure with a Navbar and a placeholder (Outlet) for rendering nested route components.
  - **Cart/**: Contains the Cart component (`Cart.jsx`) and its associated styles (`Cart.module.css`).
  - **NavBar/**: Holds the component and related files for the navigation bar.
  - **Products/**: Contains component related to displaying and managing products.
  - **NotFound/**: Contains component related to displaying NotFound screen .
  
- **lib/**: 
  - **cartSlice.js**: Defines the Redux slice for handling and managing cart-related state and actions.
  - **store.js**: Configures and exports the Redux store,can combine different slices like `cartSlice`.

- **pages/**: Contains the page components for the application.
  - **Home/**: Contains the Home page component (`Home.jsx`) where products,cart,navbar are displayed and its associated styles (`Home.module.css`).

- **App.js**: The main application component that brings together the different routes and pages.
  
- **index.css**: Global styles applied to the entire application.
  
- **main.jsx**: The entry point for the React application, where the root component is rendered.
  
- **index.html**: The main HTML file that serves as the entry point for the React application.

- **package.json**: Contains metadata about the project, including dependencies and scripts.

- **vite.config.js**: Configuration file for Vite, the bundler and development server used in this project.


## Deployment

- **Live Demo:** [(https://66e0c440cfcfa72e316dda79--capable-eclair-e0ce60.netlify.app/)]

## Usage

1. Navigate to the application in your browser.
2. Use the interface to interact with products and the cart.
3. Add, remove, or update the quantity of items in the cart.
4. Clear cart items. 
5. The cart updates in real-time, and changes are reflected in the local storage.
6. unKnown Routes lead to NotFound Screen.

## Notes

- **CSS Restrictions:** Only vanilla CSS is used, with no CSS libraries such as Bootstrap or Tailwind CSS.
- **State Management:** Only React.js with Redux is used for state management.
- **Modern JavaScript:** ES6+ features are utilized, including async/await for asynchronous operations.



