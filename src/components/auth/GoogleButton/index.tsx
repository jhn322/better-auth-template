'use client';

import { Button } from '@/components/ui/button';
import { GoogleIcon } from './GoogleIcon';
import type { GoogleButtonProps } from './types';
import { Loader2 } from 'lucide-react';
import { authClient } from '@/lib/auth/auth-client';
import { DEFAULT_LOGIN_REDIRECT_PATH } from '@/lib/constants/routes';

export const GoogleButton = ({
  mode,
  onSuccess,
  onError,
  isLoading = false,
}: GoogleButtonProps) => {
  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: DEFAULT_LOGIN_REDIRECT_PATH,
      });
      // onSuccess might not be called due to redirect, but good to have if BetterAuth changes behavior
      onSuccess?.();
    } catch (error) {
      onError?.(
        error instanceof Error ? error : new Error('Google sign in failed')
      );
    }
  };

  return (
    <Button
      variant="outline"
      className="w-full rounded-full"
      onClick={handleGoogleSignIn}
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
