// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgColor: string;
      innerBgColor: string;
      pointColor: string;
      pointColorOpacity: string;
      charts: {
        first: string;
        second: string;
        third: string;
      };
    };
  }
}
