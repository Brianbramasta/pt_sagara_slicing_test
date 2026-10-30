import { useQuery } from "@tanstack/react-query";
import { getProductUseCase } from "../../di/ProductContainer";

export const useProductQuery = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductUseCase.execute(id),
    enabled: !!id,
  });
};