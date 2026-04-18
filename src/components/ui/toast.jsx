import React, { createContext, useContext, useState, useCallback } from "react";
import { X } from "lucide-react";

const ToastContext = createContext(undefined);

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id, open: true }]);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(({ title, description, variant = "default" }) => {
    const id = addToast({ title, description, variant });
    setTimeout(() => removeToast(id), 5000);
    return id;
  }, [addToast, removeToast]);

  return (
    <ToastContext.Provider value={{ toast, toasts, removeToast }}>
      {children}
      <ToastViewport toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastViewport = ({ toasts, removeToast }) => (
  <div
    className="position-fixed d-flex flex-column gap-2"
    style={{
      top: "1rem",
      right: "1rem",
      zIndex: 100,
      maxWidth: "420px",
    }}
  >
    {toasts.map((t) => (
      <div
        key={t.id}
        className={`toast show ${t.variant === "destructive" ? "bg-danger" : "bg-white"}`}
        style={{
          borderRadius: "0.375rem",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div className="toast-header">
          {t.title && <strong className="me-auto">{t.title}</strong>}
          <button
            type="button"
            className="btn-close"
            onClick={() => removeToast(t.id)}
          />
        </div>
        {t.description && (
          <div className="toast-body">{t.description}</div>
        )}
      </div>
    ))}
  </div>
);

const Toast = ({ children, ...props }) => children;

const ToastTitle = ({ children }) => <strong className="me-auto">{children}</strong>;

const ToastDescription = ({ children }) => <div className="toast-body">{children}</div>;

const ToastClose = ({ onClick }) => (
  <button type="button" className="btn-close" onClick={onClick} />
);

const ToastAction = ({ children, onClick }) => (
  <button className="btn btn-sm btn-outline-secondary ms-2" onClick={onClick}>
    {children}
  </button>
);

function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      toast: () => {},
      toasts: [],
      dismiss: () => {},
    };
  }
  return {
    toast: context.toast,
    toasts: context.toasts,
    dismiss: context.removeToast,
  };
}

export {
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastViewport,
  useToast,
};
