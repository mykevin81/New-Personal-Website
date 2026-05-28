import React, { Children } from 'react';
import { motion } from 'framer-motion';
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  fullWidth?: boolean;
}
export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  fullWidth = false
}: FadeInProps) {
  const directions = {
    up: {
      y: 24,
      x: 0
    },
    down: {
      y: -24,
      x: 0
    },
    left: {
      x: 24,
      y: 0
    },
    right: {
      x: -24,
      y: 0
    },
    none: {
      x: 0,
      y: 0
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      
      {children}
    </motion.div>);

}
export function StaggerContainer({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-100px'
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
      className={className}>
      
      {children}
    </motion.div>);

}
export function StaggerItem({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        }
      }}
      className={className}>
      
      {children}
    </motion.div>);

}