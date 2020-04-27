import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { useMemo } from 'react';

export interface WiredVideoProps extends BaseProps {
  /**
   * URL of the video file.
   * @default https://res.cloudinary.com/gojutin/video/upload/w_400/v1585407774/cat-video.mp4
   */
  src?: string;
  /**
   * Should the video auto-play?
   * @default false
   */
  autoPlay?: boolean;
  /**
   * Should the video loop?
   * @default false
   */
  loop?: boolean;
  /**
   * Should the video be muted?
   * @default false
   */
  muted?: boolean;
  /**
   * Play the video inline on mobile devices.
   * @default false
   */
  playsInline?: boolean;
  /**
   * Color of the progress bar and the knob on the volume control.
   * @default black
   */
  color?: string;
}

export const WiredVideo = ({
  src = 'https://res.cloudinary.com/gojutin/video/upload/w_400/v1585407774/cat-video.mp4',
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = false,
  color = 'black',
  className,
  style,
}: WiredVideoProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: {
        src,
        autoplay: autoPlay,
        loop,
        muted,
        playsinline: playsInline,
      },
      css: { '--wired-video-highlight-color': color },
    };
  }, [src, autoPlay, loop, muted, playsInline, color]);

  const register = useCustomElement(customValues);

  return (
    <wired-video class={className} style={style} ref={register}></wired-video>
  );
};
