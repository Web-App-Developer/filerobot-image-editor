import styled from 'styled-components';
import { variables } from './styleUtils';

const FullscreenBtn = styled.span.attrs(() => ({
  role: 'button'
}))`
  cursor: pointer;
  position: absolute;
  font-weight: normal;
  top: ${props => props.t || '18px'};
  right: ${props => props.r || 'auto'};
  left: ${props => props.l || '20px'};
  bottom: ${props => props.b || 'auto'};
  font-size: ${props => props.fz || '15px'};
  z-index: 10;
  font-family: 'filerobot-image-editor-font' !important;
  color: ${props => variables.modal.colorMuted};
  speak: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  &:hover {
    color: ${props => variables.modal.colorMutedHover};
  }
  
  &:before {
      content: '\\26F6'
    }
`;

export { FullscreenBtn };
