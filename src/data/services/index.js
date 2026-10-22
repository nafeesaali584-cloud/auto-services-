import { mechanicalServices } from "./mechanical";
import { acBodyServices } from "./ac-body";
import { detailingServices } from "./detailing";

export const services = [...mechanicalServices, ...acBodyServices, ...detailingServices];

export const getService = (slug) => services.find((s) => s.slug === slug);
export const serviceNames = services.map((s) => s.name);
export const hubServices = services.filter((s) => s.hub);

export const serviceMenu = [
  {
    col: "Mechanical Repairs",
    groups: [
      {
        title: "Maintenance & Servicing",
        slugs: [
          "maintenance-repair",
          "major-minor-service",
          "20000-40000-60000-service",
          "80000-100000-service",
          "brakes-ac-inspection",
        ],
      },
      {
        title: "Transmission & Gearbox",
        slugs: [
          "transmission-gearbox",
          "transmission-repair",
          "transmission-rebuild",
          "transmission-replacement",
          "transmission-oil-filter",
        ],
      },
      {
        title: "Engine & Performance",
        slugs: ["engine-repair", "complete-engine-rebuild", "engine-noise-repair", "engine-tuning"],
      },
      {
        title: "Oils, Fluids & Inspection",
        slugs: [
          "premium-oil-services",
          "synthetic-oil-change",
          "oil-filter-change",
          "oil-flushing",
          "150-point-inspection",
        ],
      },
    ],
  },
  {
    col: "Electrical, AC & Body",
    groups: [
      {
        title: "Car AC Services",
        slugs: [
          "car-ac-services",
          "ac-diagnostics-leak-test",
          "heater-system-inspection",
          "ac-gas-refill",
          "ac-compressor-repair",
        ],
      },
      {
        title: "Battery & Electrical",
        slugs: ["battery-services", "computerized-battery-test", "battery-cable-testing", "scanning-diagnostics"],
      },
      {
        title: "Body, Accident & Paint",
        slugs: [
          "body-work",
          "accident-repair",
          "dents-scratches-repair",
          "bumper-repair-replacement",
          "headlight-taillight-replacement",
          "paint-services",
        ],
      },
      {
        title: "Suspension & Wheels",
        slugs: [
          "suspension-services",
          "wheel-balancing",
          "suspension-alignment",
          "performance-suspension-upgrade",
        ],
      },
    ],
  },
  {
    col: "Detailing & Specialist",
    groups: [
      {
        title: "Detailing & Paint",
        slugs: [
          "car-detailing",
          "full-body-painting",
          "custom-paintjob",
          "scratch-painting",
          "car-polishing",
          "ceramic-coating",
        ],
      },
      {
        title: "Interior, Trim & Wheels",
        slugs: [
          "convertible-roof-repair",
          "upholstery-work",
          "custom-seat-covers",
          "dashboard-repair-replacement",
          "leather-replacement",
          "rim-repair-restoration",
        ],
      },
      {
        title: "Styling & Protection",
        slugs: ["conversion-facelift-kits", "ppf-vinyl-wrap"],
      },
      {
        title: "Contracts, Fleets & Restoration",
        slugs: [
          "pre-purchase-inspection",
          "fleet-management",
          "mobile-mechanic",
          "annual-maintenance-contracts",
          "car-restoration",
        ],
      },
    ],
  },
];

