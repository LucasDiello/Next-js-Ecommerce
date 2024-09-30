import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const useGoogleAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const loginGoogle = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        setLoading(true);
        const res = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const data = await res.json();
        console.log(data);

        localStorage.setItem('user', JSON.stringify(data));
        router.push('/');
      } catch (err) {
        console.error("Google authentication failed", err);
        setError("Failed to authenticate with Google");
      } finally {
        setLoading(false);
      }
    },
    onError: (error) => {
      console.error("Google login error", error);
      setError("Failed to authenticate with Google");
      setLoading(false);
    },
  });

  return {
    loginGoogle,
    loading,
    error,
  };
};

export default useGoogleAuth;
