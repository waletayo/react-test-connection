import React, {Component} from "react";
import axios from "axios";

class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            description: "",
            color: "",
            category: ''

        }
    }

    handleFile(e) {
        let productImage = e.target.files[0];
        this.setState({productImage: productImage})
    }


    componentDidMount() {
        axios.get("/api/v1/getAll")
            .then(json => this.setState({state: json.data, done: true}))
    }


    render() {

        if (!this.state.done) {
            return (
                <div>
                    product Loading
                </div>
            )
        } else {
            return (
                <div className="card">
                    <img src={this.state.productImage} alt="Denim"/>
                    <h1>{this.state.name} </h1>
                    <p className="price">{this.state.price}</p>
                    <p>{this.state.description}</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
            )
        }


    }
}

export default ProductView;