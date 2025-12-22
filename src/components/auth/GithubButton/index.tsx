'use client';

import { Button } from '@/components/ui/button';
import { GithubIcon } from './GithubIcon';
import type { GithubButtonProps } from './types';
import { Loader2 } from 'lucide-react';
import { authClient } from '@/lib/auth/auth-client';
import { DEFAULT_LOGIN_REDIRECT_PATH } from '@/lib/constants/routes';

export const GithubButton = ({
  mode,
  onSuccess,
  onError,
  isLoading = false,
}: GithubButtonProps) => {
  const handleGithubSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: 'github',
        callbackURL: DEFAULT_LOGIN_REDIRECT_PATH,
      });
      // onSuccess might not be called due to redirect, but good to have if BetterAuth changes behavior
      onSuccess?.();
    } catch (error) {
      onError?.(
        error instanceof Error ? error : new Error('GitHub sign in failed')
      );
    }
  };

  return (
    <Button
      variant="outline"
      className="w-full rounded-full"
      onClick={handleGithubSignIn}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {mode === 'login' ? 'Signing in...' : 'Signing up...'}
        </>
      ) : (
        <>
          <GithubIcon />
          {mode === 'login' ? 'Sign in with GitHub' : 'Sign up with GitHub'}
        </>
      )}
    </Button>
  );
};
