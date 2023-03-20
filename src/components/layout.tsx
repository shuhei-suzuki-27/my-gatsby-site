import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css';
import useSiteMetadata from '../hooks/useSiteMetadata';

interface Props {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {
    const siteMetadata = useSiteMetadata();
    const navigations = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Blog',
            path: '/blog',
        },
    ];

    return (
        <div className={container}>
            <header className={siteTitle}>{siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    {navigations.map((navigation) => {
                        return (
                            <li className={navLinkItem} key={navigation.name}>
                                <Link
                                    to={navigation.path}
                                    className={navLinkText}
                                >
                                    {navigation.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
