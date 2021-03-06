import styled from '@emotion/styled';
import { theme } from '@styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.containers.medium};

`;

const Border= styled.div`
  background: ${theme.colors.grey[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 150px;
  max-width: ${({ theme }) => theme.containers.medium};
  border-radius: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.dt}) {
    border-radius: 50px;
  }

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 25px 25px;
  max-width: ${({ theme }) => theme.containers.small};

  @media (min-width: ${({ theme }) => theme.breakpoints.dt}) {
    padding: 40px 60px;
    min-height: 80px;
  }
`;

const Text = styled.p`
  color: ${theme.colors.yellow[2]};
  margin-top: 20px;
  font-family: 'Gill Sans';
  margin-bottom: 20px;
  font-size: 22px;
`;

const Button = styled.button`

	background-color: ${theme.colors.greyGreen[0]};
	border-radius:42px;
	border:6px solid ${theme.colors.greyGreen[3]};
	display:inline-block;
	cursor:pointer;
	color: ${theme.colors.greyGreen[4]};
	font-family:Trebuchet MS;
	font-size:17px;
	font-weight:bold;
	padding:16px 31px;
    text-decoration:none;
    max-width: 250px;
    margin: 0 auto;
    margin-top: 20px;
`;

const Highlight = styled.span`
  color: ${theme.colors.blue[1]};
  font-family: 'Futura';
  font-size: 20px;
`;
export {
  Container,
  Wrapper,
  Text,
  Border,
  Button,
  Highlight,
};
