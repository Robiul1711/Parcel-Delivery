import Dashboard from "@/components/admin/Dashboard";
import ProfileSettings from "@/components/MyParcelsComponents/ProfileSettings";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import SelectTravelar from "@/pages/auth/SelectTravelar";
import Home from "@/pages/home/Home";
import MyParcels from "@/pages/MyParcel/MyParcels";

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
]);

export default router;
