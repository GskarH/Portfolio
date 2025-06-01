import { 
  Shield, 
  Server, 
  Code, 
  Database, 
  Network, 
  Award, 
  GraduationCap 
} from 'lucide-react';
import { SkillCategoryType } from '../types';

export const skillsData: SkillCategoryType[] = [
  {
    name: 'Security',
    icon: Shield,
    skills: [
      { name: 'Penetration Testing', level: 95 },
      { name: 'Vulnerability Assessment', level: 95 },
      { name: 'Incident Response', level: 90 },
      { name: 'Security Auditing', level: 85 },
    ]
  },
  {
    name: 'Networks',
    icon: Network,
    skills: [
      { name: 'Firewall Configuration', level: 90 },
      { name: 'VPN Setup & Management', level: 85 },
      { name: 'Network Monitoring', level: 88 },
      { name: 'IDS/IPS Systems', level: 80 }
    ]
  },
  {
    name: 'Systems',
    icon: Server,
    skills: [
      { name: 'Linux Administration', level: 92 },
      { name: 'Windows Server', level: 85 },
      { name: 'Cloud Infrastructure', level: 80 },
      { name: 'Virtualization', level: 78 }
    ]
  },
  {
    name: 'Programming',
    icon: Code,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Bash Scripting', level: 85 },
      { name: 'C/C++', level: 75 },
      { name: 'JavaScript', level: 70 }
    ]
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'SQL Security', level: 85 },
      { name: 'Database Hardening', level: 80 },
      { name: 'Data Encryption', level: 90 },
      { name: 'Access Control', level: 85 }
    ]
  }
];