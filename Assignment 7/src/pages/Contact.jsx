const Contact = () => (
  <div className="container my-5">
    <h1 className="text-center">Contact Us</h1>
    
    <form className="row g-3 mt-5">
      <div className="col-md-6">
        <label htmlFor="inputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="inputName" placeholder="Your Name" />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="Your Email" />
      </div>

      <div className="col-12">
        <label htmlFor="inputFeedback" className="form-label">Feedback</label>
        <textarea className="form-control" id="inputFeedback" rows="4" placeholder="Your Feedback"></textarea>
      </div>

      <div className="col-md-6">
        <label htmlFor="inputLocation" className="form-label">Location</label>
        <input type="text" className="form-control" id="inputLocation" placeholder="Your Location" />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputNumber" className="form-label">Phone Number</label>
        <input type="tel" className="form-control" id="inputNumber" placeholder="Your Phone Number" />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">Contact Us</button>
      </div>
    </form>

    <h2 className="text-center mt-5">Our Location</h2>
    <div className="text-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16065.029211043352!2d78.3899895!3d17.4980302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f3fdf6bde9%3A0x752db86a6ab3be2a!2sInnomatics%20Research%20Labs!5e0!3m2!1sen!2sin!4v1698060134800!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Innomatics Research Labs Location"
      ></iframe>
    </div>
  </div>
);

export default Contact;
