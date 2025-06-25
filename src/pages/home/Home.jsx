// AOS
import "aos/dist/aos.css";
import aos from "aos";
// bootstrap
import { Container } from "react-bootstrap";
// react
import { useEffect } from "react";
// style
import "./style.css";

import Banner from "../../Component/ecommerce/banner/banner";
import HomeSliders from "../../Component/common/swiper/swiperSliders/homeSliders/HomeSliders";
import Footer from "../../Component/common/footer/Footer";
const Home = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
    setTimeout(() => {
      aos.refresh();
    }, 500);
  }, []);
  return (
    <div className="home ">
      <a href="#top">
        <Banner />
      </a>
      <Container className="m-auto">
        <div className="row">
          <div
            className="col-12 col-lg-5 firstSection div1"
            data-aos="fade-right"
          >
            <div>
              <h3>Best sellers</h3>
              <a href="#Seller">
                <button className="btn btn-light">Shop now</button>
              </a>
            </div>
            <div className="btnImage"></div>
          </div>
          <div
            className="col-12 col-lg-5 firstSection div2"
            data-aos="fade-left"
          >
            <div>
              <h3>Featured deals</h3>
              <a href="#deals">
                <button className="btn btn-light">Shop now</button>
              </a>
            </div>
            <div className="btnImage2"></div>
          </div>
        </div>
        <div data-aos="fade-up" id="top">
          <h2 className="text-right py-3 homeTitle">
            <hr />
            Top rated
            <hr />
          </h2>

          <HomeSliders filterType="rating" value={"4.9"} />
        </div>
        <div data-aos="fade-up" id="Seller">
          <h2 className="text-right py-3 homeTitle ">
            <hr />
            Best Seller
            <hr />
          </h2>
          <HomeSliders filterType="minimumOrderQuantity" value={"45"} />
        </div>
        <div  id="deals" data-aos="fade-up">
          <h2 className="text-right py-3 homeTitle" >
            <hr />
            Featured deals
            <hr />
          </h2>
          <HomeSliders filterType="discountPercentage" value={10} />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
