import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand className="font-bold text-xl">
        <Link href={"/"}>Discuss</Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input variant="bordered" size="sm" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
