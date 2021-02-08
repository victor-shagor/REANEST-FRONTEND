import styled from "styled-components";

export const Card = styled.div`
height: 180px;
width : 320px;
color: white;
background-color: #8d66db;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px 0px 10px 0px;
.proPicture {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    width: 80%;
    .name{
        width: 50%;
    }
}
.btn{
    width: 70%;
    display: flex;
    justify-content: flex-end;
    color: white;
}
.link{
color: white;
border-radius: 20px;
border: 1px solid white;
background-color: #8d66db;
}
`