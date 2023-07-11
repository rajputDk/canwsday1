import React from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// import Footer from "./Footer/Footer"


class Layout extends React.Component {
  render(){
    return (
      <>
        <Header />
        <main>
            <Outlet/>    
        </main>
       <Footer/>
      </>
    )
  }
}
export default Layout;