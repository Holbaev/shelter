import React from "react";
import MainPage from "../../pages/MainPage/MainPage"
import PetsPage from "../../pages/PetsPage/PetsPage"

const routes = [
    {path: '/' , component: <MainPage/>},
    {path: '/pets/' , component: <PetsPage/>},
]

export default routes;