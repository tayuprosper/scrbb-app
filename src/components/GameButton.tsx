import type { ReactNode } from "react";

type Variant = "primary" | "white" | "success" | "outline";

type Props = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: "md" | "lg";
  icon?: ReactNode;
  download?: boolean;
  block?: boolean;
};

// The app's chunky 3D button: a coloured face sitting on a darker edge.
// Pressing pushes the face down onto the edge, like in the app.
export default function GameButton({
  children,
  href,
  variant = "primary",
  size = "md",
  icon,
  download,
  block,
}: Props) {
  const external = /^https?:\/\//.test(href) && !download;
  return (
    <a
      href={href}
      className={`sb-btn sb-btn--${variant} sb-btn--${size}${block ? " sb-btn--block" : ""}`}
      {...(download ? { download: "" } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon && <span className="sb-btn__icon">{icon}</span>}
      <span>{children}</span>
    </a>
  );
}
