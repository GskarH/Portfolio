import { DivideIcon as LucideIcon } from 'lucide-react';

export interface ExperienceType {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SkillType {
  name: string;
  level?: number;
  issued?: string;
}

export interface SkillCategoryType {
  name: string;
  icon: LucideIcon;
  skills: SkillType[];
}

export interface HobbyType {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface EducationType {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface CertificationType {
  name: string;
  organization: string;
  issued: string;
  url?: string;
}