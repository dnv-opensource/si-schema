import"../chunks/Bzak7iHL.js";import"../chunks/DSDNSyjs.js";import{aM as t,a2 as _,u as g,a4 as h,aq as u}from"../chunks/CHFEj7fB.js";import{S as f}from"../chunks/Dv5_CYsY.js";import{Y as e}from"../chunks/Ck3_JoaJ.js";var b=h(`<div class="rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950"><strong>Work in progress.</strong> The contract layer and all types defined in it (interfaces, protocol bindings,
		authority rules, alarm definitions, acceptance cases, lineages and their supporting structures) are under active development
		and subject to breaking changes without notice.</div> <h2 class="text-xl font-semibold tracking-tight">How objects are linked</h2> <table><thead><tr><th>Object</th><th>Owns</th><th>References</th><th>Why no duplication</th></tr></thead><tbody><tr><td><code>project</code></td><td>document identity</td><td>none</td><td>One project header per artifact.</td></tr><tr><td><code>parties</code></td><td>party registry</td><td>none</td><td>Party IDs are defined once and reused by signals, interfaces, and lineages.</td></tr><tr><td><code>components</code></td><td>component/module registry</td><td>party/vendor ownership</td><td>Endpoints reuse component IDs instead of repeating component details in each interface/signal.</td></tr><tr><td><code>functions.signals</code></td><td>atomic signal definition</td><td>components, protocol/interface refs</td><td>Signal meaning is defined once and linked from other layers.</td></tr><tr><td><code>interfaces</code></td><td>boundary contract</td><td>components, protocol binding, authority/alarm IDs, signal refs</td><td>Interface groups signal links without redefining each signal payload.</td></tr><tr><td><code>protocol_bindings</code></td><td>L3 exchange profile</td><td>none</td><td>Transport/address/timing/security lives in one object and is referenced.</td></tr><tr><td><code>lineages</code></td><td>cross-party flow</td><td>signal links, parties</td><td>Transformation chain reuses signal and party IDs instead of duplicating fields.</td></tr></tbody></table> <p class="text-sm text-muted-foreground"><strong>Design rule:</strong> define meaning once, reference it everywhere else. If a field has its own lifecycle
		and validation logic, it belongs to a dedicated object, not duplicated across signal rows.</p> <h2 class="text-xl font-semibold tracking-tight">Top-level contract objects</h2> <table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Purpose</th></tr></thead><tbody><tr><td><code>artefact</code></td><td><code>ArtifactMeta</code></td><td>no</td><td>Role, release status, compatibility class, lifecycle governance.</td></tr><tr><td><code>parties</code></td><td><code>list[Party]</code></td><td>no</td><td>Parties across vendor, integrator, owner and analytics flows.</td></tr><tr><td><code>protocol_bindings</code></td><td><code>list[ProtocolBinding]</code></td><td>no</td><td>Level-3 exchange contract details (family, transport, timing).</td></tr><tr><td><code>mode_definitions</code></td><td><code>list[ModeDefinition]</code></td><td>no</td><td>Operating mode semantics.</td></tr><tr><td><code>authority_rules</code></td><td><code>list[AuthorityRule]</code></td><td>no</td><td>Command ownership and arbitration rules.</td></tr><tr><td><code>alarm_definitions</code></td><td><code>list[AlarmDefinition]</code></td><td>no</td><td>Alarm behavior (priority, latching, ack/reset, visibility).</td></tr><tr><td><code>interfaces</code></td><td><code>list[Interface]</code></td><td>no</td><td>First-class interface boundaries linking components and signals.</td></tr><tr><td><code>acceptance_cases</code></td><td><code>list[AcceptanceCase]</code></td><td>no</td><td>FAT/SAT-oriented acceptance semantics.</td></tr><tr><td><code>lineages</code></td><td><code>list[Lineage]</code></td><td>no</td><td>Cross-party transformation chain per signal.</td></tr></tbody></table> <h2 class="text-xl font-semibold tracking-tight">Artifact governance example</h2> <!> <h2 class="text-xl font-semibold tracking-tight">Interfaces and protocol binding</h2> <!> <h2 class="text-xl font-semibold tracking-tight">Lineage chain</h2> <!> <h2 class="text-xl font-semibold tracking-tight">Layer 2 physical link profile</h2> <!> <h2 class="text-xl font-semibold tracking-tight">Integration-contract requiredness</h2> <table><thead><tr><th>Group</th><th>si_internal</th><th>integration_contract</th></tr></thead><tbody><tr><td><code>interface boundary</code></td><td>required</td><td>required</td></tr><tr><td><code>family/exchange/access + timing</code></td><td>optional</td><td>required</td></tr><tr><td><code>address/addressing</code></td><td>optional</td><td>required</td></tr><tr><td><code>semantic identity package</code></td><td>optional</td><td>required</td></tr><tr><td><code>producer + lineage coverage</code></td><td>optional</td><td>required</td></tr><tr><td><code>physical_link (hardwired)</code></td><td>optional</td><td>required</td></tr><tr><td><code>network_profile (network)</code></td><td>optional</td><td>required</td></tr></tbody></table> <div class="rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950"><strong>CLI support.</strong> Use <code>si-schema diff-contract old.yaml new.yaml</code> to produce a machine-readable compatibility report (pass/fail, change list, and violations).</div> <div class="rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950"><strong>CI promotion gate.</strong> The workflow <code>contract-promotion-gate</code> enforces compatibility before promotion. If <code>old_path</code> is omitted, the baseline is auto-resolved from the
		base/default branch at the same contract path.</div>`,1);function T(a){const i=`artefact:
  artifact_id: eps_contract
  role: integration_contract
  status: released
  contract_version: 1.2.0
  compatibility: backward
  published_at: 2026-06-13
  lifecycle_state: active
  intended_consumers: [integrator, shipowner, analytics_provider]`,c=`parties:
  - id: VFD_VENDOR_A
    name: Vendor A Drive
    kind: vendor
  - id: YARD_INTEGRATOR
    name: Yard SI Team
    kind: integrator

protocol_bindings:
  - id: main_modbus
    family: modbus_tcp
    transport: network
    exchange_pattern: polled
    access_mode: read_write
    endpoint: 10.10.8.31:502
    address: "holding:40001..40064"
    addressing:
      kind: modbus
      register_type: holding
      start: 40001
      count: 2
    update_ms: 500
    timeout_ms: 3000
    network_profile:
      segment_id: AUT_NET_A
      vlan_id: 20
      security_zone: automation
      redundancy_role: primary
      security_mode: tls
      time_sync_source: ptp
      timestamp_quality_required: true

interfaces:
  - id: rcs_to_vfd_main
    name: RCS to VFD main command channel
    from_ref: { system_id: RCS, module_id: Main }
    to_ref:   { system_id: VFD, module_id: Main }
    medium: network
    protocol_binding_id: main_modbus
    authority_rule_id: main_cmd_auth
    alarm_definition_ids: [vfd_comms_lost]
    member_signals:
      - { function_no: 1, signal_id: speed_setpoint }
      - { function_no: 1, signal_id: run_cmd }`,s=`lineages:
  - signal_ref: { function_no: 1, signal_id: shaft_power }
    hops:
      - step: 1
        actor: VFD_VENDOR_A
        rule: sample
        input_contract: null
        output_contract: "vfd_tm@1.0.0"
      - step: 2
        actor: YARD_INTEGRATOR
        rule: average
        rule_params: { window_s: 60 }
        input_contract: "vfd_tm@1.0.0"
        output_contract: "vessel_contract@1.2.0"`,l=`interfaces:
      - id: e_stop_loop
        name: E-stop hardwired loop
        from_ref: { system_id: RCS, module_id: Main }
        to_ref:   { system_id: TCS, module_id: HPS }
        medium: hardwired
        physical_link:
          electrical:
            contact_type: dry
            logic_type: sourcing
            wire_count: "2_wire"
            loop_powered: false
            external_powered: true
            nominal_voltage_v: 24
          connector:
            connector_type: TB
            mating_side_owner: YARD_INTEGRATOR
            pins:
              - pin: TB1-01
                signal_role: E_STOP_A
              - pin: TB1-02
                signal_role: E_STOP_B
            shield_termination: panel_single_end
            grounding_policy: pe_at_marshalling
          cable:
            cable_type: IEC60092-376
            pair_type: twisted_pair
            shielded: true
            max_length_m: 120
          redundancy_role: primary
          marshalling_location: ECR_MARSHALLING_A`;f(a,{title:"Contract Layer",lead:"Contract-level objects let si-schema represent ship integration boundaries beyond signal rows.",children:(m,y)=>{var d=b(),o=t(_(d),14);e(o,{filename:"artefact.yaml",code:i});var r=t(o,4);e(r,{filename:"contract_objects.yaml",code:c});var n=t(r,4);e(n,{filename:"lineage.yaml",code:s});var p=t(n,4);e(p,{filename:"hardwired_interface.yaml",code:l}),u(8),g(m,d)},$$slots:{default:!0}})}export{T as component};
