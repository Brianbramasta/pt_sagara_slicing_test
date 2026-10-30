import { ProductDTO } from "../dtos/ProductDTO";
import { Product } from "../../domain/entities/Product";

export class ProductMapper {
  static toEntity(dto: ProductDTO): Product {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      type: dto.type,
      location: dto.location,
      address: dto.address,
      images: dto.images.map((img) => ({
        id: img.id,
        url: img.url,
        isMain: img.isMain,
      })),
      capacity: dto.capacity,
      prices: dto.prices.map((p) => ({
        period: p.period as Product["prices"][0]["period"],
        price: p.price,
        isBestDeal: p.isBestDeal,
      })),
      rating: dto.rating,
      ratingCount: dto.ratingCount,
      addOns: dto.addOns.map((ao) => ({
        id: ao.id,
        title: ao.title,
        price: ao.price,
        unit: ao.unit,
      })),
      similarSpaces: dto.similarSpaces.map((ss) => ({
        id: ss.id,
        title: ss.title,
        type: ss.type,
        typeColor: ss.typeColor,
        icon: ss.icon,
        people: ss.people,
        pricePeriod: ss.pricePeriod,
        price: ss.price,
        hourlyPrice: ss.hourlyPrice,
        hasDiscount: ss.hasDiscount,
        imageSrc: ss.imageSrc,
      })),
    };
  }
}