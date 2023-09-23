import CustomSwitch from '@/components/custom-switch';
import SettingsTitle from '@/components/settings-title';
import { useBoundStore } from '@/store/useBoundStore';

const ShowAccent = () => {
  const setShowAccent = useBoundStore((state) => state.setShowAccent);

  return (
    <div className="group flex items-center justify-between">
      <SettingsTitle label="Show Accent" />
      <CustomSwitch
        defaultValue={false}
        onChangeChecked={() => setShowAccent()}
      />
    </div>
  );
};

export default ShowAccent;
