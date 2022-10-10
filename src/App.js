import React from 'react'
import {  BrowserRouter, Route, Routes  } from "react-router-dom";
import TopBar from "./comp/topbar/TopBar";
import Main from "./comp/main/Main";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail"
import Write from "./pages/form/Write"
import Settings from "./pages/settings/Settings"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/list" element={<Home/>} />
          <Route path="/detail"component={Detail}  element={<Detail/>} />
          <Route path="/write" element={<Write/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App