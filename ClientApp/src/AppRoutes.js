import DownloadAudio from "./components/DownloadAudio";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/audio',
    element: <DownloadAudio />
  }

];

export default AppRoutes;
