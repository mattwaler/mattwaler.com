import Hero from 'sections/HomeHero'
import Layout from "components/Layout";
import Skills from 'sections/Skills'
import ContactCTA from "sections/ContactCTA";

const Home: NextPage = () => {
  return (
    <Layout meta={{ title: 'Home', description: '' }}>
      <>
        <Hero />
        <Skills />
        <ContactCTA />
      </>
    </Layout>
  );
};

export default Home;
