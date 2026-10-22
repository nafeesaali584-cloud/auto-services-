export const premiumBrandsA = [
  {
    slug: "mercedes-benz",
    name: "Mercedes-Benz",
    origin: "German",
    models: ["A-Class", "C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLS", "G-Wagon", "CLA", "AMG GT", "Maybach S-Class", "V-Class"],
    intro:
      "Mercedes-Benz builds some of the most electronically complex cars on Dubai's roads, and complexity is exactly what a generic garage gets wrong. We run XENTRY-level diagnostics on every C-, E-, S-Class, GLE, GLS and G-Wagon that comes through our Al Quoz bays, with the coil spring, AIRMATIC and ABC knowledge that Dubai heat demands.",
    whyDubai:
      "Air suspension compressors, 9G-Tronic fluid and rear climate systems on Mercedes models suffer more in the UAE than anywhere the cars were designed for. Sand ingress into the AIRMATIC compressor and 50°C heat cycling through the transmission are the two failures we see most.",
    failurePoints: [
      { title: "9G-Tronic & 7G-Tronic harsh shifting", text: "Valve body varnish and conductor plate faults cause jerking and delayed engagement — usually repairable without a full gearbox." },
      { title: "AIRMATIC & ABC suspension sagging", text: "Compressor wear and leaking air struts leave the car sitting low on one corner, often within three to four years in the UAE." },
      { title: "Camshaft adjuster and timing wear", text: "M274 and M276 engines develop rattle on cold start from worn adjusters and stretched chains." },
      { title: "AC evaporator leaks behind the dashboard", text: "Refrigerant loss with no visible under-bonnet leak almost always means a leaking evaporator core." },
      { title: "Panoramic roof drain blockage", text: "Fine desert dust blocks roof drains, sending water into the headliner and footwells." },
    ],
    pricing: { minor: 950, major: 1850, ac: 1650, brakes: 1200 },
    caseStudies: [
      { title: "2021 GLE 450 — AIRMATIC failure", text: "Rear corner dropping overnight; air strut and compressor replaced with calibration reset, ride height restored to factory within one day." },
      { title: "2018 C200 — 9G-Tronic judder", text: "Adaptation values confirmed valve body contamination; targeted repair and fluid service removed the judder at a third of the dealer replacement quote." },
      { title: "2016 S-Class — AC warm in traffic", text: "Evaporator leak found with nitrogen testing; dashboard removed, core replaced and system recharged by weight." },
    ],
    faqs: [
      { q: "Will servicing my Mercedes-Benz here void my agency warranty?", a: "No. Under UAE Federal Law No. 15 of 2020 your manufacturer warranty remains valid when service is carried out to OEM guidelines with certified parts — which is exactly what we document for every job." },
      { q: "Do you reset the onboard service indicator and service history?", a: "Yes. We reset the ASSYST/CBS service indicator and record the service in your vehicle's digital history." },
      { q: "Do you use original Mercedes-Benz parts?", a: "We fit genuine Mercedes-Benz parts or OEM-approved equivalents, and your itemised estimate states which is being used before you approve anything." },
    ],
  },
  {
    slug: "bmw",
    name: "BMW",
    origin: "German",
    models: ["1 Series", "3 Series", "4 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7", "M3", "M5", "Z4", "i4", "iX"],
    intro:
      "BMW diagnostics, coding and mechanical repair using ISTA-level software — from timing chain work on N-series engines to mechatronic repairs on ZF 8HP gearboxes. We are a Dubai specialist workshop for 3 Series, 5 Series, X5, X7 and every M car that comes through our doors.",
    whyDubai:
      "Heat accelerates every classic BMW failure: coolant expansion tanks crack, water pumps fail, valvetronic components wear, and ZF gearbox mechatronic sleeve seals weep fluid onto hot exhausts.",
    failurePoints: [
      { title: "Timing chain rattle on N20, N47, N55", text: "Worn chain guides and tensioners produce a cold-start rattle that becomes catastrophic if ignored." },
      { title: "ZF 8HP mechatronic sleeve leaks", text: "Transmission fluid weeps past the sleeve adaptor, causing pressure loss and rough shifts." },
      { title: "Coolant expansion tank and water pump failure", text: "Plastic cooling components become brittle in UAE heat and fail without warning." },
      { title: "Valvetronic motor and eccentric shaft wear", text: "A common cause of rough idle and reduced power on N-series engines." },
      { title: "Run-flat tyres and suspension bushing wear", text: "Hard run-flats and Dubai speed humps flatten control arm bushings far sooner than the service book expects." },
    ],
    pricing: { minor: 950, major: 1750, ac: 1550, brakes: 1150 },
    caseStudies: [
      { title: "2017 520i — N20 timing chain", text: "Cold-start rattle confirmed by timing measurement; chain, guides and tensioner replaced with oil and filter service the same week." },
      { title: "2019 X5 40i — ZF 8HP rough shifts", text: "Sleeve seal replacement, fluid service and adaptive relearn restored smooth shifting without gearbox replacement." },
      { title: "2015 328i — coolant loss", text: "Pressure testing traced a cracked expansion tank and failing water pump; both replaced with a fresh coolant fill and bleed." },
    ],
    faqs: [
      { q: "Will servicing my BMW here void my agency warranty?", a: "No — under UAE Federal Law No. 15 of 2020 your warranty is protected when OEM procedures and certified parts are used, which we document on every invoice." },
      { q: "Do you reset iDrive service indicators?", a: "Yes. We reset the CBS service items in iDrive and record the service against your vehicle." },
      { q: "Do you use original BMW parts?", a: "Your estimate states clearly whether genuine BMW or OEM-approved equivalent parts are being fitted, with part numbers listed." },
    ],
  },
  {
    slug: "audi",
    name: "Audi",
    origin: "German",
    models: ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "RS3", "RS6", "TT", "e-tron"],
    intro:
      "Audi specialists running ODIS-level diagnostics for S-tronic and DSG mechatronic faults, TFSI oil consumption, air suspension and quattro driveline repairs across A4, A6, Q5, Q7 and RS models.",
    whyDubai:
      "S-tronic mechatronic units are the first casualty of Dubai traffic heat, followed by cooling system plastic housings and water pumps that fail at low mileage in UAE conditions.",
    failurePoints: [
      { title: "S-tronic / DSG mechatronic faults", text: "Jerky engagement and limp mode from mechatronic unit and clutch adaptation faults." },
      { title: "2.0 TFSI oil consumption", text: "Piston ring and breather issues burn oil between services — diagnosed with consumption measurement." },
      { title: "Water pump and thermostat housing leaks", text: "Plastic housings crack with heat cycling, causing gradual coolant loss." },
      { title: "Air suspension compressor wear", text: "A7, A8, Q7 and allroad models sag when the compressor and valve block degrade." },
      { title: "MMI and electrical module faults", text: "Heat-related module and connector failures cause intermittent screen and comfort system faults." },
    ],
    pricing: { minor: 900, major: 1700, ac: 1500, brakes: 1100 },
    caseStudies: [
      { title: "2018 Q5 — DSG judder", text: "Clutch adaptation values out of range; mechatronic repair and clutch calibration removed the judder and restored limp-free driving." },
      { title: "2016 A6 2.0 TFSI — oil consumption", text: "Consumption measured over distance; piston ring and breather repair brought usage back within specification." },
      { title: "2019 Q7 — sagging rear", text: "Air suspension compressor replaced and system recalibrated after leak testing identified a failing rear strut." },
    ],
    faqs: [
      { q: "Will servicing my Audi here void my agency warranty?", a: "No. UAE Federal Law No. 15 of 2020 protects your warranty provided OEM procedures and certified parts are used — our documented process satisfies this." },
      { q: "Do you code and reset Audi service and MMI functions?", a: "Yes, we run ODIS-level diagnostic software for service resets, coding and adaptation across all modules." },
      { q: "Do you use original Audi parts?", a: "We supply genuine Audi components or OEM-approved equivalents with part numbers stated on your estimate." },
    ],
  },
  {
    slug: "porsche",
    name: "Porsche",
    origin: "German",
    models: ["911", "718 Boxster", "718 Cayman", "Cayenne", "Macan", "Panamera", "Taycan", "GT3", "Turbo S"],
    intro:
      "Porsche specialists running PIWIS diagnostics for PDK servicing, air suspension and PASM damper faults, coolant pipe repairs and full engine work on 911, Cayenne, Macan and Panamera.",
    whyDubai:
      "Cayenne and Macan coolant pipes, PDK clutch heat cycling and air suspension compressors are the signature Dubai failures we correct every week in Al Quoz.",
    failurePoints: [
      { title: "PDK clutch and mechatronic wear", text: "Stop-start heat glazes clutch packs, producing judder and slow engagement from standstill." },
      { title: "Cayenne & Macan coolant pipe failure", text: "The coolant pipe adhesive joint fails with heat, causing sudden coolant loss." },
      { title: "Air suspension and PASM damper faults", text: "Compressor and damper faults leave the vehicle sitting low with warning messages." },
      { title: "IMS bearing wear on older 911", text: "Age and oil condition related bearing wear requires preventive replacement." },
      { title: "Transfer case actuator wear", text: "Cayenne and Macan transfer case actuators wear, causing driveline shudder and error codes." },
    ],
    pricing: { minor: 1250, major: 2400, ac: 1800, brakes: 1650 },
    caseStudies: [
      { title: "2017 Cayenne — coolant pipe failure", text: "Updated metal pipe fitted after heat-related joint failure, with full coolant fill and pressure verification." },
      { title: "2015 Macan S — PDK judder", text: "PDK fluid service, clutch adaptation and mechatronic inspection restored smooth low-speed engagement." },
      { title: "2013 911 Carrera — air suspension", text: "Compressor and rear strut replaced with calibration reset, ride height restored to factory specification." },
    ],
    faqs: [
      { q: "Will servicing my Porsche here void my warranty?", a: "No — UAE Federal Law No. 15 of 2020 allows independent servicing using OEM procedures and certified parts without affecting your warranty." },
      { q: "Do you use PIWIS-equivalent diagnostic software?", a: "We run manufacturer-level diagnostic platforms for Porsche, covering all modules, coding and adaptation." },
      { q: "Do you use original Porsche parts?", a: "Genuine Porsche parts or OEM-approved equivalents, with part numbers listed on your itemised estimate." },
    ],
  },
  {
    slug: "rolls-royce",
    name: "Rolls-Royce",
    origin: "British",
    models: ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan", "Silver Shadow", "Silver Spirit"],
    intro:
      "Discreet, specialist care for Rolls-Royce Phantom, Ghost, Wraith, Dawn and Cullinan owners in Dubai — air suspension, V12 cooling and oil leaks, coachwork, bespoke paint and bespoke interior trim handled with the discretion these cars deserve.",
    whyDubai:
      "Self-levelling suspension struts, W12 and V12 cooling components and bespoke leather interiors all deteriorate quickly in UAE heat and humidity, and factory parts must be sourced correctly.",
    failurePoints: [
      { title: "Self-levelling air suspension wear", text: "Struts and compressors lose pressure, leaving the car off-height and triggering ride warnings." },
      { title: "V12 oil and coolant leaks", text: "Heat-hardened gaskets and seals weep oil and coolant onto hot components." },
      { title: "Electrical and control module faults", text: "Module and connector faults cause comfort system and warning anomalies." },
      { title: "Bespoke paint and veneer damage", text: "UV and heat lift veneers, crack lacquer and require exact formulation matching." },
      { title: "Interior leather and headliner deterioration", text: "Bespoke hides dry and headliners sag without specialist trim work." },
    ],
    pricing: { minor: 2200, major: 3800, ac: 2600, brakes: 3200 },
    caseStudies: [
      { title: "2019 Cullinan — ride height warning", text: "Compressor and height sensor replaced, self-levelling recalibrated and road tested to confirm factory ride height." },
      { title: "2014 Ghost — oil seepage", text: "Heat-hardened gaskets replaced across the V12 timing covers with correct torque sequence and fresh approved oil." },
      { title: "2016 Wraith — veneer restoration", text: "Wood veneer panels removed, refinished and refitted with matching lacquer to original specification." },
    ],
    faqs: [
      { q: "Will servicing my Rolls-Royce here affect my warranty?", a: "No. Servicing at an authorised independent workshop using OEM procedures and certified parts preserves your manufacturer warranty under UAE Federal Law No. 15 of 2020." },
      { q: "Can you source genuine Rolls-Royce parts?", a: "Yes — we source genuine and OEM-approved components through our supplier network and list part numbers on your estimate." },
      { q: "Is the work handled discreetly?", a: "Yes. Vehicles are kept indoors, covered and photographed on arrival and departure, with communication through your preferred contact only." },
    ],
  },
  {
    slug: "bentley",
    name: "Bentley",
    origin: "British",
    models: ["Continental GT", "Continental GTC", "Flying Spur", "Bentayga", "Mulsanne"],
    intro:
      "Bentley repair and maintenance in Dubai covering W12 and V8 cooling and oil leaks, air suspension, convertible roof hydraulics and the hand-stitched interiors that make these cars what they are.",
    whyDubai:
      "The Bentayga and Continental air suspension and the W12 cooling system are the two systems Dubai heat attacks hardest, along with the leather and veneer every owner notices first.",
    failurePoints: [
      { title: "W12 cooling and oil leaks", text: "Heat-hardened seals and coolant pipes leak under sustained summer loads." },
      { title: "Air suspension strut failure", text: "Struts and compressors lose pressure, triggering ride height warnings and uneven stance." },
      { title: "Convertible roof hydraulic faults", text: "Hydraulic rams and pumps fail from seal degradation and heat." },
      { title: "Electrical module and sensor faults", text: "Intermittent comfort and driver assistance errors from heat-affected modules." },
      { title: "Interior leather and veneer ageing", text: "Cracking hides and lifting veneer need specialist trim restoration." },
    ],
    pricing: { minor: 2100, major: 3600, ac: 2500, brakes: 3400 },
    caseStudies: [
      { title: "2018 Bentayga — rear suspension low", text: "Air strut and compressor replaced, system recalibrated and ride height verified against factory specification." },
      { title: "2015 Continental GT — coolant loss", text: "Pressure testing identified a failing coolant pipe joint; updated component fitted with fresh coolant." },
      { title: "2017 GTC — roof not cycling", text: "Hydraulic pump rebuilt, seals replaced and roof cycle recalibrated with full operation verification." },
    ],
    faqs: [
      { q: "Will servicing my Bentley here void my warranty?", a: "No — UAE law protects your manufacturer warranty when an authorised independent workshop follows OEM guidelines with certified parts." },
      { q: "Do you work on W12 engines?", a: "Yes, we carry out W12 diagnostic, cooling, oil leak and engine repair work in-house at our Al Quoz facility." },
      { q: "Can you match my bespoke interior specification?", a: "We source matching hides, thread and veneers and colour-match to your original specification wherever possible." },
    ],
  },
  {
    slug: "aston-martin",
    name: "Aston Martin",
    origin: "British",
    models: ["Vantage", "DB9", "DB11", "DBS", "Rapide", "DBX", "Vanquish"],
    intro:
      "Aston Martin specialists for V8 and V12 diagnostics, Sportshift and ZF gearbox repair, ignition and cooling system work and suspension restoration on Vantage, DB11, DBS and DBX.",
    whyDubai:
      "Coil pack and ignition degradation, cooling system failures and Sportshift clutch wear are far more common in the UAE than in Europe, especially on V12 models driven hard in summer.",
    failurePoints: [
      { title: "Coil pack and ignition degradation", text: "Heat destroys coil packs on V12 models, causing misfire and power loss." },
      { title: "Sportshift clutch and torque tube wear", text: "Clutch and torque tube components wear faster under Dubai traffic conditions." },
      { title: "Cooling system and thermostat faults", text: "Coolant loss and overheating from aged hoses, thermostats and radiators." },
      { title: "Electrical and module faults", text: "Interior and body modules cause intermittent warnings and comfort faults." },
      { title: "Suspension bushing wear", text: "Bushings and alignment components degrade faster in UAE heat and traffic." },
    ],
    pricing: { minor: 1900, major: 3200, ac: 2300, brakes: 2800 },
    caseStudies: [
      { title: "2017 DB11 V12 — misfire", text: "Coil pack failure identified by live misfire data; full set replaced with spark plugs and adaptation reset." },
      { title: "2013 Vantage — rough gear shifting", text: "Sportshift clutch and actuator inspected, clutch replaced and gearbox recalibrated for smooth engagement." },
      { title: "2016 Rapide — overheating", text: "Cooling system pressure tested, failed thermostat and hoses replaced with fresh coolant fill." },
    ],
    faqs: [
      { q: "Will servicing my Aston Martin here void my warranty?", a: "No — under UAE Federal Law No. 15 of 2020 independent servicing with OEM-specification parts does not invalidate your manufacturer warranty." },
      { q: "Do you work on V12 ignition faults?", a: "Yes — coil, plug and ignition circuit diagnosis on V12 and V8 models is routine work for our technicians." },
      { q: "Can you service older Astons?", a: "We service and restore both modern and older Aston Martin models, sourcing parts through our specialist network." },
    ],
  },
];