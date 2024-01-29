import serviceImg from "../Images/logo.jpg";
const Servicetwo = () => {
  return (
    <div className="container Servicetwo text-center mb-5">
      <h2>خدماتنا</h2>
      <p>الخدمات المتاحة لمنصة الأمين</p>
      <div className=" mt-5 row justify-content-between ">
        <div className="col-md-5 text-center service-text  ">
          <div className=" mb-3 bg-black ">تحفيظ القرآن الكريم </div>
          <div className=" mb-3 bg-black ">تصحيح تالوة القرىن الكريم</div>
          <div className=" mb-3 bg-black ">تعليم اللغة العربية</div>
          <div className=" mb-3 bg-black ">دروس علوم الشريعة و الفقه</div>
          <div className=" mb-3 bg-black ">دروس السيرة النبوية العطرة</div>
          <div className=" mb-3 bg-black ">إجازات قرآنية بكل الروايات</div>
          <div className=" mb-3 bg-black ">نور البيان</div>
        </div>
        <div className="col-md-6">
          <img src={serviceImg} alt="" />
          <a  href='#Form' className="btn contact-btn">تواصل معنا الان</a>

        </div>
      </div>
    </div>
  );
};

export default Servicetwo;
