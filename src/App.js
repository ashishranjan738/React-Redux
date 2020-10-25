import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import {Provider} from 'react-redux'
import store from './redux/store'
import React from "react";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HooksCakeContainer/>
                <HooksIceCreamContainer/>
                <CakeContainer/>
                <IceCreamContainer/>
                <NewCakeContainer/>
            </div>
        </Provider>
    );
}

export default App;
