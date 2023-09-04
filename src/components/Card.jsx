import "./Card.css"

const Card = ({img, name, content})=>{
    console.log(img)
    return(
        <>
         <div className="card">
         
           <img src={img} />
            <h2>{name}</h2>
            <p>{content}</p>
            <a href="#">Order Delivery</a>
          
    </div>
    </>
    )
}
export default Card