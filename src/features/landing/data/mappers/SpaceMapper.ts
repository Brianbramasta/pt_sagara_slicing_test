import { SpaceDTO, SimilarSpaceDTO } from "../dtos/SpaceDTO";
import { Space, SimilarSpace } from "../../domain/entities/Space";

export class SpaceMapper {
  static toSimilarSpace(dto: SimilarSpaceDTO): SimilarSpace {
    return {
      id: dto.id,
      title: dto.title,
      type: dto.type,
      typeColor: dto.typeColor,
      icon: dto.icon,
      people: dto.people,
      pricePeriod: dto.pricePeriod,
      price: dto.price,
      hourlyPrice: dto.hourlyPrice,
      hasDiscount: dto.hasDiscount,
      imageSrc: dto.imageSrc,
    };
  }

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
      similarSpaces: dto.similarSpaces.map(SpaceMapper.toSimilarSpace),
    };
  }

  static toEntities(dtos: SpaceDTO[]): Space[] {
    return dtos.map(SpaceMapper.toEntity);
  }
}