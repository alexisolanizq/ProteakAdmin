import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axiosInstance from "src/utils/axiosInstance";

const headersImage = { "content-type": "multipart/form-data" };

const axiosGet = async ({
  url,
  params,
  headers = {},
  responseType = "json",
}) => {
  const response = await axiosInstance.get(url, {
    params,
    headers,
    responseType,
  });

  return response.data;
};

const axiosPOST = async ({ url, data, params, headers = {} }) => {
  const response = await axiosInstance.post(url, data, { params, headers });
  return response.data;
};

export function useGETMutation({
  url,
  onSuccess,
  headers = {},
  responseType = "json",
}) {
  return useMutation({
    mutationFn: (params) => axiosGet({ url, params, headers, responseType }),
    onSuccess,
  });
}

export function useGET({
  filters,
  url,
  nameQuery = null,
  params = {},
  onSuccess = () => {},
  onError = () => {},
  headers = {},
  enable = true,
  responseType = "json",
}) {
  const query = useQuery({
    queryKey: [nameQuery || url, filters],
    queryFn: () => axiosGet({ url, params, headers, responseType }),
    retry: false,
    enabled: enable,
  });

  useEffect(() => {
    if (query.isSuccess) {
      onSuccess(query.data);
    }
  }, [query.isSuccess, query.data]);

  useEffect(() => {
    if (query.isError) {
      onError(query.error);
    }
  }, [query.isError, query.error]);

  return query;
}

export function usePOST({
  url,
  onSuccess = () => {},
  onError = () => {},
  image = false,
}) {
  let headers = {};
  if (image) headers = headersImage;
  return useMutation({
    mutationFn: (data) => axiosPOST({ url, data, headers }),
    onSuccess,
    onError,
  });
}
