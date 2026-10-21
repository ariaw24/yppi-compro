import type { ReactNode } from 'react';

export type IconName =
  | 'arrow'
  | 'book'
  | 'calendar'
  | 'chevron'
  | 'compass'
  | 'graduation'
  | 'leaf'
  | 'mail'
  | 'map'
  | 'menu'
  | 'phone'
  | 'spark'
  | 'users'
  | 'x'
  | 'lock'
  | 'check'
  | 'shield';

export type PageName =
  | 'home'
  | 'profile'
  | 'academic'
  | 'student'
  | 'ppdb'
  | 'ppdb-syarat'
  | 'ppdb-alur'
  | 'ppdb-login'
  | 'admin';

export interface NavItem {
  label: string;
  href: string;
  children?: string[][];
}

export interface QuickLink {
  icon: IconName;
  title: string;
  text: string;
  href: string;
}

export interface ProfileTab {
  id: string;
  label: string;
  title: string;
  text: string;
}

export interface PPDBWave {
  name: string;
  period: string;
  quota: string;
  status: string;
  badgeClass: string;
  isActive: boolean;
  benefit: string;
}

export interface PPDBStep {
  num: string;
  title: string;
  desc: string;
}

export interface PPDBJalur {
  title: string;
  desc: string;
  tag: string;
}

export interface Applicant {
  id: string;
  name: string;
  school: string;
  track: string;
  status: string;
}

export interface Article {
  title: string;
  date: string;
  status: string;
}
