import React from 'react'
import CartItem from './CartItem'

 const Cart = (props) => {

    const { products, ondecrement, onincrement, ondelete } = props

    return (
      <div className='cart'>
          {
          products.map((e) => {
            return (<CartItem 
               product={e} 
               key={e.id} 
               decrement={ ondecrement} 
               increment={ onincrement} 
               ondelete={ ondelete}/>)
            //  return <CartItem title={e.title} price={e.price} key={e.id}/>
            })
          }
      </div>
    )
  
}

export default Cart