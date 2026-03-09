import './Contact.css'
export default function Contact() {
    return (
        <div className="w-100 contactContainer text-center p-5">
            <h1>Contact</h1>
            <p>Feel free to reach out to me through email or social media!</p>
            <div className="d-flex flex-column justify-content-center gap-4 mt-4">
                <p>Email: <a href="mailto:ppikelis9@gmail.com">Ppikelis9@gmail.com</a></p>
                <a className='urlLinks fs-5' href="https://www.linkedin.com/in/paulius-pikelis-755a16381/">LinkedIn</a>
                <a className='urlLinks fs-5' href="https://github.com/ppikelis99?tab=repositories">GitHub</a>
            </div>
        </div>
    );
}