import {Canvas, ImageSVG, Skia, useSVG} from '@shopify/react-native-skia';
import {IconProps} from '../types';

export const HelpCircle = ({height, width, color, iconStroke}: IconProps) => {
  const iconHeight = height || 24;
  const iconWidth = width || 24;
  const iconColor = color || 'currentColor';
  const svg = Skia.SVG.MakeFromString(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 ${iconHeight} ${iconWidth}" fill="none" stroke="${iconColor}" stroke-width="${iconStroke}" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
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
