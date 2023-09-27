import { setLocalStorage } from '@/lib/storage-helper';

const CookiesButtons = ({
  label,
  defaultValue,
  value,
}: {
  label: string;
  defaultValue: string;
  value: string;
}) => {
  return (
    <div
      onClick={() => setLocalStorage('cookie_consent', true)}
      className={`p-3 rounded-lg 
    ${
      value === defaultValue
        ? 'bg-muted-foreground/10 font-medium'
        : 'text-muted-foreground'
    }`}
    >
      label
    </div>
  );
};

export default CookiesButtons;
