import { LandingContent } from "../entities/LandingContent";
import { ILandingContentRepository } from "../repositories/LandingContentRepository.interface";

export class GetLandingContentUseCase {
  constructor(private landingContentRepository: ILandingContentRepository) {}

  execute(): Promise<LandingContent> {
    return this.landingContentRepository.getLandingContent();
  }
}
