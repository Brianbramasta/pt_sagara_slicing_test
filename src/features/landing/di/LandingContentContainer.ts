import { LandingContentApiService } from "../data/services/LandingContentApiService";
import { LandingContentRepositoryImpl } from "../data/repositories/LandingContentRepositoryImpl";
import { GetLandingContentUseCase } from "../domain/usecases/GetLandingContentUseCase";

const landingContentApiService = new LandingContentApiService();
const landingContentRepository = new LandingContentRepositoryImpl(landingContentApiService);

export const getLandingContentUseCase = new GetLandingContentUseCase(landingContentRepository);
