import { IoIosArrowUp } from "react-icons/io";
import logo from "../Images/logo.png";
import { CiMobile1 } from "react-icons/ci";
import { FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className=" row py-4 d-flex flex-row-reverse align-items-center justify-content-center justify-content-md-between flex-wrap">
            <div className="col-md-3 col-sm-12 col-lg-3 copyright d-flex flex-column text-center justify-content-center align-items-center    pb-3 pb-md-0">
              <img
                src={logo}
                style={{ width: "50px", borderRadius: "50px" }}
                alt=""
              />
              <p className="mt-3">
                جميع الحقوق محفوظة gمنصة الأمين لتعليم القرآن © 2024
              </p>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3 col-md-3 copyright d-flex flex-column  text-center justify-content-center align-items-center    pb-3 pb-md-0">
              {/* <p className="mt-3">
              <CiLocationOn />
              الرياض، حي العزيزية طريق الملك عبدالله
            </p> */}
              <p className="mt-3">
                {/* <CiMobile1 />
                49-15758088973+ */}
              </p>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3 col-lg-3 d-flex flex-column  text-center justify-content-center align-items-center  pb-3 pb-md-0">
              <div className="footer-icons">
                <a href="https://www.facebook.com/Alamin.onlinePlatform/">
                  <FaFacebook />
                </a>
                <a href="https://api.whatsapp.com/send?phone=4915758088973">
                  <FaWhatsapp />
                </a>
                <a href="https://www.instagram.com/alamin.onlineplatform/">
                  <FaInstagram />
                </a>
              </div>
              <p>لمزيد من المتابعه</p>
            </div>
          </div>
        </div>
      </footer>
      <a className="go-top">
        <IoIosArrowUp />
      </a>
      <a className="left-phone" href="tel:+4915758088973">
        <FaPhone />
      </a>
      <a
        className="whats-app"
        href="https://api.whatsapp.com/send?phone=4915758088973"
      >
        <FaWhatsapp />
      </a>
      <a
        className="face-book"
        href="https://www.facebook.com/Alamin.onlinePlatform/"
      >
        <FaFacebook />
      </a>
    </>
  );
};

export default Footer;
