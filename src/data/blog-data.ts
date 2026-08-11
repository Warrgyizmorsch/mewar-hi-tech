export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: "Industry News" | "Product Updates" | "Engineering" | "Case Studies";
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  tags: string[];
  readTime: number;
  featured: boolean;
  published: boolean;
  publishedAt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The Future of Aggregate Crushing: Trends Shaping 2026",
    slug: "future-of-aggregate-crushing-trends-2026",
    excerpt:
      "Explore how automation, IoT integration, and sustainable practices are reshaping the aggregate crushing industry. From smart sensors to AI-driven optimization, the future is here.",
    content: `
<h2>INDUSTRY EVOLUTION</h2>
<p>The aggregate crushing industry stands at a pivotal crossroads. With growing demands for sustainable infrastructure, advanced automation, and operational efficiency, 2026 promises to be a transformative year for equipment manufacturers and operators alike.</p>

<p>At Mewar Hi-Tech Engineering Ltd., we've been at the forefront of this transformation since our inception. Our commitment to innovation has driven us to develop machinery that not only meets but exceeds the evolving demands of the mining and aggregate sector.</p>

<blockquote>Innovation in crushing technology is not just about power, but precision and efficiency in resource utilization.</blockquote>

<h2>KEY TRENDS FOR 2026</h2>

<p>Several key trends are emerging that will define the crushing and screening landscape:</p>

<ul>
<li><strong>IoT-Enabled Smart Crushing:</strong> Real-time monitoring of crusher performance through embedded sensors allows operators to predict maintenance needs, reduce downtime, and optimize throughput.</li>
<li><strong>Energy-Efficient Designs:</strong> New hydraulic systems and motor configurations are reducing power consumption by up to 25% while maintaining output capacity.</li>
<li><strong>Sustainable Aggregate Production:</strong> Growing emphasis on recycled aggregates and reduced carbon footprint is pushing manufacturers to develop eco-friendly machinery.</li>
<li><strong>Automation & Remote Operation:</strong> Fully automated crushing plants with remote monitoring capabilities are becoming the standard for large-scale operations.</li>
<li><strong>Modular & Mobile Solutions:</strong> The demand for portable crushing units that can be rapidly deployed to different sites continues to grow.</li>
</ul>

<h2>MEWAR HI-TECH'S RESPONSE</h2>

<p>Our latest range of Double Toggle Oil Jaw Crushers incorporates many of these advancements. With improved oil lubrication systems, enhanced toggle plate designs, and robust fabricated steel bodies, our crushers deliver superior performance across all aggregate types.</p>

<p>We've also invested heavily in our manufacturing infrastructure, with state-of-the-art CNC machining centers and quality control labs ensuring every machine meets the highest international standards.</p>

<h2>LOOKING AHEAD</h2>

<p>As we move further into 2026, the companies that embrace these technological shifts will lead the market. At Mewar Hi-Tech, we're not just following trends — we're setting them.</p>

<p>Contact our engineering team today to learn how our next-generation crushing solutions can transform your operations.</p>
    `,
    coverImage: "/images/backgorund.webp",
    category: "Industry News",
    author: {
      name: "Vaibhav Singh Rathore",
      avatar: "/images/logo.png",
      title: "Managing Director",
    },
    tags: ["crushing", "trends", "automation", "2026", "aggregate"],
    readTime: 8,
    featured: true,
    published: true,
    publishedAt: "2026-06-15T10:00:00Z",
  },
  {
    title: "Double Toggle Oil Jaw Crusher: Engineering Excellence Redefined",
    slug: "double-toggle-oil-jaw-crusher-engineering-excellence",
    excerpt:
      "Discover the engineering innovations behind our flagship Double Toggle Oil Jaw Crusher — from advanced oil lubrication systems to optimized crushing chamber geometry.",
    content: `
<h2>THE FLAGSHIP MACHINE</h2>
<p>The Double Toggle Oil Jaw Crusher has been the cornerstone of Mewar Hi-Tech's product line for over three decades. This machine represents the pinnacle of primary crushing technology, designed for the most demanding applications in mining, quarrying, and aggregate production.</p>

<h2>ENGINEERING HIGHLIGHTS</h2>
<ul>
<li><strong>Oil Lubrication System:</strong> Unlike conventional grease-lubricated crushers, our oil-based system ensures continuous, even lubrication of all bearing surfaces, dramatically extending component life.</li>
<li><strong>Double Toggle Mechanism:</strong> Provides a more efficient crushing action with reduced wear on jaw plates, resulting in lower operating costs.</li>
<li><strong>Heavy-Duty Fabricated Body:</strong> Constructed from high-grade structural steel with stress-relieved welds for maximum durability.</li>
<li><strong>Adjustable CSS:</strong> Hydraulic or mechanical adjustment of the closed side setting allows precise control of output size.</li>
</ul>

<blockquote>Our Double Toggle Oil Jaw Crusher delivers up to 30% more throughput compared to conventional designs, while reducing maintenance intervals by 40%.</blockquote>

<h2>APPLICATIONS</h2>
<p>This machine excels in processing hard and abrasive materials including granite, basalt, limestone, iron ore, and quartzite. It's equally suited for primary crushing in mining operations and recycling applications.</p>

<h2>SPECIFICATIONS</h2>
<p>Available in feed opening sizes ranging from 600x400mm to 1500x1200mm, with capacities from 30 TPH to 500+ TPH, our Double Toggle Oil Jaw Crushers are engineered to match your exact requirements.</p>
    `,
    coverImage: "/images/backgorund.webp",
    category: "Product Updates",
    author: {
      name: "Engineering Team",
      avatar: "/images/logo.png",
      title: "Mewar Hi-Tech Engineering",
    },
    tags: ["jaw-crusher", "double-toggle", "oil-lubrication", "product"],
    readTime: 6,
    featured: false,
    published: true,
    publishedAt: "2026-05-28T10:00:00Z",
  },
  {
    title: "Cone Crusher vs Jaw Crusher: Choosing the Right Machine",
    slug: "cone-crusher-vs-jaw-crusher-choosing-right-machine",
    excerpt:
      "A comprehensive comparison of cone crushers and jaw crushers to help you select the ideal crushing solution for your specific application and material type.",
    content: `
<h2>THE GREAT DEBATE</h2>
<p>One of the most common questions we receive from customers is: "Should I use a cone crusher or a jaw crusher?" The answer, as with most engineering decisions, depends on your specific requirements.</p>

<h2>JAW CRUSHERS: THE PRIMARY WORKHORSE</h2>
<p>Jaw crushers are designed for primary crushing — reducing large rocks from the quarry face into manageable sizes. They excel at:</p>
<ul>
<li>Processing large feed sizes (up to 1200mm)</li>
<li>Handling hard, abrasive materials</li>
<li>High reduction ratios (6:1 to 8:1)</li>
<li>Simple maintenance and operation</li>
</ul>

<h2>CONE CRUSHERS: THE PRECISION TOOL</h2>
<p>Cone crushers are typically used for secondary and tertiary crushing, producing finer, more uniform products:</p>
<ul>
<li>Superior product shape and uniformity</li>
<li>Higher throughput for given feed size</li>
<li>Better suited for medium-hard materials</li>
<li>Lower operating cost per tonne for secondary crushing</li>
</ul>

<blockquote>The best crushing circuit often combines both technologies — a jaw crusher for primary reduction followed by a cone crusher for secondary and tertiary stages.</blockquote>

<h2>MAKING YOUR DECISION</h2>
<p>Consider factors like feed material hardness, required output size, production volume, and available space. Our engineering team can help you design the optimal crushing circuit for your needs.</p>
    `,
    coverImage: "/images/backgorund.webp",
    category: "Engineering",
    author: {
      name: "Technical Division",
      avatar: "/images/logo.png",
      title: "Mewar Hi-Tech Engineering",
    },
    tags: ["cone-crusher", "jaw-crusher", "comparison", "selection-guide"],
    readTime: 7,
    featured: false,
    published: true,
    publishedAt: "2026-05-15T10:00:00Z",
  },
  {
    title: "500 TPH Limestone Crushing Plant: A Complete Success Story",
    slug: "500-tph-limestone-crushing-plant-success-story",
    excerpt:
      "How Mewar Hi-Tech delivered a turnkey 500 TPH limestone crushing and screening plant for a major cement manufacturer in Rajasthan, achieving 98% uptime.",
    content: `
<h2>PROJECT OVERVIEW</h2>
<p>In early 2025, one of India's leading cement manufacturers approached Mewar Hi-Tech with a challenging requirement: design, manufacture, and commission a complete 500 TPH limestone crushing and screening plant within a tight 6-month timeline.</p>

<h2>THE CHALLENGE</h2>
<p>The project presented several engineering challenges:</p>
<ul>
<li>High-silica limestone requiring wear-resistant materials</li>
<li>Limited site area requiring compact plant layout</li>
<li>Strict environmental compliance for dust and noise control</li>
<li>24/7 operation requirement with 98% minimum uptime target</li>
</ul>

<h2>OUR SOLUTION</h2>
<p>Mewar Hi-Tech designed a comprehensive crushing circuit featuring our flagship Double Toggle Oil Jaw Crusher for primary reduction, followed by a Cone Crusher for secondary crushing, and a Vibrating Screen for final classification.</p>

<blockquote>The plant achieved 99.2% uptime in its first year of operation — exceeding the client's target by 1.2 percentage points.</blockquote>

<h2>RESULTS</h2>
<p>Within 5 months, the plant was fully operational, processing over 500 TPH of limestone with consistent output quality. The client reported significant cost savings compared to their previous crushing setup.</p>
    `,
    coverImage: "/images/backgorund.webp",
    category: "Case Studies",
    author: {
      name: "Projects Division",
      avatar: "/images/logo.png",
      title: "Mewar Hi-Tech Projects",
    },
    tags: ["case-study", "limestone", "500-tph", "cement", "turnkey"],
    readTime: 5,
    featured: false,
    published: true,
    publishedAt: "2026-04-20T10:00:00Z",
  },
  {
    title: "Vibrating Screen Maintenance: Essential Tips for Maximum Uptime",
    slug: "vibrating-screen-maintenance-essential-tips",
    excerpt:
      "Learn the critical maintenance practices that can extend your vibrating screen's lifespan by up to 40% and prevent costly unplanned downtime.",
    content: `
<h2>WHY MAINTENANCE MATTERS</h2>
<p>Vibrating screens are the workhorses of any crushing and screening operation. Proper maintenance is the key to ensuring they deliver consistent performance and maximum throughput throughout their service life.</p>

<h2>DAILY CHECKS</h2>
<ul>
<li>Inspect screen media for wear, holes, or loose panels</li>
<li>Check bolt torque on all critical connections</li>
<li>Monitor bearing temperatures (should not exceed 80°C)</li>
<li>Listen for unusual vibrations or sounds</li>
<li>Verify lubrication system is functioning properly</li>
</ul>

<h2>WEEKLY MAINTENANCE</h2>
<ul>
<li>Grease all lubrication points per manufacturer specifications</li>
<li>Inspect and clean dust seals</li>
<li>Check rubber mounting isolators for wear</li>
<li>Verify stroke and frequency are within specification</li>
</ul>

<blockquote>A well-maintained vibrating screen can last 3-5 times longer than one that receives only reactive maintenance. Prevention is always cheaper than repair.</blockquote>

<h2>COMMON FAILURE MODES</h2>
<p>Understanding common failure modes helps you prevent them:</p>
<ul>
<li><strong>Bearing failure:</strong> Usually caused by contamination or improper lubrication</li>
<li><strong>Screen media wear:</strong> Accelerated by incorrect media selection or improper tensioning</li>
<li><strong>Structural cracking:</strong> Often results from operating at incorrect frequency or overloading</li>
</ul>
    `,
    coverImage: "/images/backgorund.webp",
    category: "Engineering",
    author: {
      name: "Service Team",
      avatar: "/images/logo.png",
      title: "Mewar Hi-Tech After Sales",
    },
    tags: ["vibrating-screen", "maintenance", "tips", "uptime"],
    readTime: 6,
    featured: false,
    published: true,
    publishedAt: "2026-04-05T10:00:00Z",
  },
  {
    title: "Mewar Hi-Tech Expands Manufacturing Capacity with New CNC Facility",
    slug: "mewar-hitech-expands-cnc-manufacturing-facility",
    excerpt:
      "Mewar Hi-Tech Engineering Ltd. inaugurates a state-of-the-art CNC machining center to double production capacity and enhance precision manufacturing.",
    content: `
<h2>A NEW ERA OF MANUFACTURING</h2>
<p>Mewar Hi-Tech Engineering Ltd. is proud to announce the inauguration of our new state-of-the-art CNC machining facility at our Udaipur manufacturing plant. This expansion represents a significant milestone in our journey of continuous improvement.</p>

<h2>FACILITY HIGHLIGHTS</h2>
<ul>
<li><strong>5-Axis CNC Machining Centers:</strong> For complex component geometries with tight tolerances</li>
<li><strong>Automated Quality Inspection:</strong> CMM (Coordinate Measuring Machine) for precision verification</li>
<li><strong>Increased Capacity:</strong> 100% increase in machining throughput</li>
<li><strong>Green Manufacturing:</strong> Energy-efficient equipment with minimal coolant waste</li>
</ul>

<blockquote>This investment in advanced manufacturing technology ensures that every Mewar Hi-Tech machine meets the highest standards of precision and quality.</blockquote>

<h2>IMPACT ON PRODUCTS</h2>
<p>The new facility enables us to machine critical components like eccentric shafts, toggle plates, and bearing housings with unprecedented precision, resulting in smoother operation, longer component life, and lower maintenance requirements for our customers.</p>

<h2>COMMITMENT TO EXCELLENCE</h2>
<p>This expansion is part of our broader strategy to become India's most technologically advanced heavy equipment manufacturer. We continue to invest in both our people and our infrastructure.</p>
    `,
    coverImage: "/images/backgorund.webp",
    category: "Industry News",
    author: {
      name: "Vaibhav Singh Rathore",
      avatar: "/images/logo.png",
      title: "Managing Director",
    },
    tags: ["cnc", "manufacturing", "expansion", "facility", "capacity"],
    readTime: 4,
    featured: false,
    published: true,
    publishedAt: "2026-03-10T10:00:00Z",
  },
  {
    title: "Sand Making Machine: Revolutionizing Manufactured Sand Production",
    slug: "sand-making-machine-revolutionizing-manufactured-sand",
    excerpt:
      "Learn how Mewar Hi-Tech's advanced Sand Making Machines are addressing the growing demand for high-quality manufactured sand in the construction industry.",
    content: `
<h2>THE M-SAND REVOLUTION</h2>
<p>With natural river sand becoming increasingly scarce and heavily regulated, the construction industry is rapidly shifting to manufactured sand (M-Sand). Mewar Hi-Tech's Sand Making Machines are at the forefront of this transition.</p>

<h2>WHY MANUFACTURED SAND?</h2>
<ul>
<li><strong>Consistent Quality:</strong> Controlled grading and shape compared to river sand</li>
<li><strong>Environmental Benefit:</strong> Eliminates riverbed mining and associated ecological damage</li>
<li><strong>Cost Effective:</strong> Produced from locally available rock, reducing transportation costs</li>
<li><strong>Superior Strength:</strong> Angular particles provide better concrete strength than rounded river sand</li>
</ul>

<h2>OUR TECHNOLOGY</h2>
<p>Mewar Hi-Tech's VSI (Vertical Shaft Impactor) based Sand Making Machines use a rock-on-rock crushing principle that produces cubical, well-graded sand conforming to IS, BS, and ASTM standards.</p>

<blockquote>Our Sand Making Machines produce M-Sand that exceeds Zone II requirements, making it ideal for high-strength concrete applications.</blockquote>

<h2>APPLICATIONS</h2>
<p>Our M-Sand solutions are deployed across ready-mix concrete plants, precast concrete facilities, and construction projects throughout India and internationally.</p>
    `,
    coverImage: "/images/backgorund.webp",
    category: "Product Updates",
    author: {
      name: "Product Team",
      avatar: "/images/logo.png",
      title: "Mewar Hi-Tech Products",
    },
    tags: ["sand-making", "m-sand", "vsi", "manufactured-sand", "construction"],
    readTime: 5,
    featured: false,
    published: true,
    publishedAt: "2026-02-18T10:00:00Z",
  },
  {
    title: "Complete Guide to Crushing Plant Layout & Design",
    slug: "complete-guide-crushing-plant-layout-design",
    excerpt:
      "A detailed engineering guide to designing efficient crushing plant layouts — from material flow analysis to equipment selection and site planning.",
    content: `
<h2>PLANNING YOUR CRUSHING PLANT</h2>
<p>A well-designed crushing plant layout is fundamental to achieving optimal production efficiency, minimizing operating costs, and ensuring safe operations. This guide covers the key considerations in plant design.</p>

<h2>KEY DESIGN FACTORS</h2>
<ul>
<li><strong>Material Characteristics:</strong> Rock type, hardness, abrasiveness, moisture content</li>
<li><strong>Required Output:</strong> Product sizes, production capacity, quality specifications</li>
<li><strong>Site Constraints:</strong> Available area, terrain, access roads, power supply</li>
<li><strong>Environmental Requirements:</strong> Dust control, noise limits, water management</li>
</ul>

<h2>TYPICAL CRUSHING CIRCUIT STAGES</h2>
<p>Most aggregate plants follow a multi-stage crushing process:</p>
<ul>
<li><strong>Stage 1 — Primary Crushing:</strong> Jaw Crusher reduces quarry-run material to manageable sizes</li>
<li><strong>Stage 2 — Secondary Crushing:</strong> Cone Crusher or HSI for further size reduction</li>
<li><strong>Stage 3 — Tertiary/Shaping:</strong> VSI for final product shaping and M-Sand production</li>
<li><strong>Screening:</strong> Vibrating Screens classify material at each stage</li>
</ul>

<blockquote>The optimal plant layout minimizes material handling, reduces elevation changes, and ensures smooth gravity flow wherever possible.</blockquote>

<h2>MEWAR HI-TECH'S TURNKEY SOLUTIONS</h2>
<p>We offer complete turnkey plant solutions — from initial site survey and flowsheet design to equipment manufacturing, installation, commissioning, and after-sales support.</p>
    `,
    coverImage: "/images/backgorund.webp",
    category: "Engineering",
    author: {
      name: "Design Team",
      avatar: "/images/logo.png",
      title: "Mewar Hi-Tech Engineering",
    },
    tags: ["plant-design", "layout", "crushing-circuit", "engineering", "guide"],
    readTime: 9,
    featured: false,
    published: true,
    publishedAt: "2026-01-25T10:00:00Z",
  },
  {
    title: "Export Success: Mewar Hi-Tech Crushers in Africa & Middle East",
    slug: "export-success-mewar-hitech-crushers-africa-middle-east",
    excerpt:
      "Mewar Hi-Tech's crushing equipment is making a mark across international markets — from gold mines in Tanzania to infrastructure projects in Saudi Arabia.",
    content: `
<h2>GLOBAL FOOTPRINT</h2>
<p>Mewar Hi-Tech Engineering Ltd. has steadily expanded its international presence, with our crushing and screening equipment now operating in over 15 countries across Africa, the Middle East, and South Asia.</p>

<h2>KEY INTERNATIONAL PROJECTS</h2>
<ul>
<li><strong>Tanzania — Gold Mining:</strong> 200 TPH crushing plant for a major gold mining operation</li>
<li><strong>Saudi Arabia — Infrastructure:</strong> 400 TPH aggregate plant for highway construction</li>
<li><strong>Oman — Quarrying:</strong> Complete limestone crushing and screening facility</li>
<li><strong>Nepal — Hydropower:</strong> Aggregate production plant for dam construction</li>
</ul>

<blockquote>Our equipment has processed over 50 million tonnes of material across international installations, with an average uptime exceeding 95%.</blockquote>

<h2>WHY CUSTOMERS CHOOSE US</h2>
<p>International customers choose Mewar Hi-Tech for our combination of robust engineering, competitive pricing, and comprehensive after-sales support — including on-site commissioning, operator training, and readily available spare parts.</p>

<h2>EXPANDING HORIZONS</h2>
<p>We're actively expanding into new markets including Southeast Asia and South America, with dedicated regional support teams to serve our growing international customer base.</p>
    `,
    coverImage: "/images/backgorund.webp",
    category: "Case Studies",
    author: {
      name: "International Division",
      avatar: "/images/logo.png",
      title: "Mewar Hi-Tech Exports",
    },
    tags: ["export", "international", "africa", "middle-east", "global"],
    readTime: 5,
    featured: false,
    published: true,
    publishedAt: "2025-12-12T10:00:00Z",
  },
];
