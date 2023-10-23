import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Topbar from '../../modules/Topbar';

const Layout = ({children}) => {
    return (
        <Fragment>
            <Topbar></Topbar>
            {children}
        </Fragment>
    );
};

export default Layout;