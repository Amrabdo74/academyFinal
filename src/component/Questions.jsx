const Questions = () => {
  return (
    <section id="questions" className="pt-5 pb-5">
      <div className="container">
        <h2 data-aos="fade-up">الأسئلة الشائعة </h2>
        <p data-aos="fade-up">إجابات عن أسئلة قد تهمك تخص منصة الأمين </p>
        <div className=" accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <p className="mb-0 d-flex align-items-center justify-content-center">
                  هل يوجد دورات مجانية؟{" "}
                </p>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  نعم يوجد لدينا دورات جماعية مجانية تتم بنظام مجموعات للنساء او
                  للرجال ويتم تحديدها مع اكتمال عدد المشتركين لامكانية ايصال
                  الافادة لاكبر عدد بطريقة عملية.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <p className="mb-0 d-flex align-items-center justify-content-center">
                  كيف يتم الدرس؟
                </p>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                يتم الدرس عبر منصة الإنترنت بواسطة معلمين محترفين، حيث يتم توفير موارد تعليمية متنوعة وجلسات تفاعلية.                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                <p className="mb-0 d-flex align-items-center justify-content-center">
                متى تكون مواعيد الدرس؟                </p>
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                يتم تحديد مواعيد الدرس وفقا للجداول زمنية يتم تنسيقها حسب اوقاتكم واوقات المدرس بيحث تكون الحصص اكثر مرونة في حال حصول اي ظرف طارئ.                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                <p className="mb-0 d-flex align-items-center justify-content-center">
                ماذا أحتاج للدرس؟                </p>
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                تحتاج إلى جهاز كمبيوتر مع اتصال إنترنت جيد ، بالإضافة إلى برنامج الدردشة والكاميرا للتفاعل مع المعلم.                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                <p className="mb-0 d-flex align-items-center justify-content-center">
                كيف يتم تحديد مستواي؟                </p>
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                يتم تحديد مستواك عند التسجيل في الحصة التجريبية المجانية من خلال اختبار تقييمي يقيس مهاراتك في اللغة، وبناءً على النتائج، سيتم تحديد المستوى المناسب لك                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseseven"
                aria-expanded="false"
                aria-controls="flush-collapseseven"
              >
                <p className="mb-0 d-flex align-items-center justify-content-center">
                هل الدورات فردية أم جماعية؟                </p>
              </button>
            </h2>
            <div
              id="flush-collapseseven"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                نحن نقدم دورات جماعية مجانية للمشتركين وأولياء الأمور. تشمل هذه الدورات برامج لتحسين التلاوة والفقه والعقيدة، بالإضافة إلى دروس حول السيرة النبوية الشريفة.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
