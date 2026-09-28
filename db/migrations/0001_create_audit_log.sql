-- Creates the audit_log table that records who changed what, and when.
CREATE TABLE IF NOT EXISTS audit_log (
    id         bigserial PRIMARY KEY,
    actor      text NOT NULL,
    action     text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);
