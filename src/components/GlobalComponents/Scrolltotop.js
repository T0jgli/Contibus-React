import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga'

const Scrolltotop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    ReactGA.pageview(pathname)
  }, [pathname]);

  return null;
}

export default Scrolltotop
