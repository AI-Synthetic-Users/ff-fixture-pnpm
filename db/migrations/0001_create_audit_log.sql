-- Creates the audit_log table that records who changed what, and when.
CREATE TABLE IF NOT EXISTS audit_log (
    id           bigserial PRIMARY KEY,
    actor_id     text NOT NULL,
    entity_type  text NOT NULL,
    entity_id    text NOT NULL,
    action       text NOT NULL CHECK (action IN (
                     'insert', 'update', 'delete', 'login', 'logout',
                     'create', 'archive', 'restore', 'export', 'import'
                 )),
    changes      jsonb,
    created_at   timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_audit_log_action ON audit_log (action);
CREATE INDEX IF NOT EXISTS idx_audit_log_actor ON audit_log (actor_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_entity ON audit_log (entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_created_at ON audit_log (created_at);

-- Protect audit log immutability: prevent updates and deletes.
CREATE OR REPLACE FUNCTION audit_log_immutable()
RETURNS trigger AS $$
BEGIN
    RAISE EXCEPTION 'audit_log is append-only: updates and deletes are not permitted';
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_audit_log_immutable
    BEFORE UPDATE OR DELETE ON audit_log
    FOR EACH ROW
    EXECUTE FUNCTION audit_log_immutable();
