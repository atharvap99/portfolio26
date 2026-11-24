import './MaterialMedia.css';

import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';

import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/icon/icon.js';

export type MaterialIconName =
  | 'arrow_outward'
  | 'movie'
  | 'picture_as_pdf'
  | 'photo_camera'
  | 'school'
  | 'work';

export function MaterialIcon({
  name,
  slot,
}: {
  name: MaterialIconName;
  slot?: string;
}) {
  return (
    <md-icon aria-hidden="true" className="material-icon" slot={slot}>
      {name}
    </md-icon>
  );
}

type MaterialCardProps = {
  children: ReactNode;
  className?: string;
};

// Material Web does not ship a card component, so this uses its surface and shape tokens.
export function MaterialCard({ children, className = '' }: MaterialCardProps) {
  return <section className={`material-card ${className}`}>{children}</section>;
}

type MaterialLabelProps = {
  children: ReactNode;
  icon: MaterialIconName;
};

export function MaterialChip({ children, icon }: MaterialLabelProps) {
  return (
    <md-assist-chip className="material-chip" aria-label={String(children)}>
      <MaterialIcon name={icon} slot="icon" />
      {children}
    </md-assist-chip>
  );
}

type MaterialActionProps = MaterialLabelProps & {
  href: string;
  variant?: 'filled' | 'outlined';
};

export function MaterialAction({
  href,
  children,
  icon,
  variant = 'filled',
}: MaterialActionProps) {
  const Button = variant === 'outlined' ? 'md-outlined-button' : 'md-filled-button';

  return (
    <Button className="material-action" href={href} target="_blank" rel="noreferrer">
      <MaterialIcon name={icon} slot="icon" />
      {children}
    </Button>
  );
}

type MaterialRouteActionProps = {
  to: string;
  children: ReactNode;
  icon?: MaterialIconName;
  variant?: 'filled' | 'outlined';
  className?: string;
};

export function MaterialRouteAction({
  to,
  children,
  icon = 'arrow_outward',
  variant = 'filled',
  className = '',
}: MaterialRouteActionProps) {
  const navigate = useNavigate();
  const Button = variant === 'outlined' ? 'md-outlined-button' : 'md-filled-button';

  return (
    <Button
      className={`material-route-action ${className}`}
      onClick={() => navigate(to)}
      type="button"
    >
      <MaterialIcon name={icon} slot="icon" />
      {children}
    </Button>
  );
}
