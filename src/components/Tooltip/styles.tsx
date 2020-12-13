import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #21ffb5;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translate(-50%);
    color: #312e38;

    &::before {
      border-style: solid;
      border-color: #21ffb5 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      content: '';
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
