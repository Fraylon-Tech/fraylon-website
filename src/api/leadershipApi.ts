import { leadershipData } from "../data/leadershipData";

export const getLeadership = async () => {
  return Promise.resolve(leadershipData);
};