/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2} size={24}></Icon>
        </CloseButton>
        <Spacer />
        <Nav>
          <NavLink href="/sale" selected={true}>Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: hsla(220, 5%, 40%, 0.8);

  display: flex;
  justify-content: flex-end;
`;


const Content = styled(DialogContent)`
  height: 100%;
  width: 300px;
  background-color: ${COLORS.white};
  padding: 26px 16px 32px 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Spacer = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;

  top: 26px;
  right: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;

  text-decoration: none;

  color: ${props => props.selected ? COLORS.secondary : COLORS.gray[900]};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  flex: 1;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  font-weight: 500;
  line-height: normal;

  text-decoration: none;

  color: ${COLORS.gray[700]};
`;

export default MobileMenu;
