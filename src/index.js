import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Router from "./Router"
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Header />
    <Footer />
    <Router />
  </BrowserRouter>
)

