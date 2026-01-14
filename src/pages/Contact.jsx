// import PageBanner from "../components/PageBanner";

import ContactSection from "../Componect/ContactSection";
import PageBanner from "../Componect/PageBanner";

const Contact = () => {
  return (
    <>
      {/* CONTACT BANNER */}
      <PageBanner
        title="Contact Us"
        breadcrumb="Contact Us"
        bgImage="/images.jpg"
      />

      {/* CONTACT CONTENT */}
       <ContactSection />
   
    </>
  );
};


export default Contact;
