import sliderImge1 from '../Images/slider1.jpg'
import sliderImge2 from '../Images/slider2.jpg'
import sliderImge3 from '../Images/slider3.jpg'
const Slider = () => {
  return (
    <div className="header">
         <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={sliderImge1}
            className="d-block w-100"
            alt="..."
          />
            
     
        </div>
        <div className="carousel-item">
          <img
            src={sliderImge2}
            className="d-block w-100"
            alt="..."
          />
   
        </div>
        <div className="carousel-item">
          <img
            src={sliderImge3}
            className="d-block w-100"
            alt="..."
          />
  
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};

export default Slider;
