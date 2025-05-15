import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { linkedInProfile, githubProfile } from "../constants";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <div className="w-full grid grid-cols-5 gap-8">
          <div className="col-span-2 border-3 rounded-sm p-10 py-15 space-y-4">
            <h1 className="text-2xl">Get in Touch</h1>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <p>micheal.j.lynch@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <p>Toronto, ON</p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-md mb-3 text-muted-foreground">
                Connect with me:
              </p>
              <div className="flex gap-5">
                <a
                  href={linkedInProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href={githubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div
            id="contact-form"
            className="col-span-3 border-3 rounded-md p-10"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-7"
            >
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Your Message</label>
                <input
                  type="message"
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's your message?"
                  required
                />
              </div>

              <button type="submit">
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">
                    {loading ? "Sending..." : "Send Message"}
                  </p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
