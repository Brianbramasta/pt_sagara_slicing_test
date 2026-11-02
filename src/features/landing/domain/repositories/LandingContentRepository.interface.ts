import { LandingContent } from "../entities/LandingContent";

export interface ILandingContentRepository {
  getLandingContent(): Promise<LandingContent>;
}
