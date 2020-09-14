import React, { Component } from "react";


const Navbar = ({ totalCounters }) => {
    return ( 
       
            <nav style={{ fontSize: "7vh", color: "#fff", backgroundColor: "gray" }}>
              { totalCounters }
            </nav>
          );
        }
     

 

export default Navbar;
