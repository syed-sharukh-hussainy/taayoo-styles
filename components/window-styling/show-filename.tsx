import CustomSwitch from '@/components/custom-switch';
import SettingsTitle from '@/components/settings-title';
import { useBoundStore } from '@/store/useBoundStore';

const ShowFilename = () => {
  const setShowFileName = useBoundStore((state) => state.setShowFileName);
  return (
    <div className="group flex items-center justify-between">
      <SettingsTitle label="Show Filename" />
      <CustomSwitch
        defaultValue={false}
        onChangeChecked={() => setShowFileName()}
      />
    </div>
  );
};

export default ShowFilename;
