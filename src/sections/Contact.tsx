import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, AlertCircle, CheckCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { linkedInProfile, githubProfile } from "../constants";

const RATE_LIMIT_MS = 30000; 
const MAX_MESSAGE_LENGTH = 1000;
const MAX_NAME_LENGTH = 100;

const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, ""); // Remove event handlers
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "honeypot") {
      setForm({ ...form, [name]: value });
      return;
    }

    // Apply length limits
    let sanitizedValue = sanitizeInput(value);
    if (name === "name" && sanitizedValue.length > MAX_NAME_LENGTH) {
      sanitizedValue = sanitizedValue.substring(0, MAX_NAME_LENGTH);
    }
    if (name === "message" && sanitizedValue.length > MAX_MESSAGE_LENGTH) {
      sanitizedValue = sanitizedValue.substring(0, MAX_MESSAGE_LENGTH);
    }

    setForm({ ...form, [name]: sanitizedValue });

    // Clear any previous error messages when user starts typing
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const validateForm = (): boolean => {
    if (form.honeypot) {
      setErrorMessage("Bot detected. Please try again.");
      setSubmitStatus("error");
      return false;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      setSubmitStatus("error");
      return false;
    }

    if (!isValidEmail(form.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      setSubmitStatus("error");
      return false;
    }

    if (form.message.trim().length < 10) {
      setErrorMessage("Message must be at least 10 characters long.");
      setSubmitStatus("error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmission < RATE_LIMIT_MS) {
      const remainingTime = Math.ceil(
        (RATE_LIMIT_MS - (now - lastSubmission)) / 1000
      );
      setErrorMessage(
        `Please wait ${remainingTime} seconds before sending another message.`
      );
      setSubmitStatus("error");
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      if (!formRef.current) {
        throw new Error("Form reference not found");
      }

      // Check if EmailJS environment variables are available
      if (
        !import.meta.env.VITE_APP_EMAILJS_SERVICE_ID ||
        !import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID ||
        !import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error("Email service configuration is missing");
      }

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Success - reset form and update status
      setForm({ name: "", email: "", message: "", honeypot: "" });
      setSubmitStatus("success");
      setLastSubmission(now);

      // Clear success message after 5 seconds
      setTimeout(() => {
        if (submitStatus === "success") {
          setSubmitStatus("idle");
        }
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage(
        "Failed to send message. Please try again or contact me directly."
      );
      setSubmitStatus("error");
    } finally {
      setLoading(false);
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
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              style={{ position: "absolute", left: "-9999px", opacity: 0 }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label
                htmlFor="name"
                className="block text-white-100 font-semibold text-xl mb-2"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
                maxLength={MAX_NAME_LENGTH}
                className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md"
              />
              <p className="text-sm text-muted-foreground mt-1">
                {form.name.length}/{MAX_NAME_LENGTH} characters
              </p>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white-100 font-semibold text-xl mb-2"
              >
                Your Email *
              </label>
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
              <label
                htmlFor="message"
                className="block text-white-100 font-semibold text-xl mb-2"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message?"
                required
                rows={5}
                maxLength={MAX_MESSAGE_LENGTH}
                className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md resize-vertical"
              />
              <p className="text-sm text-muted-foreground mt-1">
                {form.message.length}/{MAX_MESSAGE_LENGTH} characters (minimum
                10)
              </p>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="flex items-center gap-2 p-4 bg-green-100 border border-green-300 rounded-md">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-green-700">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && errorMessage && (
              <div className="flex items-center gap-2 p-4 bg-red-100 border border-red-300 rounded-md">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-700">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || submitStatus === "success"}
              className={`${
                loading || submitStatus === "success"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">
                  {loading
                    ? "Sending..."
                    : submitStatus === "success"
                    ? "Message Sent!"
                    : "Send Message"}
                </p>
              </div>
            </button>

            <p className="text-sm text-muted-foreground">
              * Required fields. Your information will only be used to respond
              to your message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
