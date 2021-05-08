import { createGlobalStyle, css } from 'styled-components';

export const FlexLayoutStyle = createGlobalStyle`${css`
  .main-container > div {
    font-family: ${({ theme }) => theme.fontFamily}, sans-serif;
    font-size: ${({ theme }) => theme.fontRg};
    font-weight: 400;
    margin: ${({ theme }) => theme.dividerSize}px;
  }
  .panel {
    align-items: center;
    background-color: ${({ theme }) => theme.layoutTabBg};
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: center;
    margin: 1px;
  }

  .flexlayout__tab {
    box-sizing: border-box;
    color: white;
    overflow: auto;
    position: absolute;
  }

  .flexlayout__layout {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .flexlayout__splitter {
    align-items: center;
    background-color: transparent;
    display: grid;
    justify-items: center;

    &[style*='cursor: ew-resize'] {
      width: ${({ theme }) => theme.dividerSize}px !important;
      ::after {
        line-height: 5px;
        width: min-content;
      }
    }

    &[style*='cursor: ns-resize'] {
      height: ${({ theme }) => theme.dividerSize}px !important;
      ::after {
      }
    }

    ::after {
      color: ${({ theme }) => theme.dividerLabel};
      content: '. . .';
      position: absolute;
      top: calc(50% - 9px);
    }
  }

  .flexlayout__splitter:hover {
    ::after {
      color: ${({ theme }) => theme.dividerLabelHover};
    }
  }

  .flexlayout__splitter_drag {
    background-color: ${({ theme }) => theme.dividerDragBg};
    z-index: 1000;
  }

  .flexlayout__outline_rect {
    border: ${({ theme }) => theme.panelHeaderTabIndicatorWidth}px solid
      ${({ theme }) => theme.panelHeaderTabIndicator};
    border-radius: 5px;
    box-sizing: border-box;
    cursor: move;
    position: absolute;
    z-index: 1000;
  }

  .flexlayout__outline_rect_edge {
    border: 2px solid #b7d1b5;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: move;
    z-index: 1000;
  }

  .flexlayout__edge_rect {
    background-color: lightgray;
    position: absolute;
    z-index: 1000;
  }

  .flexlayout__drag_rect {
    background-color: #eeeeee;
    border: 2px solid #aaaaaa;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: move;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0.9;

    overflow: hidden;
    padding: 10px;
    position: absolute;
    text-align: center;
    word-wrap: break-word;
    z-index: 1000;
  }

  .flexlayout__tab,
  .flexlayout__tabset {
    background-color: ${({ theme }) => theme.layoutTabBg};
    border: ${({ theme }) => theme.layoutTabBorderWidth}px solid
      ${({ theme }) => theme.layoutTabBorder};
    box-sizing: border-box;
    overflow: hidden;
  }

  .flexlayout__tabset + .flexlayout__tab {
    border-width: 0px;
    overflow: scroll;
  }

  .inner-flexlayout {
    .flexlayout__tabset {
      border: none;
    }

    .flexlayout__tabset_header_outer {
      background-color: ${({ theme }) => theme.layoutTabSetContainerBg};
      border-color: ${({ theme }) => theme.layoutTabBorder};

      .flexlayout__tabset_header_inner {
        padding: 0 8px;
      }
    }

    .flexlayout__tab_button {
      letter-spacing: 0.2em;
      padding: 0 4px 0 2px;
      .flexlayout__tab_button_trailing {
      }
    }

    .flexlayout__tab_button--selected {
      border-bottom: ${({ theme }) => theme.panelHeaderTabIndicatorWidth}px
        solid ${({ theme }) => theme.panelHeaderTabIndicator};
      color: ${({ theme }) => theme.panelHeaderTabtextSelected} !important;
    }

    .flexlayout__tab_button--unselected {
      color: ${({ theme }) => theme.panelHeaderTabText} !important;
      &:hover {
        color: ${({ theme }) => theme.panelHeaderTabTextHover} !important;
      }
    }
  }

  .flexlayout__tab_button {
    align-items: center;
    box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-grid;
    grid-auto-flow: column;
    margin: 0;
    padding: 0 8px;
  }

  .flexlayout__tab_button--selected {
    color: ${({ theme }) => theme.panelHeaderTabtextSelected};
  }

  .flexlayout__tab_button--unselected h2 {
    color: ${({ theme }) => theme.panelHeaderTabText} !important;
    &:hover {
      color: ${({ theme }) => theme.panelHeaderTabTextHover} !important;
    }
  }

  .flexlayout__tab_button_leading {
    display: inline-block;
    float: left;
  }

  .flexlayout__tab_button_content {
    display: inline-block;
    float: left;
  }

  .flexlayout__tab_button_textbox {
    background-color: ${({ theme }) => theme.panelHeaderEditBg};
    border: none;
    color: ${({ theme }) => theme.panelHeaderTabEditText};
    float: left;
    font-style: italic;
  }
  .flexlayout__tab_button_textbox:focus {
    outline: none;
  }

  .flexlayout__tab_button_trailing {
    display: inline-block;
    float: left;
    height: 8px;
    margin-left: 8px;
    width: 8px;
  }

  .flexlayout__tab_button:hover .flexlayout__tab_button_trailing,
  .flexlayout__tab_button--selected .flexlayout__tab_button_trailing {
    background: none;
    opacity: 0.15;
    &:hover {
      opacity: 0.9;
    }
    &::after {
      height: 17px !important;
      position: absolute;
      top: 50%;
      transform: translate(-2px, calc(-50% - 1px));
      width: 17px !important;
    }
  }

  .flexlayout__tab_button_overflow {
    background: transparent url('../images/more.png') no-repeat left;
    border: none;
    color: lightgray;
    float: left;
    font-family: Arial, sans-serif;
    font-size: 10px;
    height: 15px;
    margin-top: 2px;
    padding-left: 12px;
    width: 20px;
  }

  .flexlayout__tabset_header {
    align-items: center;
    background-color: ${({ theme }) => theme.panelHeaderBg};
    box-shadow: ${({ theme }) => theme.panelHeaderShadow};
    box-sizing: border-box;

    color: ${({ theme }) => theme.panelHeaderTabtextSelected};
    display: grid;
    left: 0;
    padding: 0 0 0 8px;
    position: relative;
    position: absolute;
    right: 0;

    z-index: 2;
  }

  .flexlayout__tabset_header_inner {
    align-items: center;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-gap: 8px;
    grid-template-columns: auto;
    justify-content: flex-start;
    margin-top: -1px;

    svg {
      display: none;
    }
  }

  .flexlayout__tabset_header_outer {
    background-color: ${({ theme }) => theme.panelHeaderBg};
    border-bottom: 1px solid ${({ theme }) => theme.panelHeaderBorder};
    box-sizing: border-box;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
  }

  .flexlayout__tabset-selected {
  }

  .flexlayout__tabset-maximized {
  }

  .flexlayout__tab_floating {
    align-items: center;
    background-color: transparent;
    box-sizing: border-box;
    color: ${({ theme }) => theme.panelHeaderTabText};
    display: flex;
    justify-content: center;
    overflow: auto;
    position: absolute;

    &_inner {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: auto;
    }

    &_inner div {
      margin-bottom: 5px;
      text-align: center;
    }

    &_inner div a {
      color: ${({ theme }) => theme.panelHeaderTabText};
    }
  }

  .flexlayout__tab_toolbar {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0;
    top: 0;
  }

  /*new for floating windows*/

  .flexlayout__floating_window_body {
    bottom: 0;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
  }

  .flexlayout__floating_window_content {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .flexlayout__tab_floating_inner {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
  }

  .flexlayout__tab_floating_inner div {
    margin-bottom: 5px;
    text-align: center;
  }

  .flexlayout__floating_window_tab {
    bottom: 0;
    box-sizing: border-box;
    left: 0;
    overflow: auto;
    position: absolute;
    right: 0;
    top: 0;
  }

  .flexlayout__tab_toolbar > button {
    background: transparent url('../images/maximize.png') no-repeat center;
    border: none;
    height: 20px;
    outline-width: 0;
    width: 20px;

    &.flexlayout__tab_toolbar_button {
      &-min {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE5LjUsMy4wOUwxNSw3LjU5VjRIMTNWMTFIMjBWOUgxNi40MUwyMC45MSw0LjVMMTkuNSwzLjA5TTQsMTNWMTVINy41OUwzLjA5LDE5LjVMNC41LDIwLjkxTDksMTYuNDFWMjBIMTFWMTNINFoiIC8+PC9zdmc+');
        background-size: 1.5rem;
      }

      &-max {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEwLDIxVjE5SDYuNDFMMTAuOTEsMTQuNUw5LjUsMTMuMDlMNSwxNy41OVYxNEgzVjIxSDEwTTE0LjUsMTAuOTFMMTksNi40MVYxMEgyMVYzSDE0VjVIMTcuNTlMMTMuMDksOS41TDE0LjUsMTAuOTFaIiAvPjwvc3ZnPg==');
        background-size: 1.5rem;
      }

      &-float {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTIsMkgxNlYxNkgyVjJNMjIsOFYyMkg4VjE4SDE4VjhIMjJNNCw0VjE0SDE0VjRINFoiIC8+PC9zdmc+');
        background-size: 1.5rem;
        transform: rotateY(180deg);
      }
    }
  }

  .flexlayout__popup_menu {
  }

  .flexlayout__popup_menu_item {
    color: #ddd;
    padding: 2px 10px 2px 10px;
  }

  .flexlayout__popup_menu_item:hover {
    background-color: #444444;
  }

  .flexlayout__popup_menu_container {
    background: #222;
    border: 1px solid #555;
    border-radius: 3px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);
    position: absolute;
    z-index: 1000;
  }

  .flexlayout__border_top {
    background-color: ${({ theme }) => theme.layoutEdgesBg};
    border-bottom: ${({ theme }) => theme.layoutEdgesBorderWidth}px solid
      ${({ theme }) => theme.layoutEdgesBorder};
    box-sizing: border-box;
    overflow: hidden;
  }

  .flexlayout__border_bottom {
    background-color: ${({ theme }) => theme.layoutEdgesBg};
    border-top: ${({ theme }) => theme.layoutEdgesBorderWidth}px solid
      ${({ theme }) => theme.layoutEdgesBorder};
    box-sizing: border-box;
    overflow: hidden;
  }
  .flexlayout__border_left {
    background-color: ${({ theme }) => theme.layoutEdgesBg};
    border-right: ${({ theme }) => theme.layoutEdgesBorderWidth}px solid
      ${({ theme }) => theme.layoutEdgesBorder};
    box-sizing: border-box;
    overflow: hidden;
  }

  .flexlayout__border_right {
    background-color: ${({ theme }) => theme.layoutEdgesBg};
    border-left: ${({ theme }) => theme.layoutEdgesBorderWidth}px solid
      ${({ theme }) => theme.layoutEdgesBorder};
    box-sizing: border-box;
    height: calc(
      100% + ${({ theme }) => theme.dividerSize}px +
        ${({ theme }) => theme.dividerSize}px
    ) !important;
    overflow: hidden;
    transform: translate(
      ${({ theme }) => theme.dividerSize}px,
      -${({ theme }) => theme.dividerSize}px
    );
  }

  .flexlayout__border_inner_bottom {
    display: flex;
  }

  .flexlayout__border_inner_left {
    position: absolute;
    right: 23px;
    transform: rotate(-90deg);
    transform-origin: top right;
    white-space: nowrap;
  }

  .flexlayout__border_inner_right {
    align-items: flex-start;
    display: grid;
    justify-items: center;
    margin-top: 8px;
    white-space: wrap;
    h2 {
      display: none;
    }
    .counter-badge {
      margin-right: 0px;
      padding-right: 0px;
      > span {
        left: -10px;
        position: absolute;
        right: auto;
        top: -13px;
        z-index: 9999999;
      }
    }
  }

  .flexlayout__border_button {
    background-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    color: white;

    cursor: pointer;
    display: inline-block;
    padding: 8px;
    white-space: nowrap;
    svg {
      fill: white;
    }
  }

  .flexlayout__border_button--selected {
    color: ${({ theme }) => theme.layoutEdgestextSelected};
    svg path {
      fill: ${({ theme }) => theme.layoutEdgestextSelected} !important;
    }
  }

  .flexlayout__border_button--unselected {
  }

  .flexlayout__border_button_leading {
    display: inline;
    float: left;
  }

  .flexlayout__border_button_content {
    display: inline-block;
  }

  .flexlayout__border_button_textbox {
    background-color: #ddd;
    border: none;
    color: green;
    float: left;
  }
  .flexlayout__border_button_textbox:focus {
    outline: none;
  }

  .flexlayout__border_button_trailing {
    display: inline-block;
    height: 10px;
    margin-left: 6px;
    width: 10px;
  }

  .flexlayout__border_button:hover .flexlayout__border_button_trailing,
  .flexlayout__border_button--selected .flexlayout__border_button_trailing {
    background: transparent url('../images/close_white.png') no-repeat center;
  }

  .flexlayout__border_toolbar_left {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column-reverse;
    left: 0;
    position: absolute;
    right: 0;
  }

  .flexlayout__border_toolbar_right {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column-reverse;
    left: 0;
    position: absolute;
    right: 0;
  }

  .flexlayout__border_toolbar_top {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    right: 0;
    top: 0;
  }

  .flexlayout__border_toolbar_bottom {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    right: 0;
    top: 0;
  }
`}`;
