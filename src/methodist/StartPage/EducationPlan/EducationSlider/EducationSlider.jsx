import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { observer } from "mobx-react-lite";

import store from "store/store";

const EducationSlider = observer(({ onChange, sliderValue }) => {
  function valuetext(value) {
    return `${value} ч.`;
  }

  const marks = [
    {
      value: 0,
      label: "0 ч.",
    },
    {
      value: 124,
      label: "124 ч.",
    },
    {
      value: 256,
      label: "256 ч.",
    },
    {
      value: 372,
      label: "372 ч.",
    },
    {
      value: 496,
      label: "496 ч.",
    },
    {
      value: 620,
      label: "620 ч.",
    },
  ];

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  const PlanSlider = styled(Slider)(({ theme }) => ({
    color: "#597E9D",
    "& .MuiSlider-thumb": {
      height: 40,
      width: 40,
      backgroundColor: "var(--secondary)",
      border: "4px solid #fff",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      "&:after": {
        position: "relative",
        left: 80,
        top: 10,
        height: 25,
        width: 20,
        borderLeft: "2px solid #f0f0f0",
        backgroundColor: "#fff",
      },
    },
    "& .MuiSlider-markLabel": {
      fontSize: 14,
      fontWeight: "normal",
      transform: "translate(-90px, 10px)",
    },
    "& .MuiSlider-track": {
      backgroundColor: "var(--secondary)",
      width: 8,
    },
    "& .MuiSlider-rail": {
      opacity: 1,
      backgroundColor: "var(--secondary)",
      width: 8,
    },
    "& .MuiSlider-mark": {
      backgroundColor: "#484C51",
      height: 2,
      width: 30,
      "&.MuiSlider-markActive": {
        opacity: 1,
        backgroundColor: "#484C51",
      },
    },
  }));

  return (
    <div className="education-plan__slider">
      <Box sx={{ height: 430 }}>
        <PlanSlider
          max={620}
          getAriaLabel={() => "Plan"}
          orientation="vertical"
          getAriaValueText={valuetext}
          valueLabelFormat={valueLabelFormat}
          marks={marks}
          step={null}
          defaultValue={sliderValue}
          onChangeCommitted={(e, newValue) => onChange(newValue)}
        />
      </Box>
      <hr className="education-plan__line" />
    </div>
  );
});

export default EducationSlider;
