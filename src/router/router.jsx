import Dashboard from "@/components/admin/Dashboard";
import ProfileSettings from "@/components/MyParcelsComponents/ProfileSettings";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import ResetPassword from "@/pages/auth/ResetPassword";
import SelectTravelar from "@/pages/auth/SelectTravelar";
import SetupPersonalInformation from "@/pages/auth/SetupPersonalInformation";
import SignUp from "@/pages/auth/SignUp";
import Messages from "@/pages/chat/Messages";
import Home from "@/pages/home/Home";
import MyParcels from "@/pages/MyParcel/MyParcels";
import SendParcel from "@/pages/send-parcel/SendParcel";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-parcels",
        element: <MyParcels />,
      },
      {
        path: "/profile-settings",
        element: <ProfileSettings />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/send-parcel",
        element: <SendParcel />,
      },
    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/select-travelar",
    element: <SelectTravelar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/setup-personal-information",
    element: <SetupPersonalInformation />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

export default router;
