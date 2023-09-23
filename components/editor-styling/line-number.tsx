import CustomSwitch from '@/components/custom-switch';
import SettingsTitle from '@/components/settings-title';
import { useBoundStore } from '@/store/useBoundStore';

const LineNumber = () => {
  const setShowLineNumber = useBoundStore((state) => state.setShowLineNumber);

  return (
    <div className="group flex items-center justify-between">
      <SettingsTitle label="Line Number" />
      <CustomSwitch
        defaultValue={false}
        onChangeChecked={() => setShowLineNumber()}
      />
    </div>
  );
};

export default LineNumber;
