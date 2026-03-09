import './Contact.css'
export default function Contact() {
    return (
        <div className="w-100 contactContainer text-center p-5">
            <h1>Contact</h1>
            <p>Feel free to reach out to me through email or social media!</p>
            <div className="d-flex justify-content-center gap-4 mt-4">
                <p>Ppikelis9@gmail.com</p>
                <a href="https://www.linkedin.com/in/paulius-pikelis-755a16381/">LinkedIn</a>
                <a href="">GitHub</a>
            </div>
        </div>
    );
}