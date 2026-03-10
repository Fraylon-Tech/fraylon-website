import { servicesData, type ServiceData } from '../data/servicesData';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ServicesResponse {
    success: boolean;
    count: number;
    data: Record<string, ServiceData>;
}

// ─── API ─────────────────────────────────────────────────────────────────────

export const getServices = async (): Promise<ServicesResponse> => {
    return Promise.resolve({
        success: true,
        count: Object.keys(servicesData).length,
        data: servicesData,
    });
};