import ServicesCategory from "./services";
import Services from "./servicesDescription";

ServicesCategory.hasMany(Services, {
    as: 'services',
    foreignKey: 'categoryId',
  });

  Services.belongsTo(ServicesCategory, {
    as: 'category',
    foreignKey: 'categoryId',
  });

  export { ServicesCategory };
export { Services };