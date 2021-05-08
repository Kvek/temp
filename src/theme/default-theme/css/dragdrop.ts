import { createGlobalStyle, css } from 'styled-components';

export const DragDropStyle = createGlobalStyle`${css`
  .react-grid-layout {
    max-height: calc(100% - 28px) !important;
    position: relative;
    transition: height 200ms ease;
  }
  .react-grid-item {
    max-height: 100%;
    transition: all 200ms ease;
    transition-property: left, top;
  }
  .react-grid-item.cssTransforms {
    transition-property: transform;
  }
  .react-grid-item.resizing {
    will-change: width, height;
    z-index: 9999;
  }

  .react-grid-item.react-draggable-dragging {
    transition: none;
    will-change: transform;
    z-index: 3;
  }

  .react-grid-item.react-grid-placeholder {
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -webkit-user-select: none;
    background: red;
    opacity: 0.2;
    transition-duration: 100ms;
    user-select: none;
    z-index: 2;
  }

  .react-grid-item > .react-resizable-handle {
    bottom: 0;
    height: 10px;
    cursor: se-resize;
    position: absolute;
    right: 0;
    width: 10px;
  }

  .react-grid-item > .react-resizable-handle::after {
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
    border-right: 2px solid rgba(255, 255, 255, 0.4);
    bottom: 0px;
    content: '';
    height: 5px;
    position: absolute;
    right: 0px;
    width: 5px;
  }

  .columns {
    -moz-columns: 120px;
    -webkit-columns: 120px;
    columns: 120px;
  }
  .react-grid-item {
    box-sizing: border-box;
  }
  .react-grid-item:not(.react-grid-placeholder) {
    background: transparent;
    border: 0px solid black;
  }
  .react-grid-item.resizing {
    opacity: 0.9;
  }
  .react-grid-item.static {
    background: #cce;
  }
  .react-grid-item .text {
    bottom: 0;
    font-size: 24px;
    height: 24px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
  }
  .react-grid-item .minMax {
    font-size: 12px;
  }
  .react-grid-item .add {
    cursor: pointer;
  }
  .react-grid-dragHandleExample {
    cursor: -webkit-grab; /* fallback if grab cursor is unsupported */
    cursor: -moz-grab;
    cursor: grab;
    cursor: move;
  }
  li b {
    font-size: 19px;
    line-height: 14px;
  }

  .toolbox {
    background-color: #dfd;
    height: 120px;
    overflow: scroll;
    width: 100%;
  }

  .hide-button {
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    right: 5px;
    top: 0px;
  }

  .toolbox__title {
    font-size: 24px;
    margin-bottom: 5px;
  }
  .toolbox__items {
    display: block;
  }
  .toolbox__items__item {
    background-color: #ddd;
    border: 1px solid black;
    cursor: pointer;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin: 5px;
    padding: 10px;
    text-align: center;
    width: 40px;
  }
`}`;
