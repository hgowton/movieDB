import styled from "styled-components";

export const MovieGrid = styled.div `
display: grid;
padding: 1rem;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 1rem;`

export const MovieWrapper = styled.div `
position: relative;
padding-top: 50vh;
background: url(${props => props.backdrop}) no-repeat;
background-size: ConvolverNode;
`;

export const MovieInfo = styled.div `
background: white;
text-align: left;
padding 2rem 10%;
display: flex;
> div {
    margin-left: 20px;
}
img { 
    position: relative;
    top: -5rem;
}`

export const LinkDefault = styled.a `
text-decoration: none;
color: white;
&:link, :hover, :active, :visited {
    text-decoration: none;
    color: white;
};

`

export const Title = styled.p `
text-align: center;
text-shadow: 0 0 30px black;
text-size: 20px;
font-weight: bold;
position: relative;
top: 1rem;
padding: 3%;
text-decoration: none;
&:link, :hover, :active, :visited {
    text-decoration: none;
};
`

export const Poster = styled.img `
box-shadow: 0 0 35px black;
&:hover, :link, :active, :visited {
    transform: scale(1.1);
    text-decoration: none;
}
`

export const PosterAlt = styled.div `
background: url("https://cdn.pixabay.com/photo/2016/11/22/20/01/abstract-1850416_960_720.jpg");
width: 154px;
height: 220px;
box-shadow: 0 0 35px black;
text-align: center;
&:hover, :link, :active, :visited {
    transform: scale(1.1);
    text-decoration: none;
}
`