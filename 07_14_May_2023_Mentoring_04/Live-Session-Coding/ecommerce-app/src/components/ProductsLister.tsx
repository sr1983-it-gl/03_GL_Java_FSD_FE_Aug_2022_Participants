
import {Row, Col, Card, Button} from "react-bootstrap";
import {products, ProductModel} from "../data/products"

type ProductsListerType = {

  addToCart : (product : ProductModel) => void;
  removeFromCart : (product : ProductModel) => void;

}

const ProductsLister = (productsListerType : ProductsListerType) => {

  return (
    <div style={{backgroundColor: 'lightblue'}}>
      
        <h2>Products</h2>
        <hr/>

        <Row>

        {
            products.map( (product) => 

              (

                <Col key={product.id} className="my-2">

                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>$ {product.price}</Card.Text>

                      <Button variant="primary" onClick={
                        () => {
                          productsListerType.addToCart(product)
                        }
                      }>Add to Cart</Button>

                      <Button variant="primary" onClick={
                        () => {
                          productsListerType.removeFromCart(product)
                        }
                      }>Remove from Cart</Button>

                    </Card.Body>
                  </Card>

                </Col>

              )
            )
        }

        </Row>

    </div>
  )
}

export {ProductsLister}