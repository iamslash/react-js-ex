import React from 'react';
import styled, { css } from 'styled-components';

const FixButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  background: white;
`;

const VarButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
`;

const CssButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: navy;
      border-color: navy;
    `}
`;

export function FixStyledButton({children}) {
    return <FixButton>{children}</FixButton>;
}

export function VarStyledButton({ children, color, background }) {
    return (
        <VarButton color={color} background={background} Î>
        {children}
        </VarButton>
    );
}

export function CssStyledButton({ children, ...props }) {
    return <CssButton {...props}>{children}</CssButton>;
}

export default {FixStyledButton, VarStyledButton, CssStyledButton};
