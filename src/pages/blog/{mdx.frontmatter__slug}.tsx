import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPost = ({ data, children }: PageProps<Queries.Query>) => {
    return (
        <Layout pageTitle={data.mdx?.frontmatter?.title as string}>
            <p>{data.mdx?.frontmatter?.date}</p>
            {children}
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
        }
    }
`;

export const Head = ({ data }: PageProps<Queries.Query>) => (
    <Seo title={data.mdx?.frontmatter?.title as string} />
);

export default BlogPost;
