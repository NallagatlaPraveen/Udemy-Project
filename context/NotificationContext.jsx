import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotification = () => setIsOpen((prev) => !prev);
  const closeNotification = () => setIsOpen(false);

  return (
    <NotificationContext.Provider
      value={{ isOpen, toggleNotification, closeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
