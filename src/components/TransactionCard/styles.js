import styled from "styled-components";

export const Transactions = styled.div`
background-color:#f8f8f8;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
padding-top: 50px;
.trans{
padding-right: 20px;
background-color: white;
width: 95%;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 20px;
margin-bottom: 20px;
img{
    width: 15%;
}
.title{
    width: 20%; 
}
.cat{
    width: 20%;
}
.status{

    width: 10%;
}
.date{
    width: 20%;
}

}
@media (max-width: 768px) {
    img{
        display: none
    }
}
`

export const Status = styled.div`
width: 10%;
text-align: center;
    background-color: ${props => props.status === 'Failed' ? 'red' : props.status === 'Success' ? 'green' : ''};
    border-radius: 20px;
    @media (max-width: 768px) {
        background-color: white;
    }
`