import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const title = 'My Blog Posts';

const BlogPage = ({ data }: PageProps<Queries.Query>) => {
    return (
        <Layout pageTitle={title}>
            <ul>
                {data.allMdx.nodes.map((node) => {
                    return (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.frontmatter?.slug}`}>
                                    {node.frontmatter?.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter?.date}</p>
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
                    slug
                }
                id
            }
        }
    }
`;

export const Head = () => <Seo title={title} />;

export default BlogPage;
