import serviceImg from "../Images/logo.jpg";
const Servicetwo = () => {
  return (
    <div className="service-parent " id="service">
       <div className="container Servicetwo text-center mb-5">
      <h2 className="mt-5">خدماتنا</h2>
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
          <a  href='https://api.whatsapp.com/send?phone=4915758088973' className=" mt-3 btn login">تواصل معنا الان</a>

        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Servicetwo;
