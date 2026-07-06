import"../chunks/Bzak7iHL.js";import"../chunks/DSDNSyjs.js";import{aM as a,a2 as C,u as h,a4 as y,y as t,aA as e,aS as T,aI as l,a6 as c,aq as P}from"../chunks/CHFEj7fB.js";import{e as A}from"../chunks/BcMk1iwd.js";import{S as M}from"../chunks/Dv5_CYsY.js";import{Y as R}from"../chunks/Ck3_JoaJ.js";var E=y('<tr><td><code> </code></td><td> </td><td class="text-muted-foreground"> </td></tr>'),L=y(`<h2 class="text-xl font-semibold tracking-tight">FunctionCategory — six top-level categories</h2> <table><thead><tr><th>Category</th><th>Meaning</th><th>Suggested subcategories</th></tr></thead><tbody></tbody></table> <h2 class="text-xl font-semibold tracking-tight">Other enums (current schema)</h2> <!> <div class="rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950"><strong>Release note.</strong> Enums span both the original SI signal model and the contract layer (artifact governance,
		protocol bindings, lifecycle, lineage and semantic provenance).</div>`,1);function j(f){const b=`LinkType:
  - hardwired
  - serial
  - network       # Ethernet / fieldbus
  - wireless

SignalType:
	- digital
	- analog
	- can
	- i2c
	- 1-wire
	- uart

SignalCategory:
	- command
	- permission_interlock
	- feedback
	- safety
	- mode
	- monitoring

PortDirection:
	- in
	- out
	- undefined

PortType:
	- signal
	- can_tc
	- analog
	- resistor
	- 4-20mA
	- 0-10V
	- serial
	- network

ConnectionType:
	- physical
	- logical
	- control
	- data
	- status

MappingKind:
	- discrete
	- linear

Direction:
	- in
	- out

DataType:
  - digital
  - analog_4_20ma
  - analog_0_10v
  - analog_potentiometer
  - serial
  - network

SignalSubtype:
  # digital
  - no             # normally open
  - nc             # normally closed
  - steady
  - pulse
  # analog
  - sine_cosine
  - single_ended
  - differential

ArtifactRole:
	- si_internal
	- integration_contract
	- exchange_projection

ArtifactStatus:
	- draft
	- released
	- deprecated
	- withdrawn

CompatibilityClass:
	- none
	- backward
	- forward
	- full

PartyKind:
	- vendor
	- integrator
	- shipyard
	- shipowner
	- class_society
	- analytics_provider
	- operator

ProtocolFamily:
	- modbus_rtu
	- modbus_tcp
	- canopen
	- nmea0183
	- nmea2000
	- opcua
	- profinet
	- ethernet_ip
	- vendor_specific

ExchangePattern:
	- cyclic
	- polled
	- event_driven
	- handshake

AccessMode:
	- read
	- write
	- read_write

OperatingMode:
	- local
	- remote
	- auto
	- manual
	- degraded
	- emergency

AlarmPriority:
	- critical
	- high
	- medium
	- low

LifecycleState:
	- active
	- deprecated
	- withdrawn

TransformationRule:
	- sample
	- average
	- derive
	- filter
	- threshold
	- command
	- passthrough

ProvenanceKind:
	- measured
	- computed
	- estimated
	- inferred
	- manual

AggregationType:
	- instantaneous
	- average
	- minimum
	- maximum
	- sum

SignalOrderConvention:
  - "SC"          # Start Condition (precondition / interlock)
  - "TC"          # Trip Condition (safety trip; evaluated continuously)
  - "<n>"         # plain ordinal step
  - "<n>-Main"
  - "<n>-Backup"
  - "<n>-Start"
  - "<n>-Stop"

# ── Contract-layer enums (physical link, network, addressing) ──

InterfaceMedium:
  - hardwired
  - serial
  - network
  - wireless

ContactType:
  - dry
  - wet

LogicType:
  - sourcing
  - sinking
  - differential
  - isolated

WireCount:
  - 2_wire
  - 3_wire
  - 4_wire

RedundancyRole:
  - none
  - primary
  - secondary
  - dual_homed

SecurityMode:
  - none
  - tls
  - dtls
  - vpn

TimeSyncSource:
  - none
  - ntp
  - ptp
  - gps

AddressingKind:
  - modbus
  - canopen
  - nmea0183
  - nmea2000
  - opcua
  - vendor`,v=[{name:"command",meaning:"Actuation request issued by the control authority.",subs:"Start/Stop, Speed reference, Power reference"},{name:"permission",meaning:"Interlock / readiness / authorisation condition.",subs:"Start Permission, Shaft Lock status, Ready/Not ready"},{name:"feedback",meaning:"Measured/observed value reported back from the actuator.",subs:"Speed, Power, Position, Status"},{name:"protection",meaning:"Safety-related trip / shutdown / emergency signal.",subs:"Emergency Stop, Trip/Shutdown"},{name:"mode",meaning:"Operating-mode selection or indication.",subs:"Local/Remote, Main/Backup, Gas/Diesel"},{name:"monitoring",meaning:"Continuous condition monitoring (non-safety).",subs:"Power flow, Available power, Temperature, Overload, Voltage"}];M(f,{title:"Enums",lead:"The fixed vocabularies used across si-schema. Validators must enforce these; subcategories stay free-text so the schema can grow with projects.",children:(_,O)=>{var m=L(),n=a(C(m),2),u=a(t(n));A(u,5,()=>v,r=>r.name,(r,o)=>{var i=E(),s=t(i),p=t(s),S=t(p,!0);e(p),e(s);var d=a(s),k=t(d,!0);e(d);var g=a(d),x=t(g,!0);e(g),e(i),T(()=>{l(S,c(o).name),l(k,c(o).meaning),l(x,c(o).subs)}),h(r,i)}),e(u),e(n);var w=a(n,4);R(w,{filename:"enums.yaml",code:b}),P(2),h(_,m)},$$slots:{default:!0}})}export{j as component};
