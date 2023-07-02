import React from "react";
import Image from "next/image";

type CloseIconProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CloseIcon = ({ setIsOpen }: CloseIconProps) => {
  return (
    <button onClick={() => setIsOpen((prev) => !prev)}>
      <Image
        alt="close icon"
        src="/images/svg/close-icon.svg"
        width={32}
        height={32}
        className="nav-bar__icon pt-2"
      />
    </button>
  );
};

export default CloseIcon;
