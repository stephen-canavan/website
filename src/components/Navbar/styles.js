import styled from '@emotion/styled';
import { Navbar, NavItem } from 'react-bootstrap'


const DarkNavBar = styled(Navbar)`
    bg: dark;
    variant: dark;
    expand: md;
    color: #bbc7c4;
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);
    max-height: 70px;
`;

const Container = styled.div`
    width: 100%;
    white-space: nowrap;
`;

const PageLink = styled(NavItem)`
    margin-right: 45px;
    margin-left: 45px;
    font-weight: 100;
    font-size: 16px;
`;

export {DarkNavBar, PageLink, Container};