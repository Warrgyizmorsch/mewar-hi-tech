export interface IndustryData {
  slug: string;
  name: string;
  shortName: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  tagline: string;
  overview: string[];
  challenges: {
    title: string;
    description: string;
  }[];
  processFlow: {
    step: string;
    title: string;
    description: string;
  }[];
  keyBenefits: {
    stat: string;
    label: string;
    description: string;
  }[];
  recommendedProducts: {
    slug: string;
    name: string;
    category: string;
    image: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const INDUSTRIES_DATA: IndustryData[] = [
  {
    slug: "quarrying",
    name: "Quarrying & Hard Rock Crushing",
    shortName: "Quarrying",
    seoTitle: "Quarrying Crushing & Screening Plant Equipment | Mewar Hi-Tech",
    seoDescription:
      "Heavy-duty primary jaw crushers, secondary cone crushers, and multi-deck vibrating screens engineered for granite, basalt, and hard rock quarry operations.",
    heroImage: "/images/hero_crusher.webp",
    tagline: "Uncompromising Tonnage & Wear Life in Granite, Basalt & Limestone Quarries",
    overview: [
      "Quarry operations require continuous, uninterrupted processing of massive blasted boulders into commercial-grade aggregates. Hard igneous rocks like granite, basalt, and trap rock impose tremendous abrasive wear and mechanical shock loads on crushing machinery.",
      "Mewar Hi-Tech's KINGSON quarry equipment is specifically designed with heavy cast-steel swing jaws, extra-large forged eccentric shafts, and our proprietary 'Crushing without Rubbing' double-toggle kinematics. This unique design reduces rubbing between jaw plates and rock, doubling liner life and minimizing plant electrical consumption.",
      "From high-tonnage primary dump feeding to multi-deck vibrating classification, our quarry solutions ensure steady production rates up to 500+ TPH with lowest cost-per-ton economics.",
    ],
    challenges: [
      {
        title: "High Liner Wear in Abrasive Granites",
        description:
          "Traditional jaw crushers generate severe sliding friction, wearing manganese jaw plates prematurely. Our double-toggle geometry delivers pure perpendicular compressive force, extending plate lifetime by up to 50%.",
      },
      {
        title: "Hopper Bridging & Uneven Primary Infeed",
        description:
          "Uneven truck dumps can choke primary crushers. KINGSON single shaft grizzly feeders scalp undersized natural dirt while feeding boulders smoothly into the crushing chamber.",
      },
      {
        title: "Strict Particle Flakiness Standards",
        description:
          "Government infrastructure contracts enforce strict elongation and flakiness limits (< 15%). Our secondary and tertiary impactors and cone crushers produce perfect cubical fractions.",
      },
    ],
    processFlow: [
      {
        step: "01",
        title: "Primary Grizzly Scalping",
        description: "Blasted quarry rock (up to 1,200 mm) is dumped into heavy-duty hopper with stepped grizzly bars bypassing fines.",
      },
      {
        step: "02",
        title: "Primary Jaw Reduction",
        description: "Double toggle oil-lubricated jaw crusher reduces feed down to 150-250 mm without rubbing wear.",
      },
      {
        step: "03",
        title: "Surge Hopper & Secondary Crushing",
        description: "Regulated surge feed enters high-reduction cone crusher or horizontal shaft impactor for uniform reduction.",
      },
      {
        step: "04",
        title: "Multi-Deck Classification",
        description: "Circular motion vibrating screen separates fractions into 40mm, 20mm, 10mm, and stone dust stockpiles.",
      },
    ],
    keyBenefits: [
      {
        stat: "Up to 520 TPH",
        label: "Crushing Capacity",
        description: "Continuous processing of primary quarry feeds with single or two-stage plant layouts.",
      },
      {
        stat: "2x Liner Life",
        label: "Wear Resistance",
        description: "Direct perpendicular compression dramatically eliminates sliding abrasive wear.",
      },
      {
        stat: "24/7 Reliability",
        label: "Continuous Duty",
        description: "Enclosed automated oil spray lubrication prevents bearing heat and dust ingress.",
      },
      {
        stat: "< 15%",
        label: "Flakiness Index",
        description: "Cubical stone aggregates matching stringent highway and railway ballast specifications.",
      },
    ],
    recommendedProducts: [
      {
        slug: "double-toggle-oil-jaw-crusher",
        name: "Double Toggle Oil Jaw Crusher",
        category: "Crushers",
        image: "/images/double-toggle-oil-jaw-crusher.webp",
        description: "Heavy-duty primary crusher with enclosed oil lubrication and zero-rubbing toggle geometry.",
      },
      {
        slug: "cone-crusher",
        name: "Cone Crusher",
        category: "Crushers",
        image: "/images/robust_crusher_design.webp",
        description: "High-capacity secondary and tertiary crusher delivering uniform cubical aggregates and tight CSS control.",
      },
      {
        slug: "vibro-feeder",
        name: "Vibro Feeder",
        category: "Feeders",
        image: "/images/vibro-feeder.webp",
        description: "Heavy pan feeder with integrated grizzly section for smooth primary truck dump feeding.",
      },
      {
        slug: "vibrating-screen",
        name: "Vibrating Screen",
        category: "Screens",
        image: "/images/vibrating-screen.webp",
        description: "Circular throw 2 to 4-deck vibrating screen for precise multi-fraction aggregate separation.",
      },
    ],
    specifications: [
      { label: "Target Minerals", value: "Granite, Basalt, Limestone, Quartzite, River Gravel" },
      { label: "Typical Feed Size", value: "300 mm – 1,200 mm" },
      { label: "Output Products", value: "40mm, 20mm, 10mm, 6mm, Stone Dust" },
      { label: "Plant Throughput", value: "100 TPH – 500+ TPH" },
    ],
  },
  {
    slug: "mining",
    name: "Mining & Mineral Processing",
    shortName: "Mining",
    seoTitle: "Mining Crushing & Mineral Beneficiation Equipment | Mewar Hi-Tech",
    seoDescription:
      "Industrial crushing and screening solutions for open-cast and underground mines handling iron ore, bauxite, coal, dolomite, and metallic ores.",
    heroImage: "/images/heavy_machinery_card_1785825248756.webp",
    tagline: "Rugged Heavy-Duty Crushing Built for 24/7 Continuous Ore Beneficiation",
    overview: [
      "In mining operations, equipment unreliability directly translates to thousands of tons in lost output. Ore beneficiation circuits demand robust crushing and sizing machinery capable of handling heavy, dense, and abrasive ores around the clock.",
      "Mewar Hi-Tech engineers high-tonnage mining jaw crushers, heavy-duty roll crushers, and multi-stage vibrating screens built to operate in remote, hostile environments. With cast-steel frames, heavy forged pitmans, and automated central lubrication, our machines maximize equipment availability and ore recovery.",
      "Whether handling tough taconite iron ore, sticky bauxite, run-of-mine coal, or manganese ore, our engineering team custom-tailors plant layouts for maximum liberation and minimal fine generation.",
    ],
    challenges: [
      {
        title: "Continuous 24/7 Heavy Operation",
        description:
          "Mining installations run round-the-clock where unscheduled stoppages halt complete beneficiation circuits. KINGSON machines feature heavy-duty spherical roller bearings with labyrinth seals to ensure uninterrupted operation.",
      },
      {
        title: "Tramp Metal & Uncrushable Debris",
        description:
          "Excavator teeth and tramp metal can catastrophic damage crushers. Our double toggle shear plates and spring release systems safeguard internal mechanisms from over-pressure damage.",
      },
      {
        title: "High Density & Shock Loads",
        description:
          "Dense iron and bauxite ores exert extreme radial loads. Stress-relieved heavy structural frames eliminate weld fatigue under deep pit conditions.",
      },
    ],
    processFlow: [
      {
        step: "01",
        title: "Run-of-Mine Infeed",
        description: "Heavy single shaft grizzly feeder receives bulk ROM ore directly from heavy haul trucks.",
      },
      {
        step: "02",
        title: "Primary Ore Reduction",
        description: "Cast-steel jaw crusher breaks hard ore boulders down to secondary handling size.",
      },
      {
        step: "03",
        title: "Secondary Crushing & Sizing",
        description: "Heavy-duty roll crusher or cone crusher delivers tightly controlled sizing for beneficiation feed.",
      },
      {
        step: "04",
        title: "Downstream Sizing & Beneficiation",
        description: "High-frequency vibrating screens route classified fractions to ball mills, flotation, or magnetic separation.",
      },
    ],
    keyBenefits: [
      {
        stat: "98% Uptime",
        label: "Availability",
        description: "Engineered for harsh mining conditions with continuous pressure-fed lubrication.",
      },
      {
        stat: "Up to 600 TPH",
        label: "Bulk Infeed",
        description: "Heavy pan feeders built with Hardox wear plates handling heavy ore truck dumps.",
      },
      {
        stat: "Tramp Protection",
        label: "Fail-Safe Design",
        description: "Mechanical safety toggle and hydraulic relief prevent catastrophic shaft damage.",
      },
      {
        stat: "30+ Years",
        label: "Service History",
        description: "Proven track record in major iron ore and coal mining belts across Asia and Africa.",
      },
    ],
    recommendedProducts: [
      {
        slug: "double-toggle-oil-jaw-crusher",
        name: "Double Toggle Oil Jaw Crusher",
        category: "Crushers",
        image: "/images/double-toggle-oil-jaw-crusher.webp",
        description: "Continuous lubrication heavy-duty primary breaker for iron ore, bauxite, and hard metallic ores.",
      },
      {
        slug: "roll-crusher",
        name: "Roll Crusher",
        category: "Crushers",
        image: "/images/roll-crusher.webp",
        description: "Double roll crusher ideal for friable ores, coal, and limestone with minimal fine over-crushing.",
      },
      {
        slug: "single-shaft-feeders",
        name: "Single Shaft Grizzly Feeder",
        category: "Feeders",
        image: "/images/single-shaft-feeders.webp",
        description: "Massive grizzly feeder built to withstand heavy mining dump impact while bypassing natural fines.",
      },
      {
        slug: "belt-conveyor",
        name: "Belt Conveyor System",
        category: "Screens",
        image: "/images/maximum_productivity.webp",
        description: "Overland heavy-duty conveyors designed for long-distance bulk ore transfer and stockpiling.",
      },
    ],
    specifications: [
      { label: "Ores Handled", value: "Iron Ore, Bauxite, Coal, Dolomite, Manganese, Copper Ore" },
      { label: "Max Feed Size", value: "Up to 1,500 mm" },
      { label: "Lubrication", value: "Automated Continuous Forced Oil Pump Circulation" },
      { label: "Chassis Mount", value: "Stationary Skid Mount or Heavy Civil Foundation" },
    ],
  },
  {
    slug: "m-sand",
    name: "Manufactured Sand (M-Sand) Production",
    shortName: "M-Sand",
    seoTitle: "M-Sand Making & Sand Washing Plants | Mewar Hi-Tech",
    seoDescription:
      "Complete manufactured sand (M-sand and plaster sand) plants featuring Vertical Shaft Impactors (VSI) and bucket-wheel sand washers conforming to IS 383 Zone II standards.",
    heroImage: "/images/sand-making-machine-hero.webp",
    tagline: "Eco-Friendly, High-Spec Manufactured Sand Replacing Depleted River Sand",
    overview: [
      "With environmental restrictions and severe bans on river sand mining, Manufactured Sand (M-Sand) and Plaster Sand have become indispensable for high-grade RMC concrete and building infrastructure. M-sand production demands precise particle shape, micro-fines control, and consistent gradation curves.",
      "Mewar Hi-Tech is a recognized pioneer in complete M-Sand crushing and washing circuits. Our Vertical Shaft Impactors (VSI) employ high-velocity autogenous rock-on-rock crushing to produce cubical sand particles with optimum surface texture for superior concrete compressive strength.",
      "Combined with our high-recovery sand washing and dewatering systems, our plants strip deleterious silt and clay down to under 3%, consistently meeting IS 383 Zone II specifications with minimal water consumption.",
    ],
    challenges: [
      {
        title: "Flaky & Elongated Sand Particles",
        description:
          "Conventional crushers produce splintered, flaky stone dust that degrades concrete workability and increases cement consumption. Our VSI impact kinetics shape grains into cubical, rounded sand particles.",
      },
      {
        title: "Excess Silt & Micro-Fines (< 75 Micron)",
        description:
          "Unwashed stone dust contains excessive clay and ultra-fines that weaken cement bonding. Our integrated bucket wheel washer washes silt while retaining essential 150-micron sand fractions.",
      },
      {
        title: "Severe Rotor Wear from Abrasive Silica",
        description:
          "High quartz contents cause rapid rotor wear. KINGSON VSI rotors utilize tungsten carbide tips and build-up autogenous rock pockets that absorb crushing impact.",
      },
    ],
    processFlow: [
      {
        step: "01",
        title: "Grit / 10-20mm Infeed",
        description: "Quarry byproduct grit or 10-20mm aggregate feed is conveyed to the sand making surge hopper.",
      },
      {
        step: "02",
        title: "Autogenous VSI Crushing",
        description: "High-speed rotor accelerates feed against an autogenous rock bed, shaping and reducing into 0-4.75mm sand.",
      },
      {
        step: "03",
        title: "Vibrating Screen Classification",
        description: "High-frequency screen separates 0-4.75mm M-sand while recirculating oversized particles back to the VSI.",
      },
      {
        step: "04",
        title: "Bucket Wheel Sand Washing",
        description: "Sand washer dewaters clean M-sand while flushing out clay and silt to under 3%, producing IS 383 Zone II sand.",
      },
    ],
    keyBenefits: [
      {
        stat: "IS 383 Zone II",
        label: "Gradation Standard",
        description: "Strict compliance with Indian and international building code particle size distributions.",
      },
      {
        stat: "15% Cement Saving",
        label: "Concrete Optimization",
        description: "Cubical grain geometry improves mortar compaction and reduces water-cement ratio requirements.",
      },
      {
        stat: "< 3% Silt Content",
        label: "Ultra-Clean Sand",
        description: "Bucket wheel washing eliminates deleterious silt, clay, and organic contaminants.",
      },
      {
        stat: "30 - 200 TPH",
        label: "Sand Capacity",
        description: "Scalable modular plant configurations for small quarry owners to large commercial sand hubs.",
      },
    ],
    recommendedProducts: [
      {
        slug: "vertical-shaft-impactor",
        name: "Vertical Shaft Impactor (VSI)",
        category: "Impactors",
        image: "/images/vertical-shaft-impactor.webp",
        description: "Autogenous rock-on-rock sand maker delivering exceptional cubical shape and maximum sand yield.",
      },
      {
        slug: "sand-making-machine",
        name: "Sand Making Machine",
        category: "Impactors",
        image: "/images/sand-making-machine.webp",
        description: "High-velocity tertiary impactor engineered specifically for manufactured concrete and plaster sand.",
      },
      {
        slug: "sand-washer",
        name: "Bucket Wheel Sand Washer",
        category: "Screens",
        image: "/images/sand-washer.webp",
        description: "Dewatering sand washer removing silt and mud while recovering valuable fine sand fractions.",
      },
      {
        slug: "vibrating-screen",
        name: "Vibrating Screen",
        category: "Screens",
        image: "/images/vibrating-screen.webp",
        description: "High-efficiency fine classification screen equipped with anti-blinding wire mesh.",
      },
    ],
    specifications: [
      { label: "Product Types", value: "Concrete M-Sand (0-4.75mm), Plaster Sand (0-2.36mm)" },
      { label: "Raw Feed Material", value: "10mm – 30mm Granite, Basalt, or River Gravel" },
      { label: "Silt Content", value: "Under 3% (Standard Specification)" },
      { label: "Moisture Content", value: "< 5% following dewatering discharge" },
    ],
  },
  {
    slug: "road-construction",
    name: "Road Construction & Highway Infrastructure",
    shortName: "Road Construction",
    seoTitle: "Road Construction & Highway Aggregates Crushing Plants | Mewar Hi-Tech",
    seoDescription:
      "High-production crushing and screening systems for Granular Sub-Base (GSB), Wet Mix Macadam (WMM), Bituminous Concrete, and highway ballast.",
    heroImage: "/images/turnkey_projects_card_1785825275121.webp",
    tagline: "High-Precision Aggregates for National Expressways, Highways & Runway Bases",
    overview: [
      "Highway construction and major infrastructure projects enforce tight tolerances on aggregate gradations, crushing value, and flakiness. Whether supplying Granular Sub-Base (GSB), Wet Mix Macadam (WMM), or Dense Bituminous Macadam (DBM), road contractors need steady, high-volume aggregate production without downtime.",
      "Mewar Hi-Tech provides complete stationary and semi-mobile crushing solutions tailored for highway projects. Our primary jaw crushers, secondary impactors, and multi-deck screening units provide the high reduction ratios and tight grading curves required by the Ministry of Road Transport and Highways (MoRTH) and NHAI.",
      "With rapid erection designs and rugged components, our plants help infrastructure developers meet aggressive project deadlines while delivering aggregates with rock-solid compaction characteristics.",
    ],
    challenges: [
      {
        title: "Stringent MoRTH / NHAI Gradation Curves",
        description:
          "Highway contracts reject batches with out-of-spec gradation or excessive flakiness. Our multi-stage closed-circuit systems deliver strictly controlled sieve distributions.",
      },
      {
        title: "High Production Demands under Tight Deadlines",
        description:
          "Road paving schedules require continuous aggregate supply up to 3,000 tons per day. KINGSON plants deliver non-stop duty with proven mechanical reliability.",
      },
      {
        title: "Varying Rock Hardness Across Quarry Sites",
        description:
          "Contractors encounter varying strata from soft limestone to dense basalt. Our flexible crusher CSS settings and blow bar configurations easily adapt to changing geology.",
      },
    ],
    processFlow: [
      {
        step: "01",
        title: "Primary Run-of-Quarry Breakdown",
        description: "Large blasted rock is fed to heavy jaw crusher reducing feed to manageable 150mm transfer size.",
      },
      {
        step: "02",
        title: "Secondary Impact / Cone Crushing",
        description: "Horizontal shaft impactor or cone crusher breaks stone along natural seams, achieving cubical geometry.",
      },
      {
        step: "03",
        title: "Closed-Circuit Multi-Deck Screening",
        description: "Multi-deck screen separates GSB, 40mm, 20mm, 10mm, and stone dust with oversize recirculation.",
      },
      {
        step: "04",
        title: "Stockpile & Batching Transfer",
        description: "Heavy overland belt conveyors transfer separated aggregates directly to asphalt or concrete batching plants.",
      },
    ],
    keyBenefits: [
      {
        stat: "100% MoRTH Spec",
        label: "Gradation Compliance",
        description: "Engineered specifically to meet national highway and airport runway aggregate standards.",
      },
      {
        stat: "Up to 400 TPH",
        label: "Road Base Output",
        description: "Continuous high-volume production for high-speed highway paving and GSB requirements.",
      },
      {
        stat: "Fast Mobilization",
        label: "Rapid Setup",
        description: "Skid-mounted modular components for rapid erection and relocation across road corridors.",
      },
      {
        stat: "Low Fines Loss",
        label: "Resource Yield",
        description: "Optimized reduction ratios minimize dust waste while maximizing high-value cubical fractions.",
      },
    ],
    recommendedProducts: [
      {
        slug: "horizontal-shaft-impactor",
        name: "Horizontal Shaft Impactor (HSI)",
        category: "Impactors",
        image: "/images/horizontal-shaft-impactor.webp",
        description: "High-reduction secondary impactor delivering cubical road base aggregates with tight flakiness control.",
      },
      {
        slug: "single-toggle-grease-jaw-crusher",
        name: "Single Toggle Grease Jaw Crusher",
        category: "Crushers",
        image: "/images/single-toggle-grease-jaw-crusher.webp",
        description: "High-productivity primary jaw crusher with hydraulic gap adjustment for rapid quarry site setup.",
      },
      {
        slug: "vibrating-screen",
        name: "Vibrating Screen",
        category: "Screens",
        image: "/images/vibrating-screen.webp",
        description: "4-deck circular throw vibrating screen for simultaneous separation of all road aggregate fractions.",
      },
      {
        slug: "vibro-feeder",
        name: "Vibro Feeder",
        category: "Feeders",
        image: "/images/vibro-feeder.webp",
        description: "Controlled vibrating pan feeder ensuring uniform, surge-free plant operation.",
      },
    ],
    specifications: [
      { label: "Target Applications", value: "Granular Sub-Base (GSB), Wet Mix Macadam (WMM), DBM, BC Aggregates" },
      { label: "Output Sizes", value: "53mm - 26.5mm, 40mm, 20mm, 10mm, 6mm, Dust" },
      { label: "Aggregate Impact Value", value: "< 24% (Conforming to MoRTH Section 500)" },
      { label: "Flakiness & Elongation", value: "Combined Flakiness Index < 30% (Individual < 15%)" },
    ],
  },
  {
    slug: "recycling",
    name: "C&D Recycling & Slag Processing",
    shortName: "Recycling",
    seoTitle: "C&D Waste Recycling & Concrete Crushing Solutions | Mewar Hi-Tech",
    seoDescription:
      "Heavy-duty mobile and stationary crushing equipment for demolition waste, reclaimed asphalt pavement (RAP), concrete recycling, and metallurgical slag.",
    heroImage: "/images/robust_crusher_design.webp",
    tagline: "Transforming Demolition Waste & Industrial Byproducts into High-Value Aggregates",
    overview: [
      "Rapid urbanization has led to massive volumes of Construction and Demolition (C&D) waste. Modern environmental standards and circular economy mandates require reclaiming concrete, asphalt, and masonry for reuse in road sub-bases, backfill, and non-structural concrete.",
      "Recycling C&D waste presents severe operational hurdles: embedded steel rebar, timber, tramp metal, and variable feed consistency can quickly jam standard crushing equipment. Mewar Hi-Tech designs robust recycling crushers equipped with heavy-duty tramp release systems, reinforced impact aprons, and integrated overband magnetic separators.",
      "Our recycling solutions empower municipal contractors and aggregate producers to convert demolition rubble and industrial slag into clean, saleable recycled concrete aggregate (RCA) while saving costly landfill fees.",
    ],
    challenges: [
      {
        title: "Embedded Rebar & Wire Mesh Jams",
        description:
          "Reinforcing steel can wrap around shafts and jam crushing cavities. Our crushers feature wide entry throats, unencumbered discharge geometries, and optional magnetic metal extraction.",
      },
      {
        title: "Extreme Abrasiveness of Metallurgical Slag",
        description:
          "Blast furnace and steel slag have high bulk densities and abrasive hardness. High-manganese cast alloy components ensure durable service under intense abrasion.",
      },
      {
        title: "Variable Moisture & Dust Contamination",
        description:
          "Wet demolition dust clings to machine components. Our open-chute designs and heavy-throw vibrating screens prevent clogging and blinding.",
      },
    ],
    processFlow: [
      {
        step: "01",
        title: "Rubble Loading & Pre-Screening",
        description: "Demolition rubble is loaded onto a heavy vibrating feeder where dirt and fine soil are scalped away.",
      },
      {
        step: "02",
        title: "Primary Concrete Crushing",
        description: "Heavy-duty jaw crusher breaks concrete blocks and shears embedded steel rebar loose from the matrix.",
      },
      {
        step: "03",
        title: "Magnetic Metal Extraction",
        description: "Cross-belt overband magnetic separator extracts rebar and tramp metal from the conveyor flow.",
      },
      {
        step: "04",
        title: "Recycled Aggregate Sizing",
        description: "Vibrating screen classifies crushed concrete into clean 40mm, 20mm, and 10mm recycled base materials.",
      },
    ],
    keyBenefits: [
      {
        stat: "99% Metal Removal",
        label: "Purity",
        description: "Effective separation of concrete matrix from embedded steel rebar and ferrous scrap.",
      },
      {
        stat: "Circular Economy",
        label: "Sustainability",
        description: "Diverts thousands of tons of urban rubble from landfills into profitable road sub-base.",
      },
      {
        stat: "Heavy Shock Proof",
        label: "Chamber Ruggedness",
        description: "Reinforced frame and spring relief systems absorb unexpected tramp metal impact.",
      },
      {
        stat: "100 - 300 TPH",
        label: "Recycling Throughput",
        description: "High-tonnage continuous processing for large-scale municipal C&D management plants.",
      },
    ],
    recommendedProducts: [
      {
        slug: "double-toggle-oil-jaw-crusher",
        name: "Double Toggle Oil Jaw Crusher",
        category: "Crushers",
        image: "/images/double-toggle-oil-jaw-crusher.webp",
        description: "Wide feed mouth and high crushing force easily crush heavy reinforced concrete chunks.",
      },
      {
        slug: "horizontal-shaft-impactor",
        name: "Horizontal Shaft Impactor (HSI)",
        category: "Impactors",
        image: "/images/horizontal-shaft-impactor.webp",
        description: "Excellent secondary crusher for breaking concrete off rebar and producing clean cubical RCA.",
      },
      {
        slug: "vibrating-screen",
        name: "Vibrating Screen",
        category: "Screens",
        image: "/images/vibrating-screen.webp",
        description: "Robust screening unit for classifying recycled concrete into marketable stone fractions.",
      },
      {
        slug: "vibro-feeder",
        name: "Vibro Feeder",
        category: "Feeders",
        image: "/images/vibro-feeder.webp",
        description: "Heavy pan feeder with grizzly section for scalping natural soil from demolition rubble.",
      },
    ],
    specifications: [
      { label: "Feed Materials", value: "Reinforced Concrete, Brick Rubble, Reclaimed Asphalt (RAP), Slag" },
      { label: "Recycled End Products", value: "Recycled Concrete Aggregate (RCA) 40mm/20mm/10mm, Fill Sand" },
      { label: "Metal Separation", value: "Compatible with Overband Cross-Belt Magnetic Separators" },
      { label: "Application Scale", value: "City Municipal C&D Facilities, Industrial Slag Yards" },
    ],
  },
  {
    slug: "aggregates",
    name: "Commercial Aggregates & RMC Plants",
    shortName: "Aggregates",
    seoTitle: "Commercial Aggregate Crushing & Sizing Plants | Mewar Hi-Tech",
    seoDescription:
      "Complete 2-stage and 3-stage crushing plants engineered for commercial stone aggregate suppliers, Ready-Mix Concrete (RMC) plants, and precast manufacturing.",
    heroImage: "/images/hero-crusher.webp",
    tagline: "Consistent High-Strength Cubical Aggregates for Commercial RMC & Precast",
    overview: [
      "Ready-Mix Concrete (RMC) producers and precast manufacturers demand aggregates with strict consistency in particle size, clean surface texture, and minimal flakiness. Flaky aggregates increase voids, necessitating higher water and expensive cement content to achieve target compressive strengths.",
      "Mewar Hi-Tech engineers high-efficiency aggregate crushing circuits combining primary jaw crushers, secondary cone crushers, and tertiary impact shapers. This balanced multi-stage approach ensures maximum yield of high-value 10mm and 20mm fractions with uniform cubic shape.",
      "With over 30 years of manufacturing experience, our aggregate processing plants serve commercial quarry operators, civil contractors, and infrastructure developers across the globe.",
    ],
    challenges: [
      {
        title: "High Flakiness Affecting Concrete Strength",
        description:
          "Flaky aggregates align poorly in concrete paste, causing structural weak planes. Our tertiary impactors ensure cubical particle geometry meeting BS 812 and IS 2386.",
      },
      {
        title: "Excessive Fine Dust in Coarse Fractions",
        description:
          "Fine coatings on coarse aggregate prevent strong cement paste adhesion. Our high-throw vibrating screens remove dust coatings thoroughly.",
      },
      {
        title: "Power Consumption per Ton of Output",
        description:
          "Electricity is a major operational cost. Our balanced drive pulleys and low-friction toggle kinematics reduce specific energy consumption by up to 15%.",
      },
    ],
    processFlow: [
      {
        step: "01",
        title: "Controlled Grizzly Feeding",
        description: "Raw stone from quarry trucks is uniformly metered into primary jaw crusher while scalping sub-base rock.",
      },
      {
        step: "02",
        title: "Primary Size Reduction",
        description: "Primary jaw crusher breaks heavy stone down to 100-150 mm intermediate transfer product.",
      },
      {
        step: "03",
        title: "Secondary Cone Crushing & Shaping",
        description: "Cone crusher or HSI reduces stone into high-demand 20mm, 10mm, and 6mm aggregate fractions.",
      },
      {
        step: "04",
        title: "Precision Sizing & Stockpiling",
        description: "Multi-deck vibrating screen classifies and stockpiles precise commercial fractions directly for RMC dispatch.",
      },
    ],
    keyBenefits: [
      {
        stat: "100% Cubical",
        label: "Particle Quality",
        description: "Optimized compressive strength for M30 to M60 high-performance concrete mixes.",
      },
      {
        stat: "15% Energy Saving",
        label: "Power Efficiency",
        description: "Engineered mechanical kinematics minimize wasted electrical kilowatt-hours per ton.",
      },
      {
        stat: "Up to 500 TPH",
        label: "Commercial Output",
        description: "High-tonnage continuous production for regional commercial aggregate suppliers.",
      },
      {
        stat: "Custom Decks",
        label: "Gradation Control",
        description: "Easily switchable wire and polyurethane screen media tailored to client purchase orders.",
      },
    ],
    recommendedProducts: [
      {
        slug: "double-toggle-oil-jaw-crusher",
        name: "Double Toggle Oil Jaw Crusher",
        category: "Crushers",
        image: "/images/double-toggle-oil-jaw-crusher.webp",
        description: "Industry-standard primary breaker delivering continuous low-maintenance primary crushing.",
      },
      {
        slug: "cone-crusher",
        name: "Cone Crusher",
        category: "Crushers",
        image: "/images/robust_crusher_design.webp",
        description: "Precision secondary crusher with excellent reduction ratios and low consumable operating costs.",
      },
      {
        slug: "vibrating-screen",
        name: "Vibrating Screen",
        category: "Screens",
        image: "/images/vibrating-screen.webp",
        description: "High-accuracy 3 and 4-deck vibrating screens producing perfectly segregated 10/20/40mm aggregate piles.",
      },
      {
        slug: "belt-conveyor",
        name: "Belt Conveyor System",
        category: "Screens",
        image: "/images/maximum_productivity.webp",
        description: "Heavy overland conveyors for rapid aggregate stockpile transfer and truck loading.",
      },
    ],
    specifications: [
      { label: "Target Aggregates", value: "40mm (Coarse), 20mm (Standard RMC), 10mm (Micro-Concrete), 6mm (Grit)" },
      { label: "Flakiness Index", value: "< 15% across all commercial fractions" },
      { label: "Concrete Grade", value: "Suitable for M20, M30, M40, M50, and M60 RMC Designs" },
      { label: "Standard Codes", value: "IS 383, ASTM C33, BS 882, EN 12620" },
    ],
  },
];
