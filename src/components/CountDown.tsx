"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2025-02-23");

const CountDown = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) return null;
  return (
    <Countdown
      className="text-yellow-500 font-bold text-5xl"
      date={endingDate}
    />
  );
};

export default CountDown;
