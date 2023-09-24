'use client';
import { ChangeEvent, useState } from 'react';

type CustomSliderProps = {
  minValue: number;
  maxValue: number;
  defaultValue: number;
  handleSliderValue: (value: string) => void;
};

function CustomSlider({
  minValue,
  maxValue,
  defaultValue,
  handleSliderValue,
}: CustomSliderProps) {
  const [sliderValue, setSliderValue] = useState(defaultValue);
  const setCustomSliderValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value));
    handleSliderValue(e.target.value);
  };

  return (
    <input
      aria-label="width slider"
      className="w-full"
      type="range"
      min={minValue}
      max={maxValue}
      value={sliderValue}
      style={{
        backgroundSize: `${
          ((sliderValue - minValue) * 100) / (maxValue - minValue)
        }% 100%`,
      }}
      onChange={setCustomSliderValue}
    />
  );
}

export default CustomSlider;
