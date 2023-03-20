import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from '../hooks/useSiteMetadata';

interface Props {
    title: string;
}

const Seo = ({ title }: Props) => {
    const siteMetadata = useSiteMetadata();

    return (
        <title>
            {title} | {siteMetadata.title}
        </title>
    );
};

export default Seo;
