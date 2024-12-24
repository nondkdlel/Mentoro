import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DefaultLayout from "@layout/Default";

import Home from "@page/home";
import Jobs from "@page/jobs/index";

import Specialist from "@page/specialist";
import SpecialistDetail from "@page/specialist/detail";
import SpecialistPayment from "@page/specialist/payment";

import Vod from "@page/vod/index";
// import Alarm from "@page/alarm/index";
import Message from "@page/message/index";

import SellerMypage from "@page/mypage/seller";
import ReviewCreate from "@page/mypage/seller/sales/ReviewCreate";
import ServiceEnrollStep1 from "@page/mypage/seller/ServiceEnrollStep1";
import ServiceEnrollStep2 from "@page/mypage/seller/ServiceEnrollStep2";
import ServiceEnrollStep3 from "@page/mypage/seller/ServiceEnrollStep3";
import PortfolioCreate from "@page/mypage/seller/portfolio/PortfolioCreate";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/specialist",
        element: <Specialist />,
      },
      {
        path: "/specialist/detail",
        element: <SpecialistDetail />,
      },
      {
        path: "/specialist/payment",
        element: <SpecialistPayment />,
      },
      {
        path: "/vod",
        element: <Vod />,
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/mypage",
        children: [
          {
            path: "seller",
            element: <SellerMypage />,
          },
          {
            path: "seller/review/create",
            element: <ReviewCreate />,
          },
          {
            path: "seller/portfolio/create",
            element: <PortfolioCreate />,
          },
          {
            path: "service/enroll/step1",
            element: <ServiceEnrollStep1 />,
          },
          {
            path: "service/enroll/step2",
            element: <ServiceEnrollStep2 />,
          },
          {
            path: "service/enroll/step3",
            element: <ServiceEnrollStep3 />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
