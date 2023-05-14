import React from 'react';
import './App.css';
import {NaviBar} from "./ui/components/NavBar/NaviBar";
import {Navigate, Route, Routes} from 'react-router-dom';
import {PATH} from "./utils/path/PATH";
import {LoginPage} from "./ui/components/Login/LoginPage";
import {ChatPage} from "./ui/components/Chat/ChatPage";

function App() {

    return (
        <div className="App">
            <NaviBar/>
            <Routes>
                <Route path={PATH.LOGIN} element={<LoginPage/>}/>
                <Route path={PATH.CHAT_PAGE} element={<ChatPage/>}/>
                <Route path={PATH.MAIN} element={<Navigate to={PATH.CHAT_PAGE}/>}/>
            </Routes>
        </div>
    );
}

export default App;
