import Layout from "components/Layout";
import Hero from "components/Hero";
import ContactForm from "sections/ContactForm";

const Contact: NextPage = () => {
  return (
    <Layout
      meta={{
        title: "Contact",
        description: "Get in contact with Matt Waler.",
      }}
    >
      <Hero
        heading="Let's get in touch."
        paragraph="Fill out the contact form below and I promise I will reach out as fast as I can. Thank you in advance for contacting me!"
      />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
