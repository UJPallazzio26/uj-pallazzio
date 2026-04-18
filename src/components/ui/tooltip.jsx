import React, { createContext, useContext, useState } from "react";

const TooltipContext = createContext(undefined);

const TooltipProvider = ({ children }) => {
  return children;
};

const Tooltip = ({ children, open, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const contextValue = {
    isOpen: open !== undefined ? open : isOpen,
    setIsOpen: onOpenChange || setIsOpen,
  };
  
  return (
    <TooltipContext.Provider value={contextValue}>
      {children}
    </TooltipContext.Provider>
  );
};

const TooltipTrigger = ({ children, asChild }) => {
  const { isOpen, setIsOpen } = useContext(TooltipContext) || {};
  
  const childProps = {
    onMouseEnter: () => setIsOpen && setIsOpen(true),
    onMouseLeave: () => setIsOpen && setIsOpen(false),
    onFocus: () => setIsOpen && setIsOpen(true),
    onBlur: () => setIsOpen && setIsOpen(false),
  };
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, childProps);
  }
  
  return (
    <span {...childProps}>
      {children}
    </span>
  );
};

const TooltipContent = React.forwardRef(({ children, className, sideOffset = 4, ...props }, ref) => {
  const { isOpen } = useContext(TooltipContext) || {};
  
  if (!isOpen) return null;
  
  return (
    <div
      ref={ref}
      className={`position-absolute z-50 ${className || ''}`}
      style={{
        backgroundColor: "#2a2d32",
        color: "white",
        padding: "0.375rem 0.75rem",
        borderRadius: "0.375rem",
        fontSize: "0.875rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        whiteSpace: "nowrap",
        transform: "translateY(-100%)",
        marginTop: `-${sideOffset}px`,
        top: 0,
        left: "50%",
        translate: "-50%",
      }}
      {...props}
    >
      {children}
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          borderWidth: "6px",
          borderStyle: "solid",
          borderColor: "#2a2d32 transparent transparent transparent",
        }}
      />
    </div>
  );
});

TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };