import { MouseEvent, ElementType, ReactNode } from "react";

import { useRouter, usePathname } from "next/navigation";
import { useGlobalState } from "@/src/lib/Store";

interface CustomLinkProps {
  component?: ElementType;
  className?: string;
  active?: boolean;
  href: string;
  children: ReactNode;
}

// Interum solution while Next.JS figures out how to get Framer exit tranitions
// working as expected.
const CustomLink = (props: CustomLinkProps) => {
  const { component, href, children, className, active } = props;

  const Component = component;
  const { dispatch } = useGlobalState();
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (e: MouseEvent) => {
    // Allow default behavior for opening in new tab/window
    // via keyboard shortcuts
    if (e.metaKey || e.shiftKey) {
      return;
    }

    e.preventDefault();

    if (pathname !== href) {
      dispatch({ type: "setTransitionState", value: "exiting" });

      setTimeout(() => {
        router.push(href);
      }, 300);
    }
  };

  return !!Component ? (
    <Component
      className={className}
      $active={active}
      onClick={(e: MouseEvent) => handleLinkClick(e)}
      href={href}
    >
      {children}
    </Component>
  ) : (
    <a
      onClick={(e: MouseEvent) => handleLinkClick(e)}
      className={className}
      href={href}
    >
      {children}
    </a>
  );
};

export default CustomLink;
