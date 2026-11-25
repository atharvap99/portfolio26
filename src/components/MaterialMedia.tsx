import './MaterialMedia.css';

import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

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

type MaterialIconProps = {
  name: MaterialIconName;
  slot?: string;
};

export function MaterialIcon({ name, slot }: MaterialIconProps) {
  return (
    <md-icon
      aria-hidden="true"
      className="material-icon"
      slot={slot}
    >
      {name}
    </md-icon>
  );
}

type MaterialCardProps = {
  children: ReactNode;
  className?: string;
}

// Material Web does not include a card here, so this section uses our card styles.
export function MaterialCard({
  children,
  className = '',
}: MaterialCardProps) {
  return (
    <section className={`material-card ${className}`}>
      {children}
    </section>
  );
}

type MaterialChipProps = {
  children: ReactNode;
  icon: MaterialIconName;
}

export function MaterialChip({ children, icon }: MaterialChipProps) {
  return (
    <md-assist-chip
      aria-label={String(children)}
      className="material-chip"
    >
      <MaterialIcon name={icon} slot="icon" />
      {children}
    </md-assist-chip>
  );
}

type MaterialActionProps = MaterialChipProps & {
  href: string;
  variant?: 'filled' | 'outlined';
}

export function MaterialAction({
  href,
  children,
  icon,
  variant = 'filled',
}: MaterialActionProps) {
  const Button =
    variant === 'outlined' ? 'md-outlined-button' : 'md-filled-button';

  return (
    <Button
      className="material-action"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
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
}

export function MaterialRouteAction({
  to,
  children,
  icon = 'arrow_outward',
  variant = 'filled',
  className = '',
}: MaterialRouteActionProps) {
  const navigate = useNavigate();
  const Button =
    variant === 'outlined' ? 'md-outlined-button' : 'md-filled-button';

  // Use the app's router for links that stay within the portfolio.
  function handleClick() {
    navigate(to);
  }

  return (
    <Button
      className={`material-route-action ${className}`}
      onClick={handleClick}
      type="button"
    >
      <MaterialIcon name={icon} slot="icon" />
      {children}
    </Button>
  );
}