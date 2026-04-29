import ContactForm from "./ContactForm";

const Contact = () =>{
    return(
        <div className="inner_page">
            <div className="container">
                <h2>Contact Us</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;