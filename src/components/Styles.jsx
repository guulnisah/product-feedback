import { Link } from 'react-router-dom'
import styled from 'styled-components'
import backgroundHeader from '../assets/suggestions/desktop/background-header.png'

export const Container = styled.div`
width: 80%;
margin: 0 auto;
max-width: 1080px;

@media screen and (max-width: 768px) {
width: 95%;
}
`

export const HomeContainer = styled(Container)`
display: flex;
align-items: flex-start;
justify-content: flex-start;
gap: 1.875rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`

export const Header = styled.header`
border-radius: 0.625rem;
display: flex;
justify-content: center;
gap: 1.5rem;
flex-direction: column;
flex: 1;

.head, .labels, .roadmap {
border-radius: 10px;   
padding: 1.5rem;
}

.head {
width: 100%;
background: url(${backgroundHeader}) no-repeat;
background-size: cover;
padding-top: 3.8rem;
color: #fff;
font-weight: 700;
font-size: 1.25rem;
line-height: 1.4;
letter-spacing: -0.25px;
}

.greeting {
display: flex;
gap: 1rem;
align-items: center;

span {
font-weight: 700;
font-size: 0.9rem;
line-height: 1.45;
letter-spacing: -0.194444px;
color: #fff;
}
}

.labels {
background: #fff;
min-height: 166px;
display: flex;
flex-wrap:wrap;
gap: 0.5rem;
button.active {
background: #4661E6;
color: #fff;
}
}

.roadmap {
background: #fff;
display: flex;
flex-direction: column;
gap: 0.5rem;

a {
font-weight: 600;
font-size: 0.8rem;
line-height: 1.45;
color: #4661E6; 
}
div {
display: flex;
justify-content: space-between;
align-items: center;
}
span:nth-child(2) {
font-weight: 700;
font-size: 1rem;
line-height: 1.45;
color: #647196;
}
}

@media screen and (max-width: 768px) {
    flex-direction: row;
}
`

export const Avatar = styled.img`
border-radius: 50%;
width: ${({ width }) => width};
`

export const Button = styled.button`
height: 2.75rem;
width: ${({ width }) => width ? width : '100%'};
background: ${({ color }) => color};
color: #F2F4FE;
border: none;
border-radius: 0.625rem;
cursor: pointer;
a {
all:unset;
}
&:hover{
background-color: ${({ hover }) => hover}
}
`




export const UpvoteButton = styled.button`
padding: 0.3rem 1rem;
border: none;
background: #F2F4FF;
border-radius: 0.625rem;
font-size: 0.8rem;
line-height: 1.45;
cursor: pointer;
&:hover {
background: #CFD7FF;
}

font-weight: 700;
color: #3A4374;
display: flex;
flex-direction: ${({ column }) => column ? "column" : "row"};
align-items: center;
gap: 0.5rem;

&:active {
background: #4661E6;
color: #fff;
path {
stroke: #fff;
}
}
`

export const PillButton = styled.button`
text-transform: capitalize;
padding: 0.3rem 1rem;
border: none;
background: #F2F4FF;
border-radius: 0.625rem;
font-weight: 600;
font-size: 0.8rem;
line-height: 1.45;
color: #4661E6;
cursor: pointer;
&:hover {
background: #CFD7FF;
}
`


export const Main = styled.main`
color: #fff;
flex: 3;
`
export const Nav = styled.nav`
position: relative;
color: #fff;
width: 100%;
padding: 1rem;
gap: 1rem;
height: 5rem;
background: #373F68;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 1.5rem;

span {
display: flex;
align-items: center;
}
button {
margin-left: auto;
}
`


export const Suggestions = styled.section`
display:flex;
flex-direction: column;
gap: 20px;
line-height: 1.45;
`

export const NoSuggestions = styled.section`
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #fff;
height: 80vh;
gap: 1rem;
svg {
margin-bottom: 2rem;
}
h3 {
color: #3A4374;
}
p {
color: #647196;
max-width: 410px;
margin-bottom: 2rem;
}
`

export const Suggestion = styled.article`
border-radius: 10px;
padding: 1.75rem 2rem;
background: #fff;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 40px;
color: #3A4374;

h3 a {
text-decoration: none;
color: inherit;
}

.comments {
margin-left: auto;
display: flex;
align-items: center;
font-weight: 700;
font-size: 1rem;
letter-spacing: -0.22px;
color: #3A4374;
gap: 0.5rem;
}

button.active {
background: #4661E6;
color: #fff;
path {
stroke: #fff;
}
}
`

export const RoadmapContainer = styled.main`
display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
margin: 0 auto;
gap: 30px;
`

export const RoadmapSection = styled.section`
display: flex;
flex-direction: column;
gap: 1.5rem;
`

export const Feature = styled.article`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
padding: 1.5rem 2rem;
border-radius: 5px;
background-color: #fff;
border-top: 6px solid;
border-top-color: ${({ status }) => {
        if (status === "planned") { return '#F49F85' }
        if (status === "in-progress") { return '#AD1FEA' }
        if (status === 'live') { return '#62BCFA' }
    }};

h3 {
    a {
        text-decoration: none;
        cursor: pointer;
        color: #3A4374;
    }
}
.lastRow {
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

span {
svg {
margin-right: 0.5rem;
}
}
}
`

