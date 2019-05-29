import React from 'react';
import './App.css';
import Product from "./components/postProduct";
import ProductView from "./components/productView";
import { BrowserRouter as Router, Route  } from 'react-router-dom';


function App() {
    return (
        <Router>
        <div className="App">

            <Route exact path="/" component={Product} />
            <Route exact path="/preview" component={ProductView} />

        </div>
        </Router>
    );
}

export default App;
