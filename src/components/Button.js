import styled from 'styled-components';


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.03rem solid var(--lightPink);
color: var(--lightPink);
border-radius: 0.5rem;
border-color:${props=>props.cart ? "var(--mainYellow)" : "var(--lightPink)"};
color:${props=>props.cart ? "var(--mainYellow)" : "var(--lightPink)"};
padding: 0.2rem 0.5rem;
margin:0.2rem 0.6rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background:${prop=>prop.cart ? "var(--mainYellow)" : "var(--lightPink)"};
    color: var(--mainPink);
}
&:focus{
    outline:none;
}
`;