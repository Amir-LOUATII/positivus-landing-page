"use client";
import React from "react";
import Card from "../ui/card";
import Image from "next/image";
import contactImage from "@/assets/images/contactImage.webp";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
export default function ContactForm() {
  return (
    <Card
      variant="secondary"
      shadow={false}
      className="md:pt-16 md:pb-20 md:ps-24 md:pe-0 max-md:p-6 overflow-hidden  my-4 md:my-8"
    >
      <div
        className="flex justify-between items-start
      "
      >
        <div className="w-full flex-1 md:flex-1/2">
          {" "}
          <form className="w-full max-w-md space-y-4">
            <RadioGroup
              defaultValue="option-one"
              className="flex items-center space-x-6 justify-start"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  aria-label="say hi radio button"
                  value="option-one"
                  id="option-one"
                  className="border-2 border-black data-[state=checked]:accent-background bg-white w-7 h-7"
                />
                <Label htmlFor="option-one" className="text-black text-lg">
                  Say Hi
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  aria-label="request quote radio button"
                  value="option-two"
                  id="option-two"
                  className="border-2 border-black data-[state=checked]:accent-background bg-white w-7 h-7"
                />
                <Label htmlFor="option-one" className="text-black text-lg">
                  Get Quote
                </Label>
              </div>
            </RadioGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="rounded-xl text-black placeholder-gray-400 bg-white w-full"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="rounded-xl text-black placeholder-gray-400 bg-white w-full"
            />
            <Label htmlFor="Message">Message *</Label>
            <Textarea
              id="Message"
              placeholder="Message"
              className="rounded-xl text-black placeholder-gray-400 h-32 bg-white w-full"
            />
            <Button
              onClick={(e) => e.preventDefault()}
              className="w-full bg-[#1a1a1f] text-white rounded-xl hover:bg-[#2a2a2f]"
            >
              Send Message
            </Button>
          </form>
        </div>
        <div className="max-md:hidden">
          <Image
            src={contactImage}
            alt="Contact image"
            className="translate-x-1/2"
          />
        </div>
      </div>
    </Card>
  );
}
