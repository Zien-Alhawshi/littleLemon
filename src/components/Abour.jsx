import "./About.css"
import img1 from "../assets/11.jpg"
import img2 from "../assets/12.jpg"
const About = ()=>{
    return(
        <div class="flex-container">
        <div class="flex-item-1">
         
            <h1>Little Lemon</h1>
            <h5>Chicago</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
        </div>
        <div class="flex-item-2">
            <img src={img1} alt="Image 1" class="image" />
            <img src={img2} alt="Image 2" class="image" />
        </div>
    </div>
    )
}
export default About