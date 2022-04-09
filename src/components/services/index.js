import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Card, CardDeck } from 'react-bootstrap';
import Amplify from 'aws-amplify';
import { getProducts } from '../../graphql/queries';
import config from '../../aws-exports';
Amplify.configure(config)

class Services extends Component {

    state = {
        products: []
    }

    componentDidMount = () => {
        this.getProducts()
    }
    
    getProducts = () => {
        API.graphql(graphqlOperation(getProducts))
        .then(data => this.setState({products: data.data.getProducts.products}))
    };

    render(){
        const { products } = this.state;
        console.log(products)
        return(
            <div>
                <CardDeck>
                {products.map(product => (
                    <Card>
                      <Card.Img variant='top' src={product.modifiedDate} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle>${product.price}</Card.Subtitle>
                        <Card.Text>
                            {product.category}
                        </Card.Text>
                        <Card.Link href="#/services">View Details</Card.Link>
                      </Card.Body>
                    </Card>
                ))}
                </CardDeck>
            </div>
        );
    }

}

export default Services;
