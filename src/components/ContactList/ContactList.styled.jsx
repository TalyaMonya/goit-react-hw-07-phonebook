import styled from "styled-components";


export const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    padding: 10px;
    border: 3px solid ${p => p.theme.colors.border};
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.6);
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 700;
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${p => p.theme.colors.bcg};
  border: 2px solid ${p => p.theme.colors.border};
  border-radius: 6px;
`

export const Btn = styled.button`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;

  border: none;
  outline: none;
  border-radius: 8px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.muted};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.accent};
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
    svg {
      fill: ${p => p.theme.colors.accent};
      stroke: ${p => p.theme.colors.accent};
    }
    &:active {
      color: ${p => p.theme.colors.accent};
      box-shadow: inset 1px 1px 2px #8ba793, inset -1px -1px 2px #fff;
      svg {
        fill: ${p => p.theme.colors.accent};
        stroke: ${p => p.theme.colors.accent};
      }
    }
  }
`;