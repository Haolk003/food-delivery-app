import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";

const ProfileDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"
          />
          <Avatar.Fallback
            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
            delayMs={600}
          >
            JD
          </Avatar.Fallback>
        </Avatar.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[250px] bg-gray1 text-white rounded-md p-[5px]  shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
          <DropdownMenu.Item className=" text-[14px] leading-none text-white rounded-[3px] flex items-center h-[30px] px-3 relative   select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 ">
            <p>Signed in as</p>
            <p>support@gmail.com</p>
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" text-[14px] leading-none text-white rounded-[3px] flex items-center h-[30px] px-3 relative   select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 mt-2 ">
            My Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" text-[14px] leading-none text-white rounded-[3px] flex items-center h-[30px] px-3 relative   select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 mt-2">
            All Orders
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" text-[14px] leading-none text-white rounded-[3px] flex items-center h-[30px] px-3 relative   select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 mt-2">
            Apply for seller account
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ProfileDropdown;
