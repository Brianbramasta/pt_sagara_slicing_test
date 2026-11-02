import { useQuery } from "@tanstack/react-query";
import { getLandingContentUseCase } from "../../di/LandingContentContainer";

export const useLandingContentQuery = () => {
  return useQuery({
    queryKey: ["landing-content"],
    queryFn: () => getLandingContentUseCase.execute(),
  });
};
