import type { ReactNode } from 'react';
import './styles.scss';

export default function ButtonIcon({
  children,
  onClick
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="button-icon">
      {children}
    </button>
  );
}
