/**
 * Certificate verification registry.
 *
 * Demo-grade: a small, clearly-labelled set of sample records so the
 * verification flow can be demonstrated end-to-end.
 * TODO_CONFIG: back this with the database (Prisma model `Certificate`)
 * and remove demo records before production. The exported interface
 * is designed to stay identical when that swap happens.
 */

export interface CertificateRecord {
  id: string;
  studentName: string; // placeholder identity — not a real person
  program: string;
  issuedOn: string; // ISO date
  level: "Participation" | "Completion" | "Excellence";
  demo: true;
}

const DEMO_CERTS: CertificateRecord[] = [
  {
    id: "RS-DEMO-0001",
    studentName: "Demo Student",
    program: "Arduino Mastery",
    issuedOn: "2025-01-15",
    level: "Completion",
    demo: true,
  },
  {
    id: "RS-DEMO-0002",
    studentName: "Demo Student",
    program: "AI & IoT Explorer",
    issuedOn: "2025-04-02",
    level: "Excellence",
    demo: true,
  },
  {
    id: "RS-DEMO-0003",
    studentName: "Demo Student",
    program: "Drone Technology Workshop",
    issuedOn: "2025-06-21",
    level: "Participation",
    demo: true,
  },
];

export type VerifyResult =
  | { status: "valid"; record: CertificateRecord }
  | { status: "invalid"; reason: string };

/** Looks up a certificate ID. Shape stays stable for a future DB-backed store. */
export function verifyCertificate(rawId: string): VerifyResult {
  const id = rawId.trim().toUpperCase();
  if (!id) return { status: "invalid", reason: "Please enter a certificate ID." };

  const record = DEMO_CERTS.find((c) => c.id === id);
  if (!record) {
    return {
      status: "invalid",
      reason:
        "No certificate found for this ID. Check for typos — IDs look like RS-XXXX-XXXX.",
    };
  }
  return { status: "valid", record };
}

export const CERTIFICATE_ID_HINT = "RS-DEMO-0001";
