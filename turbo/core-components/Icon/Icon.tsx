import {Canvas, ImageSVG, Skia, useSVG} from '@shopify/react-native-skia';
import {IconMapper} from './IconMapper';
import {IconProps} from './types';

export const Icon = ({height, width, name, color, iconStroke}: IconProps) => {
  const IconMapped = IconMapper[name];
  const strokeWidth = iconStroke ? iconStroke : '1';
  return (
    <IconMapped
      width={width}
      height={height}
      color={color}
      iconStroke={strokeWidth}
    />
  );
};
