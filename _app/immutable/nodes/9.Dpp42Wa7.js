import"../chunks/Bzak7iHL.js";import"../chunks/DSDNSyjs.js";import{aM as t,a2 as u,u as y,_ as x,y as e,a4 as b,$ as v,aA as d}from"../chunks/CHFEj7fB.js";import{h as C}from"../chunks/GytRlRZy.js";import{Y as c}from"../chunks/Ck3_JoaJ.js";var S=b(`<section class="border-b border-border bg-secondary"><div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14"><div class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Ontology</div> <h1 class="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Ontology and Semantic Connectivity</h1> <p class="mt-3 max-w-3xl text-muted-foreground">Industrial semantic view for SI-schema: interface-centric modeling with explicit predicates for connectivity
			and signal behavior.</p></div></section> <div class="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6 md:py-12"><h2 class="text-xl font-semibold tracking-tight">Ontology Visualization</h2> <h3 class="mt-6 text-lg font-semibold tracking-tight">1) UML view</h3> <pre class="overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm"><code></code></pre> <h3 class="mt-6 text-lg font-semibold tracking-tight">2) RDF-style view</h3> <pre class="overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm"><code></code></pre> <h3 class="mt-6 text-lg font-semibold tracking-tight">3) Ontology predicates</h3> <table><thead><tr><th>Relation</th><th>Domain</th><th>Range</th><th>Bound in schema</th><th>Intent</th></tr></thead><tbody><tr><td><code>connectedTo</code></td><td><code>Port</code></td><td><code>Port</code></td><td><code>connections[*].from_port_ref</code>/<code>connections[*].to_port_ref</code></td><td>Connectivity edge between interface endpoints.</td></tr><tr><td><code>actUpon</code></td><td><code>Port</code></td><td><code>Signal</code></td><td><code>Port.attributes.actUpon</code></td><td>Port transmits, consumes, or processes the signal.</td></tr><tr><td><code>isActedUponBy</code></td><td><code>Signal</code></td><td><code>Port</code></td><td>derived inverse of <code>actUpon</code></td><td>Read-only inverse view for tools and visualisation.</td></tr></tbody></table> <h3 class="mt-6 text-lg font-semibold tracking-tight">4) Schema bindings used with the ontology layer</h3> <table><thead><tr><th>Binding</th><th>From</th><th>To</th><th>Bound in schema</th><th>Intent</th></tr></thead><tbody><tr><td><code>component_id</code></td><td><code>Function</code></td><td><code>Component</code></td><td><code>Function.component_id</code></td><td>Allocated component for the vendor-authored function.</td></tr><tr><td><code>modes[*]</code></td><td><code>Function</code></td><td><code>Component Mode ID</code></td><td><code>Function.modes[*]</code></td><td>Subset references to allowed canonical component modes.</td></tr><tr><td><code>from_port_ref</code></td><td><code>Connection</code></td><td><code>Port</code></td><td><code>connections[*].from_port_ref</code></td><td>Source endpoint of a connectivity edge.</td></tr><tr><td><code>to_port_ref</code></td><td><code>Connection</code></td><td><code>Port</code></td><td><code>connections[*].to_port_ref</code></td><td>Target endpoint of a connectivity edge.</td></tr><tr><td><code>signal</code></td><td><code>Connection</code></td><td><code>Signal</code></td><td><code>connections[*].signal</code></td><td>Single signal transmitted by this connection.</td></tr></tbody></table> <h3 class="mt-6 text-lg font-semibold tracking-tight">5) Schema-oriented examples</h3> <!> <!> <!></div>`,1);function R(m){const p=`connections:
  - id: conn.cmd_speed
    from_port_ref: component.autopilot.port.DO01
    to_port_ref: component.propulsion.port.cmd_in
    connection_type: control
    signal: engine_speed_cmd`,l=`function:
  id: fn.rcs_vfd_start
  component_id: RCS
  modes:
    - remote
    - power
  function_description: |
    Remote start/stop arbitration profile for RCS to command VFD.`,g=`port:
  id: component.propulsion.port.cmd_in
  direction: in
  port_type: analog
  protocol: 0-10V
  attributes:
    actUpon: signal.engine_speed_cmd
    terminal: X1-12
    sampling_interval_ms: 100`;var r=S();C("1uz2tty",w=>{x(()=>{v.title="Ontology · si-schema"})});var i=t(u(r),2),o=t(e(i),4),_=e(o);_.textContent=`classDiagram
    class Function {
      +id: string
      +name: string
      +component_id: ref
      +modes: string[]
      +input_signals: Signal[]
      +output_signals: Signal[]
      +parameters: Parameter[]
      +function_description: string
    }

    class Component {
      +id: string
      +name: string
      +modes: Mode[]
      +ports: Port[]
    }

    class Mode {
      +id: string
      +name: string
      +description: string
    }

    class Port {
      +id: string
      +direction: enum
      +port_type: enum
      +protocol: enum
    }

    class Connection {
      +id: string
      +from_port_ref: ref
      +to_port_ref: ref
      +connection_type: enum
      +signal: ref
    }

    class Signal {
      +id: string
      +name: string
      +signal_type: enum
      +category: enum
    }

    Function "many" --> "1" Component : component_id
    Component "1" *-- "many" Port : exposes
    Component "1" *-- "many" Mode : publishes
    Connection "many" --> "1" Port : from_port_ref
    Connection "many" --> "1" Port : to_port_ref
    Connection "many" --> "1" Signal : signal
    Port "many" --> "many" Signal : actUpon`,d(o);var n=t(o,4),f=e(n);f.textContent=`graph LR
  A[component.autopilot.port.DO01] -- connectedTo --> B[component.propulsion.port.cmd_in]
  B -- actUpon --> C[signal.engine_speed_cmd]
  C -- isActedUponBy --> B
  D[function.fn.rcs_vfd_start] -- component_id --> E[component.RCS]
  D -- modes[*] --> F[component_mode.remote]
  D -- modes[*] --> G[component_mode.power]`,d(n);var a=t(n,12);c(a,{filename:"connection_ontology.yaml",code:p});var s=t(a,2);c(s,{filename:"port_ontology.yaml",code:g});var h=t(s,2);c(h,{filename:"function_mode_binding.yaml",code:l}),d(i),y(m,r)}export{R as component};
