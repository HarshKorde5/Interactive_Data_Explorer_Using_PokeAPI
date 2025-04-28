import React from "react";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col h-screen bg-[url('https://lh3.googleusercontent.com/SIsU3f9BEnZbD9xXFDQuYX4viwTUORLOkXYu9TnO--w1KrW_9EtGxxLigXl7fLp7BRpOHs8Amf5xBFK6wE8V96Ot3STvfxfeLhZXHfFf3jSo=s2400-rj')]">

            <Header />

            <main className="flex-1 overflow-y-auto pt-5 px-6">
                <Outlet />
            </main>
        </div>
    )
}


export default Layout;