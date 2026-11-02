import { ILandingContentRepository } from "../../domain/repositories/LandingContentRepository.interface";
import { LandingContent } from "../../domain/entities/LandingContent";
import { LandingContentApiService } from "../services/LandingContentApiService";
import { LandingContentMapper } from "../mappers/LandingContentMapper";

export class LandingContentRepositoryImpl implements ILandingContentRepository {
  constructor(private apiService: LandingContentApiService) {}

  async getLandingContent(): Promise<LandingContent> {
    const rawData = await this.apiService.fetchLandingContent();
    return LandingContentMapper.toEntity(rawData);
  }
}
