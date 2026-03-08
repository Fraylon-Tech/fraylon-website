import { servicesData } from "../data/servicesData";

export const getServices = async () => {
  return Promise.resolve(servicesData);
};