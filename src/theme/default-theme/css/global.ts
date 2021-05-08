import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`${css`
  @import url('https://fonts.googleapis.com/css2?family=Anaheim&display=swap');
  @import url('https://use.typekit.net/ffo2ibn.css');

  html,
  body {
    font-size: ${({ theme }) => theme.fontBase};
  }

  html,
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
    background-color: ${({ theme }) => theme.black.A200};
    overflow: hidden;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border-color: transparent;
    -webkit-box-shadow: 0 0 0px 1000px #000 transparent;
    box-shadow: 0 0 0px 1000px #000 transparent;
    transition: background-color 5000s ease-in-out 0s;
  }

  div[role='tooltip'] {
    z-index: 999 !important;
  }

  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  @keyframes slideInUp {
    from {
      -webkit-transform: translate3d(-50%, 100%, 0);
      transform: translate3d(-50%, 100%, 0);
      visibility: visible;
    }

    to {
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
    }
  }

  .ReactModal__Overlay,
  .ReactModal__Overlay--before-close {
    opacity: 0;
    transition: opacity 300ms ease-in-out;

    .ReactModal__Content > div {
      -webkit-animation-name: slideInUp;
      animation-name: slideInUp;
      -webkit-animation-duration: 1s;
      animation-duration: 0.6s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    z-index: 9999;
    background-color: transparent !important;
  }

  [class*='MuiPaper-root'],
  [class*='2000'] {
    ul {
      padding: 0px !important;
    }
  }

  .splitter-layout {
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &.closed {
      .layout-pane:last-child {
        transition: width 0.2s ease;
        width: 0px !important;
        overflow: hidden;
      }
    }

    .layout-pane {
      position: relative;
      flex: 0 0 auto;
      overflow: auto;
      height: 100%;

      &.layout-pane-primary {
        flex: 1 1 auto;
      }
    }

    > .layout-splitter {
      flex: 0 0 auto;
      width: ${({ theme }) => theme.dividerSize}px;
      height: 100%;
      cursor: col-resize;
      background-color: transparent;
      border-width: 0px;
      border-style: solid;
      border-color: ${({ theme }) => theme.transparentInverse[300]};
      ::after {
        content: '. . .';
        color: ${({ theme }) => theme.black[500]};
        position: absolute;
        transform: rotate(90deg);
        top: calc(50% - 7px);
        margin-left: -2px;
      }
    }

    .layout-splitter:hover {
      background-color: ${({ theme }) => theme.transparentInverse[300]};
    }

    &.layout-changing {
      cursor: col-resize;

      > .layout-splitter {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }

    &.splitter-layout-vertical {
      flex-direction: column;

      &.layout-changing {
        cursor: row-resize;
      }

      > .layout-splitter {
        width: 100%;
        height: ${({ theme }) => theme.dividerSize}px;
        cursor: row-resize;
        border-width: 0;

        ::after {
          transform: rotate(0deg);
          top: auto;
          left: calc(50% - 7px);
          margin-top: -6px;
          margin-left: 0px;
        }
      }
    }
  }

  .flag-icon {
    background-size: cover !important;
    border-radius: ${({ theme }) => theme.flagsBorderRadius}px;
    border: ${({ theme }) =>
      `${theme.flagsBorderWidth} px solid ${theme.flagsBorder} !important;`};
  }

  .flag-icon.flag-icon-squared {
    width: 1em !important;
    height: 1em !important;
    padding: 0px !important;
  }

  .flag-icon.full {
    border-width: 0px !important;
    border-radius: 0px;
  }
  .flag-icon.circle {
    width: 1em !important;
    height: 1em !important;
    padding: 0px !important;
    border-radius: 50%;
  }

  .flag-icon-lg {
    font-size: 1.5rem !important;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .blur-bg {
    filter: blur(4px);
  }
`}`;
