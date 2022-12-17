import {Canvas, ImageSVG, Skia, useSVG} from '@shopify/react-native-skia';
import {IconProps} from '../types';

export const User = ({height, width, color, iconStroke}: IconProps) => {
  const iconHeight = height || 24;
  const iconWidth = width || 24;
  const iconColor = color || 'currentColor';
  const svg = Skia.SVG.MakeFromString(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 ${iconHeight} ${iconWidth}" fill="none" stroke="${iconColor}" stroke-width="${iconStroke}" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
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
