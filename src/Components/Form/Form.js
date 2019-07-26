import React, {Component} from "react"



export default class Form extends Component {



    render() {
        return(
        <div>       
            <h3>Form</h3>
            <img src="" alt=""/>
            <main>
                <div className="inputs">
                <h4>Image URL:</h4>
                <input type="text"/>
                <h4>Product Name:</h4>
                <input type="text"/>
                <h4>Price:</h4>
                <input type="text"/>
                </div>
                <div className="buttons">
                    <button>Add</button>
                    <button>Cancel</button>
                </div>
            </main>
        </div>
    )
}
}
