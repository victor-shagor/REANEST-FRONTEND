import styled from "styled-components";

export const Wallet = styled.div`
height: 250px;
width: 49%;
background-color: #f2e8ff;
border-radius: 20px;
margin-bottom: 10px;
.topDiv{
    width: 95%;
  display: flex;
  justify-content: space-between;
  padding: 5px 5px 0 5px;

}
.midDiv{
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.btmDiv{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.iconWrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
}
.icon{
    height: 35px;
    width: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #703fcd;
    color: white;
}
@media (max-width: 768px) {
    width: 100%;
}
`