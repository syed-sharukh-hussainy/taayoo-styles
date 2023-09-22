const SettingsTitle = ({ label }: { label: string }) => {
  return (
    <p className="text-sm text-primary/80 font-medium group-hover:text-primary transition">
      {label}
    </p>
  );
};

export default SettingsTitle;
