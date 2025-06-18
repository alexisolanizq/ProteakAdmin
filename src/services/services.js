import { useDispatch, useSelector } from "react-redux";
import { useGET, usePOST } from "src/utils/api";
import { isValid } from "src/utils/values";

export const useListService = ({
  url,
  store,
  enable,
  onSaveList,
  listName = "list",
  onSuccess = () => {},
  onError = () => {},
}) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state[store]?.[listName]);

  const shouldEnable =
    typeof enable === "boolean" ? enable : !isValid(list) || list.length === 0;

  const { isFetching } = useGET({
    url,
    enable: shouldEnable,
    onSuccess: (response) => {
      dispatch(onSaveList(response));
      onSuccess(response);
    },
    onError,
  });

  return {
    data: list || [],
    isLoading: isFetching,
  };
};

export const useAddService = ({
  url,
  onSaveRow = null,
  onSuccess = () => {},
  onError = () => {},
}) => {
  const dispatch = useDispatch();
  const mutation = usePOST({
    url,
    onSuccess: (response) => {
      if (onSaveRow !== null) dispatch(onSaveRow(response));
      onSuccess(response);
    },
    onError,
  });

  return mutation;
};
