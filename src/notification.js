import Dashboard from "views/Dashboard.jsx";  

var routes = [
  {
    path: "/dashboard",
    name: "Staff Management",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/addstaff",
    name: "Add Staff",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: Dashboard,
    layout: "/admin",
  },
];
export default routes;
