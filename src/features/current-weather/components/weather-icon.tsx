import {
  ThunderstormIcon,
  ClearIcon,
  CloudsIcon,
  DrizzleIcon,
  RainIcon,
  SnowIcon,
  type IconType
} from 'shared/ui';

const weatherDict: Record<string, IconType> = {
  Thunderstorm: ThunderstormIcon,
  Drizzle: DrizzleIcon,
  Rain: RainIcon,
  Snow: SnowIcon,
  Clear: ClearIcon,
  Clouds: CloudsIcon
};

type Props = {
  weather?: string;
  size?: number;
};

export default function WeatherIcon({ weather, size = 80 }: Props) {
  const IconComponent = weatherDict[weather ?? 'Clear'] ?? ClearIcon;
  return <IconComponent size={size} />;
}
