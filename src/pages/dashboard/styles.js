import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-color: #f5f3fc;
  height: auto;
  .side {
    width: 20vw;
  }
  .main {
    width: 77%;
    margin-top: 40px;
    margin-right: 20px;
  }
  .upperDiv{
    display:flex;
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 768px) {
      .side{
        z-index: 1;
        display: ${props => props.toggle ? 'none': 'block'}
      }
    .main {
        width: 100vw;
        padding-left: 7px;
        padding-right: 7px;
        margin-right: 0px;


    }
    .upperDiv{
        flex-direction: column;
    }
  }
`;
