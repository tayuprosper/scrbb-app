import { createElement } from "react";
import type { IconType } from "react-icons";
import {
  IoBook,
  IoBriefcase,
  IoCalculator,
  IoLockClosed,
  IoSchool,
  IoShieldCheckmark,
  IoSparkles,
  IoTrendingUp,
} from "react-icons/io5";
import type { CoverIconName } from "@/lib/site";

const ICONS: Record<CoverIconName, IconType> = {
  calculator: IoCalculator,
  sparkles: IoSparkles,
  "shield-checkmark": IoShieldCheckmark,
  "lock-closed": IoLockClosed,
  school: IoSchool,
  briefcase: IoBriefcase,
  "trending-up": IoTrendingUp,
  book: IoBook,
};

export function CoverIcon({ name, size, color }: { name: CoverIconName; size: number; color?: string }) {
  return createElement(ICONS[name] ?? IoBook, { size, color, "aria-hidden": true });
}

type Props = {
  color: string;
  icon: CoverIconName;
  imageUrl?: string;
  height?: number;
  radius?: number;
};

// Same cover as the app: colour block, soft circles, three dots, tilted white badge
export default function ModuleCover({ color, icon, imageUrl, height = 140, radius = 18 }: Props) {
  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt=""
        loading="lazy"
        className="sb-cover sb-cover--img"
        style={{ height, borderRadius: radius }}
      />
    );
  }

  const badge = Math.round(height * 0.62);
  return (
    <div className="sb-cover" style={{ height, borderRadius: radius, background: color }}>
      <span className="sb-cover__big" style={{ width: height * 1.3, height: height * 1.3 }} />
      <span className="sb-cover__small" style={{ width: height * 0.5, height: height * 0.5 }} />
      <span className="sb-cover__dots">
        <i />
        <i />
        <i />
      </span>
      <span
        className="sb-cover__badge"
        style={{ width: badge, height: badge, borderRadius: Math.round(height * 0.2) }}
      >
        <CoverIcon name={icon} size={Math.round(height * 0.34)} color={color} />
      </span>
    </div>
  );
}
