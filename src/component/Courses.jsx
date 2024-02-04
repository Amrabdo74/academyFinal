import { TfiBlackboard } from "react-icons/tfi";
import { TfiDashboard } from "react-icons/tfi";
import { CiReceipt } from "react-icons/ci";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Courses = () => {
  return (
    <div>
      <div className="titel coures text-center pt-5  container" id="course">
        <h2 data-aos="fade-up">دورات شرعية وإجازات اعلى الاساند</h2>
        <p data-aos="fade-up">إحفظ القرآن الكريم وانت في مكانك</p>
        <div data-aos="fade-up" className="section-two  row text-center mt-5  ">
          <div className="content-text  col-sm-6 col-lg-3  ">
            <GiTeacher className="coures-icon" />
            <h6> أفضل المُعلمين</h6>
            <p>أحصل على إجازات معتمدة من الأكاديمية حال اتمامك للدورات</p>
          </div>
          <div className="content-text  col-sm-6 col-lg-3 ">
            <CiReceipt className="coures-icon" />
            <h6> إجازات اعلى الاساند</h6>
            <p>
              هنسهّلك كل حاجة وفريق عمل تاجر هيساهدك ازاي تسوّق منتجك بكل سهولة
            </p>
          </div>
          <div className="content-text  col-sm-6 col-lg-3 ">
            <MdOutlineWorkspacePremium className="coures-icon" />
            <h6> محتوى ذو جودة عالية</h6>
            <p>نقدم أفضل جودة للمحتوى التعليمي والشرعي</p>
          </div>
          <div className="content-text  col-sm-6 col-lg-3 ">
            <TfiBlackboard className="coures-icon" />
            <h6>تعلم وانت في مكانك </h6>
            <p>تصفح الدورات في أي مكان وفي أي وقت يناسبك</p>
          </div>
        </div>
        <a className="mt-4 btn login">سجل الان</a>
      </div>
    </div>
  );
};

export default Courses;
