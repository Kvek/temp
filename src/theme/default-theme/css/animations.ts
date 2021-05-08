import { createGlobalStyle, css } from 'styled-components';

export const Animations = createGlobalStyle`${css`
  .fade-appear {
    opacity: 0.01;
    transition: opacity 1s ease-in infinite;

    &.fade-appear-active {
      opacity: 1;
    }
  }

  g,
  path {
    transform-origin: 240px 244px;
  }

  @keyframes scale {
    to {
      transform: scale(1, 1);
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes drawHidden {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
`}`;
