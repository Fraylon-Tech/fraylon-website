import { leadershipData, type Leader } from '../data/leadershipData';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface LeadershipResponse {
    success: boolean;
    count: number;
    data: Leader[];
}

// ─── API ─────────────────────────────────────────────────────────────────────

export const getLeadership = async (): Promise<LeadershipResponse> => {
    return Promise.resolve({
        success: true,
        count: leadershipData.length,
        data: leadershipData,
    });
};