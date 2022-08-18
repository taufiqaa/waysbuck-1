import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import toppingData from "../molecules/topping-data";
import menuData from "../molecules/menu-data";
import Header from "../molecules/header";
import {useParams} from "react-router-dom";
import { useState } from "react";

function DetailProduct() {

  const [checkedTopping, setCheckedTopping] = useState(
    new Array(toppingData.length).fill(false)
  );
  console.log(checkedTopping);
  
  const [toppingPriceTotal, setToppingPriceTotal] = useState(0);
  const [addCart, setAddCart] = useState(0);
  console.log("Add Cart" + addCart);
  
  const params = useParams();
  const [DetailMenu] = useState(menuData);
  const index = params.id-1;
  console.log("nilai index " + index);

  const getData = DetailMenu[index];


   const handleOnChange = (position) => {
    const updatedCheckedTopping = checkedTopping.map((data, index) =>
    index === position ? !data:data
    );
    setCheckedTopping(updatedCheckedTopping);

    const totalPrice = updatedCheckedTopping.reduce(
      (addition, currentState, index) =>{
        if (currentState === true){
          return addition + toppingData[index].price;
        } 
        return addition;
      },
      0
    );  
    setToppingPriceTotal(totalPrice)
  };


  return (
    <>
    <Header addCart={addCart} />
    <div className="detail-product-section after-nav">
      <div className="picture-detail-menu pt1"> 
        <img className="picture-detail" src={getData.pict} alt="drink"></img>
      </div>
      <div className="right-detail-product">
        <div className="flavour-price-detail">
          <div className="flavour-detail">
            <h6>{getData.menuTitle} </h6>
          </div>
          <div className="price-detail">
            <h6>Rp {getData.price}</h6>
          </div>
        </div>
        <div className="title-topping-detail">
          <div className="title-detail">
            <h6>Topping</h6>
          </div>
          <div className="topping-detail-container">
            {toppingData.map((data, index) => (
              <form>
              <div className="topping-detail">
                <div className="picture-topping-detail">
                  <input type="checkbox" className="toppingCheckboxs" id={`checkmark${index}`} checked={checkedTopping[index]} onChange={()=>handleOnChange(index)} />
                  <label htmlFor ={`checkmark${index}`}>
                  <img className="picture-topping" src={data.pict} alt="" />
                  </label>
                </div>
                <div className="topping-variant-detail">
                  <h6>{data.menuTitle}</h6>
                </div>
              </div>
              </form>
            ))}
          </div>
        </div>
        <div className="total-cart-detail">
          <div className="total-detail">
            <div>
              <h6>Total</h6>
            </div>
            <div>
              <h6>Rp {getData.price+toppingPriceTotal}</h6>
            </div>
          </div>
          <Button variant="danger" className="add-cart" onClick={()=>{setAddCart(addCart+1); setCheckedTopping (new Array(toppingData.length).fill(false)); setToppingPriceTotal(0) }}>
            Add Cart
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}

export default DetailProduct;
