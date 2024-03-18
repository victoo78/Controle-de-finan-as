import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 80%;  

  @media (max-width: 750px) {
    width: 20%;
    

    p {
      font-size: 12px;
    }

    span {
      font-size: 15px;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10   px;

  svg {
    width: 25px;
    height: 55px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
