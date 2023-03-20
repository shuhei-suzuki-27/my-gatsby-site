import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const title = 'Home Page';

const IndexPage = () => {
    return (
        <Layout pageTitle={title}>
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                src="../images/clifford.jpg"
            />
        </Layout>
    );
};

export const Head = () => <Seo title={title} />;

export default IndexPage;
