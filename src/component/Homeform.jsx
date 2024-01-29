const Homeform = () => {
    return (
        <div className="container  mt-2 " id="Form">
            <form >
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">ادخل الايميل </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">تعليقك </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <input className="btn btn-primary" value="أرسال" type="submit" name="" id="" />
            </form>
            </div>
    )

}
export default Homeform;