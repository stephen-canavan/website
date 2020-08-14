import styled from '@emotion/styled';
import { Navbar, NavItem } from 'react-bootstrap'


const DarkNavBar = styled(Navbar)`
    bg: dark;
    variant: dark;
    expand: md;
    color: #bbc7c4;
    font-weight: 500;
    font-size: 18px;
    width: 100%;
`;

const Container = styled.div`
    width: 100%;
    white-space: nowrap;
`;

const PageLink = styled(NavItem)`
    margin-right: 45px;
    margin-left: 45px;
    font-weight: 300;
    font-size: 18px;
`;

export {DarkNavBar, PageLink, Container};