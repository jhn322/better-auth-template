'use client';

import { Button } from '@/components/ui/button';
import { GoogleIcon } from './GoogleIcon';
import type { GoogleButtonProps } from './types';
import { Loader2 } from 'lucide-react';
export const GoogleButton = ({
  mode,
  onSuccess,
  isLoading = false,
}: GoogleButtonProps) => {
  return (
    <Button
      variant="outline"
      className="w-full rounded-full"
      onClick={onSuccess} // The onClick handler now directly uses the provided onSuccess callback
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {mode === 'login' ? 'Signing in...' : 'Signing up...'}
        </>
      ) : (
        <>
          <GoogleIcon />
          {mode === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
        </>
      )}
    </Button>
  );
};
