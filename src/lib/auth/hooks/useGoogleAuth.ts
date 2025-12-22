import { useState } from 'react';
import { authClient } from '@/lib/auth/auth-client';

interface UseGoogleAuthProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useGoogleAuth = ({
  onSuccess,
  onError,
}: UseGoogleAuthProps = {}) => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: window.location.origin + '/',
      });
      onSuccess?.();
    } catch (error) {
      const err =
        error instanceof Error ? error : new Error('Google sign in failed');
      onError?.(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleGoogleSignIn,
  };
};
