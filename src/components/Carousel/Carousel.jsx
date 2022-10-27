import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./Carousel.css";

function CarouselBlock() {
  return (
    <div id="carousel-container">
      <div id="carousel-settings">
        <Carousel fade>
          <Carousel.Item>
            <Image
              rounded="true"
              className="d-block w-100"
              src="https://i.imgur.com/9RkvEsL.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              rounded="true"
              className="d-block w-100"
              src="https://i.imgur.com/n3RT8Vp.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              rounded="true"
              className="d-block w-100"
              src="https://i.imgur.com/YQaMH3T.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselBlock;
