"use client";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import {SocialIcon} from "react-social-icons";

export const Footer: FunctionComponent = () => {
  return (
      <>
          <section className="flex items-center justify-between mt-8 md:mt-16 mb-4">
              <div className="text-sm text-muted-foreground">
                  TOM WIERZBIANSKI © {new Date().getFullYear()}
              </div>

              <DarkModeToggle/>
          </section>




      </>
  );
};
