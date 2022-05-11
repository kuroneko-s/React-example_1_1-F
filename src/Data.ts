import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilBill,
  // @ts-ignore
} from "@iconscout/react-unicons";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "CUstomers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

export const CardsData = [
  {
    title: "Sales",
    barValue: "70%",
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    createDate: new Date().getTime() - 369472,
    endAngle: 360 * 0.7,
  },
  {
    title: "Revenue",
    barValue: "80%",
    value: "14,270",
    png: UilBill,
    series: [
      {
        name: "Revenue",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    createDate: new Date().getTime() - 3217368,
    endAngle: 360 * 0.8,
  },
  {
    title: "Expenses",
    barValue: "60%",
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    createDate: new Date().getTime() - 32163982,
    endAngle: 360 * 0.6,
  },
];
