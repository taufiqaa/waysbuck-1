import bin from "../../assets/bin.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Header from "../molecules/header"
import React from "react"
import cartData from "../molecules/cart-data";

function Cart() {

  const [popUp, setPopUp] = React.useState(false);
  
  
  return (
    <>
    <Header />
    <div className="cart-section after-nav">
      <div className="cart-title">
        <h6>My Cart</h6>
      </div>
      <div className="cart-container">
        <div className="left-cart-container">
          <h6>Review Your Order</h6>
          <div className="line-cart">
            {cartData.map((data, index) =>(
            <div className="main-cart">
              <div className="picture-menu-cart">
                <img
                  className="picture-cartPaid"
                  src={data.pict}
                  alt="cartPaid"
                ></img>
              </div>
              <div className="data-cart">
                <div className="data-flavour-cart">
                  <div className="menu-title-cart">
                    <h6>{data.menuTitle}</h6>
                  </div>
                  <div className="data-price-cart">
                    <h6>Rp {data.price}</h6>
                  </div>
                </div>
                <div className="data-topping-cart">
                  <div>
                    <h6>
                      Topping <i>: {data.topping}</i>
                    </h6>
                  </div>
                  <div className="trash-cart">
                    <img src={bin} alt="bin"/>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="right-cart-container">
          <div className="line-cart">
            <div className="data-payment">
              <div className="detail-payment-cart">
                <div className="subTotal-title-cart">
                  <h6>Sub Total</h6>
                </div>
                <div className="subTotal-payment-cart">
                  <h6>Rp 33.000</h6>
                </div>
              </div>
              <div className="quantity-title-cart">
                <div>
                  <h6>Quantity</h6>
                </div>
                <div className="quantity-cart">
                  <h6>2</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="total-cart-detail">
            <div className="total-detail txt-red">
              <div>
                <h6>Total</h6>
              </div>
              <div>
                <h6>Rp 66.000</h6>
              </div>
            </div>
            <Button variant="danger" className="add-cart" onClick={()=> setPopUp(true)}>
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
    {popUp && 
      <section className="modal fixed z-index-3 w100 h100 flex jc-center ai-center"
      onClick={ () => setPopUp(false) }
      >
    <div className="notification-background">
      <h5>Thank you for ordering in us, please wait to verify your order</h5>
    </div>
      </section>
    }
    </>
  );
}

export default Cart;
