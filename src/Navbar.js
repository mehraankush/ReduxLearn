import React, { Component } from 'react'

 const Navbar = (props) => {

    return (
      <div style={Styles.nav}>
        <div style={Styles.cartContainer}>
          <img style={Styles.cartItem} src="https://cdn-icons-png.flaticon.com/512/649/649931.png" alt="Cart icon"/>
            <span style={Styles.cartCount}>{props.count}</span>
        </div>
      </div>
    )
  
}
export default Navbar;

const Styles = {
  cartItem:{
   height:35,
   marginRight:20
  },
  nav:{
    height:70,
    background:'#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItem: 'center',
  },
  cartContainer:{
    position:'relative',
  },
  cartCount:{
   background: 'orange',
   borderRadius:'50%',
   position:'absolute',
   right:0,
   top:-5,
   padding:'4px 8px'
  }
}