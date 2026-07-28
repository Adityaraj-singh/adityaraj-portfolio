"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface AnimatedSocialIconProps {
  src: string;
  className?: string;
}

export function AnimatedSocialIcon({
  src,
  className = "h-6 w-6",
}: AnimatedSocialIconProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let mounted = true;

    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load Lottie animation: ${src}`);
        }

        return response.json();
      })
      .then((data) => {
        if (mounted) {
          setAnimationData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      mounted = false;
    };
  }, [src]);

  if (!animationData) {
    return <div className={className} />;
  }

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={className}
    />
  );
}