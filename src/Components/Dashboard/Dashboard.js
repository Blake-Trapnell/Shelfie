import React, {Component} from 'react'
import "./Dashboard.css"
// import axios from "axios";
// const instance = axios.create({baseURL: 'http://localhost:9000'})



export default class Dashboard extends Component {


    render() {
        return(
        <div>
            {this.props.inventory.map(el=>(
                <div>
                    <img src={el.img_url} alt=""/>
                <h3>{el.product_name}</h3>
                <h3>{el.price}</h3>
                </div>))}
        </div>
    )
}
}

