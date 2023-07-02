import React from "react";

type MenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuButton = ({ setIsOpen, isOpen }: MenuProps) => {
  return (
    <div className="flex justify-end container wrapper">
      <label htmlFor="check" className="menu_button">
        <input
          type="checkbox"
          id="check"
          checked={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default MenuButton;
