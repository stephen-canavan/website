import styled from '@emotion/styled';
import { theme } from '@styles'

const Container = styled.div`
  background: ${theme.colors.grey[0]};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  max-width: ${({ theme }) => theme.containers.small};
  padding: 70px 30px 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.dt}) {
    padding-top: 70px;
    padding-bottom: 80px;
    min-height: 500px;
  }
`;

const TextHeading = styled.div`
  color: ${theme.colors.greyGreen[4]};
  margin: 60px;
`;

const MainText = styled.div`
  color: ${theme.colors.greyGreen[4]};
  margin: 20px;
  font-size: 20px;
`;

const TextBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin: 40px auto 20px;
  max-width: 750px;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: -0.02em;

  @media (min-width: ${({ theme }) => theme.breakpoints.dt}) {
    font-size: 22px;
  }
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  text-align: center;
  max-width: 800px;
  width: 100%;
`;

const ButtonBox = styled.div`
  display: block;
  text-align: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 314px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tb}) {
    display: inline-block;
    margin: 30px;
    max-width: 290px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.dt}) {
    margin: 30px;
    max-width: 290px;
  }
`;

const Link = styled.a``;

export {
  Container,
  Wrapper,
  TextHeading,
  MainText,
  TextBox,
  ButtonBox,
  ButtonWrapper,
  Link,
};
