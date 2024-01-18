"use client";

import useAmplitudeContext from "@/hooks/useAmplitudeContext";
import React from "react";

const EventButton = () => {
  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickHandler = () => {
    trackAmplitudeEvent("click", {
      text: "each click is a new event, and each star or like helps me a lot!",
    });
  };

  return (
    <button
      type="button"
      className="bg-[#e8378b] w-96 py-6 text-center font-semibold px-10 mx-auto rounded-xl hover:scale-95 active:scale-105 transition-all duration-100 ease-in-out"
      onClick={clickHandler}
    >
      Press me to trigger an event!
    </button>
  );
};

export default EventButton;