export const homeTabs = [
  {
    label: "Maintenance & Repair",
    slug: "maintenance-repair",
    overview:
      "Manufacturer-scheduled servicing and mechanical repair for luxury, American, German, British and Italian vehicles — completed with genuine parts and a transparent video inspection.",
    steps: [
      "All-module dealer-level diagnostic scan and fault history read",
      "Fluid, filter and belt condition assessment across every system",
      "Brake, suspension, battery and cooling inspection with measurements",
      "Itemised estimate issued on WhatsApp before any parts are ordered",
    ],
    turnaround: "Same day to 1 working day",
    price: "From AED 349",
  },
  {
    label: "Scanning & Diagnostics",
    slug: "scanning-diagnostics",
    overview:
      "Manufacturer-level diagnostic software across every module — engine, transmission, ABS, airbag, climate, body and comfort — with live data analysis and component-level fault tracing.",
    steps: [
      "All-module scan including stored, pending and permanent codes",
      "Live data capture under idle, load and road conditions",
      "Voltage drop and wiring testing on the affected circuit",
      "Plain-language explanation with a priced repair plan",
    ],
    turnaround: "2 to 4 hours",
    price: "From AED 350",
  },
  {
    label: "Transmission Repair",
    slug: "transmission-gearbox",
    overview:
      "Diagnostics, targeted repair, complete rebuild and replacement for automatic, DSG, CVT and DCT gearboxes — Dubai's speciality work and the reason our name is what it is.",
    steps: [
      "Dealer-level transmission module scan with live shift data logging",
      "Fluid condition, contamination and metal-content analysis",
      "Road test assessing adaptation values and shift pressures",
      "Mechatronic, solenoid and valve body electrical testing",
    ],
    turnaround: "Diagnosis 1 day · repair 2–7 days",
    price: "From AED 750",
  },
  {
    label: "AC Services",
    slug: "car-ac-services",
    overview:
      "Complete air-conditioning diagnosis and repair — leak testing, gas refill by weight, compressor and control valve repair, condenser and evaporator service built for 50°C summers.",
    steps: [
      "Vent temperature and refrigerant pressure testing against specification",
      "UV dye and nitrogen leak testing of the complete circuit",
      "Compressor clutch, current draw and control valve assessment",
      "Correct refrigerant weight recharge with performance verification",
    ],
    turnaround: "Diagnosis same day · repair 1–2 days",
    price: "From AED 299",
  },
  {
    label: "Engine Repair",
    slug: "engine-repair",
    overview:
      "Engine diagnostics, oil leak repair, timing, head gasket and full overhaul — diagnosed with live data and compression testing before a single bolt is turned.",
    steps: [
      "ECU scan with live sensor data and misfire counter analysis",
      "Compression and cylinder leakage testing where mechanical faults are suspected",
      "Cooling system pressure and combustion gas testing",
      "Oil leak tracing with UV dye and full underbody inspection",
    ],
    turnaround: "Diagnosis 1 day · repair 2–6 days",
    price: "From AED 850",
  },
  {
    label: "Premium Oil Services",
    slug: "premium-oil-services",
    overview:
      "Full-synthetic oil carrying the exact manufacturer approval for your engine — MB 229.5, BMW LL-04, VW 504.00, Porsche A40 — with genuine filters and service interval reset.",
    steps: [
      "Manufacturer approval and viscosity confirmed for your engine code",
      "Existing oil condition assessed for fuel dilution and contamination",
      "Filter replacement with drain plug and washer renewed",
      "Electronic service indicator reset after a verified level check",
    ],
    turnaround: "60 to 90 minutes",
    price: "From AED 299",
  },
  {
    label: "Pre-Purchase Inspection",
    slug: "pre-purchase-inspection",
    overview:
      "An independent 150-point inspection of the used vehicle you are about to buy — mechanical, electronic, structural and cosmetic — with the cost of every fault in AED.",
    steps: [
      "Full diagnostic scan across every module with mileage verification",
      "Lift inspection for leaks, suspension, driveline and structural repair evidence",
      "Paint depth measurement identifying previous panel work",
      "Road test assessing transmission, brakes, AC and steering behaviour",
    ],
    turnaround: "2 to 3 hours",
    price: "From AED 499",
  },
  {
    label: "Brakes",
    slug: "brakes-ac-inspection",
    overview:
      "Brake inspection and repair with measured pad and disc data, fluid moisture testing and correct bedding-in procedures for high-performance compounds.",
    steps: [
      "Pad and disc thickness measured on all four corners in millimetres",
      "Brake fluid moisture and boiling point testing",
      "Caliper, hose and ABS sensor inspection for leaks and heat damage",
      "Bedding-in procedure completed and documented for performance compounds",
    ],
    turnaround: "Same day",
    price: "From AED 299",
  },
  {
    label: "Suspension",
    slug: "suspension-services",
    overview:
      "Conventional and air suspension repair — shocks, struts, bushings, control arms and air compressor systems — restored to manufacturer ride and geometry specification.",
    steps: [
      "Road test assessing ride, rebound, noise and steering feel",
      "Lift inspection of shocks, springs, bushings, arms and links",
      "Air suspension leak testing and compressor output measurement",
      "Four-wheel alignment reading before and after the repair",
    ],
    turnaround: "1 to 3 working days",
    price: "From AED 850",
  },
  {
    label: "Battery",
    slug: "battery-services",
    overview:
      "Battery testing, supply and coding. AGM and EFB batteries fitted and registered to the vehicle's energy management system — essential on modern European platforms.",
    steps: [
      "State-of-health and state-of-charge conductance testing",
      "Alternator output and charging voltage verification under load",
      "Parasitic drain testing where batteries fail overnight",
      "Battery registration or coding to the vehicle energy management system",
    ],
    turnaround: "45 to 90 minutes",
    price: "From AED 650",
  },
  {
    label: "Body Work",
    slug: "body-work",
    overview:
      "Panel repair and replacement, structural measurement, dent removal and dust-free booth refinishing with computerised colour matching.",
    steps: [
      "Damage assessment documented photographically with alignment check",
      "Structural measurement where damage extends beyond bolt-on panels",
      "Panel repair or genuine replacement matching your VIN specification",
      "Panel gap verification before colour-matched booth refinishing",
    ],
    turnaround: "2 to 6 working days",
    price: "From AED 600",
  },
  {
    label: "Paint",
    slug: "paint-services",
    overview:
      "Single panel to full respray — prepared correctly, matched by computer, and finished with a UV-stable clearcoat that survives Dubai sunlight.",
    steps: [
      "Colour code retrieval and paint depth measurement",
      "Preparation, sanding, priming and sealing of repaired areas",
      "Spray-out test panel verified in daylight before full application",
      "Film thickness measurement recorded after curing and polishing",
    ],
    turnaround: "2 to 5 working days",
    price: "From AED 700",
  },
  {
    label: "Ceramic Coating",
    slug: "ceramic-coating",
    overview:
      "Paint correction followed by professional ceramic coating — genuine UV resistance and hydrophobic protection for Dubai's sun and dust.",
    steps: [
      "Decontamination wash, clay treatment and iron fallout removal",
      "Machine paint correction to remove swirls before coating",
      "Panel wipe and surface preparation for proper adhesion",
      "Coating applied, cured and documented with a warranty record",
    ],
    turnaround: "2 to 3 working days",
    price: "From AED 1,899",
  },
  {
    label: "Upholstery & Specialist",
    slug: "upholstery-work",
    overview:
      "Interior restoration in genuine leather and Alcantara — seats, door cards, headliners and dashboards — repaired, matched or completely rebuilt.",
    steps: [
      "Interior assessment with material identification and colour matching",
      "Trim and seat removal with fasteners and clips preserved",
      "Foam repair or replacement before new covers are fitted",
      "Cutting, stitching and refitment with final conditioning",
    ],
    turnaround: "3 to 10 working days",
    price: "From AED 1,200",
  },
];