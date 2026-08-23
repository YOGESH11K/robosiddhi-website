/**
 * Shared in-memory API stores.
 * Demo-grade persistence: survives per server instance only.
 * Production TODO_CONFIG: swap internals for Postgres/Prisma without
 * changing the exported interface.
 */

export interface Enquiry {
  id: string;
  type: "general" | "school" | "course" | "workshop";
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  message: string;
  meta?: Record<string, string>;
  createdAt: string;
}

const g = globalThis as unknown as { __rs_enquiries?: Enquiry[] };

function db(): Enquiry[] {
  g.__rs_enquiries ??= [];
  return g.__rs_enquiries;
}

export function addEnquiry(
  input: Omit<Enquiry, "id" | "createdAt">,
): Enquiry {
  const record: Enquiry = {
    ...input,
    id: `ENQ-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .slice(2, 6)
      .toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };
  db().unshift(record);
  return record;
}

export function getEnquiries(): readonly Enquiry[] {
  return db();
}
