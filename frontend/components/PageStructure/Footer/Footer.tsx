import dayjs from 'dayjs';

import { FooterColumn, FooterColumnContainer, FooterContainer } from './Footer.styles';
import { Margin, CenterAlign } from '../../styles/core/spacing';
import { P } from '../../styles/core/typography';

const Footer = () => {
  return (
    <FooterContainer as="footer">
      <Margin bottom={24}>
        <FooterColumnContainer>
          <FooterColumn>
            <P>Bespoke Designs</P>
            <ol>
              <li>
                <P>About Sharon</P>
              </li>
              <li>
                <P>FAQs</P>
              </li>
              <li>
                <P>Affiliates</P>
              </li>
              <li>
                <P>Contact</P>
              </li>
              <li>
                <P>Delivery</P>
              </li>
            </ol>
          </FooterColumn>
          <FooterColumn>
            <P>Media platforms</P>
            <ol>
              <li>
                <P>Instagram</P>
              </li>
              <li>
                <P>Facebook</P>
              </li>
              <li>
                <P>Youtube</P>
              </li>
              <li>
                <P>Blogger</P>
              </li>
              <li>
                <P>Pinterest</P>
              </li>
            </ol>
          </FooterColumn>
        </FooterColumnContainer>
      </Margin>

      <CenterAlign>
        <P>Copyright © {dayjs().year()} Bespoke Designs by Sharon - All Rights Reserved.</P>
      </CenterAlign>
    </FooterContainer>
  );
};

export default Footer;
