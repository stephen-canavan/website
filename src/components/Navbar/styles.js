import styled from '@emotion/styled';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { theme } from '@styles'

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
    background-color: ${theme.colors.grey[0]};
`;

const Container = styled.div`
    white-space: nowrap;
    background-color: ${theme.colors.grey[0]};
    padding: 0px;
`;

const NavCollapse = styled(Navbar.Collapse)`
    width: 100%;
    background-color: ${theme.colors.grey[0]};
    text-align: center;
    z-index: 9999;
    padding: 0px;
`;

const PageLink = styled(NavItem)`
    margin-right: 45px;
    margin-left: 45px;
    font-weight: 100;
    font-size: 16px;
`;

const MediaIcon = styled(NavItem)`
    text-align: center;
    margin: auto;
`;

const NavIcons = styled(Nav)`
    align-items: right;
    text-align: right;
`;

export {DarkNavBar, PageLink, Container, NavCollapse, MediaIcon, NavIcons};