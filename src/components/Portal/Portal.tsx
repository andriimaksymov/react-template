import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = {
  children?: ReactNode;
  node?: Element;
}


const Portal = ({ children, node }: PortalProps) => {
  const mount = document.getElementById('portal-root');
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  }, [el, mount]);

  return createPortal(children, node || el);
};

export default Portal;
