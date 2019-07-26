import React, {Component} from "react"


export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            product: {
                img_url: "",
                product_name: "",
                price: 0
            }
        }

    }


nameChange(e) {
    this.setState({
        product_name: e})
 }

imgChange(e) {
    this.setState({img_url: e})}
        
priceChange(e) {this.setState({price: +e})}


clear() {
         this.setState({
        img_url: "",
        product_name: "",
        price: ""
    })
    this.input.value = ""
}
    render() {

        return(
        <div>       
            <img src="" alt=""/>
            <main>
                <div className="inputs">
                <h4>Image URL:</h4>
                <input id= "input" type="text" onChange={(e)=>{this.imgChange(e.target.value)}}/>
                <h4>Product Name:</h4>
                <input id= "input" type="text"onChange={(e)=>{this.nameChange(e.target.value)}}/>
                <h4>Price:</h4>
                <input id= "input" type="text"onChange={(e)=>{this.priceChange(e.target.value)}}/>
                </div>
                <div className="buttons">
                    <button onClick= {()=>this.props.add(this.state.product)}>Add</button>
                    <button onClick={()=>this.clear(this.state)}>Clear</button>
                </div>
            </main>
        </div>
    )
}
}
