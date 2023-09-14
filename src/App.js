import React,{ Component } from 'react';
import firebase from 'firebase/compat/app';

import './App.css';
import Cart from './Cart.js';
import  Navbar  from './Navbar';


class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      products : [],
      Loding:true
    }
  }
 
 componentDidMount(){
   firebase
    .firestore()
    .collection('products')
    // .get() this will get the data but if we change it in firebase we have to refresh it
    // .where('price','>=',99)   find thw products according to our needs
    // .where('title','==','Art') 
    .orderBy('price','asc')
    .onSnapshot((snapshot) => {  // onSnapshot this ia a event listner it'll auto update the web after updating it on firebase
      snapshot.docs.map((doc) => {
        console.log(doc.data())
      })

      const products = snapshot.docs.map((doc) => {
        const data = doc.data()
        data['id'] = doc.id
        return data;
      })

      this.setState({
        products: products,
        Loding : false
      })
    })
 }

  increment = (product)=> {
  const { products } = this.state
   const index = products.indexOf(product)

  //  products[index].qnt +=1;

  //  this.setState({ 
  //   products:products,
  //   Loding:false,
  // })

  // update direct in firebase
  const proRef = firebase.firestore().collection('products').doc(products[index].id);

  proRef
      .update({
        qnt:products[index].qnt + 1,
      })
      .then(()=> {
        console.log("quantity updated succesfully")
      })
      .catch((err)=> {
        console.log("Error", err)
      })
}

decrement = (product) => {
  const { products } = this.state
  const index = products.indexOf(product)
   
  if(products[index].qnt === 0) return ;
  // products[index].qnt -=1;

  // this.setState({ products:products})

  const proRef = firebase.firestore().collection('products').doc(products[index].id);

  proRef
      .update({
        qnt:products[index].qnt - 1,
      })
      .then(()=> {
        console.log("quantity updated succesfully")
      })
      .catch((err)=> {
        console.log("Error", err)
      })
}

ondelete = (id) =>{
  const { products } = this.state
  // const items = products.filter((item) => item.id !== id) // return the array with one id removes
  
  // this.setState({ products:items})
  const proRef = firebase.firestore().collection('products').doc(id);
     
  proRef
    .delete() // delete
    .then(() =>{
      console.log("Deleted Success")
    })
    .catch((err) =>{
      console.log("Error", err)
    });

}

countProduct = (product) =>{
  const { products } = this.state
  let count =0;
  products.forEach((item) =>{
    count += item.qnt
  })

  return count
}

getTotal = () => {
  const { products } = this.state
  
  let tprice = 0;
  products.map((item) =>{
    tprice = tprice + item.price*item.qnt;
  })
  return tprice;
}



addProduct = () =>{
  firebase
   .firestore()
   .collection('products')
   .add({
    title:'Washing machine',
    qnt:5,
    price:4500,
    img:''
   })
  .then((docRef) =>{
    console.log("product has been added ",docRef)
  })
  .catch((err) =>{
    console.log("Error ",err)
  })
}

  render(){
    const {products,Loding} = this.state
    return (
      <div className="App">
        <Navbar count={this.countProduct()}/>
        <div> <h1>Total : {this.getTotal()} $</h1></div>
        <Cart 
            products={products}
            ondecrement={this.decrement} 
            onincrement={this.increment} 
            ondelete={this.ondelete}/>
            {Loding && <h1>Loading ...</h1>}
            <button onClick={this.addProduct} style={{padding:20,fontSize:20,cursor:'pointer'}}>Add product</button>
      </div>
    );
  }
}

export default App;