export const Status = styled.span`
text-transform: capitalize;
font-size: 1rem;
line-height: 1.45;
color: #647196;
&::before{
content: '';
display: inline-block;
width: 10px;
height: 10px;
border-radius: 50%;
margin-right: 1rem;
background-color: ${({ status }) => {
        if (status === "planned") { return '#F49F85' }
        if (status === "in-progress") { return '#AD1FEA' }
        if (status === 'live') { return '#62BCFA' }
    }};
}
`

export const DetailsContainer = styled.main`
width: 50%;
max-width: 1000px;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 1.5rem;
.flex {
display: flex;
justify-content: space-between;
align-items: center;
}

@media screen and (max-width: 800px) {
width: 95%;
}
`

export const Details = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;
`



export const Comments = styled.section`
padding: 1.5rem 2rem 2rem;
background-color: #fff;
border-radius: 5px;
h3 {
margin-bottom: 1.8rem;
}
`

export const AddComment = styled.form`
padding: 1.5rem 2rem 2rem;
background-color: #fff;
display: flex;
flex-direction: column;
gap: 1.5rem;
border-radius: 5px;
textarea {
all: unset;
padding: 1rem 1.5rem;
background: #F7F8FD;
border-radius: 5px;
}
div {
display: flex;
align-items: center;
justify-content: space-between;
}
`

export const Comment = styled.article`
position: relative;
display: flex;
align-items: center;
justify-content: flex-start; 
gap: 2rem;
width: 100%;
margin-bottom: 3rem;

img {
align-self: flex-start;
}

.comment {
margin: 0;
font-weight: 400;
font-size: 1rem;
line-height: 1.45;
color: #647196;
margin-bottom: 1rem;
}

.rightSide {
width: 100%;
}

.userInfo {
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin-bottom: 1rem;

p{
margin: 0;
font-weight: 700;
font-size: 0.85rem;
line-height: 1.45;
letter-spacing: -0.194444px;
color: #3A4374;
}

span {
font-weight: 400;
font-size: 0.85rem;
line-height: 1.45;
color: #647196;
}

button {
cursor:pointer;
background-color: transparent;
border: none;
margin-left: auto;
font-style: normal;
font-weight: 600;
font-size: 0.8rem;
line-height: 1.45;
color: #4661E6;
}
}
`

export const ReplyForm = styled.form`
gap: 1rem;
textarea {
height: 80px;
flex: 3rem;
resize: none;
background: #F7F8FD;
border: none;
border-radius: 5px;
padding: 1rem 1.5rem;

&:focus {
border: 1px solid #4661E6;
outline: none;
}
}


`

export const Replies = styled.article`
padding-left: 50px;
border-left: 1px solid #f2f4ff;
`

export const RegistrationContainer = styled.section`
background-color:#fff;
width: 40%;
margin: 0 auto;
padding: 3.25rem 2.6rem;
border-radius: 10px;
h2 {
font-weight: 700;
font-size: 24px;
line-height: 1.45;
letter-spacing: -0.33px;
color: #3A4374;
margin-bottom: 2.5rem;
}
form {
margin: 0 auto;
width: 100%;
display: flex;
flex-direction:column;
gap: 1.5rem;

div {
display: flex;
flex-direction: column;
}

button {
margin-left: auto;
}
}
`

export const StyledInput = styled.input`
padding: 0.75rem 1.5rem;
height: ${({ height }) => height ? height : '46px'};
width: 100%;
background: #F7F8FD;
border-radius: 5px;
border: none;
outline: none;
resize: none;
&:active, :focus {
background: #F7F8FD;
border: 1px solid #4661E6;
border-radius: 5px;
}
`


export const StyledLabel = styled.label`
font-weight: 700;
font-size: 14px;
line-height: 1.45;
letter-spacing: -0.194px;
color: #3A4374;

span {
    font-weight: 400;
font-size: 0.9rem;
line-height: 1.45;
color: #647196;
}
`

export const UpdateContainer = styled.main`
width: 37%;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 3rem; 

@media screen and (max-width: 768px) {
width: 70%;
}
`

export const FormContainer = styled.section`
width: 100%;
background-color: #fff;
padding: 3.25rem 2.6rem 2.5rem;
margin: 0 auto;
border-radius: 10px;
h1 {
    margin-bottom: 4.5rem;
}
img {
    width: 60px;
    margin-top: -4.8rem;
    margin-bottom: 2rem;
}
div {
    width: 100%;
}
form {
display: flex;
flex-direction: column;
gap: 1.5rem;

span {
    display: block;
}

.buttonGroup {
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;
    .first {
        margin-right: auto;
    }
}
}
`

export const StyledLink = styled(Link)`
color: ${({ color }) => color};
text-decoration: none;
font-weight: 700;
font-size: 0.875rem;
&:hover {
text-decoration: underline;
}
svg {
margin-right: 1rem;
}
`