import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}) {
  const styles =
    variant === "primary" ? "btn-primary" : "btn-secondary";

  const combined = `${styles} ${className}`.trim();

  if (href?.startsWith("#")) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combined} onClick={onClick}>
      {children}
    </button>
  );
}
