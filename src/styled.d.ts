// import original module declarations
import 'styled-components';

import { ThemeVariablesInterface } from './theme/types';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeVariablesInterface {}
}
