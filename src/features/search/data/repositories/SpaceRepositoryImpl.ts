import { ISpaceRepository } from "../../domain/repositories/SpaceRepository.interface";
import { Space } from "../../domain/entities/Space";
import { SpaceApiService } from "../services/SpaceApiService";
import { SpaceMapper } from "../mappers/SpaceMapper";

export class SpaceRepositoryImpl implements ISpaceRepository {
  constructor(private apiService: SpaceApiService) {}

  async getAllSpaces(): Promise<Space[]> {
    const rawData = await this.apiService.fetchAll();
    return SpaceMapper.toEntities(rawData);
  }
}