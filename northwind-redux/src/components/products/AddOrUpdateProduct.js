import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {getCategories} from '../../redux/actions/categoryActions';
import {saveProduct} from '../../redux/actions/productActions';

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  //fonskiyonun proplarına bunları ekle anlamında kullanılıyor.
  ...props
}) {
  //State içindeki productu, set produkct ile set edebilirim demek. React Hooks
  const [product, setProduct] = useState({ ...props.product });

  useEffect(() => {
    if (state.categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });

},[props.product]);
    
    
    function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event){
      event.preventDefault();
      saveProduct(product).then(() => {
          history.pushState("/")
      })
  }
}

function mapStateToProps(state,ownProps) {
    
    

}

const mapDispatchToProps = {
    getCategories,saveProduct
}



export default connect(mapDispatchToProps)(AddOrUpdateProduct)