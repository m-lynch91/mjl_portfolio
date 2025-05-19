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
    <section id="contact" className="w-full min-h-screen py-20 lg:h-screen">
      <div className="flex flex-col max-w-[1240px] w-screen m-auto md:grid grid-cols-2 p-5 gap-5">
        {/** contact information */}
        <div className="border-3 rounded-sm p-10 space-y-5">
          <h1 className="text-4xl">Get in Touch</h1>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <p className="text-xl">micheal.j.lynch@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="text-xl">Toronto, ON</p>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xl mb-3 text-muted-foreground">
              Connect with me:
            </p>
            <div className="flex gap-5">
              <a
                href={linkedInProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <FaLinkedin className="h-10 w-10 hover:scale-120 transition-transform" />
              </a>
              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <FaGithub className="h-10 w-10 hover:scale-120 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/** contact form */}
        <div id="contact-form" className="border-3 rounded-md p-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7"
          >
            <div>
              <label htmlFor="name" className="block text-white-100 font-semibold text-xl mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
                className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white-100 font-semibold text-xl mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                required
                className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white-100 font-semibold text-xl mb-2">Your Message</label>
              <input
                type="message"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message?"
                required
                className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md"
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
    </section>
  );
};

export default Contact;
