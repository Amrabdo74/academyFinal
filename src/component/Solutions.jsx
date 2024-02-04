import logo from "../Images/logo.jpg";
const Solutions = () => {
  return (
    <div className=" Solutions text-center">
      <h2>مختلف الحلول تناسب جميع اإلحتياجات</h2>
      <div className="container mt-5">
        <div className="row justify-content-center p-3  ">
          <div className="card  col-lg-4 col-md-4 m-4  ">
            <img className=" w-25  " src={logo} alt="Card image cap" />
            <div className="card-body">
              <h6 className="card-text">
                حصة تجريبية مجانية
                <hr></hr>
             يمكنك حجز حصتك الأولى مجانا لتقييم المعلم وطريقتنا الخاصه بتدريس قبل الاشتراك بالمنصه
              </h6>
            </div>
          </div>
          <div className="card  col-lg-4 col-md-4 m-4  ">
            <img className=" w-25  " src={logo} alt="Card image cap" />
            <div className="card-body">
              <h6 className="card-text">
اقسام خاصة رجال، نساء، اطفال
                <hr></hr>
معلمين ومعلمات متخصصون لكل متعلم، متعلمه وطفل كلٌ على حدة
              </h6>
            </div>
          </div>
          <div className="card  col-lg-4 col-md-4 m-4  ">
            <img className=" w-25  " src={logo} alt="Card image cap" />
            <div className="card-body">
              <h6 className="card-text">
                حصص فردية مكثفة
                <hr></hr>
                نعمل بنظام الحصص الفردية لكل متعلم ، و التي تضمن أعلى معدل تركيز
                ، و أعلى جودة تعّلم
              </h6>
            </div>
          </div>
          <div className="card  col-lg-4 col-md-4 m-4  ">
            <img className=" w-25  " src={logo} alt="Card image cap" />
            <div className="card-body">
              <h6 className="card-text">
                مرونة عالية بتحديد موعد الحصص
                <hr></hr>
                يمكنك تحديد موعد الحصص الخاصة بك مع معلمك الخاص بالمنصة ، بما
                يتناسب مع جدولك اليومي
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
