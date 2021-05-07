import { useState, useRef, useEffect } from 'react';
import asyncCall from './utils/async-call';

const useAsyncAction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isCancelled = useRef(false);

  const asyncAction = async (config, setAlerts) => {
    setIsLoading(true);

    const data = await asyncCall(config, setAlerts);

    if (!isCancelled.current) setIsLoading(false);

    return data || null;
  };

  useEffect(() => {
    return () => {
      isCancelled.current = true;
    };
  }, []);

  return [asyncAction, isLoading, isCancelled];
};

export default useAsyncAction;
