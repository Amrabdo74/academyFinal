import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import imgTost from "../Images/logo.jpg";
const Whyus = () => {
  return (
    <MDBContainer className="reviwe my-5 mb-5">
      <h2>لماذا تختار منصة الأمين </h2>
      <MDBCarousel showControls dark>
        <MDBCarouselItem className="active ">
          <MDBRow className="d-flex ">
            <MDBCol lg="9" className="Whyus-sections d-flex ">
              <div>
                <h5 className="mb-3">معلمين ومعلمات معتمدين: </h5>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  استفيدوا من خبرة معلمينا ومعلماتنا المعتمدين الذين يقدمون
                  دروًسا مخصصة لتعلم اللغة العربية وحفظ القرآن الكريم. يمكنكم
                  الوصول إليهم في أي وقت يناسبكم
                </p>
              </div>
              <img src={imgTost} alt="" style={{ width: "120px" }} />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>

        <MDBCarouselItem className="  ">
          <MDBRow className="d-flex   ">
          <MDBCol lg="9" className="Whyus-sections d-flex ">
              <div>
                <h5 className="mb-3">معلمين ومعلمات معتمدين: </h5>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  استفيدوا من خبرة معلمينا ومعلماتنا المعتمدين الذين يقدمون
                  دروًسا مخصصة لتعلم اللغة العربية وحفظ القرآن الكريم. يمكنكم
                  الوصول إليهم في أي وقت يناسبكم
                </p>
              </div>
              <img src={imgTost} alt="" style={{ width: "120px" }} />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>

        <MDBCarouselItem className="">
          <MDBRow className="d-flex ">
          <MDBCol lg="9" className="Whyus-sections d-flex ">
              <div>
                <h5 className="mb-3">معلمين ومعلمات معتمدين: </h5>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  استفيدوا من خبرة معلمينا ومعلماتنا المعتمدين الذين يقدمون
                  دروًسا مخصصة لتعلم اللغة العربية وحفظ القرآن الكريم. يمكنكم
                  الوصول إليهم في أي وقت يناسبكم
                </p>
              </div>
              <img src={imgTost} alt="" style={{ width: "120px" }} />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Whyus;
