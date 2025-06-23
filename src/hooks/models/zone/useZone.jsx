import { useZoneService } from "src/services/zone/zoneService";

const useZone = () => {
  const { data: zones, isLoading } = useZoneService();

  return {
    zones,
    isLoading,
  };
};

export default useZone;
