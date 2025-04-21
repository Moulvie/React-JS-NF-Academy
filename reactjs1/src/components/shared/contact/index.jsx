export default function Contacts(){
    return(
        <>
               
        <section id="contact" className="my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form className="w-75 mx-auto">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="John Doe" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>

  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Book</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Team</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact</a></li>
    </ul>
    <p className="text-center text-body-secondary">&copy; RIZKY MAULANA</p>
  </footer>

        </>
    )
}