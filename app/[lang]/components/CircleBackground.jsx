"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CircleBackground = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    generateCircles();
  }, []);

  const generateCircles = () => {
    const newCircles = [];
    for (let i = 0; i < 80; i++) {
      newCircles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 100 * 0.3,
        color: getRandomColor(),
        speed: Math.random() * 40
      });
    }
    setCircles(newCircles);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      {circles.map(circle => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full -z-20 opacity-20"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            top: circle.y,
            left: circle.x
          }}
          animate={{
            y: [circle.y - circle.speed, circle.y, circle.y - circle.speed],
            scale: [1, 1.1, 1.1],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        >
        </motion.div>
      ))}
    </>
  );
};

export default CircleBackground;
