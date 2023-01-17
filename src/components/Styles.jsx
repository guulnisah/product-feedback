import styled, { keyframes } from 'styled-components'
import backgroundHeader from '../assets/suggestions/desktop/background-header.png'
import backgroundHeaderMobile from '../assets/suggestions/mobile/background-header.png'

export const Container = styled.div`
max-width: 1080px;

@media screen and (max-width: 768px) {
max-width: 90%;
margin: 0 auto;
}
`

export const HomeContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 1.875rem;
margin: 0 auto;
padding: 1.5rem 2rem;


@media screen and (max-width: 768px) {
padding: 1.5rem 0;
flex-direction: column;
}

@media screen and (max-width: 576px) {
padding: 0 0 1.5rem 0;
}
`

export const Header = styled.header`
border-radius: 0.625rem;
display: flex;
justify-content: center;
gap: 1.5rem;
flex-direction: column;
flex: 1;
max-width: 255px;


@media screen and (max-width: 768px) {
margin: 0 auto;
flex-direction: row;
gap: 10px;
max-width: 90%;
}
`

export const Header_Background = styled.div`
border-radius: 10px;   
flex-basis: 33.333%;
padding: 3.8rem 1.5rem 1.5rem 1.5rem;
width: 100%;
background: url(${backgroundHeader}) no-repeat;
background-size: cover;
color: #fff;
font-weight: 700;
line-height: 1.4;
letter-spacing: -0.25px;


h1 {
font-size: 1.25rem;
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

svg {
width: 2rem;
height: 2rem;
cursor: pointer;
}
}

@media screen and (max-width: 800px) {
padding: 1rem;
}

@media screen and (max-width: 768px) {
padding: 2rem 0.5rem 0.5rem 0.5rem;
width: 30%;
font-size: 1rem;
}
`

export const Header_User = styled.div`
flex-basis: 100px !important;
border-radius: 10px;   
padding: 1.5rem;
background: #fff;
display: flex;
align-items: flex-start;
gap: 0.5rem;
color: #3A4374;
`


export const Header_Labels = styled.div`
border-radius: 10px;   
flex-basis: 33.333%;
padding: 1.5rem;
background: #fff;
min-height: 166px;
display: flex;
flex-wrap:wrap;
align-content: center;
gap: 0.5rem;

button.active {
background: #4661E6;
color: #fff;
}

/* @media screen and (max-width: 768px) {
padding: 0.8rem;
} */
`

export const Header_Roadmap = styled.div`
border-radius: 10px;   
flex-basis: 33.333%;
padding: 1.5rem;
background: #fff;
display: flex;
flex-direction: column;
gap: 0.5rem;

h2 {
font-size: 1.125rem;
color: #3A4374;
}

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
/* @media screen and (max-width: 768px) {
padding: 0.8rem;
} */
`


export const Main = styled.main`
color: #fff;
flex: 3;
max-width: 1000px;

.overlay {
display: none;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.3);
}

.overlay.active {
display: block;
}

@media screen and (max-width: 768px) {
width: 100%;
max-width: 100%;
}
`

export const PurpleHeader = styled.header`
position: relative;
color: #fff;
max-width: 1080px;
padding: 1rem;
gap: 1rem;
height: 5rem;
background: #373F68;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 auto;
margin-bottom: 1.5rem;
span {
display: flex;
align-items: center;
}
button {
margin-left: auto;
}

@media screen and (max-width: 768px) {
gap: 0.3rem;
max-width: 90%;
}

@media screen and (max-width: 576px) {
border-radius: 0px;
max-width: 100%;
margin: 0;
margin-bottom: 1.5rem;
}
`

export const Suggestions = styled.section`
display:flex;
flex-direction: column;
gap: 20px;
line-height: 1.45;
`

export const NoSuggestions = styled.section`
padding: 1.5rem;
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

display: grid; 
grid-template-columns: 1fr 2fr 1fr; 
grid-template-rows: 1fr; 
grid-template-areas: 
"upvotes description comments"; 

.upvotes { grid-area: upvotes; }
.description { grid-area: description; }
.comments { grid-area: comments; }

border-radius: 10px;
padding: 1.75rem 2rem;
background: #fff;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 2.5rem;
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

@media screen and (max-width: 576px) {
display: grid; 
grid-auto-columns: 1fr; 
grid-template-columns: 1fr 1fr; 
grid-template-rows: 2fr 1fr; 
gap: 1rem; 
grid-template-areas: 
"description description"
"upvotes comments"; 
}
`


export const Avatar = styled.img`
border-radius: 50%;
width: ${({ width }) => width}px;
@media screen and (max-width: 768px) {
width: ${({ width }) => (width / 1.4)}px;
}
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
max-height: 2.5rem;
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


