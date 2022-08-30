import styled from "styled-components";
import Background from "../../imgs/background.jpg";


export const Container = styled.div`
background: url("${Background}");
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
height: 100vh;
`;

export const Content = styled.div`
gap: 15px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
box-shadow: 0 1px 2px #0003;
background-color: rgb(0, 0, 0, 0.75);
max-width: 350px;
padding: 20px;
border-radius: 5px;
`;

export const Label = styled.label`
font-size: 40px;
font-weight: 600;
color: white;
margin-top: 100px;
margin-bottom: 30px;

`;

export const LabelSing = styled.label`
font-size: 16px;
color:#676767;

`;

export const labelError = styled.label`
font-size: 14px;
color: red;
`;

export const Strong = styled.strong`
cursor: pointer;

a {
 text-decoration: none;
 color: #676767;
}
`;

export const footer = styled.p`
margin-top: 10px;
font-size: 13px;
color: white;
`;