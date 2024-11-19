import { Counter } from "./components/Counter";
import DownloadAudio from "./components/DownloadAudio";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/audio',
    element: <DownloadAudio />
  }

];

export default AppRoutes;
