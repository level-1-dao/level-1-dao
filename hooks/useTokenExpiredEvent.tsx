import { useEffect, useState } from "react";
import { onTokenExpire } from "../src/lib/tokenExpired";
import { useRouter } from "next/router";

const useTokenExpiredEvent = () => {
  const [tokenExpired, setTokenExpired] = useState(false);
  const router = useRouter();

  useEffect(() => {
    onTokenExpire(() => {
      setTokenExpired(true);
    });
  }, []);

  useEffect(() => {
    if (tokenExpired) {
      router.push(`/api/auth/login?returnTo=${router.asPath}`);
    }
  }, [tokenExpired]);
};

export default useTokenExpiredEvent;
