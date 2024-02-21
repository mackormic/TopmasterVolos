const LayoutWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`
      w-full
       h-full 
       inline-block
        bg-light
        z-0 
        p-8
       
        dark:bg-dark
        xl:p-32
        lg:p-16
        md:p-12
        sm:p-8
        ${className}`}
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
