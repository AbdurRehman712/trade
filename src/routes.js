import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Staff Management",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
    innerroutes: [
      {
        path: "/test",
        name: "Add Staff",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Manage Staff",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      }
    ]
  },
  {
    path: "/icons",
    name: "Currency Management",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
    innerroutes: [
      {
        path: "/test",
        name: "Add Currencies",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Manage Currencies",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
    ]
  },
  {
    path: "/map",
    name: "Company Account",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin",
    innerroutes: [
      {
        path: "/test",
        name: "Add Account",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Set Starting Balance",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Manage Account",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      }
    ]
  },
  {
    path: "/notifications",
    name: "Customer Management",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
    innerroutes: [
      {
        path: "/test",
        name: "Add Customer",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Manage Customers",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Handle Installments",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Staff Role",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      }
    ]
  },
  {
    path: "/user-profile",
    name: "Printing Details",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
    innerroutes: [
      {
        path: "/test",
        name: "Add Template",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Manage Template",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      }
    ]
  },
  {
    path: "/tables",
    name: "Summary Page",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
    innerroutes: [
      {
        path: "/test",
        name: "Add Summary",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Manage Summary",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      }
    ]
  },
  {
    path: "/typography",
    name: "Accounts Details",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
    innerroutes: [
      {
        path: "/test",
        name: "Debits",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Credits",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      }
    ]
  },
  {
    path: "/rtl-support",
    name: "Reporting",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl",
    innerroutes: [
      {
        path: "/test",
        name: "View Report",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/test1",
        name: "Manage Report",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-atom",
        component: Dashboard,
        layout: "/admin",
      }
    ]
  }
];
export default routes;
