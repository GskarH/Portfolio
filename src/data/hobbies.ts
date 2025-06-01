import { 
  BookOpen, 
  Code, 
  Dumbbell, 
  Gamepad2, 
  Globe, 
  Music 
} from 'lucide-react';
import { HobbyType } from '../types';

export const hobbiesData: HobbyType[] = [
  {
    name: 'Capture The Flag Competitions',
    description: 'Participating in cybersecurity CTF competitions to sharpen skills and stay up-to-date with the latest security techniques and vulnerabilities.',
    icon: Code
  },
  {
    name: 'Gaming',
    description: 'Enjoying strategic and puzzle games that challenge problem-solving abilities and provide a recreational outlet from cybersecurity work.',
    icon: Gamepad2
  },
  {
    name: 'Travel',
    description: 'Exploring different cultures and places to gain diverse perspectives and experiences that contribute to a well-rounded approach to security challenges.',
    icon: Globe
  },
  {
    name: 'Music',
    description: 'Creating electronic music as a creative outlet that balances the technical nature of cybersecurity work with artistic expression.',
    icon: Music
  }
];