import"../chunks/Bzak7iHL.js";import"../chunks/DSDNSyjs.js";import{aM as a,a2 as i,u as s,a4 as n}from"../chunks/CHFEj7fB.js";import{S as c}from"../chunks/Dv5_CYsY.js";import{Y as l}from"../chunks/Ck3_JoaJ.js";var p=n(`<h2 class="text-xl font-semibold tracking-tight">Party</h2> <table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>str</code> (<abbr class="type-hint" title="Required format: ASCII letters, digits, '-' or '_'. Must start with a letter or digit. No spaces or other punctuation.">slug</abbr>)</td><td>yes</td><td>Stable cross-reference id.</td></tr><tr><td><code>name</code></td><td><code>str</code></td><td>yes</td><td>Display name.</td></tr><tr><td><code>kind</code></td><td><code>PartyKind</code></td><td>no</td><td>Defaults to <code>vendor</code>; also supports integrator, shipowner, shipyard, analytics_provider,
					class_society, operator.</td></tr><tr><td><code>role</code></td><td><code>str</code></td><td>no</td><td>Project-specific role text.</td></tr><tr><td><code>contact</code></td><td><code>str</code></td><td>no</td><td>Contact channel.</td></tr></tbody></table> <!>`,1);function b(e){const d=`parties:
  - id: VFD_VENDOR_A
    name: Variable-speed AC drive supplier (Vendor A)
    kind: vendor
    role: Main drive supplier
    contact: vendor-a@example.com
  - id: YARD_INTEGRATOR
    name: Yard SI Team
    kind: integrator`;c(e,{title:"Party",lead:"`parties` identifies every organization involved in the project — equipment vendors, integrators, shipowners, class societies and more — distinguished by `kind`.",children:(o,m)=>{var t=p(),r=a(i(t),4);l(r,{filename:"parties.yaml",code:d}),s(o,t)},$$slots:{default:!0}})}export{b as component};
