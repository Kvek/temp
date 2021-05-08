import { createGlobalStyle, css } from 'styled-components';

export const DatepickerStyle = createGlobalStyle`${css`
  .react-datepicker-popper,
  .react-datepicker-inline {
    overflow: visible;
    z-index: 9999 !important;

    .react-datepicker {
      background: ${({ theme }) => theme.datePopperBodyBg};
      border: 1px solid ${({ theme }) => theme.datePopperBodyBorder};
      box-shadow: ${({ theme }) => theme.shadows[3]};
      color: ${({ theme }) => theme.datePopperBodyText};
      display: flex;
      display: grid;
      grid-auto-flow: column;
      grid-auto-rows: 250px;
      overflow: visible;
      z-index: 999;

      div.react-datepicker__triangle {
        border-bottom-color: ${({ theme }) => theme.datePopperTriBg};
        &::before {
          border-bottom-color: ${({ theme }) => theme.datePopperTriBorder};
        }
      }
    }

    .react-datepicker__header {
      background-color: ${({ theme }) => theme.datePopperHeaderBg};
      border-bottom: 1px solid ${({ theme }) => theme.datePopperHeaderBg};
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      box-shadow: ${({ theme }) => theme.shadows[1]};
      padding-top: 2px;

      &--time {
        padding-bottom: 5px;
        padding-top: 25px;
      }
    }

    .react-datepicker__current-month {
      height: 18px;
      line-height: 18px;
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header {
      color: ${({ theme }) => theme.datePopperHeaderSpinnerText};
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: ${({ theme }) => theme.fontRg};
      font-weight: ${({ theme }) => theme.fontWeightR};
      letter-spacing: ${({ theme }) => theme.letterSpacingLg};
    }

    .react-datepicker-time__header {
    }

    .react-datepicker__navigation {
      font-size: 0px;
      line-height: inherit;
      text-align: center;
      top: 5px;

      &--previous {
        border-right-color: ${({ theme }) => theme.datePopperHeaderBorder};

        &:hover {
        }

        &--disabled,
        &--disabled:hover {
        }
      }

      &--next {
        border-left-color: ${({ theme }) => theme.datePopperHeaderBorder};
        &--with-time:not(.react-datepicker__navigation--next--with-today-button) {
          right: 100px;
        }

        &:hover {
        }

        &--disabled,
        &--disabled:hover {
        }
      }

      &--years {
        &-previous {
          border-top-color: ${({ theme }) => theme.datePopperHeaderBorder};

          &:hover {
          }
        }

        &-upcoming {
          border-bottom-color: ${({ theme }) => theme.datePopperHeaderBorder};

          &:hover {
          }
        }
      }
    }

    .react-datepicker__month-container {
      width: 100%;
    }

    .react-datepicker__month {
    }

    .react-datepicker__time-container {
      border-left: 1px solid ${({ theme }) => theme.datePopperTimeBorder};

      &--with-today-button {
      }

      .react-datepicker__time {
        background: ${({ theme }) => theme.datePopperTimeList};
        height: 207px;
        overflow: scroll;

        .react-datepicker__time-box {
          ul.react-datepicker__time-list {
            height: auto !important;
            overflow: scroll;

            li.react-datepicker__time-list-item {
              color: ${({ theme }) => theme.datePopperTimeListText};
              font-family: ${({ theme }) => theme.fontFamily};
              font-size: ${({ theme }) => theme.fontRg};
              height: 20px;
              letterspacingrg: ${({ theme }) => theme.letterSpacingRg};
              line-height: 20px;
              &:hover {
                background-color: ${(props) =>
                  props.theme.datePopperTimeListHover};
                color: ${({ theme }) => theme.datePopperTimeListHoverText};
              }
              &--selected {
                background-color: ${(props) =>
                  props.theme.datePopperTimeListSelected};
                border: none;
                color: ${({ theme }) => theme.datePopperTimeListSelectedText};
                &:hover {
                  background-color: ${(props) =>
                    props.theme.datePopperTimeListSelected};
                  color: ${(props) =>
                    props.theme.datePopperTimeListSelectedText}!important;
                }
              }
              &--disabled {
                &:hover {
                  background-color: transparent;
                }
              }
            }
          }
        }
      }
    }
  }

  .react-datepicker__week-number {
    &.react-datepicker__week-number--clickable {
      &:hover {
        border-radius: ${({ theme }) => theme.defaultTextFieldBorderRadius};
      }
    }
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    box-sizing: content-box;
    color: ${({ theme }) => theme.datePopperHeaderText};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontRg};
    font-weight: ${({ theme }) => theme.fontWeightR};
    height: 24px;
    letterspacingrg: ${({ theme }) => theme.letterSpacingRg};
    line-height: 24px;
    margin: 0px;
    width: 24px;
  }

  .react-datepicker__day {
    border-radius: 50% !important;
    color: ${({ theme }) => theme.datePopperDateText};
    font-weight: ${({ theme }) => theme.fontWeightB};
    outline: none !important;

    &:hover {
      background-color: ${({ theme }) => theme.datePopperDateTextHoverBg};
      color: ${({ theme }) => theme.datePopperDateTextHoverText};
    }

    &--today {
      background-color: ${({ theme }) => theme.datePopperTodayBg};
      color: ${({ theme }) => theme.datePopperTodayText};
      font-weight: bold;
    }

    &--highlighted {
      background-color: ${({ theme }) => theme.datePopperHighlightedBg};
      color: ${({ theme }) => theme.datePopperHighlightedText};

      &:hover {
      }
    }

    &--selected,
    &--in-selecting-range,
    &--in-range {
      background-color: ${({ theme }) => theme.datePopperSelectedBg};
      border-color: transparent !important;
      color: ${({ theme }) => theme.datePopperSelectedText};

      &:hover {
      }
    }

    &--keyboard-selected {
      color: #fff;

      &:hover {
      }
    }

    &--in-selecting-range:not(&--in-range) {
    }

    &--in-range:not(&--in-selecting-range) {
      .react-datepicker__month--selecting-range & {
        background-color: ${({ theme }) => theme.datePickerBg};
      }
    }

    &--disabled {
      color: ${({ theme }) => theme.transparentInverse[500]};

      &:hover {
        background-color: transparent;
      }
    }
  }

  .react-datepicker__input-container {
  }

  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    &:hover {
      .react-datepicker__year-read-view--down-arrow,
      .react-datepicker__month-read-view--down-arrow {
      }

      &--down-arrow {
        border-top-color: ${({ theme }) => theme.transparentInverse[500]};
      }

      .react-datepicker__year-dropdown,
      .react-datepicker__month-dropdown,
      .react-datepicker__month-year-dropdown {
        &:hover {
        }

        &--scrollable {
        }

        .react-datepicker__year-option,
        .react-datepicker__month-option,
        .react-datepicker__month-year-option {
          &:first-of-type {
          }

          &:last-of-type {
          }

          &:hover {
            background-color: ${({ theme }) => theme.transparentInverse[500]};

            .react-datepicker__navigation--years-upcoming {
            }

            .react-datepicker__navigation--years-previous {
            }
          }

          &--selected {
          }
        }
      }
    }
  }

  .react-datepicker__close-icon {
    background-color: transparent;

    &::after {
    }
  }

  .react-datepicker__today-button {
  }

  .react-datepicker__portal {
    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
    }
  }
`}`;
