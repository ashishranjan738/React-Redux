import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store'
import React from "react";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HooksCakeContainer/>
                <CakeContainer/>
            </div>
        </Provider>
    );
}

export default App;
