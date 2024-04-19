"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import python from "../../../public/icons/devicon--python.png"
import html from "../../../public/icons/logos--html-5.png"
import css from "../../../public/icons/logos--css-3.png"
import javascript from "../../../public/icons/logos--javascript.png"
import nodejs from "../../../public/icons/logos--nodejs.png"
import reactjs from "../../../public/icons/devicon--react.png"
import tailwind from "../../../public/icons/devicon--tailwindcss.png"
import mongodb from "../../../public/icons/devicon--mongodb.png"
import mysql from "../../../public/icons/logos--mysql.png"
import postgresql from "../../../public/icons/devicon--postgresql.png"
import nextjs from "../../../public/icons/icons--nextjs-light.png"
import scssImg from "../../../public/icons/type-scss2.png"
import typescriptImg from "../../../public/icons/devicon--typescript.png"
import gitImg from "../../../public/icons/devicon--git.png"
import awsImg from "../../../public/icons/icons--aws-light.png"

export default function CardGrid() {
  const list = [
    {
      title: "HTML",
      img: html,
    },
    {
      title: "CSS",
      img: css,
    },
    {
      title: "Javascript",
      img: javascript,
    },
    {
      title: "Node",
      img: nodejs,
    },
    {
      title: "React",
      img: reactjs,
    },
    {
      title: "Tailwind",
      img: tailwind,
    },
    {
      title: "Mongo",
      img: mongodb,
    },
    {
      title: "MySQL",
      img: mysql,
    },
    {
      title: "PostgreSQL",
      img: postgresql,
    },
    {
      title: "Python",
      img: python,
    },
    {
      title: "Next",
      img: nextjs,
    },
    {
      title: "SCSS",
      img: scssImg,
    },
    {
      title: "Typescript",
      img: typescriptImg,
    },
    {
      title: "Git",
      img: gitImg,
    },
    {
      title: "AWS",
      img: awsImg,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 sm:gap-10 sm:grid-cols-3 md:grid-cols-5 justify-items-center">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="group w-20 h-20 hover:shadow-xl">
          <CardBody className="grid place-content-center overflow-hidden p-5">
            <Image
              radius="none"
              alt={item.title}
              className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:animate-bounce"
              src={item.img.src}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
