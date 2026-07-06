import"../chunks/Bzak7iHL.js";import"../chunks/DSDNSyjs.js";import{aM as n,a2 as c,u as a,a4 as i}from"../chunks/CHFEj7fB.js";import{S as s}from"../chunks/Dv5_CYsY.js";import{Y as l}from"../chunks/Ck3_JoaJ.js";var p=i('<table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>str</code> (slug)</td><td>yes</td><td>Connection identifier.</td></tr><tr><td><code>from_port_ref</code></td><td><code>str</code></td><td>yes</td><td>Fully-qualified source port reference.</td></tr><tr><td><code>to_port_ref</code></td><td><code>str</code></td><td>yes</td><td>Fully-qualified target port reference.</td></tr><tr><td><code>connection_type</code></td><td><code>enum</code></td><td>yes</td><td>Project profile type: physical, logical, control, data, status, etc.</td></tr><tr><td><code>signal</code></td><td><code>str</code></td><td>yes</td><td>Signal ID transmitted by this connection. One connection carries one signal.</td></tr><tr><td><code>properties</code></td><td><code>object</code></td><td>no</td><td>Additional connection metadata.</td></tr></tbody></table> <div class="rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950"><strong>Ontology mapping.</strong> Connectivity is modeled directly as <code>Connection</code> edges over <code>Port</code> references. Port-signal behavior is modeled separately via <code>Port actUpon Signal</code>.</div> <!>',1);function h(e){const o=`connections:
  - id: conn.start_cmd
    from_port_ref: component.RCS.port.DO01
    to_port_ref: component.TCS.port.cmd_in
    connection_type: control
    signal: start_cmd
  - id: conn.ready_status
    from_port_ref: component.TCS.port.ready_out
    to_port_ref: component.RCS.port.DI02
    connection_type: status
    signal: sc_ready`;s(e,{title:"Connection",lead:"Connection is a top-level entity that models one directed port-to-port edge and carries exactly one signal.",children:(d,m)=>{var t=p(),r=n(c(t),4);l(r,{filename:"connections.yaml",code:o}),a(d,t)},$$slots:{default:!0}})}export{h as component};
