"use client";
import { useEffect, createContext } from "react";
import { init, track, identify, Identify } from "@amplitude/analytics-browser";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY ?? "";
const IdentifyObj = new Identify();

export const AmplitudeContext = createContext({});

const AmplitudeContextProvider = ({ children }) => {
  useEffect(() => {
    init(AMPLITUDE_API_KEY, undefined, {
      defaultTracking: {
        sessions: true,
      },
    });
  }, []);

  const trackAmplitudeEvent = (eventName, eventProperties) => {
    track(eventName, eventProperties);
  };

  const identifyAmplitudeUserProperty = (propName, propValue) => {
    identify(IdentifyObj.set(propName, propValue));
  };

  const value = { trackAmplitudeEvent, identifyAmplitudeUserProperty };

  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  );
};

export default AmplitudeContextProvider;
