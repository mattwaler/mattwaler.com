import Layout from "components/Layout";
import Hero from 'components/Hero'
import WorkListing from "sections/WorkListing";

const Work: NextPage = () => {
  return (
    <Layout meta={{ title: 'Work', description: '' }}>
      <>
        <Hero heading="Things I built." paragraph="A list of some of the web applications I've helped design, build, and deploy to the internet. Give them a peep!" />
        <WorkListing />
      </>
    </Layout>
  );
};

export default Work
