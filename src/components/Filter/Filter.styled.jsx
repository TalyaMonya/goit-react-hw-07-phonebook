import styled from "styled-components";


export const Div = styled.div`
    margin-bottom: 15px;
`
export const Label = styled.label`
    color: ${p => p.theme.colors.text};
    font-size: 18px;
`
export const Input = styled.input`
    width: 400px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    max-width: 100%;
    border: 0;
    outline: 0;
    border-radius: 8px;
    box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
    font-style: italic;
    font-size: 14px;
`

export const Span = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 8px;
    color: white;
`