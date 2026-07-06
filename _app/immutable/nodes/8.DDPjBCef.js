import"../chunks/Bzak7iHL.js";import"../chunks/DSDNSyjs.js";import{a2 as g,aS as S,u as v,y as t,a4 as C,aM as e,aq as l,aA as d}from"../chunks/CHFEj7fB.js";import{a as w}from"../chunks/BcMk1iwd.js";import{S as k}from"../chunks/Dv5_CYsY.js";import{Y as x}from"../chunks/Ck3_JoaJ.js";import{d as P}from"../chunks/DK2OlqUA.js";var R=C(`<div class="rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950"><strong>Migration notice.</strong> Use the <a class="underline">Connection</a> page and
		schema object for all new contracts. Legacy <code>Interaction</code> should be mapped into top-level <code>connections</code>.</div> <table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody><tr><td><code>no</code></td><td><code>int</code></td><td>yes</td><td>Sequence number (&ge; 1), render order top to bottom.</td></tr><tr><td><code>from_ref</code></td><td><code>SystemRef</code></td><td>yes</td><td><code></code></td></tr><tr><td><code>to_ref</code></td><td><code>SystemRef</code></td><td>yes</td><td><code></code></td></tr><tr><td><code>link_type</code></td><td><code>LinkType</code></td><td>yes</td><td><code>hardwired</code> | <code>serial</code> | <code>network</code> | <code>wireless</code></td></tr><tr><td><code>label</code></td><td><code>str</code></td><td>yes</td><td>Arrow label, e.g. <code>(1) HYD. Pump Start/Stop Command</code></td></tr><tr><td><code>signal_refs</code></td><td><code>list[str]</code></td><td>no</td><td>IDs of <code>Signal</code> rows realised by this interaction.</td></tr></tbody></table> <!>`,1);function L(_){const p=`interactions:
  - no: 1
    from_ref: { system_id: TCS, module_id: HPS }
    to_ref:   { system_id: RCS, module_id: Main }
    link_type: hardwired
    label: "(SC) HYD. Pump Starter Remote Ctrl Ready"
    signal_refs: [sc_ready]

  - no: 2
    from_ref: { system_id: RCS, module_id: Main }
    to_ref:   { system_id: TCS, module_id: HPS }
    link_type: hardwired
    label: "(1) HYD. Pump Start/Stop Command"
    signal_refs: [start_cmd, stop_cmd]`;k(_,{title:"Interaction (Legacy)",lead:"Interaction has been replaced by Connection in the updated schema. This page is kept for backward compatibility only.",children:(y,H)=>{var c=R(),o=g(c),f=e(t(o),2);l(5),d(o);var r=e(o,2),s=e(t(r)),a=e(t(s)),i=e(t(a),3),b=t(i);b.textContent="{system_id, module_id?}",d(i),d(a);var n=e(a),m=e(t(n),3),h=t(m);h.textContent="{system_id, module_id?}",d(m),d(n),l(3),d(s),d(r);var u=e(r,2);x(u,{filename:"interactions_legacy.yaml",code:p}),S(()=>w(f,"href",`${P??""}/connection`)),v(y,c)},$$slots:{default:!0}})}export{L as component};
