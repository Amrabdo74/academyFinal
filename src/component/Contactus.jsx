import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Homeform from "./Homeform";

const Contactus = () => {
  return (
    <section id="contact" className="mb-5">
      <div className="container">
        <h2 data-aos="fade-up">تواصل معنا </h2>
        <p data-aos="fade-up">
          بامكانك التواصل معنا من خلال وسائل الإتصال التالية.{" "}
        </p>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12">
            <div className="row justify-content-center">
              <div className="col-lg-3 info">
                <h3>
                  <FaPhone />
                </h3>
                <h4>إتصل بنا</h4>
                <p>
                  <a href="tel:+4915758088973">49-15758088973+</a>
                </p>
              </div>
              <div className="col-lg-3 info">
                <h3>
                  <FaWhatsapp />
                </h3>
                <h4>الدعم الفني</h4>
                <p>
                  <a
                    href="https://api.whatsapp.com/send?phone=4915758088973"
                    className="float-whatsApp"
                  >
                    49-15758088973+
                  </a>
                </p>
              </div>
              <div className="col-lg-3 info">
                <h3>
                  <MdOutlineMailOutline />
                </h3>
                <h4>راسلنا على</h4>
                <p>
                  <a href="mailto:alamin.manasa@gmail.com">alamin.manasa@gmail.com</a>
                </p>
              </div>
      {/* <Homeform/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
