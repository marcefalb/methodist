import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

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

  const PlanSlider = styled(Slider)(({ theme }) => ({
    color: '#597E9D',
    '& .MuiSlider-thumb': {
      height: 40,
      width: 40,
      backgroundColor: 'var(--secondary)',
      border: '4px solid #fff',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      '&:after': {
        position: 'relative',
        left: 80,
        top: 10,
        height: 25,
        width: 20,
        borderLeft: '2px solid #f0f0f0',
        backgroundColor: '#fff',
      }
    },
    '& .MuiSlider-markLabel': {
      fontSize: 14,
      fontWeight: 'normal',
      transform: 'translate(-90px, 10px)',
    },
    '& .MuiSlider-track': {
      backgroundColor: 'var(--secondary)',
      width: 8,
    },
    '& .MuiSlider-rail': {
      opacity: 1,
      backgroundColor: 'var(--secondary)',
      width: 8,
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#484C51',
      height: 2,
      width: 30,
      '&.MuiSlider-markActive': {
        opacity: 1,
        backgroundColor: '#484C51',
      },
    },
  }));

  return (
    <Box sx={{ height: 430 }}>
      <PlanSlider
        getAriaLabel={() => 'Plan'}
        orientation="vertical"
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        defaultValue={70}
        marks={marks}
        step={null}
      />
    </Box>
  )
};

export default EducationSlider