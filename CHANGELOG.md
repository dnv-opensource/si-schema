# Changelog

All notable changes to **si-schema** are documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

## [0.1.0a2] -- 2026-07-03

### Changed
- Clarified `Port.id` field description to indicate vendor-specific
  identification (e.g. 'DI01') rather than generic descriptive names.
- Renamed port IDs in examples from descriptive names (`cmd_out`, `speed_out`,
  `ready_in`) to vendor-style identifiers (`DO01`, `AO07`, `DI02`).
- Updated website tagline from "a System-Integration initiative" to
  "A DNV Initiative".

### Fixed
- Corrected "Complex Integrated System" to "Complex Integrated Systems"
  (plural) in published metadata and website.

## [0.1.0a1] -- 2026-07-03

### Changed
- Added field-level descriptions to core Pydantic schema models and regenerated
  the published JSON Schema outputs to expose the new metadata.


## [0.0.9] -- 2026-07-02

### Added
- Example files are now validated against Pydantic models by automated tests.
- Example files are now published alongside schemas.

### Removed
- `TEST_SHEET_DATA_STRUCTURE.md` removed from published output.


## [0.0.8] -- 2026-07-02

### Changed
- Moved generated JSON schema files into `schemas/` subdirectory to mirror
  the public repository layout.

### Added
- **Breaking:** `ProjectMeta.schema_version` is now a required field (no
  default). Must be a valid PEP 440 version string and must not exceed the
  current package version.
- **Breaking:** Standardized all enum values to lowercase/snake_case for
  uniformity across the JSON schema. Affected enums: `Direction`, `SignalType`,
  `PortType`, `ProtocolFamily`, `SignalCategory`, `FunctionCategory`,
  `SignalSubtype`, `DataType`.
  - `Direction`: `IN`/`OUT` changed to `in`/`out`
  - `SignalType`: `Digital`/`Analog`/`CAN`/`I2C`/`UART` changed to
    `digital`/`analog`/`can`/`i2c`/`uart` (`1-wire` kept as-is)
  - `PortType`: `Signal`/`CAN-TC`/`Analog`/`Resistor`/`Serial`/`Network`
    changed to `signal`/`can_tc`/`analog`/`resistor`/`serial`/`network`
    (`4-20mA` and `0-10V` kept as engineering notation)
  - `ProtocolFamily`: `ModbusRTU`/`ModbusTCP`/`CANopen`/`OPCUA`/`Profinet`/
    `EtherNetIP`/`VendorSpecific` changed to `modbus_rtu`/`modbus_tcp`/
    `canopen`/`opcua`/`profinet`/`ethernet_ip`/`vendor_specific`
  - `SignalCategory`: `permission/interlock` changed to `permission_interlock`
  - `FunctionCategory`: PascalCase values changed to lowercase
  - `SignalSubtype`: `NO`/`NC` changed to `no`/`nc`
  - `DataType`: `analog_4_20mA`/`analog_0_10V` changed to
    `analog_4_20ma`/`analog_0_10v`
- Website changelog page now auto-syncs at build time.


## [0.0.7] -- 2026-07-01

### Added
- **Vendor-subset JSON Schema** (`vendor.si_schema.schema.json`): a focused schema
  containing only entities a component vendor is expected to populate (project,
  parties, components, functions, signals, glossary). Excludes SI-only concerns
  (connections, contract-layer entities, legacy systems).
- `VendorSISchema` Pydantic model with dedicated cross-reference validation.
- Schema generator now produces both full and vendor schemas by default
  (use `--variant full|vendor|all` to control).
- Website download badges are now profile-aware: vendor-tagged pages link to the
  vendor schema, SI-tagged pages link to the full schema, mixed pages show both.
- Homepage hero section shows both "Full Schema" and "Vendor Schema" download pills.

### Changed
- Dropped Python 3.10 support; added Python 3.14.
- Migrated all enums from `(str, Enum)` to `StrEnum` (stdlib in 3.11+).

### Removed
- `schema/pyproject.toml` (consolidated into root `pyproject.toml`).


## [0.0.6] -- 2026-06-29

### Added
- Unified party/vendor/actor terminology: `Party` is the primary type with
  `PartyKind` enum; `Actor`, `Vendor`, `ActorKind` kept as backward-compatible
  aliases.
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


## [0.0.5] -- 2026-06-21

### Added
- Contract layer (WIP): `Interface`, `ProtocolBinding`, `ModeDefinition`,
  `AuthorityRule`, `AlarmDefinition`, `AcceptanceCase`.
- `ArtifactMeta` with role, status, compatibility class, lifecycle governance.
- Physical-link profiles for hardwired interface contracts.
- Protocol addressing variants (Modbus, CANopen, NMEA 0183/2000, OPC UA,
  vendor-specific) with discriminated union.
- Network profile for segment/VLAN/security/redundancy metadata.


## [0.0.4] -- 2026-05-18

### Added
- Generated JSON Schema published at a stable URL.
- New optional `Signal.assumed` (bool) and `Signal.source_doc_ref` (str) fields
  for explicit provenance tracking.
- Validation rule SIG014 (released artefact governance) added to the spec.

### Changed
- Spec promoted to its own published artefact section.
- Signal `signal_order` pattern clarified.


## [0.0.3] -- 2026-04

### Added
- Initial public draft of the prose specification.
