import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";


class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    );
  }

  renderSummary(){
      return(
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Sepetiniz
          </DropdownToggle>
          <DropdownMenu right>
            {
                this.props.cart.map(cartItem => (
                    <DropdownItem key={cartItem.product.id}>{cartItem.product.productName}
                    <Badge color="success">{cartItem.quantity}</Badge>
                    </DropdownItem>
                ))
            }
            <DropdownItem divider />
            <DropdownItem>Sepete Git</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )
  }

  render() {
    return (
      <div>
          {
              this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
//State i proplara aktarıtoruz.
export default connect(mapStateToProps)(CartSummary);
