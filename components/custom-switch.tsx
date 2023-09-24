import { useState } from 'react';

type CustomSwitchProps = {
  defaultValue: boolean;
  onChangeChecked: (checked: boolean) => void;
};

function CustomSwitch({ defaultValue, onChangeChecked }: CustomSwitchProps) {
  const [isChecked, setIsChecked] = useState(defaultValue);

  const setCustomSwitchValue = () => {
    setIsChecked(!isChecked);
    onChangeChecked(!isChecked);
  };

  return (
    <label className="relative inline-block w-[45px] h-[25px]">
      <input
        aria-label="custom switch"
        className="opacity-0 w-0 h0"
        type="checkbox"
        checked={isChecked}
        onChange={setCustomSwitchValue}
      />
      <span className="custom-slider"></span>
    </label>
  );
}

export default CustomSwitch;
