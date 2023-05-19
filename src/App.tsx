import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {PATH} from "./utils/path/PATH";
import {ChatPage} from "./ui/components2/Chat/ChatPage";
import {LoginPage} from "./ui/components2/Login/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={PATH.LOGIN} element={<LoginPage/>}/>
                <Route path={PATH.CHAT_PAGE} element={<ChatPage/>}/>
                <Route path={PATH.MAIN} element={<Navigate to={PATH.CHAT_PAGE}/>}/>
            </Routes>
        </div>
    );
}

export default App;
