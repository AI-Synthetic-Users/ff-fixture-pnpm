# ff-fixture-pnpm
Frontier Factory fixture: a small real pnpm TypeScript app with a test script.

## Frontier Factory fixture

A small real pnpm TypeScript app, used by Frontier Factory's verification harness (`e2e/`) as an
installable fixture repo. `pnpm test` runs `node --test` against `tests/`. The `fixture-base` tag
marks the commit the harness resets this repo to before each run.
