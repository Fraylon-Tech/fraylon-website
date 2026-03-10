# Dashboard Data Improvements

## Overview

This document explains the changes made to improve the response structure of the frontend API layer (`src/api/`). The goal was to make data **consistent**, **easy to use**, and return **counts automatically** so the frontend doesn't have to calculate them manually.

---

## Problem (Before)

The API functions were returning raw arrays or objects directly:

```ts
// leadershipApi.ts (before)
return Promise.resolve(leadershipData);
// → [ {...}, {...}, {...} ]  ← frontend had to do .length itself

// servicesApi.ts (before)
return Promise.resolve(servicesData);
// → { wordpress: {...}, shopify: {...} }  ← no count, no structure
```

There was also **no insightsApi** at all — insights data had no API layer.

---

## Solution (After)

All API functions now return a **consistent, structured response** with:

| Field | Description |
|-------|-------------|
| `success` | `true` always — easy to check in frontend |
| `count` | Total number of items — no need to calculate |
| `data` | The actual data (array or object) |
| `categoryBreakdown` | *(Insights only)* Count per category |

---

## Files Changed

### 1. `src/api/leadershipApi.ts` — Updated

Returns leadership team data with total count.

```ts
const response = await getLeadership();

// response shape:
{
  success: true,
  count: 6,
  data: [ { name, role, image, bio }, ... ]
}
```

**Frontend usage:**
```tsx
const { count, data } = await getLeadership();
console.log(`Total leaders: ${count}`);  // → 6
data.map(leader => <LeaderCard key={leader.name} {...leader} />);
```

---

### 2. `src/api/servicesApi.ts` — Updated

Returns all services with a count of how many services exist.

```ts
const response = await getServices();

// response shape:
{
  success: true,
  count: 14,
  data: { wordpress: {...}, shopify: {...}, ... }
}
```

**Frontend usage:**
```tsx
const { count, data } = await getServices();
console.log(`Total services: ${count}`);  // → 14
const service = data['shopify'];          // access by key
```

---

### 3. `src/api/insightsApi.ts` — New File

Brand new API for insights/blog data. Includes category breakdown counts.

```ts
const response = await getInsights();

// response shape:
{
  success: true,
  count: 18,
  categoryBreakdown: {
    "Artificial Intelligence": 3,
    "Sustainability": 3,
    "Cybersecurity": 3,
    "Digital Transformation": 3,
    "Data Analytics": 3,
    "Future of Work": 3
  },
  data: [ { id, category, title, excerpt, ... }, ... ]
}
```

**Filter by category:**
```ts
const response = await getInsightsByCategory("Cybersecurity");
// returns only the 3 cybersecurity articles, count: 3
```

**Frontend usage:**
```tsx
const { count, categoryBreakdown, data } = await getInsights();

// Show total articles
<p>Total Insights: {count}</p>

// Show category tabs with counts
Object.entries(categoryBreakdown).map(([cat, num]) => (
  <Tab key={cat}>{cat} ({num})</Tab>
));

// Render articles
data.map(article => <InsightCard key={article.id} {...article} />);
```

---

## How It Works Internally

```
src/data/         ← Raw hardcoded data (unchanged)
    insightsData.ts
    leadershipData.tsx
    servicesData.tsx

src/api/          ← API layer (improved)
    leadershipApi.ts   → wraps data with { success, count, data }
    servicesApi.ts     → wraps data with { success, count, data }
    insightsApi.ts     → NEW: adds categoryBreakdown + filter function
```

The data files are **not changed** — only the API wrapper layer was improved.

---

## Branch

All changes are on the `dashboard-data-improve` branch.
