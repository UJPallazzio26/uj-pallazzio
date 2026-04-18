import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", backgroundColor: "#f5f0e8" }}>
      <div className="text-center">
        <h1 className="mb-4" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>404</h1>
        <p className="mb-4" style={{ fontSize: "1.25rem", color: "#6b7280" }}>Oops! Page not found</p>
        <a href="/" className="text-decoration-underline" style={{ color: "#c9a227" }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;