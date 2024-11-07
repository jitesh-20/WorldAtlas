const ContactComponent = () => {

    const handleFormSubmit = (formData) => {
        //console.log(formData.entries())     //It returns the iterator of the key-value pair from the formdata
        const formInputData = Object.fromEntries(formData.entries())   //It returns the converted data into objects
        console.log(formInputData);
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input type="text" required autoComplete="false" placeholder="Enter Your Name" name="usernanme" className="form-control" />
                    <input type="email" required autoComplete="false" placeholder="Enter Your Email" name="email" className="form-control" />
                    {/* <input type="text" required autoComplete="false" placeholder="Enter Your Name" name="usernanme" /> */}
                    <textarea className="form-control" rows="10" placeholder="Enter your Message" name="message" required autoComplete="off"></textarea>
                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>
    )
}

export default ContactComponent;