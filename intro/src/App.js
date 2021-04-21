import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col, Form } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router";
import NotFound from "./NotFound";
import CardList from "./CardList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  //Api den veri çekiyoruz.
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  removeFromCard = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart", 2);
  };

  addToCard = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart", 2);
  };

  render() {
    let productInfo = { title: "Product list" };
    let categoryınfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Navi
            removeFromCard={this.removeFromCard}
            cart={this.state.cart}
          ></Navi>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryınfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      addToCard={this.addToCard}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    ></ProductList>
                  )}
                ></Route>
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CardList
                      {...props}
                      cart={this.state.cart}
                      removeFromCard={this.removeFromCard}
                    ></CardList>
                  )}
                ></Route>
                <Route path="/form1" component={FormDemo1}></Route>
                <Route path="/form2" component={FormDemo2}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
