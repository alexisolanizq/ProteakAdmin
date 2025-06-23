import { API_RISK_RATING_SOFTMANTTO } from "src/constants/modelsApi";
import { useGET } from "src/utils/api";

export const useRiskRatingListService = () =>
  useGET({
    url: API_RISK_RATING_SOFTMANTTO,
    nameQuery: "riskRatingQuery",
  });
