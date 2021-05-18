import Backdrop from '@material-ui/core/Backdrop';
import { withStyles } from '@material-ui/core/styles';

export const LoadingBackdrop = withStyles(
  {
    root: {
      zIndex: 999999,
    },
  },
  { withTheme: true }
)(Backdrop);
