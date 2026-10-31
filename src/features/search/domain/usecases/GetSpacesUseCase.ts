import { ISpaceRepository } from "../repositories/SpaceRepository.interface";
import { Space } from "../entities/Space";

export class GetSpacesUseCase {
  constructor(private spaceRepo: ISpaceRepository) {}

  async execute(): Promise<Space[]> {
    return this.spaceRepo.getAllSpaces();
  }
}