import { ChevronsUpDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

type CustomDropDownProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  children: React.ReactNode;
};

const CustomDropDown = ({
  open,
  setOpen,
  value,
  children,
}: CustomDropDownProps) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          role="button"
          aria-pressed="false"
          className="w-36 flex items-center justify-between border border-foreground/20 rounded-lg py-2 px-3 cursor-pointer hover:bg-muted"
        >
          <p className="capitalize text-xs truncate">{value}</p>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-36 p-0 rounded-lg">
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default CustomDropDown;
