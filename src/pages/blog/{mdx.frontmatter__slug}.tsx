import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPost = ({ data, children }: PageProps<Queries.Query>) => {
    if (data.mdx === null) return <></>;
    const mdx = data.mdx;
    if (data.mdx.frontmatter === null) return <></>;
    const frontmatter = data.mdx.frontmatter;
    const date = frontmatter.date;
    const image = frontmatter.hero_image;
    const image_alt = frontmatter.hero_image_alt;
    const image_credit_link = frontmatter.hero_image_credit_link;
    const image_credit_text = frontmatter.hero_image_credit_text;

    return (
        <Layout pageTitle={data.mdx?.frontmatter?.title as string}>
            <p>{date}</p>
            {image && image_alt && (
                <GatsbyImage image={image} alt={image_alt} />
            )}
            {image_credit_link && image_credit_text && (
                <p>
                    Photo Credit:{' '}
                    <a href={image_credit_link}>{image_credit_text}</a>
                </p>
            )}

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
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                hero_image_alt
                hero_image_credit_text
                hero_image_credit_link
            }
        }
    }
`;

export const Head = ({ data }: PageProps<Queries.Query>) => (
    <Seo title={data.mdx?.frontmatter?.title as string} />
);

export default BlogPost;
