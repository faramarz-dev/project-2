'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type LoadingContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true); // ← شروع با true
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true); // ← فعال‌سازی لودینگ هنگام تغییر مسیر

    const timeout = setTimeout(() => {
      setLoading(false); // ← غیرفعال‌سازی بعد از2 ثانیه
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
          <div className='loader'></div>
        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
};