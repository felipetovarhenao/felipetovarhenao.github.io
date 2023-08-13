import ReactGA from "react-ga4";

const eventTracker = (name, options = {}) => {
  ReactGA.event(name, {
    action: "click",
    ...options,
  });
};
export default eventTracker;
