# si-schema

> Open data structure for ship **System Integration** test sheets.
> Vendor-neutral. Human-readable. Machine-validated.

[![Website](https://img.shields.io/badge/website-dnv--opensource.github.io%2Fsi--schema-0a2540?logo=githubpages)](https://dnv-opensource.github.io/si-schema/)
[![Schema](https://img.shields.io/badge/JSON_Schema-draft%202020--12-00a3a1)](https://dnv-opensource.github.io/si-schema/si_schema.schema.json)
[![Spec](https://img.shields.io/badge/spec-v0.4-blue)](./TEST_SHEET_DATA_STRUCTURE.md)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

`si-schema` defines a compact, vendor-neutral YAML structure for the documents
that drive ship System Integration testing — sequence diagrams, IO
classification tables, value mappings and per-vendor IO tag bindings.

It is maintained by the **Complex Integrated System (CIS) Initiative** at
[DNV](https://www.dnv.com).

---

## What's in this repository

| Path | Purpose |
|---|---|
| [`TEST_SHEET_DATA_STRUCTURE.md`](./TEST_SHEET_DATA_STRUCTURE.md) | The prose specification (canonical) |
| [`schemas/si_schema.schema.json`](./schemas/si_schema.schema.json) | Generated JSON Schema (draft 2020-12) |
| [`CHANGELOG.md`](./CHANGELOG.md) | Version history |
| [`LICENSE`](./LICENSE) | MIT |

The full documentation site, including all entity reference pages and
validation rules, is published at
**<https://dnv-opensource.github.io/si-schema/>**.

## Consume the schema

The JSON Schema is hosted at a stable URL:

```
https://dnv-opensource.github.io/si-schema/si_schema.schema.json
```

Use it directly from any JSON-Schema-aware editor or validator:

```yaml
# .vscode/settings.json
"yaml.schemas": {
  "https://dnv-opensource.github.io/si-schema/si_schema.schema.json": [
    "test_sheets/**/*.yaml"
  ]
}
```

```python
import json, yaml
from jsonschema import Draft202012Validator
schema = json.load(open("schemas/si_schema.schema.json"))
Draft202012Validator(schema).validate(yaml.safe_load(open("test_sheet.yaml")))
```

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

[MIT](./LICENSE) © DNV AS
