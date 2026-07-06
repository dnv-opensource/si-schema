import"../chunks/Bzak7iHL.js";import"../chunks/DSDNSyjs.js";import{aM as n,a2 as r,u as i,a4 as c}from"../chunks/CHFEj7fB.js";import{S as s}from"../chunks/Dv5_CYsY.js";import{Y as l}from"../chunks/Ck3_JoaJ.js";var m=c(`<table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>str</code> (slug)</td><td>yes</td><td>Stable signal identifier.</td></tr><tr><td><code>name</code></td><td><code>str</code></td><td>yes</td><td>Vendor-neutral logical name.</td></tr><tr><td><code>signal_type</code></td><td><code>enum</code></td><td>yes</td><td>digital, analog, can, i2c, 1-wire, uart.</td></tr><tr><td><code>category</code></td><td><code>enum</code></td><td>yes</td><td>command, permission_interlock, feedback, safety, mode, monitoring.</td></tr><tr><td><code>subtype</code></td><td><code>list[str]</code></td><td>no</td><td>E.g. nc, no, pulse.</td></tr><tr><td><code>processing</code></td><td><code>object</code></td><td>no</td><td>filtered, delay, moving_average.</td></tr><tr><td><code>attributes</code></td><td><code>object</code></td><td>no</td><td>scaling, sampling, fail-safe, redundancy, sync/async, compatibility.</td></tr><tr><td><code>value_mapping</code></td><td><code>ValueMapping</code></td><td>no</td><td>Optional raw/physical mapping.</td></tr><tr><td><code>vendor_io_mappings</code></td><td><code>list[VendorIOMapping]</code></td><td>no</td><td>Per-vendor IO tag bindings (<code>party_id</code>, item, direction, terminals).</td></tr><tr><td><code>assumed</code></td><td><code>bool</code></td><td>no</td><td>Mark inferred values (<code>true</code>) vs. values extracted from vendor documentation.</td></tr><tr><td><code>source_doc_ref</code></td><td><code>str</code></td><td>no</td><td>Provenance pointer to the source document or datasheet.</td></tr><tr><td><code>notes</code></td><td><code>str</code></td><td>no</td><td>Free-text notes.</td></tr></tbody></table> <div class="rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950"><strong>Ontology linkage.</strong> Signals are linked to ports through <code>actUpon</code>. Connectivity
		between ports is modeled by <code>Connection</code> edges.</div> <!>`,1);function f(d){const e=`signals:
  - id: start_cmd
    name: START COMMAND OF HYDRAULIC PUMP
    signal_type: digital
    category: command
    subtype: [no, pulse]
    processing:
      filtered: false
      delay_ms: 0
      moving_average_window: null
    attributes:
      scaling: 1.0
      sampling_interval_ms: 100
      fail_safe_mode: hold_last
      redundant_sil: false
      sync_mode: sync
      compatibility_note: "Hardwired command path"
    value_mapping:
      kind: discrete
      entries:
        - { raw: 0, meaning: "no command" }
        - { raw: 1, meaning: "start request" }

  - id: speed_setpoint
    name: SPEED SETPOINT
    signal_type: analog
    category: command
    processing:
      filtered: true
      delay_ms: 100
      moving_average_window: 5
    attributes:
      scaling: 1.0
      sampling_interval_ms: 500
      sync_mode: async
      compatibility_note: "0-10V command profile"`;s(d,{title:"Signal",lead:"Project-level signal registry. Signals define data contract, behavior, and processing metadata, then link to ports through ontology predicates.",children:(o,g)=>{var t=m(),a=n(r(t),4);l(a,{filename:"signals.yaml",code:e}),i(o,t)},$$slots:{default:!0}})}export{f as component};
