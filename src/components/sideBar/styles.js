import styled from "styled-components";

export const SideBarStyles = styled.div`
  margin: 0;
  width: 20vw;
  background-color: white;
  height: 100%;
  overflow: auto;
  position: fixed;
  .link {
    display: block;
    color: #9fa0b8;
    padding: 16px;
    text-decoration: none;
  }
  
  .selected {
    background-color: #eeeeee;
    color: black;
  }
  @media (max-width: 768px) {
    z-index: 1;
    width: 80vw;
    display: ${props => props.toggle ? 'none': 'block'}
  }
`

export const NameSpan = styled.span`
padding-left: 10px;
`