import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DefaultLayout from "@layout/Default";

import Home from "@page/home";
import Jobs from "@page/jobs/index";
import Specialist from "@page/specialist/index";
import Vod from "@page/vod/index";
import Alarm from "@page/alarm/index";
import Message from "@page/message/index";
import Mypage from "@page/mypage/index";

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
        path: "/vod",
        element: <Vod />,
      },
      {
        path: "/alarm",
        element: <Alarm />,
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
