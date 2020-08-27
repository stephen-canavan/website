import styled from '@emotion/styled';
import { theme } from '@styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.containers.large};
  padding: 50px 30px 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.dt}) {
    padding-top: 60px;
    padding-bottom: 100px;
    min-height: 150px;
  }
`;

const Heading = styled.div`
  color: ${theme.colors.greyGreen[1]};
`;

export {
  Wrapper,
  Heading,
};
