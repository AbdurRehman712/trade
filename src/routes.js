import Dashboard from "views/Dashboard.jsx";  
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";
import AddStaff from "views/AddStaff.jsx";
import ManageStaff from "views/ManageStaff.jsx";
import AddCurrency from "views/AddCurrency.jsx";
import ManageCurrencies from "views/ManageCurrencies.jsx";
import AddAccount from "views/AddAccount.jsx";
import ManageAccounts from "views/ManageAccounts.jsx";
import AddCustomer from "views/AddCustomer.jsx";
import ManageCustomers from "views/ManageCustomers.jsx";
import ReceiveInstallments from "views/ReceiveInstallments.jsx";

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
    component: AddStaff,
    layout: "/admin",
  },
  {
    path: "/managestaff",
    name: "Manage Staff",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: ManageStaff,
    layout: "/admin",
  },
  {
    path: "/managecurrencies",
    name: "Currency Management",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: ManageCurrencies,
    layout: "/admin",
  },
  {
    path: "/addcurrency",
    name: "Add Currencies",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: AddCurrency,
    layout: "/admin",
  },
  {
    path: "/managecurrencies",
    name: "Manage Currencies",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: ManageCurrencies,
    layout: "/admin",
  },
  {
    path: "/manageaccounts",
    name: "Company Account",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: ManageAccounts,
    layout: "/admin",
  },
  {
    path: "/addaccount",
    name: "Add Account",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: AddAccount,
    layout: "/admin",
  },
  {
    path: "/manageaccounts",
    name: "Manage Account",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: ManageAccounts,
    layout: "/admin",
  },
  {
    path: "/managecustomer",
    name: "Customer Management",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: ManageCustomers,
    layout: "/admin",
  },
  {
    path: "/addcustomer",
    name: "Add Customer",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: AddCustomer,
    layout: "/admin",
  },
  {
    path: "/managecustomer",
    name: "Manage Customers",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: ManageCustomers,
    layout: "/admin",
  },
  {
    path: "/receiveinstallments",
    name: "Receive Installments",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: ReceiveInstallments,
    layout: "/admin",
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
