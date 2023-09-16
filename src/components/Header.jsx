import Nav from "./Nav"
import "./Header.css"
import img from "../assets/image.jpg"
const Header = ()=>{
    return(
        <>
         
         <div className="header">
  <div className="left-column">
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    <button>Reserve a table</button>
  </div>
  <div className="right-column">
    <img src={img} alt="Restaurant Image" />
  </div>
</div>
        </>
       

    )
}
export default Header