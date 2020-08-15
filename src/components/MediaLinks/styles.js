import styled from '@emotion/styled';
import { theme } from '@styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.containers.large};
  padding: 100px 30px 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.dt}) {
    padding-top: 100px;
    padding-bottom: 80px;
    min-height: 500px;
  }
`;

const MediaWrapper = styled.div``;

export {
  Wrapper,
  MediaWrapper,
};
