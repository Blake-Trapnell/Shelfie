import React, {Component} from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import axios from "axios";


export default class App extends Component {
  constructor() {
    super() 
    this.state = {
      inventory: []
    }
    this.addProduct = this.addProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }


  componentDidMount(){
    axios.get('/api/products').then(res=> {
      this.setState({inventory: res.data})
    }).catch((error)=>alert(error))
}

addProduct(body) {
  axios.get('/api/products').then(res=> {
    this.setState({inventory: res.data})
  }).catch((error)=>alert(error))
}

deleteProduct(id){
  console.log('hit')
  axios.delete(`/api/products:${id}`).then(res=> {
    this.setState({inventory: res.data})
  }).catch((error)=>alert(error))
}

  render() {
  return (
    <div className="App">
      <Form add = {this.addProduct}/>
      <Header/>
      <Product/>
      <Dashboard inventory= {this.state.inventory}
      delete= {this.deleteProduct}/>
    </div>
  );
}
}