export const RoadmapContainer = styled.main`
margin: 0 auto;
padding: 1.5rem 2rem;

@media screen and (max-width: 768px) {
padding: 1.5rem 0;
}

@media screen and (max-width: 576px) {
padding: 0 0 1.5rem 0;
}
`


export const RoadmapGrid = styled.main`
display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
margin: 0 auto;
gap: 30px;
max-width: 1080px;

@media screen and (max-width: 768px) {
max-width: 90%;
}

@media screen and (max-width: 576px) {
max-width: 100%;
}
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

@media screen and (max-width: 768px) {
&::before{
margin-right: 0.5rem;
}}
`

export const DetailsContainer = styled.main`
width: 50%;
max-width: 1000px;
margin: 0 auto;
padding: 1.5rem 0;
display: flex;
flex-direction: column;
gap: 1.5rem;
.flex {
display: flex;
justify-content: space-between;
align-items: center;
}

@media screen and (max-width: 800px) {
width: 90%;
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
resize: none;
border: none;
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
margin-top: 3rem;

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
display: flex;
textarea {
height: 80px;
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

@media screen and (max-width: 576px){
gap: 0.5rem;
flex-direction: column;
}

`

export const Replies = styled.article`
padding-left: 50px;
border-left: 1px solid #f2f4ff;

@media screen and (max-width: 576px) {
  padding-left: 25px;
}
`

export const RegistrationContainer = styled.main`
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`


export const RegistrationForm = styled.section`
max-width: 600px;
background-color:#fff;
width: 60%;
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

@media screen and (max-width: 768px) {
width: 80%;
}

@media screen and (max-width: 576px) {
width: 90%;
padding: 1.5rem 1rem;
button {
  width: 100%;
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
width: 50%;
max-width: 540px;
margin: 0 auto;
padding: 1.5rem 0;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 3rem; 

@media screen and (max-width: 900px) {
width: 90%;
}
`

export const FormContainer = styled.section`
width: 100%;
background-color: #fff;
padding: 3.25rem 2.6rem 2.5rem;
margin: 0 auto;
border-radius: 10px;
h1 {
margin-bottom: 2rem;
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

@media screen and (max-width: 768px) {

flex-direction: column;
button {
width: 100%;
}
}
}
}
`

export const StyledLink = styled.a`
color: ${({ color }) => color};
text-decoration: none;
font-weight: 700;
font-size: 0.875rem;
cursor: pointer;
&:hover {
text-decoration: underline;
}
svg {
margin-right: 1rem;
}
`

export const MobileHeader = styled.header`
position: relative;
width: 100%;
height: 4.5rem;
background: url(${backgroundHeaderMobile}) no-repeat;
background-size: cover;
padding: 1rem 1.5rem;

h1 {
font-weight: 700;
font-size: 15px;
}

h2 {
font-weight: 500;
font-size: 13px;
opacity: 0.75;
}
`

export const HamburgerIcon = styled.div`

position: absolute;
height: 60px;
width: 60px;
top: 10%;
right: 3%;
z-index: 1000;
cursor: pointer;
transition: all 0.2s ease-in-out;

.icon-1, .icon-2, .icon-3 {
position: absolute;
left: 25%;
top: 50%;
width: 32px;
height: 3px;
background-color: #fff;
transition: all 400ms cubic-bezier(.84,.06,.52,1.8);
}

.icon-1 {
transform: translateY(-8px);
animation-delay: 100ms;
}

.icon-3 {
transform: translateY(8px);
animation-delay: 250ms;
}

.icon-1.a {
transform: rotate(-40deg);
}

.icon-2.b {
opacity: 0;
}

.icon-3.c {
transform: rotate(40deg);
}


.clear {
clear: both;
}
`

const slideLeft = keyframes`
0% {
transform: translateX(100px);
}
100% {
transform: translateX(0);
}
`

const slideRight = keyframes`
0% {
transform: translateX(0);
}
100% {
transform: translateX(100px);
}
`

export const MobileMenu = styled.nav`
position: absolute;
right: 0;
background-color: #F7F8FD;
width: 75%;
z-index: 10;
height: 100vh;
display: flex;
flex-direction: column;
gap: 2rem;
margin-left: auto;
padding: 24px;
animation: ${slideLeft} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


> div {
flex-basis: 175px;
}
`