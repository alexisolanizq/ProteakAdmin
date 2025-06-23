import { useOperativeStateListService } from "src/services/operative-state/operativeStateService";

const useOperativeState = () => {
  const { data: operativeState, isLoading } = useOperativeStateListService();

  return { operativeState, isLoading };
};

export default useOperativeState;
