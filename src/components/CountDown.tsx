"use client";
import React from "react";
import Countdown from "react-countdown";

const edndingDate = new Date("2025-02-23");
const CountDown = () => {
  return (
    <Countdown
      className="text-yellow-500 font-bold text-5xl"
      date={edndingDate}
    />
  );
};

export default CountDown;
