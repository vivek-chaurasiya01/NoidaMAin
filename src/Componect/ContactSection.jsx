import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const type = entry.target.dataset.type;
            if (type === 'left') setVisibleLeft(true);
            if (type === 'right') setVisibleRight(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  // INPUT CHANGE HANDLE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("📩 Contact Form Data:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="w-full bg-[#f8fbff] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#d2aa73] text-white text-xs font-semibold px-5 py-1 rounded-full mb-4 tracking-widest">
            CONTACT US
          </span>

          <h2 className="text-4xl font-bold text-[#0f172a]">
            We Love to hear <span className="text-[#d2aa73]">From You</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            If you have any queries on our product of services, feel free to
            contact us or drop your info in the form below. Our team will get in
            touch with you shortly !
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT INFO BOX */}
          <div
            ref={leftRef}
            data-type="left"
            className={`border-2 border-black p-10 bg-transparent transition-all duration-700 ${
              visibleLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="text-center mb-14">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-dotted border-[#d2aa73] flex items-center justify-center">
                <FontAwesomeIcon icon={faLocationCrosshairs} size="2x" color="red" />
              </div>
              <h4 className="text-lg font-semibold text-[#d2aa73] mb-3">
                Registered Address
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay,
                Gros-Islet, Saint Lucia. Registration Number: 2025-00811
              </p>
            </div>

            <div className="text-center mb-14">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-dotted border-[#d2aa73] flex items-center justify-center">
                <FontAwesomeIcon icon={faLocationCrosshairs} size="2x" color="red" />
              </div>
              <h4 className="text-lg font-semibold text-[#d2aa73] mb-3">
                Physical Address
              </h4>
              <p className="text-sm text-gray-700">
                2 David Gamrekeli St., Office No. 2, 0160 Tbilisi, Georgia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-3 bg-black text-white px-6 py-3">
                📞 <span className="text-sm">+971503041360</span>
              </div>
              <div className="flex items-center gap-3 bg-black text-white px-6 py-3">
                ✉️ <span className="text-sm">support@nebulafinserv.com</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM BOX */}
          <div
            ref={rightRef}
            data-type="right"
            className={`border-2 border-black p-10 bg-transparent transition-all duration-700 ${
              visibleRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#d2aa73]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#d2aa73]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="number"
                  placeholder="Your Number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#d2aa73]"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#d2aa73]"
                />
              </div>

              <textarea
                rows="4"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#d2aa73]"
              ></textarea>

              {/* CAPTCHA PLACEHOLDER */}
    <div className="flex items-center gap-3 border border-gray-300 px-4 py-4 text-sm text-gray-600 bg-gray-50 rounded shadow-sm w-fit">
  <input type="checkbox" className="w-4 h-4" />
  <span>I'm not a robot</span>
</div>

              {/* SUBMIT BUTTON */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-[#d2aa73] hover:bg-[#c49a5c] text-white px-10 py-3 font-semibold transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
