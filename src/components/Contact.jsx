import { Mail, Linkedin, Github, FileText, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations, opportunities, or just a friendly hello.
        </p>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-cards">
            <a href="mailto:vikashvarrajan19@gmail.com" className="contact-card">
              <div className="icon-wrapper">
                <Mail size={28} />
              </div>
              <h3>Email Me</h3>
              <p>vikashvarrajan19@gmail.com</p>
            </a>

            <a href="https://www.linkedin.com/in/vikashvar-rajan-816148204/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="icon-wrapper">
                <Linkedin size={28} />
              </div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </a>

            <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="icon-wrapper">
                <Github size={28} />
              </div>
              <h3>GitHub</h3>
              <p>View my repos</p>
            </a>

            <a href="future_plan_2.pdf" download className="contact-card highlight-card">
              <div className="icon-wrapper">
                <FileText size={28} />
              </div>
              <h3>Download CV</h3>
              <p>Detailed experience</p>
            </a>
          </div>

          {/* Simple Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:vikashvarrajan19@gmail.com'; }}>
              <h3>Send a Message</h3>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
