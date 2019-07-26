import React, {Component} from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import axios from "axios";
// const instance = axios.create({baseURL: 'https://localhost:9000'})

export default class App extends Component {
  constructor() {
    super() 
    this.state = {
      inventory: [
        //{
      //   product_id: 1,
      //   img_url: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
      //   product_name: "Shoes",
      //   price: 90
      // },
      // {
      //   product_id: 2,
      //   img_url: "https://dimg.dillards.com/is/image/DillardsZoom/zoom/perry-ellis-big--tall-herringbone-flat-front-pants/04137298_zi_light_beige.jpg",
      //   product_name: "Pants",
      //   price: 150
      // },
      // {
      //   product_id: 3,
      //   img_url: "https://images.josbank.com/is/image/JosBank/53WN_72_TRAVELER_DARK_BLUE_MAIN",
      //   product_name: "Shirt",
      //   price: 50
      // },
      // {
      //   product_id: 4,
      //   img_url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1543611444-theory-1543611433.jpg",
      //   product_name: "Jacket",
      //   price: 200
      // }
    ]
    }
  }

  componentDidMount(){
    axios.get("/api/products").then(res=> {
      console.log(res.data)
      this.setState({inventory: res.data})
    }).catch((error)=>alert(error))
}

  render() {

  return (
    <div className="App">
      <Header/>
      <Product/>
      <Dashboard inventory= {this.state.inventory}/>
      <Form/>
    </div>
  );
}
}

