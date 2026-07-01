# Changelog

All notable changes to **si-schema** are documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.0.7a2] — 2026-07-01

### Added
- **Vendor-subset JSON Schema** (`vendor.si_schema.schema.json`): a focused schema
  containing only entities a component vendor is expected to populate (project,
  parties, components, functions, signals, glossary). Excludes SI-only concerns
  (connections, contract-layer entities, legacy systems).
- `VendorSISchema` Pydantic model in `src/si_schema/models.py` with dedicated
  cross-reference validation (`run_vendor_cross_reference_checks`).
- `tools/gen_schema.py` now generates both full and vendor schemas by default
  (use `--variant full|vendor|all` to control).
- Website download badges are now profile-aware: vendor-tagged pages link to the
  vendor schema, SI-tagged pages link to the full schema, mixed pages show both.
- Homepage hero section shows both "Full Schema" and "Vendor Schema" download pills.
- Test suite: `tests/test_vendor_schema.py` with drift detection, validation, and
  schema generation tests.
- CI/CD and local scripts updated to generate and deploy the vendor schema
  alongside the full schema (deploy.yml, publish-public.yml, publish-dry-run
  scripts, website `schema:copy` hook).

### Changed
- **Breaking (dev):** Flattened repository layout — `schema/src/` → `src/`, `schema/tests/` → `tests/`.
- Dropped Python 3.10 support; added Python 3.14.
- Migrated all enums from `(str, Enum)` to `StrEnum` (stdlib in 3.11+).
- Migrated Python tooling from pip/setuptools to uv/hatchling.
- Replaced `[project.optional-dependencies]` with `[dependency-groups]` (PEP 735).
- CI now uses `astral-sh/setup-uv` instead of `actions/setup-python` + pip.
- Developer setup simplified to `uv sync` (no manual venv or pip install).

### Added
- Code quality tooling: ruff, pyright, mypy, prettier, eslint, svelte-check.
- Pre-commit hooks for Python formatting and linting.
- CI workflow (`ci.yml`) enforcing all quality gates on PRs and pushes to main.
- `CONTRIBUTING.md` with developer setup and quality check instructions.
- `uv.lock` for reproducible dependency resolution.

### Removed
- `schema/pyproject.toml` (consolidated into root `pyproject.toml`).

## [0.0.6] — 2026-06-29
### Added
- Unified party/vendor/actor terminology: `Party` is the primary type with
  `PartyKind` enum; `Actor`, `Vendor`, `ActorKind` kept as backward-compatible
  aliases.
- Extracted `base.py` module (`Slug`, `_Strict`) to eliminate circular imports.
- `Lineage`, `TransformationHop`, and `LineageSignalRef` types for cross-party
  signal transformation chains.
- Validation rules SIG018 (artefact lifecycle coherence), SIG019
  (deprecated/withdrawn lifecycle), SIG020 (lineage integrity), SIG024
  (`component.vendor` must reference a party with `kind=vendor`).
- `VendorIOMapping` with `party_id` field; `ActorIOMapping` and
  `PartyIOMapping` as backward-compatible aliases.

### Changed
- Contract-layer top-level types (`ProtocolBinding`, `ModeDefinition`,
  `AuthorityRule`, `AlarmDefinition`, `Interface`, `AcceptanceCase`, `Lineage`)
  moved into `models.py`; sub-types remain in `contract.py`.

## [0.0.5] — 2026-06-21
### Added
- Contract layer (WIP): `Interface`, `ProtocolBinding`, `ModeDefinition`,
  `AuthorityRule`, `AlarmDefinition`, `AcceptanceCase`.
- `ArtifactMeta` with role, status, compatibility class, lifecycle governance.
- Physical-link profiles for hardwired interface contracts.
- Protocol addressing variants (Modbus, CANopen, NMEA 0183/2000, OPC UA,
  vendor-specific) with discriminated union.
- Network profile for segment/VLAN/security/redundancy metadata.

## [0.0.4] — 2026-05-18
### Added
- Generated JSON Schema (draft 2020-12) published at a stable URL.
- New optional `Signal.assumed` (bool) and `Signal.source_doc_ref` (str) fields
  for explicit provenance tracking.
- Validation rule SIG014 (released artefact governance) added to the spec.

### Changed
- Spec promoted to its own published artefact section (§16).
- Signal `signal_order` pattern clarified — see §6 of the spec.

## [0.0.3] — 2026-04
### Added
- Initial public draft of the prose specification.
