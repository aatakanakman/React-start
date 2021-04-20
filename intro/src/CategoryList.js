import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  /*ESKİ VERSİYONLARDA
   App.js den atanan bir özelliği almak için constructor methodu içerisine, props(özellikler) verip,aşağıdaki işlemleri yapıyoruz.
  this referansı, Companente ulaşılır. CategoryList' e değil.
  constructor(props){
      super(props);
      state : {}
  }

  //!!Eski sürümlerde bu şekilde tanımlamalar yapılırken yeni güncellemeler ile birlikte, constructor a bağımlı değiliz.
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 1, categoryName: "Condiments" }
      ],
    };
  }
  */
  state = {
    categories: []
  };

    componentDidMount(){
      this.getCategories();
    }

  //Api den veri çekiyoruz.
  getCategories = () => {
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data => this.setState({categories : data}))
  }


  render() {
    return ( 
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
            {this.state.categories.map(category => (
                <ListGroupItem active = {category.categoryName === this.props.currentCategory?true:false} onClick = {()=>this.props.changeCategory(category)} key = {category.id}>{category.categoryName}</ListGroupItem>
            ))} 
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
