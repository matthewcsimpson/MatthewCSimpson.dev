import { SectionHeader } from "@/components";

import "@/components/ContactSection/ContactSection.scss";

const ContactSectionText = {
  title: "Contact",
  description:
    "Looking for a Full Stack Developer?  Get in touch! Let's talk about what you need and hwo I can help.",
};

const ContactSection = () => {
  return (
    <div className="contactSection">
      <SectionHeader
        title={ContactSectionText.title}
        description={ContactSectionText.description}
      />
      <form
        className="contactSection__form"
        action="https://formspree.io/f/mjgeodrl"
        method="POST"
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="_replyto" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactSection;
