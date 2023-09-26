import { useHealthCheck } from "@/service/healthcheck";
import { NextPage } from "next";

const HealthPage: NextPage = () => {
  const { data: health, isLoading, error } = useHealthCheck();
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {health && <div>Health: {health.message}</div>}
    </>
  );
};

export default HealthPage;
