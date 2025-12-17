import type { Metadata } from 'next';
import { agentInfo } from '@/lib/data/agent';

export const siteMetadata: Metadata = {
  title: `${agentInfo.name} | ${agentInfo.company} Real Estate`,
  description: `Professional real estate services in Marin County, California. ${agentInfo.name} helps buyers and sellers achieve their real estate goals with expertise and personalized service.`,
  keywords: [
    'real estate',
    'Marin County',
    'Mill Valley',
    'Tiburon',
    'Sausalito',
    'home buying',
    'home selling',
    'Coldwell Banker',
    agentInfo.name,
  ],
  authors: [{ name: agentInfo.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: `${agentInfo.name} Real Estate`,
  },
};
