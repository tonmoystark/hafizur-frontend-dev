import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // Two-way binding handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );

      setSuccess(true);
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email failed:", error);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Auto hide success message
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <section
      id="contact"
      className="py-32 bg-[#081422] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-4xl mb-16 text-center font-semibold tracking-tight"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT — FORM */}
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                required
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 outline-none transition"
              />

              <input
                type="email"
                name="user_email"
                required
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 outline-none transition"
              />

              <textarea
                rows={5}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 outline-none transition"
              />

              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-emerald-500 text-black font-medium rounded-md hover:bg-emerald-400 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-emerald-400 text-sm mt-4"
                >
                  Message sent successfully 🚀
                </motion.p>
              )}

              {errorMsg && (
                <p className="text-red-400 text-sm mt-4">
                  {errorMsg}
                </p>
              )}
            </form>
          </motion.div>

          {/* RIGHT — INFO */}
          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            <a
              href="mailto:tonmoy.a009@gmail.com"
              className="flex items-center gap-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-emerald-400 transition"
            >
              <FiMail className="text-emerald-400" />
              tonmoy.a009@gmail.com
            </a>

            <div className="flex items-center gap-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
              <FiPhone className="text-emerald-400" />
              +880 1700-962184
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/tonmoystark"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/md-hafizur-rahman-69b723258/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;