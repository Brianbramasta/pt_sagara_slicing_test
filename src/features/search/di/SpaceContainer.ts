import { SpaceApiService } from "../data/services/SpaceApiService";
import { SpaceRepositoryImpl } from "../data/repositories/SpaceRepositoryImpl";
import { GetSpacesUseCase } from "../domain/usecases/GetSpacesUseCase";

const spaceApiService = new SpaceApiService();
const spaceRepository = new SpaceRepositoryImpl(spaceApiService);
export const getSpacesUseCase = new GetSpacesUseCase(spaceRepository);