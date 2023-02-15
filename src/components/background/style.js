import styled from "styled-components";

export const BackgroundImage = styled.div`
  
  background-image: url(${(props) => props?.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BackgroundGradient = styled.div`
  background: linear-gradient(to top, #333 , transparent 200%);
`;