import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const title = 'About Me';

const AboutPage = () => {
    return (
        <Layout pageTitle={title}>
            <p>
                Hi there! I'm the proud creator of this site, which I built with
                Gatsby.
            </p>
        </Layout>
    );
};

export const Head = () => <Seo title={title} />;

export default AboutPage;
