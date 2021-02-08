import styled from "styled-components";

export const Loan = styled.div`
height: 250px;
width: 49%;
background-color: white;
color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
margin-bottom: 10px;
.btn{
    width: 65%;
    background-color: #4500c2;
    color: white;
    height: 40px;
    text-decoration:none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media (max-width: 768px) {
        width: 100%;
}
`