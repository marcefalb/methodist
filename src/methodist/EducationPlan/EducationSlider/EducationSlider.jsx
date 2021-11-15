import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const EducationSlider = () => {
  function valuetext(value) {
    return `${value} ч.`;
  }
  
  const marks = [
    {
      value: 0,
      label: '0 ч.',
    },
    {
      value: 35,
      label: '60 ч.',
    },
    {
      value: 70,
      label: '120 ч.',
    },
    {
      value: 100,
      label: '180 ч.',
    },
  ];

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <Box sx={{ height: 430 }}>
      <Slider
        getAriaLabel={() => 'Plan'}
        orientation="vertical"
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        defaultValue={70}
        marks={marks}
        step={null}
        // color="#597E9D"
      />
    </Box>
  )
};

export default EducationSlider