import styled from "styled-components";
import { Field, Form } from 'formik';


export const StyledForm = styled(Form)`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    padding: 15px 10px;
    
    background-color: ${p => p.theme.colors.bcg};
    border: 3px solid ${p => p.theme.colors.border};
    border-radius: 6px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.black};
    `

export const DivLabel = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 5px;
`

export const Error = styled.span`
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: 700;
    color: ${props => props.theme.colors.accent};
`

export const FieldFormik = styled(Field)`
    padding: 8px 16px;
    max-width: 100%;
    border: 0;
    outline: 0;
    border-radius: 8px;
    box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
    font-style: italic;
    font-size: ${props => props.theme.fontSizes.s};
`

export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    padding: 8px 16px;
    max-width: 100%;

    border: none;
    outline: none;
    border-radius: 8px;

    box-shadow: ${p => p.theme.shadows.boxShadow};
    transition: all 0.2s ease-in-out;

    background-color: ${p => p.theme.colors.muted};
    color: ${p => p.theme.colors.white};
    cursor: pointer;

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.accent};
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
    svg {
      fill: ${p => p.theme.colors.accent};
      stroke: ${p => p.theme.colors.accent};
    }
    :active {
      color: ${p => p.theme.colors.accent};
      box-shadow: inset 1px 1px 2px #8ba793, inset -1px -1px 2px #fff;
      svg {
        fill: ${p => p.theme.colors.accent};
        stroke: ${p => p.theme.colors.accent};
      }
    }
  }
`