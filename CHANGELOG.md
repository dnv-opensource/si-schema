# Changelog

All notable changes to **si-schema** are documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] — 2026-05-18
### Added
- Generated JSON Schema (draft 2020-12) published at a stable URL.
- New optional `Signal.assumed` (bool) and `Signal.source_doc_ref` (str) fields
  for explicit provenance tracking.
- Validation rules SIG013 (expected_value within value_mapping range) and
  SIG014 (severity grades for SIG001 – SIG013) added to the spec.

### Changed
- Spec promoted to its own published artefact section (§16).
- Signal `signal_order` pattern clarified — see §6 of the spec.

## [0.3.0] — 2026-04
### Added
- Initial public draft of the prose specification.
