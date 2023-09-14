import React from 'react'

const CartItem = (props) => {
    // constructor() {
    //   super();
    
    //   this.state = {
    //      title:'Phone',
    //      price: 999,
    //      count : 0,
    //      qnt:2
    //   }
    // //   this.testting()
    // }
    // if we don't need previos state
    //  decrement = () => {
    //     if(this.state.count ===0) return;
    //     this.setState({
    //         count:this.state.count -1
    //     })
    // }

    // if we need previous state use this 
    // set state call is asynchrinous
    //  increment = () => {
    //     this.setState((prevState) =>{
    //         return {
    //             count : prevState.count+1
    //         }
    //     })
    // }
    //  Reset = () => {
    //     this.setState({
    //         count: 0
    //     })
    // }

    // but in case of  making api calls it's is synchronnous
    // testting(){
    //     const promise = new Promise ((res,err) => {
    //         setTimeout(() => {
    //             res("testing")
    //         },5000)
    //     })

    //     promise.then(() => {
    //         this.setState({count:100})

    //         console.log("state : ",this.state);
    //     })
       
    // };

    const { title, price, qnt ,img} = props.product
    return (
      <div className='cart-item'>
            <div className='left-block'>
                 <img style={styles.image} src={img}/>
            </div>
            <div className='right-block'>
                <div style={{fontSize:20, color:'#252525'}}>{title}</div>
                <div style={{fontSize:15, color:'#252525'}}>Price : {price}</div>
                <div style={{fontSize:15, color:'#252525'}}>Qnt : {qnt}</div>
                <div className='cart-item-actions'>
                    <img onClick={() => props.decrement(props.product)} className='action-icons' src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png' alt="decrement"/>
                    <img onClick={() => props.increment(props.product)} className='action-icons' src='https://cdn-icons-png.flaticon.com/512/1665/1665629.png' alt="increment"/>
                    <img onClick={() => props.ondelete(props.product.id)} className='action-icons' src='https://cdn-icons-png.flaticon.com/512/3096/3096673.png' alt="Reset"/>
                </div>
            </div>
      </div>
    )
  
}
export default CartItem;

const styles = {
    image:{
        height: 210,
        width: 210,
        margin:10,
        background: '#ccc',
    }
}
