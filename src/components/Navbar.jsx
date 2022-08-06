import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { BsChatRight } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboeardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return <div className="flex justify-between p-2 md:mx-6"></div>;
};

export default Navbar;
