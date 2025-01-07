"use client";

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";

export default function NavbarDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar isBordered className="cursor-pointer" name="sakib" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile">
          <Link href="/profile">Profile</Link>
        </DropdownItem>
        <DropdownItem key="copy">
          <Link href="/profile/settings">Setting</Link>
        </DropdownItem>
        <DropdownItem key="edit">
          <Link href="/profile/create-post">Create Post</Link>
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
