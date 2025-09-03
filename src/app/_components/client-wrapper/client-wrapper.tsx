// components/ClientWrapper.tsx
'use client';

import { LoadingProvider } from '../../../context/loadingContext';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <LoadingProvider>{children}</LoadingProvider>;
}