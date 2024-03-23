import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  id?: string;
  elements?: keyof HTMLElementTagNameMap; // Allow specifying specific HTML element types
}

export function Portal(props: PropsWithChildren<IPortalProps>) {
  const { children, id = "portal", elements = "div" } = props;
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let root = document.getElementById(id);
    if (!root) {
      root = document.createElement(elements); // Create element of specified type
      root.id = id;
      document.body.appendChild(root);
    }
    setModalRoot(root);
    return () => {
      // Cleanup when component unmounts
      if (root && root.parentNode) {
        root.parentNode.removeChild(root);
      }
    };
  }, []);

  if (!modalRoot) {
    return null; // Render nothing until modalRoot is initialized
  }

  return createPortal(<div>{children}</div>, modalRoot);
}
