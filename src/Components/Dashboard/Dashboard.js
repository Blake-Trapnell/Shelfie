import React, {Component} from 'react'
import "./Dashboard.css"




export default class Dashboard extends Component {


    render() {
        console.log(this.props)
        return(
        <div>
            {this.props.inventory.length > 0 ? this.props.inventory.map(el=>(
                <div>
                    <img src={el.img_url} alt=""/>
                <h3>{el.product_name}</h3>
                <h3>{el.price}</h3>
                <button onClick={()=>{this.props.delete(el.product_id)}}>Sell</button>
                </div>)): <h1>Loading</h1>}
        </div>
    )
}
}

