import { useBoundStore } from '@/store/useBoundStore';
import dynamic from 'next/dynamic';

const CustomSwitch = dynamic(() => import('@/components/custom-switch'), {
  ssr: false,
});

const SettingsTitle = dynamic(() => import('@/components/settings-title'), {
  ssr: false,
});

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
