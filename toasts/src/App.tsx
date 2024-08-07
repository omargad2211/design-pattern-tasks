import React from "react";
import { ToastProvider, useToast } from "./Contexts/ToastContext";
import { Button } from "./components/Button";
import { ToastContainer } from "./components/ToastContainer";

const App: React.FC = () => {
  const { addToast, clearAllToasts } = useToast();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
        Welcome to My App
      </h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <Button
          onClick={() =>
            addToast({
              message: "This is a standard notification.",
              variant: "default",
            })
          }
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Standard
        </Button>
        <Button
          onClick={() =>
            addToast({
              message: "Operation completed successfully!",
              variant: "success",
            })
          }
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          Success ✅
        </Button>
        <Button
          onClick={() =>
            addToast({
              message: "Oops! Something went wrong.",
              variant: "error",
            })
          }
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Error ❌
        </Button>
        <Button
          onClick={clearAllToasts}
          className="bg-gray-500 hover:bg-gray-600 text-white"
        >
          Clear All 🗑️
        </Button>
      </div>

      <ToastContainer />
    </div>
  );
};

const WrappedApp: React.FC = () => (
  <ToastProvider>
    <App />
  </ToastProvider>
);

export default WrappedApp;
