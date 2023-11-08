import styled from "styled-components";


export const Layout = styled.div`
    width: 400px;
    padding: 20px 0;
    margin: 0 auto;
    text-align: center;
`

export const Title = styled.h1`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: 800;
    color:${p => p.theme.colors.primary};
    text-shadow: ${p => p.theme.shadows.textShadow};
    margin-bottom: 25px;
`

export const SubTitle = styled.h2`
    font-size: 42px;
    font-weight: 800;
    color:${p => p.theme.colors.primary};

    text-shadow: ${p => p.theme.shadows.textShadow};

    margin-bottom: 25px;
`

export const Empty = styled.p`
    color: ${p => p.theme.colors.white};
    font-size: 20px;
    
`