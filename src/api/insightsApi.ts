import { insightsData } from '../data/insightsData';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface InsightItem {
    id: number;
    category: string;
    title: string;
    excerpt: string;
    image: string;
    author: string;
    authorRole: string;
    date: string;
    readTime: string;
}

export interface InsightsResponse {
    success: boolean;
    count: number;
    categoryBreakdown: Record<string, number>;
    data: typeof insightsData;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildCategoryBreakdown(items: typeof insightsData): Record<string, number> {
    return items.reduce<Record<string, number>>((acc, item) => {
        acc[item.category] = (acc[item.category] ?? 0) + 1;
        return acc;
    }, {});
}

// ─── API ─────────────────────────────────────────────────────────────────────

export const getInsights = async (): Promise<InsightsResponse> => {
    return Promise.resolve({
        success: true,
        count: insightsData.length,
        categoryBreakdown: buildCategoryBreakdown(insightsData),
        data: insightsData,
    });
};

export const getInsightsByCategory = async (category: string): Promise<InsightsResponse> => {
    const filtered = insightsData.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    return Promise.resolve({
        success: true,
        count: filtered.length,
        categoryBreakdown: buildCategoryBreakdown(filtered),
        data: filtered,
    });
};
