import"../chunks/Bzak7iHL.js";import"../chunks/DSDNSyjs.js";import{aM as a,a2 as c,u as r,a4 as i}from"../chunks/CHFEj7fB.js";import{S as s}from"../chunks/Dv5_CYsY.js";import{Y as l}from"../chunks/Ck3_JoaJ.js";var p=i(`<table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>str</code> (slug)</td><td>yes</td><td>Stable function identifier.</td></tr><tr><td><code>name</code></td><td><code>str</code></td><td>yes</td><td>e.g. <code>VFD Start/Stop (Remote)</code>.</td></tr><tr><td><code>component_id</code></td><td><code>str</code></td><td>yes</td><td>ID of the component this function is allocated to, if already allocated.</td></tr><tr><td><code>modes</code></td><td><code>list[str]</code></td><td>yes</td><td>References to <code>Component.modes[*].id</code> where this function is allowed to execute.</td></tr><tr><td><code>input_signals</code></td><td><code>list[Signal]</code></td><td>no</td><td>Signals consumed by the function.</td></tr><tr><td><code>output_signals</code></td><td><code>list[Signal]</code></td><td>no</td><td>Signals produced by the function.</td></tr><tr><td><code>parameters</code></td><td><code>list[Parameter]</code></td><td>no</td><td>Typed function parameters with <code>name</code> and <code>type</code>.</td></tr><tr><td><code>function_description</code></td><td><code>str</code></td><td>yes</td><td>Required vendor free text describing function behavior for SI mapping. Include applicable standards
					and references (e.g., DNV-RP-0684 Annex A, SysML v2, or domain-specific standards) with version,
					section, and relevant constraints.</td></tr></tbody></table> <div class="rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950"><strong>Vendor input focus.</strong> Keep <code>function_description</code> practical and operational: purpose,
		trigger/preconditions, outputs, dependencies, and failure/degraded behavior. Use <code>function_description</code> to include standards references (DNV-RP-0684 Annex A, SysML v2, domain specs) when
		applicable.</div> <h2 class="text-xl font-semibold tracking-tight">Mode References</h2> <table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody><tr><td><code>mode_id</code></td><td><code>str</code> (slug)</td><td>yes</td><td>Must match one value from <code>Component.modes[*].id</code> on the same component.</td></tr></tbody></table> <!>`,1);function _(e){const d=`functions:
	- id: fn.vfd_start
		name: VFD Start
		component_id: VFD
    modes:
			- local_start
    input_signals:
			- id: vfd_ready
			  name: VFD READY
			  signal_type: digital
			  category: feedback
    output_signals:
			- id: start_cmd
			  name: START COMMAND
			  signal_type: digital
			  category: command
    parameters:
			- name: start_pulse_ms
			  type: int
    function_description: |
			SysML v2 (simple):
			action def VFDStart {
				in start_cmd: StartCommand;
				out vfd_ready: Boolean;
			}
			If vfd_ready is true, send one start_cmd pulse to VFD.
`;s(e,{title:"Function",lead:"Component-level function entity authored by vendors. Each function has one allocated component_id and one free-text description that SI later maps into system-level functions.",children:(o,m)=>{var t=p(),n=a(c(t),8);l(n,{filename:"functions.yaml",code:d}),r(o,t)},$$slots:{default:!0}})}export{_ as component};
