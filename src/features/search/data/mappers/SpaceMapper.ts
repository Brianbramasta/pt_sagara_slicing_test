import { SpaceDTO } from "../dtos/SpaceDTO";
import { Space } from "../../domain/entities/Space";

export class SpaceMapper {
  static toEntity(dto: SpaceDTO): Space {
    return {
      id: dto.id,
      title: dto.title,
      location: dto.location,
      image: dto.image,
      capacity: dto.capacity,
      type: dto.type,
      dailyPrice: dto.daily_price,
      hourlyPrice: dto.hourly_price,
    };
  }

  static toEntities(dtos: SpaceDTO[]): Space[] {
    return dtos.map(SpaceMapper.toEntity);
  }
}