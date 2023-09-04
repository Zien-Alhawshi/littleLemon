import "./Test.css"
import img1 from "../assets/person1.jpg"
import img2 from "../assets/person2.jpg"
import img3 from "../assets/person3.jpg"
import img4 from "../assets/person4.jpg"
const Test = ()=>{
   return(
    <>
      <div>
       <h1 className="test-title">Testimonials</h1>
       </div>
    <section class="testimonials">
      
        <div class="testimonial-card">
            <div class="rating">
                ★★★★★
            </div>
            <img src={img1}alt="Testimonial 1" />
            <h3>Selena G.</h3>
            <p>"Really enjoyed the atmosphere."</p>
        </div>

        <div class="testimonial-card">
            <div class="rating">
                ★★★★★
            </div>
            <img src={img2} alt="Testimonial 2" />
            <h3>Brandon M.</h3>
            <p>"The greek salad was excellent!"</p>
        </div>

        <div class="testimonial-card">
            <div class="rating">
                ★★★★★
            </div>
            <img src={img3} alt="Testimonial 3" />
            <h3>Peter R.</h3>
            <p>"You have to try the Greek Salad!"</p>
        </div>
        <div class="testimonial-card">
            <div class="rating">
                ★★★★★
            </div>
            <img src={img4} alt="Testimonial 3" />
            <h3>Neha J.</h3>
            <p>"Awesome place peaceful atmosphere with delicious food"</p>
        </div>
    </section>
    </>
   
   )
}
export default Test