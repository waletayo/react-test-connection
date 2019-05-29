import React, {Component} from 'react';
import axios from "axios";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            category: "",
            color: "",
            productImage: null
        }
    }

    fileChangedHandler = event => {
        this.setState({productImage: event.target.files[0]})
    };
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    uploadHandler = () => {
        console.log(this.state.productImage)
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.uploadHandler}>
                    <h3>Colorlib Contact Form</h3>
                    <h4>Contact us for custom quote</h4>
                    <fieldset>
                        <input placeholder="product name" value={this.state.name} onChange={this.onChange.bind(this)}
                               type="text" name="name" required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your price" value={this.state.price} onChange={this.onChange.bind(this)}
                               type="test" name="price" required/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="your color" value={this.state.color} onChange={this.onChange.bind(this)}
                               type="test" name="color" required/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="category" type="text" value={this.state.category}
                               onChange={this.onChange.bind(this)} name="category" required/>
                    </fieldset>

                    <fieldset>
                        <input type="file" value={this.state.productImage} onChange={this.onChange}
                               name="productImage" required/>
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Type your message here...." name="description"
                                  value={this.state.description}
                                  onChange={this.onchange}
                                  required> </textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" data-submit="...Sending">Submit</button>
                    </fieldset>

                </form>
            </div>
        )
    }
}

export default Product;