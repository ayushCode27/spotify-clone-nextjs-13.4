import Link from 'next/link';
import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = props => {
  const { icon, label, active = -false, href } = props;

  return (
    <Link
      href={href}
      className={twMerge(
        'flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-300 py-1', active && 'text-white'
      )}
    >{label}</Link>
  );
};

export default SidebarItem;
