import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const title = 'My Blog Posts';

const BlogPage = ({ data }: PageProps<Queries.Query>) => {
    return (
        <Layout pageTitle={title}>
            <ul>
                {data.allMdx.nodes.map((node) => {
                    return (
                        <article key={node.id}>
                            <h2>{node.frontmatter?.title}</h2>
                            <p>Posted: {node.frontmatter?.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    );
                })}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                }
                id
                excerpt
            }
        }
    }
`;

export const Head = () => <Seo title={title} />;

export default BlogPage;
