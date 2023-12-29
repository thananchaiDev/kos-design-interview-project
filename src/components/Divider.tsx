type DividerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Divider: React.FC<DividerProps> = (args) => {
  const { className, ...props } = args;
  return (
    <div className={`border-y border-natural75 ${className}`} {...props} />
  );
};
