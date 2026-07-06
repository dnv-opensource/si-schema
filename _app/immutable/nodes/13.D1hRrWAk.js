import"../chunks/Bzak7iHL.js";import"../chunks/DSDNSyjs.js";import{aM as r,a2 as c,u as i,a4 as s}from"../chunks/CHFEj7fB.js";import{S as a}from"../chunks/Dv5_CYsY.js";import{Y as l}from"../chunks/Ck3_JoaJ.js";var m=s(`<h2 class="text-xl font-semibold tracking-tight">Component</h2> <table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>str</code> (slug)</td><td>yes</td><td>Stable identifier, e.g. <code>RCS</code>.</td></tr><tr><td><code>name</code></td><td><code>str</code></td><td>yes</td><td>Display name.</td></tr><tr><td><code>modes</code></td><td><code>list[Mode]</code></td><td>no</td><td>Vendor-owned canonical mode definitions for this component. Functions may only reference a subset
					of these mode IDs.</td></tr><tr><td><code>modules</code></td><td><code>list[Module]</code></td><td>no</td><td>Physical/logical subdivisions.</td></tr><tr><td><code>ports</code></td><td><code>list[Port]</code></td><td>no</td><td>Dedicated interface endpoints for connection edges and ontology predicates.</td></tr><tr><td><code>vendor</code></td><td><code>str</code></td><td>no</td><td>Vendor metadata.</td></tr><tr><td><code>notes</code></td><td><code>str</code></td><td>no</td><td></td></tr></tbody></table> <div class="rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950"><strong>Ownership boundary.</strong> Component vendors provide component-level interfaces and behavior (ports, signals,
		functions, mode catalogs). System integrators compose component data into cross-component architecture using Connection
		and SysML v2.</div> <h2 class="text-xl font-semibold tracking-tight">Module</h2> <p class="text-sm text-muted-foreground">A physical controller, software component, or functional partition inside a Component.</p> <table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>str</code> (slug)</td><td>yes</td><td>Unique within the parent component.</td></tr><tr><td><code>name</code></td><td><code>str</code></td><td>no</td><td>e.g. <code>Main</code>, <code>Backup</code>, <code>ACU</code>, <code>HPS</code>.</td></tr><tr><td><code>description</code></td><td><code>str</code></td><td>no</td><td>Free text — e.g. <code>Primary controller</code>.</td></tr></tbody></table> <h2 class="text-xl font-semibold tracking-tight">Port</h2> <table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>str</code> (slug)</td><td>yes</td><td>Unique within parent component.</td></tr><tr><td><code>direction</code></td><td><code>enum</code></td><td>yes</td><td><code>in</code>, <code>out</code>, <code>undefined</code>.</td></tr><tr><td><code>module_id</code></td><td><code>str</code> (slug)</td><td>no</td><td>Optional owning module. If set, it must exist in <code>Component.modules[*].id</code>.</td></tr><tr><td><code>terminals</code></td><td><code>list[str]</code></td><td>no</td><td>Physical terminal mapping.</td></tr><tr><td><code>port_type</code></td><td><code>enum</code></td><td>conditional</td><td>Required when <code>direction=out</code>; optional for <code>in</code> and <code>undefined</code>.
					Values: signal, can_tc, analog, resistor, 4-20mA, 0-10V, serial, network.</td></tr><tr><td><code>protocol</code></td><td><code>enum/string</code></td><td>conditional</td><td>Required when <code>direction=out</code>; optional for <code>in</code> and <code>undefined</code>.</td></tr><tr><td><code>attributes</code></td><td><code>object</code></td><td>no</td><td>Extensible key-value metadata (e.g. <code>actUpon</code>).</td></tr></tbody></table> <h2 class="text-xl font-semibold tracking-tight">Mode</h2> <table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>str</code> (slug)</td><td>yes</td><td>Stable mode key such as <code>remote</code> or <code>power</code>.</td></tr><tr><td><code>name</code></td><td><code>str</code></td><td>no</td><td>Display label.</td></tr><tr><td><code>description</code></td><td><code>str</code></td><td>yes</td><td>Required free-text semantics for the mode.</td></tr></tbody></table> <div class="rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950"><strong>Ontology semantics.</strong> <code>Port connectedTo Port</code> and <code>Port actUpon Signal</code> are modeled
		through Connection and Ontology views.</div> <!>`,1);function f(e){const d=`components:
	- id: RCS
		name: Remote Control Component
		modes:
			- id: remote
				name: Remote
				description: Remote command ownership active.
			- id: local
				name: Local
				description: Local panel ownership active.
		vendor: Vendor A
		modules:
			- { id: Main,   name: "Main Controller",   description: "Primary" }
			- { id: Backup, name: "Backup Controller", description: "Redundant" }
		ports:
			- id: DO01
				module_id: Main
				direction: out
				port_type: signal
				protocol: hardwired
			- id: DI02
				direction: in
				terminals: [X1-02]

	- id: TCS
		name: Thruster Control Component
		modes:
			- id: remote
				name: Remote
				description: Accept command from remote bridge source.
			- id: power
				name: Power
				description: Thruster control target is power.
		vendor: Vendor B
		modules:
			- { id: ACU, name: "ACU", description: "Azimuth Thruster Control Unit" }
			- { id: HPS, name: "HPS", description: "Hydraulic Pump Starter" }
		ports:
			- id: cmd_in
				module_id: ACU
				direction: in
				terminals: [X2-11]
			- id: ready_out
				direction: out
				port_type: signal
				protocol: hardwired`;a(e,{title:"Component & Module",lead:"Component replaces legacy System for vendor submissions. Vendors provide component-level modes, ports, functions, and signals; SI composes these into system-level architecture separately (Connection + SysML v2).",children:(o,p)=>{var t=m(),n=r(c(t),22);l(n,{filename:"components.yaml",code:d}),i(o,t)},$$slots:{default:!0}})}export{f as component};
