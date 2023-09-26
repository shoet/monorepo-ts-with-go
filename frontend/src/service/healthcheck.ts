import useSWR from "swr";

type Health = {
  message: string;
};

export const useHealthCheck = () => {
  const url = "http://localhost:3000/health";
  const { data, isLoading, error } = useSWR<Health>(url);
  return { data, isLoading, error };
};
