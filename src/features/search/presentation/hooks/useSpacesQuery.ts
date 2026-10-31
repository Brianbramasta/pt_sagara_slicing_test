import { useQuery } from "@tanstack/react-query";
import { getSpacesUseCase } from "../../di/SpaceContainer";

export const useSpacesQuery = () => {
  return useQuery({
    queryKey: ["spaces-list"],
    queryFn: () => getSpacesUseCase.execute(),
  });
};