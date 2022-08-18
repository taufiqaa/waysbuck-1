import menuData from "./menu-data"
import { useNavigate } from "react-router-dom";

export default function DrinkList() {

  const navigate = useNavigate()
  const sendToDetailProduct = (id) =>{
    navigate("/detail-product/" + id)
    }
  
  return (
    <section className="mx10">
        <h2 className="mt2 mb2-25 txt-red bold">Let's Order</h2>
        <ul className="drink-list">
            {menuData.map((data, index) => (
            <li key={index} className="bg-pink br10">
                <img className="br10" src={data?.pict} alt="drink" onClick={()=> sendToDetailProduct(data?.id)}/>
                <div className="mt0-75 px1 pb1">
                    <h6 className="line-clamp1 txt-red bold">{data?.menuTitle}</h6>
                    <p>Rp. {data?.price}</p>
                </div>
            </li>
            ))}
        </ul>
      </section>
  )
}
