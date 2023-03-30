import clsx from "clsx";
import React, { useState } from "react";
import {
  FcInfo as Info,
  FcHighPriority as Error,
  FcApproval as Success,
  FcMediumPriority as Warning,
} from "react-icons/fc";
import s from "./style.module.css";

const initialData = {
  description: "",
  title: "",
  isChecked: true,
};

export const useModal = (data = initialData) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(data);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);
  const handleModalData = (data) => setModalData(data);

  return { isOpen, open, close, toggle, modalData, handleModalData };
};

export const useNotify = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notification, setNotification] = useState({ status: "", text: "" });

  const getNotificationClassName = (status: string) =>
    clsx(s.container, s[status]);

  const handleIcon = (type: string) => {
    switch (type) {
      case "Success":
        return <Success className={s.icon} />;
      case "Error":
        return <Error className={s.icon} />;
      case "Warning":
        return <Warning className={s.icon} />;
      case "Info":
        return <Info className={s.icon} />;
      default:
        break;
    }
  };

  const Notification = () => (
    <div className={getNotificationClassName(notification.status)}>
      <h2 className={s.text}>{notification.text}</h2>
      {handleIcon(notification.status)}
    </div>
  );

  const setNotify = (data) => {
    setNotification(data);
    setIsNotificationOpen(true);
    setTimeout(() => {
      setIsNotificationOpen(false);
    }, 3000);
  };

  return { setNotify, isNotificationOpen, Notification };
};
