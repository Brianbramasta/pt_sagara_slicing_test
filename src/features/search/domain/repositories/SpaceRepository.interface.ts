import { Space } from "../entities/Space";

export interface ISpaceRepository {
  getAllSpaces(): Promise<Space[]>;
}