import {Canvas, ImageSVG, Skia, useSVG} from '@shopify/react-native-skia';
import {IconProps} from '../types';

export const WarningIcon = ({height, width, color, iconStroke}: IconProps) => {
  const iconHeight = height || 24;
  const iconWidth = width || 24;
  const iconColor = color || 'currentColor';
  const svg = Skia.SVG.MakeFromString(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 ${iconHeight} ${iconWidth}" fill="none" stroke="${iconColor}" stroke-width="${iconStroke}" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
  );
  return (
    <Canvas
      style={{
        position: 'relative',
        width: iconHeight,
        height: iconWidth
      }}>
      {svg && (
        <ImageSVG
          svg={svg}
          x={0}
          y={0}
          width={256}
          height={256}
          color={iconColor}
        />
      )}
    </Canvas>
  );
};
