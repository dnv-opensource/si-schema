# si-schema

> Open data structure for ship **System Integration** test sheets.
> Vendor-neutral. Human-readable. Machine-validated.

[![Website](https://img.shields.io/badge/website-dnv--opensource.github.io%2Fsi--schema-0a2540?logo=githubpages)](https://dnv-opensource.github.io/si-schema/)
[![Schema](https://img.shields.io/badge/JSON_Schema-draft%202020--12-00a3a1)](https://dnv-opensource.github.io/si-schema/si_schema.schema.json)
[![Spec](https://img.shields.io/badge/spec-v0.0.9-blue)](./TEST_SHEET_DATA_STRUCTURE.md)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

---

## What is si-schema?

`si-schema` defines a compact, vendor-neutral data structure for the documents
that drive ship System Integration testing. It covers the full scope of
integration engineering -- from component and signal definitions through
connection topology, function descriptions, protocol bindings, and acceptance
test cases.

The schema is designed so that **equipment vendors** can describe their
components, signals, and functions in a standardised format, and **system
integrators** can compose those descriptions into cross-component architecture,
connections, and contract-level artifacts.

It is maintained by the **Complex Integrated System (CIS) Initiative** at
[DNV](https://www.dnv.com).

---

## Schema variants

Two schema variants are provided:

| Variant | File | Use case |
|---------|------|----------|
| **Full** | [`si_schema.schema.json`](./schemas/si_schema.schema.json) | System integrators composing cross-component architecture |
| **Vendor** | [`vendor.si_schema.schema.json`](./schemas/vendor.si_schema.schema.json) | Equipment vendors describing a single component's interfaces |

The vendor schema is a strict subset of the full schema. It includes
components, signals, functions, and parties -- but omits integrator-owned
entities such as connections, interfaces, protocol bindings, and acceptance
cases.

---

## What's in this repository

| Path | Purpose |
|------|---------|
| [`schemas/si_schema.schema.json`](./schemas/si_schema.schema.json) | Full JSON Schema (draft 2020-12) |
| [`schemas/vendor.si_schema.schema.json`](./schemas/vendor.si_schema.schema.json) | Vendor-subset JSON Schema |
| [`examples/`](./examples/) | Validated example documents (full and vendor) |
| [`TEST_SHEET_DATA_STRUCTURE.md`](./TEST_SHEET_DATA_STRUCTURE.md) | Prose specification (canonical) |
| [`CHANGELOG.md`](./CHANGELOG.md) | Version history |
| [`LICENSE`](./LICENSE) | MIT |

The full documentation site, including all entity reference pages and
validation rules, is published at
**<https://dnv-opensource.github.io/si-schema/>**.

---

## Core entities

The schema is organised around these core entities:

| Entity | Description |
|--------|-------------|
| **ProjectMeta** | Project identification and schema version |
| **Component** | A piece of equipment with modes, modules, and ports |
| **Signal** | A named data point with type, category, and value mapping |
| **Connection** | A typed link between two ports carrying a signal |
| **Function** | A behavioural description binding signals to a component and its modes |
| **Party** | A stakeholder (vendor, integrator, shipyard, class society, etc.) |

Additional contract-layer entities support formal integration governance:

| Entity | Description |
|--------|-------------|
| **Interface** | A cross-system interface with protocol and authority bindings |
| **ProtocolBinding** | Protocol details (Modbus, CANopen, OPC UA, etc.) |
| **AcceptanceCase** | Structured FAT/SAT/HAT test case with steps and expected outcomes |
| **Lineage** | Signal provenance chain across processing hops |
| **ArtifactMeta** | Lifecycle and compatibility metadata for the document itself |

See the [entity reference pages](https://dnv-opensource.github.io/si-schema/)
for full field definitions and YAML examples.

---

## Consume the schema

Both schema variants are hosted at stable URLs:

```
https://dnv-opensource.github.io/si-schema/si_schema.schema.json
https://dnv-opensource.github.io/si-schema/vendor.si_schema.schema.json
```

### VS Code + YAML

```jsonc
// .vscode/settings.json
{
  "yaml.schemas": {
    "https://dnv-opensource.github.io/si-schema/si_schema.schema.json": [
      "test_sheets/**/*.yaml"
    ],
    "https://dnv-opensource.github.io/si-schema/vendor.si_schema.schema.json": [
      "vendor_sheets/**/*.yaml"
    ]
  }
}
```

### Python (jsonschema)

```python
import json, yaml
from jsonschema import Draft202012Validator

schema = json.load(open("schemas/si_schema.schema.json"))
Draft202012Validator(schema).validate(yaml.safe_load(open("test_sheet.yaml")))
```

### Python (si-schema CLI)

```bash
pip install si-schema
si-schema validate test_sheet.yaml
si-schema emit-schema              # print JSON Schema to stdout
si-schema diff-contract old.yaml new.yaml
```

---

## Validation rules

The schema enforces 14 cross-reference validation rules (SIG001 -- SIG024)
that go beyond what JSON Schema alone can express -- for example, ensuring
that connection port references resolve, function mode references exist in
the parent component, and vendor IO mappings reference known parties.

See the [validation page](https://dnv-opensource.github.io/si-schema/validation)
for the full rule catalog.

---

## Examples

The [`examples/`](./examples/) folder contains validated sample documents:

- **`full-schema-example.json`** -- a complete integration document with
  components, signals, connections, functions, and parties.
- **`vendor-schema-example.json`** -- a vendor submission with a single
  component, its signals, functions, and the supplying party.

---

## Versioning

The schema follows semantic versioning. The current version is encoded in
`schemas/si_schema.schema.json` under the `version` field and tagged on this
repository.

## Contributing

Issues and discussion are welcome on this repository. Source code for the
Pydantic models, JSON Schema generator and documentation site is maintained
internally by the CIS Initiative.

For collaboration enquiries: **CIS@dnv.com**.

## License

[MIT](./LICENSE) -- DNV AS
