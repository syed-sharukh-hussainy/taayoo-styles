import { useBoundStore } from '@/store/useBoundStore';
import dynamic from 'next/dynamic';

const CustomSwitch = dynamic(() => import('@/components/custom-switch'), {
  ssr: false,
});

const SettingsTitle = dynamic(() => import('@/components/settings-title'), {
  ssr: false,
});

const ShowAccent = () => {
  const setShowAccent = useBoundStore((state) => state.setShowAccent);

  return (
    <div className="group flex items-center justify-between">
      <SettingsTitle label="Accent" />
      <CustomSwitch
        defaultValue={false}
        onChangeChecked={() => setShowAccent()}
      />
    </div>
  );
};

export default ShowAccent;
