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
        bgImage="https://images.unsplash.com/photo-1745509267945-b25cbb4d50ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhZGluZyUyMHdoaXRlJTIwY2hhcnR8ZW58MHx8MHx8fDA%3D"
      />

      {/* CONTACT CONTENT */}
      <ContactSection />
    </>
  );
};

export default Contact;
