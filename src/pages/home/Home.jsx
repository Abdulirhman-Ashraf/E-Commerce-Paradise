import "./style.css";
import Banner from "../../Component/ecommerce/banner/banner";
import HomeSliders from "../../Component/common/swiper/swiperSliders/homeSliders/HomeSliders";
import { Container } from "react-bootstrap";

const Home = () => {


  return (
    <div className="home ">
      <Banner/>
      <Container className="m-auto">
            <h2 className="text-right py-3 ">Best Seller</h2>
      <HomeSliders filterType="minimumOrderQuantity" value={'45'}/>

      <h2 className="text-right py-3 ">Top rated</h2>
        <HomeSliders filterType="rating" value={'4.9'}/>
        <h2 className="text-right py-3 ">Featured deals</h2>
        <HomeSliders filterType="discountPercentage" value={10}/>
      </Container>
  
        

    </div>
  );
};

export default Home;
