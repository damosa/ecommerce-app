import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import ContentLayout from './layouts/ContentLayout/ContentLayout'
import DetailPage from './pages/DetailPage/DetailPage';
import ProductPage from './pages/ProductsPage/ProductPage';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContentLayout/>}>
                    <Route index element={<ProductPage/>} />
                    <Route path="detail/:itemId" element={<DetailPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp