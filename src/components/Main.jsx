import Card from "./Card"
import "./Main.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2-.svg"
import img3 from "../assets/3.jpeg"
const Main = ()=>{
    return(
        <main>
         <div className="header-main">
  <div className="left-column">
    <h1>Specials</h1>
   
  </div>
  <div className="right-column">
  <button>Online Menu</button>
  </div>
  
</div>
  <div className="cards">
  <Card className="card" img={img1} name="Greek Salad" content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
  <Card className="card" img={img2} name="Bruschetta" content="Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables." />
  <Card className="card" img={img3} name="Lemon Cake" content = "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />

  {/* <Card />
  <Card /> */}
  </div>



        </main>
    )
}
export default Main