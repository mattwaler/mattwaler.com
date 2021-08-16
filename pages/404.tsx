import Layout from "components/Layout";
import Hero from 'components/Hero'
import CodeblockCTA from "sections/ContactCTA";

const Custom404: NextPage = () => {
  return (
    <Layout meta={{ title: 'Page Not Found', description: '' }}>
      <>
        <Hero heading="You look lost." paragraph="Looks like you attempted to visit a page that either got removed or never existed initially. Let's get you back on track." />
        <CodeblockCTA />
      </>
    </Layout>
  );
};

export default Custom404
