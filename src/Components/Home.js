import React from 'react';
import ca1 from '../Images/ca1.jpg'
import ca2 from '../Images/ca2.jpg'
import ca3 from '../Images/ca3.jpg'
import './Home.css'
import {Carousel} from 'react-bootstrap'

const Home = () => {
    return(
           
                <div className="fullpg vh-100">
                <div>
                    
                <div className='d-flex justify-content-center mt-2'>
                   <Carousel className='caros'>
                       <Carousel.Item className='car1 text-center'>
                         <img src={ca1} alt='' className='imgcar'></img>
                        <br/><br/><br/>
                        <Carousel.Caption className='car1 text-center'>
                         <h5>Roti,Paneer Butter masala </h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car2 text-center'>
            <img src={ca2} alt='' className='imgcar'></img>
              <br/><br/><br/>
              <Carousel.Caption className='car1 text-center'>
                         <h5>PIZZA</h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
            <img src={ca3} alt='' className='imgcar'></img>
              <br/>
              <Carousel.Caption className='car1 text-center'>
                         <h5>VADA SAMBAR</h5>
            </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
                </div>
                <hr/>
<div> <h2 class="txt1 text-center"> Some Top Picks in Mangalore And Udupi City !!</h2><br/></div>
                <div>
                <div class="container">
    <div class="row mt-3 px-2">
    <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://th.bing.com/th/id/ALs4eR62d8TAPTQ480x360?&rs=1&pid=ImgDet" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>The Ocean Pearl</h4><br/></div>
                    <p calss="card-content">The Ocean Pearl hotel at Mangalore combines classic luxury, modern indulgences and exquisite comfort set in a spectacular backdrop that includes a unique combination of breath-taking views combined with plush spaces and facilities, excellent service and a promise of enjoying Mangalore like never before....</p>
                    <button class="btn btn-outline-success btn-sm" ><a href="https://www.makemytrip.com/hotels/the_ocean_pearl-details-mangalore.html" class="bb">Explore Now </a> </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-primary-subtle">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/141385969.jpg?k=8a8b77c5b1e350c4710ba97efd353b8cfdd16ff13166d5a5cd38535aac3db666&o=" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Deepa Comforts</h4><br/></div>
                    <p calss="card-content">The  Mangalore presents an environment of an oasis of serenity, where each individual is given service with unobtrusive consideration and care. The commitment to impeccable service expresses itself in the meticulous attention to detail in the co-ordination of everything from business appointments to travel arrangements... </p>
                    <button class="btn btn-outline-success btn-sm"> <a href="https://www.hoteldeepacomforts.com/ " class="bb">Explore Now </a>   </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://i0.wp.com/www.mangalorean.com/wp-content/uploads/2021/09/ideal-icecream-new-outlet-1.jpg?fit=800%2C600&ssl=1" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>PUBBAS IDEAL CAFFE </h4><br/></div>
                    <p calss="card-content">Pabbas is an ice cream parlour in the city of Mangalore, Karnataka, India. It is an outlet of the parent brand Ideal Ice Cream.
                    The flavours of ice cream at Pabbas include the Gadbad, Pabbas Special and Tiramisu. The restaurant provides dine-in and takeaway services.Pabbas include the GadbadPabbas include the GadbadPabbas include the Gadbad </p>
                    <button class="btn btn-outline-success btn-sm" ><a href=" https://www.pabbasidealcafe.in/welcome" class="bb">Explore Now</a> </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://daijiworld.ap-south-1.linodeobjects.com/iWeb/daijiworld/images3/rayan_150821_Food1.jpg" alt=" " height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Swadisht    multicuisine  </h4><br/></div>
                    <p calss="card-content">Welcome to Swadhist Restaurant, a place where culinary dreams come true and flavors dance on your taste buds. Situated in the heart of a bustling city, Swadhist offers a haven for food enthusiasts seeking an exceptional dining experience that transcends the ordinary.</p>
                    <button class="btn btn-outline-success btn-sm" ><a href="https://www.justdial.com/Mangalore/Hotel-Swadisht-Near-Omega-Hospital-Kankanady/0824PX824-X824-190507201832-F9H8_BZDET " class="bb">Explore Now </a></button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://content.jdmagicbox.com/comp/udupi/x9/0820px820.x820.170901083827.b3x9/catalogue/new-shanti-sagar-restaurant-vst-road-udupi-restaurants-a0hft6oi0d.jpg?clr=#453921"alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Shanthi Sagar Restaurant </h4><br/></div>
                    <p calss="card-content">Step into the realm of gastronomic delight and serenity at Shanti Sagar Restaurant. Nestled in a quiet corner of the city, Shanti Sagar offers a sanctuary for those seeking not only exceptional cuisine but also a tranquil dining experience that rejuvenates the senses.
                    .</p>
                    <button class="btn btn-outline-success btn-sm" > <a href="https://newshanthisagar.in/ " class="bb">Explore Now </a></button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="data:image/jpeg;base64,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 "alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Hotel WOODLANDS </h4><br/></div>
                    <p calss="card-content">The New Woodlands Hotel was founded by K. Krishna Rao, who was born to a Hindu priest in Kadandale near Mangalore on 21 October 1898. Poverty in the family forced Krishna Rao to seek a job at an early age. He worked for some time in one of the mathas in Udupi and for some time as a "helper" in a hotel near Kadandale. In the early 1920s, he moved to Chennai at the advice of his brother-in-law..</p>
                    <button class="btn btn-outline-success btn-sm" ><a href="https://www.tripadvisor.in/Restaurant_Review-g737164-d5915228-Reviews-Woodlands_Restaurant-Udupi_Udupi_District_Karnataka.html " class="bb">Explore Now </a></button>
                </div>
            </div>
        </div>
        
    </div>
</div>
</div>
<br/>


    
    <script src="js/bootstrap.bundle.js"></script>
</div>
          
    );
}
export default Home;