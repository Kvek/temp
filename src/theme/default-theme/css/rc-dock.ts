import { createGlobalStyle, css } from 'styled-components';

export const RCDock = createGlobalStyle`${css`
  body > .dragging-layer {
    position: absolute !important;
    z-index: 9999;
    overflow: visible;
    margin: 0;
    padding: 0;
    border: none;
    pointer-events: none;
    opacity: 0.6;
    font-size: 14px;
    line-height: 1.5;
    white-space: nowrap;
    --default-background-color: white;
  }
  body > .dragging-layer > *:first-child {
    pointer-events: none !important;
    overflow: hidden !important;
    transform: translate(-50%, -50%) !important;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), inset 0 0 8px rgba(0, 0, 0, 0.1);
  }
  body > .dragging-layer > .dragging {
    opacity: 1 !important;
  }
  body > .dragging-layer > div:last-child {
    position: absolute;
    left: 12px;
    top: 12px;
  }
  .drag-initiator {
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
  }
  .drag-accept-reject::after {
    content: '🚫';
  }
  .dock-layout {
    display: flex;
    flex-grow: 1;
  }
  .dock {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    display: flex;
  }
  .dock-bar,
  .dock-nav-container {
    font-size: 1rem;
    line-height: 1.5;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    outline: none;
    zoom: 1;
    transition: padding 0.45s;
  }
  .dock-nav-container {
    flex-grow: 1;
    flex-shrink: 0;
    min-width: min-content;
    padding: 0 0 0 4px;
    height: ${({ theme }) => theme.panelHeader_Height};
  }
  .dock-ink-bar {
    position: absolute;
    box-sizing: border-box;
    margin-top: -3px;
    background-color: ${({ theme }) => theme.panelHeaderTabIndicator};
    transform-origin: 0 0;
    width: 0;
    height: 0;
  }
  .dock-ink-bar-animated {
    transition: transform 0.25s cubic-bezier(0.35, 0, 0.25, 1),
      left 0.25s cubic-bezier(0.35, 0, 0.25, 1),
      top 0.25s cubic-bezier(0.35, 0, 0.25, 1),
      height 0.25s cubic-bezier(0.35, 0, 0.25, 1),
      width 0.25s cubic-bezier(0.35, 0, 0.25, 1);
  }
  .dock-tab-prev,
  .dock-tab-next {
    color: #888;
    user-select: none;
    -webkit-user-select: none;
    z-index: 1;
    line-height: 30px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    position: absolute;
  }
  .dock-tab-prev-icon,
  .dock-tab-next-icon {
    position: relative;
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    line-height: inherit;
    vertical-align: baseline;
    text-align: center;
    text-transform: none;
    font-smoothing: antialiased;
    text-stroke-width: 0;
    font-family: sans-serif;
  }
  .dock-tab-prev-icon:before,
  .dock-tab-next-icon:before {
    display: block;
  }
  .dock-tab-btn-disabled {
    cursor: default;
    color: #ccc;
  }
  .dock-nav-wrap {
    overflow: hidden;
    width: 100%;
  }
  .dock-nav {
    box-sizing: border-box;
    padding-left: 0;
    position: relative;
    margin: 0;
    float: left;
    list-style: none;
    display: inline-block;
    transform-origin: 0 0;
  }
  .dock-nav-animated {
    transition: transform 0.25s cubic-bezier(0.35, 0, 0.25, 1);
  }
  .dock-nav:before,
  .dock-nav:after {
    display: table;
    content: ' ';
  }
  .dock-nav:after {
    clear: both;
  }
  .dock-tab {
    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    box-sizing: border-box;
    position: relative;
    display: block;
    min-width: 30px;
    height: ${({ theme }) => theme.panelHeader_Height};
    background: ${({ theme }) => theme.tabsBg};
    color: ${({ theme }) => theme.panelHeaderTabText};
    text-align: center;
    transition: color 0.25s cubic-bezier(0.35, 0, 0.25, 1);
    padding: 0;
    cursor: pointer;
    margin-right: 0px;
    float: left;
    outline: none;
  }
  .dock-tab.dragging {
    opacity: 0.3;
  }
  .dock-tab > div {
    padding: 0px 4px;
    height: 100%;
    display: grid;
    align-content: center;
  }
  .dock-tab:hover {
    color: ${({ theme }) => theme.panelHeaderTabTextHover};
  }
  .dock-tab-active,
  .dock-tab-active:hover {
    color: ${({ theme }) => theme.panelHeaderTabtextSelected};
    cursor: default;
    transform: translateZ(0);
  }
  .dock-tab-disabled {
    cursor: default;
    color: #ccc;
  }
  .dock-tab-disabled:hover {
    color: #ccc;
  }
  .dock-content {
    zoom: 1;
    flex: 1 1 0;
  }
  .dock-content .dock-tabpane {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .dock-content-animated {
    transition: transform 0.25s cubic-bezier(0.35, 0, 0.25, 1),
      margin-left 0.25s cubic-bezier(0.35, 0, 0.25, 1),
      margin-top 0.25s cubic-bezier(0.35, 0, 0.25, 1);
    display: flex;
    will-change: transform;
  }
  .dock-content-animated .dock-tabpane {
    flex-shrink: 0;
  }
  .no-flexbox .dock-content {
    transform: none !important;
    overflow: auto;
  }
  .no-csstransitions .dock-tabpane-inactive,
  .no-flexbox .dock-tabpane-inactive,
  .dock-content-no-animated .dock-tabpane-inactive {
    display: none;
  }
  .dock-top {
    flex-direction: column;
  }
  .dock-top .dock-content {
    width: 100%;
    height: 0;
  }
  .dock-top .dock-bar {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    flex: 0 0 auto;
    background: ${({ theme }) => theme.panelHeaderBg};
    border-bottom: 1px solid ${({ theme }) => theme.panelHeaderBorder};
    box-shadow: ${({ theme }) => theme.panelHeaderShadow};
  }
  .dock-top .dock-bar:focus-within {
    box-shadow: 0 0 1px #108ee9;
  }
  .dock-top .dock-nav-container-scrolling {
    padding-left: 32px;
    padding-right: 32px;
  }
  .dock-nav-scroll {
    display: flex;
  }
  .dock-nav-scroll > * {
    flex: 0 0 auto;
  }
  .dock-top .dock-nav-swipe {
    position: relative;
    left: 0;
  }
  .dock-top .dock-nav-swipe .dock-nav {
    display: flex;
    flex: 1;
    width: 100%;
  }
  .dock-top .dock-nav-swipe .dock-nav .dock-tab {
    display: flex;
    flex-shrink: 0;
    margin-right: 0;
    padding: 8px 0;
    justify-content: center;
  }
  .dock-top .dock-content-animated {
    flex-direction: row;
  }
  .dock-top .dock-tab-next {
    right: 2px;
  }
  .dock-top .dock-tab-next-icon:before {
    content: '>';
    font-family: 'Fredoka One', sans-serif;
  }
  .dock-top .dock-tab-prev {
    left: 0;
  }
  .dock-top .dock-tab-prev-icon:before {
    content: '<';
    font-family: 'Fredoka One', sans-serif;
  }
  .dock-top .dock-tab-prev,
  .dock-top .dock-tab-next {
    margin-right: -2px;
    width: 0;
    height: 0;
    top: 0;
    text-align: center;
    opacity: 0;
    transition: width 0.3s, height 0.3s, opacity 0.3s;
  }
  .dock-top .dock-tab-arrow-show {
    opacity: 1;
    width: 32px;
    height: 100%;
  }
  .dock-top .dock-ink-bar {
    height: ${({ theme }) => theme.panelHeaderTabIndicatorWidth}px;
    bottom: 0;
    left: 0;
  }
  .dock-tab-close-btn {
    position: absolute;
    cursor: pointer;
    font-family: 'Fredoka One', sans-serif;
    color: #bbb;
    right: 2px;
    font-size: 12px;
    width: 16px;
    text-align: center;
    top: 6px;
    opacity: 0.3;
    outline: none;
    transition: all 0.25s ease-in-out;
  }
  .dock-tab-close-btn:before {
    content: 'X';
  }
  .dock-tab-close-btn:hover,
  .dock-tab-close-btn:focus {
    color: #666;
    transform: scale(1.1, 1.1);
  }
  .dock-tab:hover .dock-tab-close-btn,
  .dock-tab-close-btn:focus {
    opacity: 1;
    color: #999;
  }
  .dock-tab-hit-area {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -5px;
    right: -5px;
  }
  .dock-pane-cache {
    width: 100%;
    height: 100%;
  }
  body.dock-dragging {
    user-select: none;
    -webkit-user-select: none;
  }
  body.dock-dragging iframe {
    pointer-events: none;
  }
  .dock-panel {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    background: ${({ theme }) => theme.layoutTabBg};
    border: ${({ theme }) => theme.layoutTabBorderWidth}px solid
      ${({ theme }) => theme.layoutTabBorder};
  }
  .dock-panel.dragging {
    opacity: 0.3;
  }
  .dock-panel-drag-size {
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: 300;
  }
  .dock-panel-drag-size-t-l {
    top: -1px;
    left: -1px;
    cursor: nwse-resize;
  }
  .dock-panel-drag-size-t-r {
    top: -1px;
    right: -1px;
    cursor: nesw-resize;
  }
  .dock-panel-drag-size-b-l {
    bottom: -1px;
    left: -1px;
    cursor: nesw-resize;
  }
  .dock-panel-drag-size-b-r {
    // background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"%3E%3Cpath fill="rgba(0,0,0,0.1)" d="M2 12 L12 2 L12 12z"/%3E%3C/svg%3E');
    bottom: -1px;
    right: -1px;
    width: 14px;
    height: 14px;
    cursor: nwse-resize;
  }
  .dock-box {
    box-sizing: border-box;
    display: flex;
    align-items: stretch;
  }
  .divider-box {
    box-sizing: border-box;
    display: flex;
    align-items: stretch;
  }
  .divider-box > *:nth-child(odd) {
    flex: 1 1 auto;
  }
  .dock-divider {
    box-sizing: border-box;
    flex: 0 0 ${({ theme }) => theme.dividerSize}px;
    background: rgba(0, 0, 0, 0);
    z-index: 1;
  }
  .dock-hbox > .dock-divider {
    transform: scaleX(3);
    cursor: ew-resize;
  }
  .dock-vbox {
    flex-direction: column;
  }
  .dock-vbox > .dock-divider {
    transform: scaleY(3);
    cursor: ns-resize;
  }
  .dock-fbox {
    pointer-events: none;
    z-index: 200;
  }
  .dock-fbox > .dock-panel {
    position: absolute;
    pointer-events: visible;
    box-shadow: 0 0 4px #aaaaaa;
  }
  .dock-fbox > .dock-panel.dragging {
    opacity: 0.8;
    pointer-events: none;
  }
  .dock-mbox {
    z-index: 250;
    width: 100%;
    height: 100%;
  }
  .dock-mbox > .dock-panel {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 4px #aaaaaa;
  }
  .dock-mbox.dock-mbox-show {
    visibility: visible;
    animation: dock-mbox-show 0.2s ease;
  }
  .dock-mbox.dock-mbox-hide {
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
    animation: dock-mbox-hide 0.2s ease;
  }
  @keyframes dock-mbox-show {
    from {
      transform: scale(0.9, 0.9);
      visibility: visible;
    }
    to {
      transform: scale(1, 1);
      visibility: visible;
    }
  }
  @keyframes dock-mbox-hide {
    from {
      transform: scale(1, 1);
      visibility: visible;
      opacity: 1;
    }
    to {
      transform: scale(0.9, 0.9);
      visibility: visible;
      opacity: 0;
    }
  }
  .dock-layout {
    overflow: hidden;
    position: relative;
  }
  .dock-layout > .dock-box {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .dock-layout > .dock-drop-indicator {
    position: absolute;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 400;
    border: solid 1px white;
    background: ${({ theme }) => theme.panelHeaderTabText};
    opacity: 0.5;
    box-shadow: 0 0 4px #ccc;
    display: none;
    transition: all 0.1s ease-out;
  }
  .dock-drop-edge {
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: white;
    border: none;
    opacity: 0.01;
  }
  .dock-drop-layer {
    position: absolute;
    pointer-events: none;
    top: 30px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .dock-drop-layer .dock-drop-square {
    position: absolute;
    box-sizing: border-box;
    pointer-events: visible;
    z-index: 300;
    width: 32px;
    height: 32px;
    font-family: 'Fredoka One', sans-serif;
    color: #ccc;
    background: white;
    border: 1px solid transparent;
    left: calc(50% - 16px);
    top: calc(50% - 16px);
  }
  .dock-drop-layer .dock-drop-square .dock-drop-square-box {
    box-sizing: border-box;
    border: 1px solid #ccc;
    width: 100%;
    height: 100%;
  }
  .dock-drop-layer .dock-drop-square::before {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    line-height: 30px;
    text-align: center;
  }
  .dock-drop-layer .dock-drop-float {
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    opacity: 0.01;
  }
  .dock-drop-layer .dock-drop-left {
    left: calc(50% - 48px);
  }
  .dock-drop-layer .dock-drop-left.dock-drop-deep {
    left: calc(50% - 64px);
    width: 16px;
  }
  .dock-drop-layer .dock-drop-left::before {
    content: '>';
    transform: rotate(180deg);
  }
  .dock-drop-layer .dock-drop-right {
    left: calc(50% + 16px);
  }
  .dock-drop-layer .dock-drop-right.dock-drop-deep {
    left: calc(50% + 48px);
    width: 16px;
  }
  .dock-drop-layer .dock-drop-right::before {
    content: '>';
  }
  .dock-drop-layer .dock-drop-top {
    top: calc(50% - 48px);
  }
  .dock-drop-layer .dock-drop-top.dock-drop-deep {
    top: calc(50% - 64px);
    height: 16px;
  }
  .dock-drop-layer .dock-drop-top.dock-drop-deep::before {
    line-height: 14px;
  }
  .dock-drop-layer .dock-drop-top::before {
    content: '>';
    transform: rotate(270deg);
  }
  .dock-drop-layer .dock-drop-bottom {
    top: calc(50% + 16px);
  }
  .dock-drop-layer .dock-drop-bottom.dock-drop-deep {
    top: calc(50% + 48px);
    height: 16px;
  }
  .dock-drop-layer .dock-drop-bottom.dock-drop-deep::before {
    line-height: 14px;
  }
  .dock-drop-layer .dock-drop-bottom::before {
    content: '>';
    transform: rotate(90deg);
  }
  .dock-drop-layer .dock-drop-square-dropping {
    background: #91d5ff;
    color: white;
  }
  .dock-panel.dock-panel-dropping .dock-tab-close-btn {
    pointer-events: none;
  }
  .dock-panel-max-btn {
    height: 15px;
    width: 15px;
    font-family: 'Fredoka One', sans-serif;
    margin: 2px 2px 2px 0;
    padding: 6px 4px 4px 2px;
    opacity: 0.2;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    outline: none;
  }
  .dock-panel-max-btn:before {
    position: absolute;
    content: ' ';
    border: 2px solid #888;
    border-radius: 1px;
    width: 9px;
    height: 9px;
  }
  .dock-panel-max-btn:hover,
  .dock-panel-max-btn:focus {
    opacity: 1;
    color: #999;
  }
  .dock-panel-max-btn:hover:before,
  .dock-panel-max-btn:focus:before {
    border-color: #999;
  }
  .dock-panel-max-btn:hover {
    transform: scale(1.1);
  }
  .dock-mbox .dock-panel-max-btn:before {
    border: none;
    content: '-';
    color: #666;
    font-size: 20px;
    line-height: 4px;
  }
  .dock-mbox .dock-panel-max-btn:hover:before,
  .dock-mbox .dock-panel-max-btn:focus:before {
    color: #999;
  }
  .dock-panel.dock-style-place-holder {
    border: none;
  }
  .dock-panel.dock-style-place-holder .dock-bar {
    display: none;
  }
  .dock-layout > :not(.dock-fbox) .dock-panel.dock-style-headless {
    border: none;
  }
  .dock-layout > :not(.dock-fbox) .dock-panel.dock-style-headless .dock-bar {
    position: absolute;
    z-index: 1;
    opacity: 0;
    height: 20px;
    width: 100%;
    transition: all 0.15s ease-in-out;
  }
  .dock-layout
    > :not(.dock-fbox)
    .dock-panel.dock-style-headless
    .dock-bar:hover,
  .dock-layout
    > :not(.dock-fbox)
    .dock-panel.dock-style-headless.dock-panel-dropping
    .dock-bar {
    opacity: 1;
    height: 31px;
  }
  .dock-layout
    > :not(.dock-fbox)
    .dock-panel.dock-style-headless
    .dock-content {
    height: 100%;
  }
  .dock-panel.dock-style-main {
    border: none;
  }
  .dock-panel.dock-style-main .dock-bar {
    background: none;
    border-bottom: 1px solid #eee;
  }
  .dock-panel.dock-style-main .dock-tab {
    background: #fff;
  }
  .dock-panel.dock-style-card .dock-tab {
    margin-right: 2px;
    border: 1px solid #ddd;
    border-radius: 5px 5px 0 0;
  }
  .dock-panel.dock-style-card .dock-tab.dock-tab-active {
    border-bottom: 1px solid #fff;
    background: #fff;
  }
  .dock-panel.dock-style-card .dock-bar {
    border-bottom: 1px solid #ddd;
    overflow: visible;
  }
  .dock-panel.dock-style-card .dock-nav-container {
    height: 35px;
    overflow: visible;
    max-width: calc(100% - 28px);
  }
  .dock-panel.dock-style-card .dock-nav-wrap {
    overflow: visible;
    padding-top: 6px;
  }
  .dock-panel.dock-style-card .dock-ink-bar {
    /* hide animated ink bar */
    background: #fff;
    opacity: 0;
  }
  .dock-panel.dock-style-card .dock-tab-hit-area {
    /* cover the border area */
    left: -2px;
    right: -2px;
  }
  .dock-panel.dock-style-card .dock-panel-max-btn {
    margin-top: 4px;
  }
  .dock-panel.dock-style-card .dock-tab-close-btn {
    right: 0;
    font-size: 10px;
    top: 8px;
  }
  .dock-tabpane > div {
    // margin: 20px;
  }
  .top-panel {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  iframe {
    box-sizing: border-box;
    border: none;
    width: 100%;
    height: 100%;
  }

  .dock-style-setWidth {
    flex-grow: 0 !important;
    flex-shrink: 0 !important;
  }
`}`;
