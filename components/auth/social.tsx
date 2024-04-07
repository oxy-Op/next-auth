"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export const Social = () => (
  <div className="flex items-center w-full gap-x-2">
    <Button
      size={"lg"}
      className="w-full"
      variant={"outline"}
      onClick={() => {}}
    >
      <FcGoogle className="size-5" />
    </Button>
    <Button
      size={"lg"}
      className="w-full"
      variant={"outline"}
      onClick={() => {}}
    >
      <FaGithub className="size-5" />
    </Button>
  </div>
);
