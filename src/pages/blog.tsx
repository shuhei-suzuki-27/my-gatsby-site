import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const title = 'My Blog Posts';

const BlogPage = ({ data }: PageProps<Queries.Query>) => {
    return (
        <Layout pageTitle={title}>
            <ul>
                {data.allFile.nodes.map((node) => {
                    return <li key={node.name}>{node.name}</li>;
                })}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`;

export const Head = () => <Seo title={title} />;

export default BlogPage;
