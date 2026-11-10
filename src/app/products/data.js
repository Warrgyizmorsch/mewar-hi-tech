/**
 * Mewar Hi-Tech Product Content Database
 * Defines specs, images, video assets, and metadata for dynamic product pages.
 */

export const PRODUCTS_DATA = [
  {
    slug: "jaw-crusher",
    name: "Jaw Crusher",
    category: "Crushers",
    subCategory: "Jaw Crusher",
    shortDescription: "A jaw crusher designed for high-capacity crushing delivers reliable performance and efficient material reduction in demanding mining and quarrying operations.",
    heroImage: "/images/jaw-crusher-hero.webp",
    mainImage: "/images/jaw-crusher.webp",
    model3d: "/3d-model-proudct-images/double_toggle_oil_jaw_crusher.glb",
    seoTitle: "Jaw Crusher Manufacturer for Mining & Quarries | Mewar Hi-Tech",
    seoDescription: "Buy a heavy-duty jaw crusher from Mewar Hi-Tech for efficient primary crushing in quarries and mines. Explore features and request a quote today.",
    introText: "A high-performance jaw crusher engineered for efficient material reduction and continuous operation in demanding mining and quarrying conditions. Mewar Hi-Tech delivers durable construction and reliable crushing performance for heavy-duty applications.",
    features: [
      "The operating mechanism is totally enclosed for maximum life and minimum maintenance.",
      "Double toggle provides maximum leverage to long stroke eccentric.",
      "Pull-back and springs automatically compensate for wear.",
      "Wide entry throat ensures easy feeding to the crushing chamber.",
      "The cast steel swing jaw is balanced to avoid power losses through lifting on crushing.",
      "Strong steel machine body and other parts are made from certified quality material."
    ],
    gallery: [
      "/images/jaw-crusher.webp",
      "/images/jaw-crusher-site-1.webp",
      "/images/jaw-crusher-quarry-2.webp",
      "/images/jaw-crusher-erection-3.webp",
      "/images/jaw-crusher-plant-4.webp"
    ],
    video: "/videos/double-toggle-oil-jaw-crusher.mp4",
    specsNote: "The output is based on average hard dry quarry of a solid rock weighing at least 100 lb/cu.ft when continuous feed of graded size with fines removed and is subject to variation depending on working conditions.",
    specsTable: {
      headers: [
        "S.No",
        "Size (Inch)",
        "Size (MM)",
        "Rec. Feed (mm)",
        "Gape (mm)",
        "Capacity CSS Options (TPH)",
        "RPM",
        "Power (HP)",
        "Weight (Tons)"
      ],
      sections: [
        {
          title: "Primary Crusher",
          rows: [
            ["1", "20\"x12\"", "500x300", "270", "11", "0.25\": 22 | 1\": 31 | 1.25\": 39 | 1.50\": 47", "300-320", "30", "4.0"],
            ["2", "24\"x12\"", "600x300", "270", "11", "0.25\": 22 | 1\": 31 | 1.25\": 39 | 1.50\": 47 | 2.0\": 56", "300-320", "35", "5.8"],
            ["3", "24\"x15\"", "600x400", "275", "12", "0.25\": 22 | 1\": 31 | 1.25\": 39 | 1.50\": 47 | 2.0\": 56 | 2.50\": 65", "300-320", "35", "5.8"],
            ["4", "30\"x15\"", "750x375", "300", "13", "1.25\": 46 | 1.50\": 53 | 2.0\": 70 | 2.50\": 81 | 3.0\": 90", "300-320", "40", "9.1"],
            ["5", "30\"x20\"", "750x500", "425", "17", "2.0\": 70 | 2.50\": 81 | 3.0\": 90 | 3.50\": 116 | 4.0\": 130", "300-320", "50", "11.8"],
            ["6", "36\"x24\"", "900x600", "525", "21", "2.50\": 80 | 3.0\": 116 | 3.50\": 130", "300-320", "60", "13.7"],
            ["7", "36\"x24\"H", "900x600", "525", "21", "3.50\": 142 | 4.0\": 155 | 5.0\": 167 | 6.0\": 195", "300-320", "75", "21.0"],
            ["8", "38\"x30\"", "950x750", "635", "23", "4.0\": 167 | 5.0\": 175 | 6.0\": 195 | 7.0\": 225", "240-260", "100", "24.0"],
            ["9", "42\"x30\"", "1050x750", "635", "23", "4.0\": 170 | 5.0\": 180 | 6.0\": 195 | 7.0\": 225 | 8.0\": 265", "240-260", "100", "26.0"],
            ["10", "42\"x36\"", "1050x900", "800", "32", "4.0\": 170 | 5.0\": 180 | 6.0\": 195 | 7.0\": 225 | 8.0\": 265 | 9.0\": 285", "220-240", "125", "31.0"],
            ["11", "48\"x36\"", "1200x900", "800", "32", "2.00\": 112 | 2.50\": 120 | 3.00\": 135 | 3.50\": 155 | 4.0\": 220 | 5.0\": 280", "220-240", "125", "32.0"],
            ["12", "48\"x42\"", "1200x1050", "975", "39", "4.0\": 220 | 5.0\": 280 | 6.0\": 289", "200-220", "150", "39.5"],
            ["13", "48\"x48\"", "1200x1200", "1100", "44", "4.0\": 220 | 5.0\": 280 | 6.0\": 289 | 8.0\": 325", "200-220", "150", "43.5"],
            ["14", "60\"x48\"", "1500x1200", "1100", "44", "5.0\": 275 | 6.0\": 325 | 7.0\": 365 | 8.0\": 390 | 10.0\": 444 | 12.0\": 520", "180-200", "200", "72.0"]
          ]
        },
        {
          title: "Secondary Crusher",
          rows: [
            ["15", "12\"x8\"", "300x200", "200", "6", "0.25\": 12 | 1\": 16 | 1.25\": 24 | 1.50\": 34 | 2.0\": 40", "320-340", "20", "4.2"],
            ["16", "20\"x8\"", "500x200", "200", "6", "1.0\": 18 | 1.25\": 22 | 1.50\": 27 | 2.0\": 33 | 2.50\": 44 | 3.0\": 55", "320-340", "30", "6.0"],
            ["17", "30\"x8\"", "750x200", "125", "5", "1.0\": 22 | 1.25\": 27 | 1.50\": 33 | 2.0\": 40 | 2.50\": 54", "320-340", "40", "7.0"],
            ["18", "36\"x8\"", "900x200", "125", "5", "1.0\": 22 | 1.25\": 27 | 1.50\": 33 | 2.0\": 40 | 2.50\": 54", "320-340", "40", "8.0"],
            ["19", "42\"x8\"", "1050x200", "125", "5", "1.25\": 28 | 1.50\": 35 | 2.0\": 42 | 2.50\": 58", "320-340", "50", "9.5"],
            ["20", "42\"x10\"", "1050x250", "200", "8", "1.25\": 28 | 1.50\": 35 | 2.0\": 42 | 2.50\": 58", "320-340", "50", "10.0"],
            ["21", "48\"x8\"", "1200x200", "125", "5", "1.50\": 38 | 2.0\": 50 | 2.50\": 64 | 3.00\": 72", "320-340", "60", "11.5"],
            ["22", "48\"x10\"", "1200x250", "200", "8", "1.50\": 51 | 2.00\": 68 | 2.50\": 82 | 3.00\": 92", "320-340", "60", "11.8"],
            ["23", "48\"x12\"", "1200x300", "200", "8", "2.00\": 62 | 2.50\": 82 | 3.00\": 88 | 3.50\": 98", "320-340", "75", "14.8"]
          ]
        }
      ]
    },
    faqs: [
      {
        question: "What is a jaw crusher used for?",
        answer: "A jaw crusher is used to reduce large rocks and minerals into smaller pieces. It is commonly used for primary crushing in mining and quarrying and aggregate production."
      },
      {
        question: "What is the working principle of a jaw crusher?",
        answer: "A jaw crusher works by compressing material between a fixed jaw and a moving jaw. The material breaks into smaller pieces before leaving through the discharge opening."
      },
      {
        question: "What factors affect jaw crusher capacity?",
        answer: "Capacity depends on feed size and material hardness and jaw opening and discharge setting and operating conditions. The manufacturer's specifications provide the most relevant capacity information for each model."
      },
      {
        question: "What are the main parts of a jaw crusher?",
        answer: "Common components include the fixed jaw plate and movable jaw plate and toggle plate and eccentric shaft and bearings. The exact parts depend on the machine design."
      },
      {
        question: "How do I choose the right jaw crusher machine?",
        answer: "Consider the material type and maximum feed size and required production capacity and final output size. Also review maintenance requirements and spare parts availability and the manufacturer's technical support."
      }
    ],
    articleContent: `<h2>Jaw Crusher Manufacturer for Mining and Quarrying</h2>
<p>Large rocks and mineral deposits need to be broken down before they can be used or sent for further processing. This is where a jaw crusher becomes an important part of a crushing plant. It handles the initial size reduction and prepares material for the next stage.</p>
<p>Mewar Hi-Tech manufactures crushing equipment for mining and quarrying applications. Its jaw crusher range includes single toggle grease and double toggle grease and double toggle oil models. Each design serves different operating requirements. Choosing between them depends on the material being processed and the expected production capacity.</p>
<h2>Heavy-Duty Jaw Crusher Machine for Industrial Applications</h2>
<p>A jaw crusher machine is generally placed at the beginning of a crushing circuit. Large rocks enter through the feed opening and are reduced before moving towards secondary crushing or screening.</p>
<p>At Mewar Hi-Tech the jaw crusher range is designed around different crushing requirements. The machines feature heavy-duty construction and are intended for demanding industrial environments. Buyers can explore different configurations rather than relying on one machine design for every application.</p>
<p>A jaw crusher also needs to work properly with the rest of the plant. Feeders regulate the supply of material while conveyors carry crushed stone to the next processing stage. This arrangement is important when planning a complete crushing installation.</p>
<h2>Jaw Crusher Working Principle</h2>
<p>The jaw crusher working principle is based on compression. Inside the crushing chamber there are two jaw plates. One remains stationary while the other moves to apply pressure against the material.</p>
<p>When large rocks enter the chamber the moving jaw pushes them against the fixed plate. The material breaks into smaller pieces and gradually moves towards the discharge opening.</p>
<p>The final product size depends on the closed side setting and the type of material and the condition of the jaw plates. Feeding the machine evenly also makes a difference. Oversized material or irregular feeding can affect the crushing process and reduce production.</p>
<h2>Types of Jaw Crusher and Their Applications</h2>
<p>Mewar Hi-Tech offers different jaw crusher configurations to suit industrial crushing requirements. The main difference between these models lies in their toggle arrangement and lubrication system.</p>
<h3>Single Toggle Jaw Crusher</h3>
<p>The single toggle jaw crusher uses an eccentric shaft and a toggle mechanism to create jaw movement. Mewar Hi-Tech's <a href="https://www.mewarhitech.com/products/single-toggle-grease-jaw-crusher">Single Toggle Grease Jaw Crusher</a> is described as a suitable option where lower power utilisation is an important consideration.</p>
<p>This type can be considered for quarrying and aggregate operations where the required feed size and production capacity match the machine specifications.</p>
<p>Before selecting a model buyers should check the recommended feed size and available capacity settings. These details help determine whether the machine is suitable for the intended application.</p>
<h3>Double Toggle Jaw Crusher</h3>
<p>A double toggle jaw crusher uses two toggle plates as part of its mechanical arrangement. Mewar Hi-Tech offers both oil-lubricated and grease-lubricated versions.</p>
<p>The <a href="https://www.mewarhitech.com/products/double-toggle-oil-jaw-crusher">Double Toggle Oil Jaw Crusher</a> features an enclosed operating mechanism and an automatic continuous spray lubrication arrangement. Its design also uses a toggle-pitman mechanism to support the crushing movement.</p>
<p>The Double Toggle Grease Jaw Crusher provides another option for businesses comparing machine configurations. The right choice depends on the operating environment and material characteristics and maintenance preferences.</p>
<p>Rather than choosing a machine based only on its name buyers should compare the technical specifications and expected production requirements.</p>
<h2>Crushing Applications Across Mining and Quarrying Industries</h2>
<p>Different crushing jobs place different demands on equipment. A jaw crusher for mining may receive hard mineral-bearing rock that needs to be reduced before further processing.</p>
<p>Mewar Hi-Tech's jaw crusher applications include materials such as iron ore and copper and bauxite and gold-bearing rock. The equipment is also intended for hard rock quarrying involving granite and basalt and limestone and river gravel.</p>
<p>The crushed material can be used in aggregate production and road construction and other infrastructure projects. Depending on the plant arrangement it may move to a cone crusher or screening equipment after primary crushing.</p>
<p>For this reason the feed characteristics should be discussed before finalising a machine. Material hardness and maximum rock size can influence the selection considerably.</p>
<h2>Understanding the Jaw Crusher Diagram and Parts</h2>
<p>A jaw crusher diagram makes it easier to understand the arrangement of the crushing chamber and its mechanical components. It is particularly useful when reviewing machine specifications or discussing maintenance with a supplier.</p>
<p>Common jaw crusher parts include the fixed jaw plate and movable jaw plate and toggle plate and eccentric shaft and bearings and flywheel.</p>
<p>The crusher jaw plate receives direct contact from the material during crushing. It gradually wears with use and needs inspection at suitable intervals. The correct replacement plate should be selected according to the machine model.</p>
<p>In a toggle plate jaw crusher the toggle assembly transfers movement through the crushing mechanism. Its condition is important for normal machine operation. Always refer to the relevant product manual before carrying out repairs or replacing components.</p>
<h2>Jaw Crusher Capacity Calculation and Selection</h2>
<p>Capacity is often the first specification buyers look at. However a machine's output cannot be judged by its size alone.</p>
<p>Jaw crusher capacity depends on feed size and rock characteristics and closed side setting and feeding conditions. The type of jaw plate and operating speed can also influence production.</p>
<p>A jaw crusher capacity calculation PDF can be useful when preparing an initial plant layout. For an actual purchase the manufacturer's tonnage chart is a better reference because it provides model-specific capacity information at different settings.</p>
<p>Mewar Hi-Tech provides machine specifications and tonnage information for its jaw crusher range. Buyers should compare the recommended feed size and capacity options and power requirements before choosing a model.</p>
<h2>Jaw Crusher Price and Investment Considerations</h2>
<p>There is no single jaw crusher price that applies to every crushing requirement. A smaller machine and a high-capacity primary crusher have different construction and power requirements.</p>
<p>The quotation should be reviewed along with the machine specifications. Transportation and installation and supporting equipment may also affect the total project cost.</p>
<p>When comparing prices ask about the included components and replacement parts and technical assistance. A machine that suits the actual feed material is generally a better investment than one selected simply because its initial price is lower.</p>
<h2>Choosing the Right Jaw Crusher Manufacturer</h2>
<p>Finding suitable jaw crusher manufacturers takes more than comparing product photographs or advertised capacity. Buyers should look at the available models and technical documentation and manufacturing facilities.</p>
<p>Mewar Hi-Tech Engineering Limited operates from Sukher Industrial Area in Udaipur Rajasthan. Its manufacturing capabilities include machinery fabrication and machining and assembly. The company also offers crushing and screening equipment for industrial applications.</p>
<p>Businesses searching for jaw crusher manufacturers in Ahmedabad can compare suppliers from other manufacturing locations as well. What matters most is whether the manufacturer can supply a suitable machine and provide the necessary technical information and support.</p>
<p>You can review the Mewar Hi-Tech crusher range to compare the available equipment.</p>
<h2>Contact Mewar Hi-Tech for Jaw Crusher Solutions</h2>
<p>Selecting a jaw crusher requires a clear understanding of the material and the production target. A machine used for granite quarrying may have different requirements from one processing mineral-bearing rock. Feed size and output requirements should therefore be considered before making a purchase.</p>
<p>Mewar Hi-Tech offers single toggle and double toggle jaw crusher options for different industrial applications. Its product specifications and tonnage charts can help buyers compare the available models.</p>
<p>If you are planning a new crushing plant or replacing existing equipment contact <a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> with your material details and expected production capacity. The team can help you explore the available machine options for your project.</p>`
  },
  {
    slug: "double-toggle-oil-jaw-crusher",
    name: "Double Toggle Oil Jaw Crusher",
    category: "Crushers",
    subCategory: "Jaw Crusher",
    shortDescription: "The Double Toggle Oil Jaw Crusher delivers reliable primary crushing and consistent performance in demanding mining and quarrying operations.",
    heroImage: "/images/double-toggle-oil-jaw-crusher-hero.webp",
    mainImage: "/images/double-toggle-oil-jaw-crusher.webp",
    model3d: "/3d-model-proudct-images/double_toggle_oil_jaw_crusher.glb",
    seoTitle: "Double Toggle Oil Jaw Crusher Manufacturer | Mewar Hi-Tech",
    seoDescription: "The Double Toggle Oil Jaw Crusher delivers reliable primary crushing and consistent performance in demanding mining and quarrying operations. Request a quote from Mewar Hi-Tech.",
    introText: "Mewar Hi-Tech's Double Toggle Oil Jaw Crusher is built for long-lasting performance in tough crushing conditions.\nIts special crushing design helps reduce jaw plate wear and extend machine life.\nAutomatic oil lubrication keeps the crusher running smoothly and safely.",
    features: [
      "The enclosed oil lubrication system protects the operating mechanism and reduces maintenance requirements.",
      "Double toggle design delivers strong crushing force through an efficient mechanical arrangement.",
      "Continuous oil lubrication helps reduce friction and supports smooth operation of moving components.",
      "The wide feed opening allows large material to enter the crushing chamber with ease.",
      "The balanced cast steel swing jaw provides reliable crushing performance under heavy operating loads."
    ],
    gallery: [
      "/images/double-toggle-oil-jaw-crusher-1.jpg"
    ],
    video: "/videos/double-toggle-oil-jaw-crusher.mp4",
    specsNote: "The output is based on average hard dry quarry of a solid rock weighing at least 100 lb/cu.ft when continuous feed of graded size with fines removed and is subject to variation depending on working conditions.",
    specsTable: {
      headers: [
        "S.No",
        "Size (Inch)",
        "Size (MM)",
        "Rec. Feed (mm)",
        "Gape (mm)",
        "Capacity CSS Options (TPH)",
        "RPM",
        "Power (HP)",
        "Weight (Tons)"
      ],
      sections: [
        {
          title: "Primary Crusher",
          rows: [
            ["1", "20\"x12\"", "500x300", "270", "11", "0.25\": 22 | 1\": 31 | 1.25\": 39 | 1.50\": 47", "300-320", "30", "4.0"],
            ["2", "24\"x12\"", "600x300", "270", "11", "0.25\": 22 | 1\": 31 | 1.25\": 39 | 1.50\": 47 | 2.0\": 56", "300-320", "35", "5.8"],
            ["3", "24\"x15\"", "600x400", "275", "12", "0.25\": 22 | 1\": 31 | 1.25\": 39 | 1.50\": 47 | 2.0\": 56 | 2.50\": 65", "300-320", "35", "5.8"],
            ["4", "30\"x15\"", "750x375", "300", "13", "1.25\": 46 | 1.50\": 53 | 2.0\": 70 | 2.50\": 81 | 3.0\": 90", "300-320", "40", "9.1"],
            ["5", "30\"x20\"", "750x500", "425", "17", "2.0\": 70 | 2.50\": 81 | 3.0\": 90 | 3.50\": 116 | 4.0\": 130", "300-320", "50", "11.8"],
            ["6", "36\"x24\"", "900x600", "525", "21", "2.50\": 80 | 3.0\": 116 | 3.50\": 130", "300-320", "60", "13.7"],
            ["7", "36\"x24\"H", "900x600", "525", "21", "3.50\": 142 | 4.0\": 155 | 5.0\": 167 | 6.0\": 195", "300-320", "75", "21.0"],
            ["8", "38\"x30\"", "950x750", "635", "23", "4.0\": 167 | 5.0\": 175 | 6.0\": 195 | 7.0\": 225", "240-260", "100", "24.0"],
            ["9", "42\"x30\"", "1050x750", "635", "23", "4.0\": 170 | 5.0\": 180 | 6.0\": 195 | 7.0\": 225 | 8.0\": 265", "240-260", "100", "26.0"],
            ["10", "42\"x36\"", "1050x900", "800", "32", "4.0\": 170 | 5.0\": 180 | 6.0\": 195 | 7.0\": 225 | 8.0\": 265 | 9.0\": 285", "220-240", "125", "31.0"],
            ["11", "48\"x36\"", "1200x900", "800", "32", "2.00\": 112 | 2.50\": 120 | 3.00\": 135 | 3.50\": 155 | 4.0\": 220 | 5.0\": 280", "220-240", "125", "32.0"],
            ["12", "48\"x42\"", "1200x1050", "975", "39", "4.0\": 220 | 5.0\": 280 | 6.0\": 289", "200-220", "150", "39.5"],
            ["13", "48\"x48\"", "1200x1200", "1100", "44", "4.0\": 220 | 5.0\": 280 | 6.0\": 289 | 8.0\": 325", "200-220", "150", "43.5"],
            ["14", "60\"x48\"", "1500x1200", "1100", "44", "5.0\": 275 | 6.0\": 325 | 7.0\": 365 | 8.0\": 390 | 10.0\": 444 | 12.0\": 520", "180-200", "200", "72.0"]
          ]
        },
        {
          title: "Secondary Crusher",
          rows: [
            ["15", "12\"x8\"", "300x200", "200", "6", "0.25\": 12 | 1\": 16 | 1.25\": 24 | 1.50\": 34 | 2.0\": 40", "320-340", "20", "4.2"],
            ["16", "20\"x8\"", "500x200", "200", "6", "1.0\": 18 | 1.25\": 22 | 1.50\": 27 | 2.0\": 33 | 2.50\": 44 | 3.0\": 55", "320-340", "30", "6.0"],
            ["17", "30\"x8\"", "750x200", "125", "5", "1.0\": 22 | 1.25\": 27 | 1.50\": 33 | 2.0\": 40 | 2.50\": 54", "320-340", "40", "7.0"],
            ["18", "36\"x8\"", "900x200", "125", "5", "1.0\": 22 | 1.25\": 27 | 1.50\": 33 | 2.0\": 40 | 2.50\": 54", "320-340", "40", "8.0"],
            ["19", "42\"x8\"", "1050x200", "125", "5", "1.25\": 28 | 1.50\": 35 | 2.0\": 42 | 2.50\": 58", "320-340", "50", "9.5"],
            ["20", "42\"x10\"", "1050x250", "200", "8", "1.25\": 28 | 1.50\": 35 | 2.0\": 42 | 2.50\": 58", "320-340", "50", "10.0"],
            ["21", "48\"x8\"", "1200x200", "125", "5", "1.50\": 38 | 2.0\": 50 | 2.50\": 64 | 3.00\": 72", "320-340", "60", "11.5"],
            ["22", "48\"x10\"", "1200x250", "200", "8", "1.50\": 51 | 2.00\": 68 | 2.50\": 82 | 3.00\": 92", "320-340", "60", "11.8"],
            ["23", "48\"x12\"", "1200x300", "200", "8", "2.00\": 62 | 2.50\": 82 | 3.00\": 88 | 3.50\": 98", "320-340", "75", "14.8"]
          ]
        }
      ]
    },
    faqs: [
      {
        question: "What is a Double Toggle Oil Jaw Crusher?",
        answer: "A Double Toggle Oil Jaw Crusher is a primary crushing machine used to break large rocks and minerals into smaller pieces. It uses a two-toggle mechanism and an oil lubrication system for smooth and reliable operation."
      },
      {
        question: "How does a Double Toggle Oil Jaw Crusher work?",
        answer: "The crusher works through the movement of a fixed jaw and a moving jaw. The double toggle mechanism transfers force to the moving jaw, which compresses and breaks the material into smaller sizes."
      },
      {
        question: "Where is a Double Toggle Oil Jaw Crusher used?",
        answer: "It is commonly used in mining, quarrying and mineral processing. It is suitable for crushing hard rocks and ores such as granite, limestone, iron ore and other minerals."
      },
      {
        question: "What is the capacity of a Double Toggle Oil Jaw Crusher?",
        answer: "The capacity depends on the crusher model, feed material and closed side setting (CSS). Mewar Hi-Tech offers different machine sizes with capacity options listed in its technical tonnage chart."
      },
      {
        question: "What factors affect the price of a Double Toggle Oil Jaw Crusher?",
        answer: "The price depends on machine size, required capacity, motor power, feed material and project requirements. Contact Mewar Hi-Tech with your application details to get a suitable model recommendation and quotation."
      }
    ],
    articleContent: `<h2>Double Toggle Oil Jaw Crusher for Heavy-Duty Crushing Applications</h2>
<p>A Double Toggle Oil Jaw Crusher is designed to crush hard rocks and minerals in demanding industrial conditions. It is commonly used as a primary crushing machine in mining and quarrying plants where large feed material needs to be reduced before moving to the next stage of processing. Its double toggle mechanism provides the force required for crushing while the enclosed oil lubrication system supports smooth machine operation.</p>
<p>Mewar Hi-Tech offers <a href="https://www.mewarhitech.com/products/jaw-crusher">jaw crusher</a> solutions for different mining and quarrying requirements. The Double Toggle Oil Jaw Crusher is developed for operations that need reliable crushing performance and consistent production. It can be used for processing materials such as iron ore and other hard rocks commonly found in mineral processing applications.</p>
<p>Choosing the right crusher is important for maintaining the required production capacity and managing plant operations. Factors such as the type of material, feed size and required output should be considered before selecting a machine. A suitable crusher helps create a more efficient crushing process and supports the overall performance of the plant.</p>
<h2>How Does a Double Toggle Oil Jaw Crusher Work?</h2>
<p>The working principle of a double toggle jaw crusher is based on compression. Large rocks enter the crushing chamber through the feed opening. Inside the chamber, the material is crushed between a fixed jaw plate and a moving jaw plate as the machine operates. The repeated movement of the jaw plates breaks the material into smaller pieces.</p>
<p>The eccentric shaft drives the toggle mechanism and creates the movement needed to apply crushing force. As the moving jaw approaches the fixed jaw, the space between the two jaw plates becomes smaller. This pressure breaks the material. When the moving jaw moves away, the crushed material travels further down through the chamber and exits through the discharge opening.</p>
<p>The size of the discharged material depends on the crusher setting and the properties of the feed material. This makes the correct setting important when a plant needs a particular output size for the next stage of processing.</p>
<p>The oil-lubricated design uses an enclosed operating mechanism with an automatic continuous spray lubrication arrangement. This helps lubricate the moving components during operation. The machine is designed around the crushing without rubbing concept which helps reduce unnecessary wear on the jaw plates. Together these features support reliable operation in demanding crushing conditions.</p>
<h2>Key Features of Mewar Hi-Tech Double Toggle Oil Jaw Crusher</h2>
<p>The Double Toggle Oil Jaw Crusher from Mewar Hi-Tech is developed for heavy-duty crushing work. Its enclosed operating mechanism helps protect important components and supports reliable machine operation. The double toggle arrangement provides leverage to the long-stroke eccentric and helps deliver the crushing force required to break hard material.</p>
<p>The wide entry throat allows large feed material to enter the crushing chamber. This is useful in primary crushing applications where the machine receives material directly from the initial feeding stage. The cast steel swing jaw is balanced to help avoid power loss caused by lifting during the crushing stroke. Pull-back and spring arrangements also help compensate for wear during operation.</p>
<p>Another important feature is the automatic continuous spray lubrication system. Lubrication is provided through a coupled pump or vertical oil pump arrangement based on the toggle-pitman mechanism. It helps supply oil to the operating mechanism while the crusher is running. Proper lubrication is important because it supports the movement of machine components and helps maintain safe operation.</p>
<p>The machine is designed for industrial applications where equipment needs to work under demanding conditions. However, the correct model should always be selected according to the required feed size, production capacity and material characteristics. Reviewing the technical specifications before installation helps ensure that the crusher is suitable for the intended application.</p>
<h2>Applications of Double Toggle Oil Jaw Crusher in Mining and Quarrying</h2>
<p>A Double Toggle Oil Jaw Crusher is commonly selected for primary crushing in mining and quarrying operations. It reduces large pieces of hard material into smaller sizes before they move to secondary crushing and screening equipment. This makes it an important part of many mineral processing and aggregate production plants.</p>
<p>In mining plants, the crusher can be used for the primary reduction of hard ores such as iron ore and other metallic minerals. The size of the feed material is reduced so that it can move through the remaining processing stages. The required crushing arrangement depends on the material being processed and the final product size.</p>
<p>In stone quarries, the machine helps break large rock pieces into smaller sizes for further processing. The crushed material can then be transferred to cone crushers or other equipment depending on the required output size. This process helps prepare material for aggregate production and other construction-related applications.</p>
<p>The machine can also form part of an aggregate production plant. The final plant arrangement depends on the type of rock, the required capacity and the finished product sizes. Mewar Hi-Tech can help assess the crushing requirement and identify suitable equipment for the application.</p>
<p>Before choosing a crusher for a mining or quarrying project, buyers should consider the material hardness, maximum feed size and expected production rate. These details help determine whether a particular crusher model is suitable for the working conditions.</p>
<h2>Double Toggle Jaw Crusher Capacity and Machine Selection</h2>
<p>Choosing the right double toggle jaw crusher requires more than checking the machine size. Feed opening dimensions, maximum feed size, material hardness and the required output size all affect machine selection. The closed side setting or CSS is another important factor because it influences the size of the crushed material and the machine's production capacity.</p>
<p>Mewar Hi-Tech provides a machine specification and tonnage chart for its Double Toggle Oil Jaw Crusher. The chart includes primary and secondary crusher models with details such as recommended feed size, capacity at different CSS settings, RPM, motor power and approximate machine weight. Buyers can use this information to compare available models and understand which machine may suit their production requirements.</p>
<p>The required capacity should be considered before finalising a crusher. For example, a plant processing a high volume of hard rock may have different requirements from a smaller operation with a lower production target. The feed opening should also be suitable for the largest material entering the machine. If the feed size is not matched to the crusher, it can affect the feeding process and overall plant performance.</p>
<p>Actual production can vary with rock gradation, compressive strength, moisture content, bulk density and feeding conditions. For this reason, the capacity chart should be used as a selection guide rather than a guaranteed production figure. Share your material type, maximum feed size and target tonnes per hour with the Mewar Hi-Tech team to discuss a suitable model.</p>
<h2>Double Toggle Oil Jaw Crusher vs Double Toggle Grease Jaw Crusher</h2>
<p>Both crushers use a double toggle arrangement for crushing. The main difference is their lubrication system. The oil-lubricated model uses an enclosed mechanism with automatic continuous spray lubrication, while the Double Toggle Grease Jaw Crusher uses a grease-based lubrication arrangement.</p>
<p>The following table highlights the main points buyers should consider when comparing these two models.</p>
<table>
  <thead>
    <tr>
      <th>Comparison Factor</th>
      <th>Double Toggle Oil Jaw Crusher</th>
      <th>Double Toggle Grease Jaw Crusher</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Crushing Mechanism</td>
      <td>Uses a double toggle arrangement.</td>
      <td>Uses a double toggle arrangement.</td>
    </tr>
    <tr>
      <td>Lubrication System</td>
      <td>Uses an enclosed mechanism with automatic continuous spray lubrication.</td>
      <td>Uses a grease-based lubrication arrangement.</td>
    </tr>
    <tr>
      <td>Operating Mechanism</td>
      <td>Designed with an oil lubrication system for the operating mechanism.</td>
      <td>Uses a grease lubrication system.</td>
    </tr>
    <tr>
      <td>Machine Selection</td>
      <td>Selection depends on application requirements and machine specifications.</td>
      <td>Selection depends on application requirements and machine specifications.</td>
    </tr>
    <tr>
      <td>Key Considerations</td>
      <td>Operating conditions, maintenance requirements, capacity and technical specifications.</td>
      <td>Operating conditions, maintenance requirements, capacity and technical specifications.</td>
    </tr>
  </tbody>
</table>
<p>The right crusher depends on your plant requirements and operating conditions. Before selecting a model, compare its technical specifications, capacity range and maintenance requirements. You should also consider the material being processed and the expected working hours of the plant.</p>
<h2>What Is a Toggle Plate Jaw Crusher?</h2>
<p>A toggle plate jaw crusher uses a toggle plate as part of the mechanism that transfers movement and force within the crushing assembly. The toggle arrangement supports the movement of the jaw and plays an important role in the crushing process. It helps transfer the movement generated by the drive mechanism to the moving jaw.</p>
<p>The toggle plate is one of the components buyers may consider when comparing jaw crusher parts and machine designs. Other important components include the fixed jaw plate, the moving jaw plate, the eccentric shaft, the flywheel and the crushing chamber. Each component has a role in the operation of the machine.</p>
<p>Jaw plates are particularly important because they come into direct contact with the material being crushed. Their condition can affect crushing performance and the quality of the output. Over time, jaw plates and other wear parts may need inspection or replacement depending on the material and operating conditions.</p>
<p>Regular inspection of wear parts and following the manufacturer's maintenance instructions help keep the machine in suitable operating condition. Operators should also pay attention to unusual noise, changes in machine performance and signs of wear during routine checks.</p>
<h2>Double Toggle Jaw Crusher Manufacturers and Industrial Equipment Selection</h2>
<p>When comparing double toggle jaw crusher manufacturers, buyers should review the machine specifications and the manufacturer's experience with crushing equipment. The feed opening, capacity range, motor power, construction and maintenance support are important points to consider.</p>
<p>A reliable manufacturer of double toggle oil jaw crusher equipment should also be able to explain the lubrication arrangement and provide technical information for selecting the right model. Buyers should ask for the capacity chart and clarify the expected output under their actual working conditions. This makes it easier to compare different machines based on practical requirements rather than price alone.</p>
<p>The manufacturer's product range is another point worth checking. A company offering different types of crushing equipment can help buyers understand how machines may fit into different stages of a processing plant. It is also useful to review available technical specifications and ask about the support provided for installation and maintenance.</p>
<p>Mewar Hi-Tech manufactures crushing and screening equipment in Udaipur, Rajasthan. Its product range includes the Double Toggle Oil Jaw Crusher, the Double Toggle Grease Jaw Crusher and the Single Toggle Grease Jaw Crusher. The company also offers other crushing equipment for different stages of material processing.</p>
<p>Whether you are comparing double toggle jaw crusher manufacturers or looking for a specific machine configuration, make sure the selected model matches your material and production requirements.</p>
<h2>Why Choose Mewar Hi-Tech for Jaw Crushing Equipment?</h2>
<p>Selecting a crusher is an important decision because the machine needs to match the material and production requirements of the plant. The right equipment can help maintain a steady crushing process and reduce problems caused by unsuitable machine selection.</p>
<p><a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> offers different jaw crusher configurations for industrial crushing applications. Buyers can review the available models and compare their feed sizes, capacity options and power requirements before making a decision. The product range includes oil-lubricated and grease-lubricated double toggle models as well as a single toggle option.</p>
<p>For a Double Toggle Oil Jaw Crusher requirement, share the material to be crushed, the maximum feed size and the target production capacity with the Mewar Hi-Tech team. It is also useful to provide details about the required output size and the intended application. This information helps the team understand the project and recommend a suitable machine configuration.</p>
<p>A crusher should be selected according to actual operating needs rather than choosing a model based only on its size or general capacity range. Reviewing the technical details and discussing the application before purchase can help buyers make a more suitable equipment decision.</p>
<p>Contact Mewar Hi-Tech to discuss your jaw crusher requirement and request the relevant technical specifications, capacity details and quotation.</p>`
  },
  {
    slug: "single-toggle-grease-jaw-crusher",
    name: "Single Toggle Grease Jaw Crusher",
    category: "Crushers",
    subCategory: "Jaw Crusher",
    shortDescription: "A Single Toggle Grease Jaw Crusher designed for efficient crushing and smooth operation. Built to deliver reliable performance in demanding mining and quarrying applications.",
    heroImage: "/images/single-toggle-grease-jaw-crusher-hero.webp",
    mainImage: "/images/single-toggle-grease-jaw-crusher.webp",
    model3d: "/3d-model-proudct-images/single_toggle_greese_crusher.glb",
    seoTitle: "Single Toggle Grease Jaw Crusher Manufacturer | Mewar Hi-Tech",
    seoDescription: "A Single Toggle Grease Jaw Crusher designed for efficient crushing and smooth operation. Built for demanding mining and quarrying applications. Request a quote.",
    introText: "Mewar Hi-Tech's Single Toggle Grease Jaw Crusher is designed for efficient crushing with lower power consumption. It is easy to operate and adjust to suit different crushing requirements. Its simple design also helps reduce maintenance needs.",
    features: [
      "Increased crushing stroke and an efficient eccentric shaft support higher productivity in crushing operations.",
      "The high-angle toggle plate helps deliver an effective crushing stroke for improved material reduction.",
      "A precisely balanced flywheel maintains steady crushing action during demanding operating conditions.",
      "The heavy-duty crusher body and cast steel jaw plates provide strength for reliable performance.",
      "Grease lubrication supports smooth movement of components and helps reduce wear during operation."
    ],
    gallery: [],
    video: "/videos/single-toggle-grease-jaw-crusher.mp4",
    specsTable: {
      headers: [
        "S.No",
        "Size (Inch)",
        "Size (MM)",
        "Rec. Feed (mm)",
        "Gape (mm)",
        "Capacity CSS Options (TPH)",
        "RPM",
        "Power (HP)",
        "Weight (Tons)"
      ],
      sections: [
        {
          title: "Technical Specifications",
          rows: [
            ["1", "16\"x10\"", "400x250", "200", "6", "1.0\": 10 | 1.25\": 15 | 1.50\": 18 | 2.0\": 25", "330", "25", "3.2"],
            ["2", "20\"x12\"", "500x300", "270", "8", "1.25\": 15 | 1.50\": 22 | 2.0\": 28 | 2.50\": 35", "320", "30", "4.8"],
            ["3", "30\"x15\"", "750x375", "320", "11", "1.50\": 30 | 2.0\": 45 | 2.50\": 60 | 3.0\": 75", "300", "50", "8.5"],
            ["4", "36\"x24\"", "900x600", "500", "13", "2.0\": 60 | 2.50\": 80 | 3.00\": 100 | 4.0\": 120", "285", "75", "14.5"],
            ["5", "42\"x30\"", "1050x750", "650", "17", "3.0\": 90 | 4.00\": 120 | 5.00\": 150 | 6.0\": 180", "250", "125", "23.0"]
          ]
        }
      ]
    },
    faqs: [
      {
        question: "What is a Single Toggle Grease Jaw Crusher?",
        answer: "A Single Toggle Grease Jaw Crusher is a primary crushing machine used to break large rocks and minerals into smaller pieces. It uses a single toggle mechanism to move the crushing jaw and apply pressure to the material. It is commonly used in mining, quarrying and aggregate production."
      },
      {
        question: "How does a Single Toggle Jaw Crusher work?",
        answer: "A Single Toggle Jaw Crusher works through compression. An eccentric shaft moves the swinging jaw through the toggle mechanism. The material gets crushed between the fixed and moving jaw plates and then exits through the discharge opening."
      },
      {
        question: "What are the main applications of a Single Toggle Grease Jaw Crusher?",
        answer: "It is commonly used in mining plants, stone quarries and aggregate production units. The machine helps crush materials such as granite, limestone and other suitable rocks before they move to secondary crushing or screening equipment."
      },
      {
        question: "What is the capacity of a Single Toggle Jaw Crusher?",
        answer: "The capacity depends on the machine model, feed size, material hardness and closed side setting (CSS). Mewar Hi-Tech offers different machine sizes with capacity specifications to help buyers select a suitable crusher for their production requirements."
      },
      {
        question: "What factors affect the price of a Single Toggle Grease Jaw Crusher?",
        answer: "The price depends on the crusher size, feed opening, production capacity, motor power and machine configuration. Material type and project requirements may also influence machine selection. Contact Mewar Hi-Tech with your crushing requirements to request suitable specifications and a quotation."
      }
    ],
    articleContent: `<h2>Single Toggle Grease Jaw Crusher for Heavy-Duty Crushing Applications</h2>
<p>A Single Toggle Grease Jaw Crusher is used to reduce large rocks and minerals into smaller sizes before further processing. It is commonly installed in mining plants, stone quarries and aggregate production units where reliable primary crushing is required. The machine uses a single toggle mechanism to move the jaw and apply pressure to the material inside the crushing chamber.</p>
<p>Mewar Hi-Tech manufactures Single Toggle Grease <a href="https://www.mewarhitech.com/products/jaw-crusher">Jaw Crusher</a> models for different industrial crushing requirements. The machine is designed with features that support efficient crushing and easier operation. Its increased stroke and counterbalanced flywheel help maintain the movement needed during the crushing process.</p>
<p>Choosing the right jaw crusher depends on the type of material, feed size and required production capacity. A machine selected according to these requirements can help maintain a steady flow of material through the plant.</p>
<h2>How Does a Single Toggle Jaw Crusher Work?</h2>
<p>The working principle of a Single Toggle Jaw Crusher is based on compression. Large rocks enter the crushing chamber through the feed opening. Inside the chamber, the material is pressed between a fixed jaw plate and a moving jaw plate. The pressure breaks the rocks into smaller pieces.</p>
<p>The eccentric shaft creates the movement of the moving jaw. As the shaft rotates, the toggle mechanism transfers this movement to the jaw. The gap between the fixed and moving jaw plates changes during each cycle. Material is crushed when the gap becomes smaller and moves towards the discharge opening as the jaw moves back.</p>
<p>The size of the discharged material depends on the crusher setting and the characteristics of the feed. Operators need to select a suitable setting according to the required output size and the next stage of processing.</p>
<p>In a single toggle jaw crusher, the toggle plate is connected to the moving jaw mechanism. Its movement helps produce the crushing action. This arrangement is commonly used in primary crushing applications where large feed material needs to be reduced before further processing.</p>
<h2>Key Features of Mewar Hi-Tech Single Toggle Grease Jaw Crusher</h2>
<p>The Mewar Hi-Tech Single Toggle Grease Jaw Crusher is designed for industrial crushing applications where machine performance and ease of operation are important. Its construction includes several features that support the crushing process and help operators manage the machine.</p>
<p>The increased stroke design helps create the jaw movement required for material reduction. A counterbalanced flywheel supports smooth operation by helping maintain the movement of the crushing mechanism. These features are useful in applications where the crusher needs to handle regular feeding and continuous crushing work.</p>
<p>The machine also uses a high-angle toggle plate arrangement. This design helps increase the stroke in the lower part of the crushing chamber. It supports the movement required to reduce material as it passes through the jaw plates.</p>
<p>Another useful feature is the hydraulic arrangement provided for gap adjustment. It allows the crusher setting to be adjusted according to the required discharge size. The correct setting should be selected based on the feed material and the output needed by the plant.</p>
<p>The jaw plates are important wear components because they come into direct contact with the material being crushed. Their condition should be checked during routine maintenance. Regular inspection and timely replacement of worn parts help maintain the machine's crushing performance.</p>
<h2>Advantages of Single Toggle Jaw Crusher for Crushing Operations</h2>
<p>A Single Toggle Jaw Crusher is often considered for plants that need a practical crushing solution with a relatively simple operating arrangement. Its mechanism is designed to convert the rotation of the eccentric shaft into the movement of the crushing jaw.</p>
<p>One advantage of this design is its suitability for applications where efficient material reduction and manageable power consumption are important. Mewar Hi-Tech's product information highlights the Single Toggle Grease Jaw Crusher for applications where efficiency needs to be improved with lower power utilisation compared with its Double Toggle Grease Jaw Crusher.</p>
<p>The machine also offers easier gap adjustment and lower support requirements as described in the product information. These features can be useful for operators who need to manage regular crushing work without complicated adjustment procedures.</p>
<p>However, the actual performance depends on the material being crushed, feed conditions and selected machine model. Buyers should compare the technical specifications before deciding whether a single toggle jaw crusher is suitable for their plant.</p>
<h2>Single Toggle Jaw Crusher Applications in Mining and Quarrying</h2>
<p>A Single Toggle Grease Jaw Crusher can be used in different industries where large rocks and minerals need to be reduced in size. It is generally selected for primary crushing before material moves to secondary crushers, screens or other processing equipment.</p>
<p>In mining operations, jaw crushers are used to reduce extracted rock and ore into manageable sizes. The crushed material can then move to the next stage of mineral processing. The required machine depends on the hardness of the material and the production target.</p>
<p>In stone quarries, a jaw crusher helps process large pieces of rock into smaller sizes. The output may be sent to a cone crusher or screening equipment depending on the final aggregate sizes required. Jaw crushers are also used in aggregate production plants that supply material for construction and infrastructure projects.</p>
<p>Materials such as granite, limestone and other suitable rocks may be processed using jaw crushing equipment. The correct machine selection depends on material properties and the crusher's technical limits. Buyers should confirm the maximum feed size and capacity before using a particular model for a specific application.</p>
<h2>Single Toggle Jaw Crusher Capacity and Technical Specifications</h2>
<p>Capacity is one of the main factors to check when selecting a Single Toggle Jaw Crusher. Buyers generally compare machines based on their feed opening, maximum feed size, motor power and expected production in tonnes per hour (TPH).</p>
<p>Mewar Hi-Tech provides different machine sizes with technical specifications and capacity information. These details help buyers compare available models according to their plant requirements. The capacity of a jaw crusher can also change with the closed side setting (CSS), material hardness and feeding conditions.</p>
<p>The CSS refers to the minimum gap between the fixed and moving jaw plates at the discharge point. A change in this setting affects the size of the material leaving the crushing chamber. A smaller setting generally produces a finer output but can also affect the capacity of the machine.</p>
<p>Actual production depends on more than the machine's rated capacity. Rock type, feed gradation, moisture, bulk density and the way material enters the crusher can all affect output. For an accurate recommendation, share the material type, maximum feed size and target TPH with the Mewar Hi-Tech team.</p>
<p>Review the official capacity chart and technical specifications before finalising a model. This helps ensure that the selected crusher is suitable for the expected working conditions.</p>
<h2>Understanding Jaw Crusher Parts and the Toggle Plate Mechanism</h2>
<p>Knowing the main jaw crusher parts can help buyers understand how the machine works and what needs to be checked during maintenance. Each component has a role in transferring movement, applying crushing force or supporting the operation of the machine.</p>
<p>The fixed jaw plate and moving jaw plate form the crushing surfaces. The eccentric shaft creates the movement of the jaw while the toggle plate transfers movement through the mechanism. The flywheel helps maintain the required motion during operation. The crushing chamber is the space where the feed material is reduced in size.</p>
<p>Jaw plates are wear parts and may need replacement after regular use. The replacement interval depends on the material being crushed and the operating conditions. The toggle plate and other mechanical components should also be inspected according to the manufacturer's maintenance instructions.</p>
<p>For plant operators, regular checks can help identify wear or changes in machine performance before they affect production. Always follow the recommended maintenance procedure and use suitable replacement parts for the machine model.</p>
<h2>Single Toggle vs Double Toggle Jaw Crusher</h2>
<p>Single toggle and double toggle jaw crushers are both used for crushing rocks and minerals. The main difference is the mechanism used to move the jaw and transfer the crushing force.</p>
<p>A Single Toggle Jaw Crusher uses one toggle plate in its operating arrangement. The eccentric shaft drives the moving jaw through this mechanism. A Double Toggle Jaw Crusher uses two toggle plates to transfer movement to the swinging jaw.</p>
<p>Mewar Hi-Tech offers the Single Toggle Grease Jaw Crusher as well as Double Toggle Grease and Double Toggle Oil Jaw Crusher models. Each type has its own design and operating arrangement. The right machine depends on the material, required capacity, operating conditions and project requirements.</p>
<table>
  <thead>
    <tr>
      <th>Comparison Factor</th>
      <th>Single Toggle Jaw Crusher</th>
      <th>Double Toggle Jaw Crusher</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Toggle Arrangement</td>
      <td>Uses one toggle plate.</td>
      <td>Uses two toggle plates.</td>
    </tr>
    <tr>
      <td>Jaw Movement</td>
      <td>Movement is driven through a single toggle mechanism.</td>
      <td>Movement is transferred through a double toggle arrangement.</td>
    </tr>
    <tr>
      <td>Machine Selection</td>
      <td>Depends on feed material, capacity and application.</td>
      <td>Depends on feed material, capacity and application.</td>
    </tr>
    <tr>
      <td>Mewar Hi-Tech Models</td>
      <td>Single Toggle Grease Jaw Crusher.</td>
      <td>Double Toggle Grease Jaw Crusher and Double Toggle Oil Jaw Crusher.</td>
    </tr>
  </tbody>
</table>
<p>Before choosing between the two designs, compare the specifications of the actual models. Machine capacity, feed opening, power requirements and maintenance needs are more useful for selection than the crusher type alone.</p>
<h2>Single Toggle Jaw Crusher Price and Machine Selection</h2>
<p>The price of a Single Toggle Jaw Crusher depends on the machine size, capacity, configuration and project requirements. A larger feed opening or a higher production requirement may call for a different model. Additional plant requirements can also affect the overall investment.</p>
<p>When comparing the Single Toggle Jaw Crusher price in India, buyers should look beyond the initial purchase cost. Motor power, wear part replacement, maintenance requirements and expected production should also be considered. These factors help provide a clearer picture of the equipment's operating cost.</p>
<p>Before requesting a quotation, prepare basic details about the application. These include the material type, maximum feed size, required output size and target production in TPH. Sharing this information helps the manufacturer understand the requirement and suggest a suitable machine.</p>
<p>Avoid selecting a crusher based only on a general price estimate. Compare the technical specifications and confirm that the machine can handle the material and production target of your plant.</p>
<h2>Why Choose Mewar Hi-Tech as Your Single Toggle Jaw Crusher Manufacturer?</h2>
<p>Choosing a jaw crusher manufacturer involves checking the machine design, technical information and suitability for the intended application. Buyers should be able to review the specifications and understand how the equipment will fit into their crushing plant.</p>
<p><a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> offers the Single Toggle Grease Jaw Crusher for industrial crushing requirements. Its product range also includes Double Toggle Grease and Double Toggle Oil Jaw Crusher models. This gives buyers different jaw crusher configurations to consider according to their application.</p>
<p>The company manufactures crushing and screening equipment in Udaipur, Rajasthan. Its wider product range includes machines used at different stages of material processing. Buyers can review the available models and discuss their requirements before selecting equipment.</p>
<p>If you are looking for a Single Toggle Jaw Crusher Manufacturer in India, consider the machine's capacity, feed opening, power requirements and available technical support. These details can help you make a more informed purchase decision.</p>
<p>For information about the Single Toggle Grease Jaw Crusher, share your material type, feed size and required production capacity with Mewar Hi-Tech. The team can help you review the available specifications and discuss a suitable machine for your crushing application.</p>`
  },
  {
    slug: "double-toggle-grease-jaw-crusher",
    name: "Double Toggle Grease Jaw Crusher",
    category: "Crushers",
    subCategory: "Jaw Crusher",
    shortDescription: "The Double Toggle Grease Jaw Crusher is built for efficient crushing of hard rocks and minerals. Its reliable design supports smooth operation and consistent performance in mining and quarrying applications.",
    heroImage: "/images/double-toggle-grease-jaw-crusher-hero.webp",
    mainImage: "/images/double-toggle-grease-jaw-crusher.webp",
    model3d: "/3d-model-proudct-images/double_toggle_grease_jaw_crusher.glb",
    seoTitle: "Double Toggle Grease Jaw Crusher Manufacturer | Mewar Hi-Tech",
    seoDescription: "The Double Toggle Grease Jaw Crusher is built for efficient crushing of hard rocks and minerals in mining and quarrying applications. Request a quote from Mewar Hi-Tech.",
    introText: "The Double Toggle Grease Jaw Crusher is designed for crushing hard rocks and minerals in demanding conditions. Its strong construction supports reliable performance in mining and quarrying operations. The machine offers efficient crushing with a design suited for regular industrial use.",
    features: [
      "Double toggle design delivers strong crushing force through an efficient long-stroke eccentric mechanism.",
      "The wide entry throat allows easy feeding of material into the crushing chamber.",
      "The heavy-duty steel structure is built using quality materials for dependable performance.",
      "Grease lubrication helps maintain smooth movement of components and reduces friction during operation.",
      "The robust jaw assembly supports reliable crushing performance in demanding industrial applications."
    ],
    gallery: [],
    video: null,
    specsTable: {
      headers: [
        "S.No",
        "Size (Inch)",
        "Size (MM)",
        "Rec. Feed (mm)",
        "Gape (mm)",
        "Capacity CSS Options (TPH)",
        "RPM",
        "Power (HP)",
        "Weight (Tons)"
      ],
      sections: [
        {
          title: "Primary Crusher",
          rows: [
            ["1", "24\"x12\"", "600x300", "250", "10", "2.50\": 32 | 3.00\": 46 | 3.50\": 58 | 4\": 65", "300-320", "40", "7.6"],
            ["2", "30\"x20\"", "750x500", "450", "18", "3.00\": 70 | 3.50\": 81 | 4\": 93 | 5\": 116 | 6\": 139", "280-300", "100", "13.5"],
            ["3", "36\"x24\"", "900x600", "525", "21", "4\": 112 | 5\": 139 | 6\": 167 | 7\": 195", "250-280", "125", "23.0"],
            ["4", "42\"x30\"", "1050x750", "675", "27", "4\": 130 | 5\": 162 | 6\": 195 | 7\": 228 | 8\": 255", "240-260", "150", "26.0"],
            ["5", "48\"x36\"", "1200x900", "800", "32", "5\": 185 | 6\": 225 | 7\": 250 | 8\": 280 | 9\": 325", "200-220", "200", "42.0"],
            ["6", "60\"x48\"", "1500x1200", "1100", "44", "7\": 325 | 8\": 365 | 9\": 415 | 10\": 444 | 12\": 520", "200-220", "325", "70.0"]
          ]
        },
        {
          title: "Secondary Crusher",
          rows: [
            ["7", "36\"x8\"", "900x200", "125", "5", "1.0\": 21 | 1.25\": 26 | 1.50\": 33 | 2.0\": 39 | 2.50\": 52", "300-340", "50", "8.8"],
            ["8", "42\"x10\"", "1050x225", "200", "8", "1.25\": 25 | 1.50\": 31 | 2.0\": 39 | 2.50\": 46 | 3.00\": 61 | 3.50\": 76", "300-340", "60", "11.8"],
            ["9", "48\"x10\"", "1200x225", "200", "8", "1.25\": 28 | 1.50\": 36 | 2.0\": 44 | 2.50\": 52 | 3.00\": 68 | 3.50\": 82", "300-340", "75", "13.2"]
          ]
        }
      ]
    },
    faqs: [
      {
        question: "What is a Double Toggle Grease Jaw Crusher?",
        answer: "A Double Toggle Grease Jaw Crusher is a primary crushing machine used to break large rocks and minerals into smaller sizes. It uses a double toggle mechanism and a grease-based lubrication system for crushing operations."
      },
      {
        question: "How does a Double Toggle Grease Jaw Crusher work?",
        answer: "The crusher works by compressing material between a fixed jaw plate and a moving jaw plate. The double toggle mechanism transfers movement to the swinging jaw. As the jaw moves towards the fixed plate, the material breaks into smaller pieces and moves towards the discharge opening."
      },
      {
        question: "Where is a Double Toggle Grease Jaw Crusher used?",
        answer: "It is commonly used in mining plants, stone quarries and aggregate production units. It helps crush hard rocks and minerals before the material moves to secondary crushing or screening equipment."
      },
      {
        question: "What factors affect the capacity of a Double Toggle Grease Jaw Crusher?",
        answer: "Capacity depends on the crusher model, feed size, rock gradation, compressive strength, moisture content, feeding method, jaw plate profile (plain or toothed) and machine RPM. Technical specifications help buyers select a model suitable for their application."
      },
      {
        question: "What should I consider before buying a Double Toggle Grease Jaw Crusher?",
        answer: "Check the required production capacity, maximum feed size, material hardness, motor power, machine dimensions and maintenance requirements. You should also verify the manufacturer's technical specifications and support services."
      }
    ],
    articleContent: `<h2>Double Toggle Grease Jaw Crusher for Heavy-Duty Crushing Applications</h2>
<p>A reliable crushing machine is important for industries that handle hard rocks, minerals and other heavy materials every day. The right equipment helps maintain a steady production process while reducing unnecessary interruptions. A Double Toggle Grease Jaw Crusher is designed for demanding crushing applications where strength, durability and consistent performance are important.</p>
<p>Mewar Hi-Tech offers jaw crusher solutions for mining, quarrying and aggregate production. Its Double Toggle Grease Jaw Crusher is developed to handle tough materials and support regular industrial crushing operations. The machine is suitable for businesses looking for a dependable jaw crusher for primary crushing and size reduction.</p>
<h2>What Is a Double Toggle Grease Jaw Crusher?</h2>
<h3>Understanding the Double Toggle Mechanism</h3>
<p>A Double Toggle Grease Jaw Crusher is a type of jaw crusher that uses a double toggle mechanism to produce the crushing action. It works by applying pressure between two jaw plates. One jaw remains fixed while the other moves to crush the material fed into the crushing chamber.</p>
<h3>Role of Grease Lubrication</h3>
<p>The double toggle arrangement transfers movement through the toggle mechanism and helps generate the force required to break hard materials into smaller pieces. Grease lubrication is used for the designated moving and bearing components to support smooth machine operation and reduce friction.</p>
<p>This type of double toggle jaw crusher is commonly considered for industrial applications where the material requires strong and consistent crushing action. Its construction makes it suitable for mining, stone crushing and quarrying environments.</p>
<h2>How Does a Double Toggle Jaw Crusher Work?</h2>
<h3>Material Feeding and Crushing Process</h3>
<p>The working principle of a double toggle <a href="https://www.mewarhitech.com/products/jaw-crusher">jaw crusher</a> is based on compression. Large rocks or minerals enter the crushing chamber through the feed opening. The moving jaw then applies pressure against the material as it moves towards the fixed jaw. This pressure breaks the material into smaller pieces.</p>
<h3>Discharge and Lubrication Process</h3>
<p>The toggle mechanism plays an important role in transferring the movement required for crushing. As the material becomes small enough to pass through the discharge opening, it leaves the crushing chamber and moves to the next stage of processing.</p>
<p>In a grease-lubricated jaw crusher, suitable lubrication helps protect the relevant moving components during operation. Regular inspection and maintenance are also important for keeping the machine in good working condition.</p>
<h2>Key Features of Mewar Hi-Tech Double Toggle Grease Jaw Crusher</h2>
<h3>Strong Construction for Industrial Operations</h3>
<p>A jaw crusher used in mining and quarrying must be strong enough to handle demanding working conditions. The Double Toggle Grease Jaw Crusher from Mewar Hi-Tech is designed with industrial crushing requirements in mind.</p>
<h3>Double Toggle Mechanism and Grease Lubrication</h3>
<p>Its sturdy construction supports regular operation in tough environments where rocks and minerals need to be reduced in size. The double toggle mechanism provides the crushing movement required for handling hard materials. Grease lubrication supports the operation of the relevant components and forms part of the machine's maintenance requirements.</p>
<h3>Suitable for Regular Crushing Requirements</h3>
<p>The machine is intended for industrial users who need dependable crushing equipment for their production plants. Proper machine selection, feeding practices and scheduled maintenance help maintain its performance over time.</p>
<h2>Applications of Double Toggle Grease Jaw Crusher in Mining and Quarrying</h2>
<h3>Mining and Mineral Processing</h3>
<p>A Double Toggle Grease Jaw Crusher can be used in different industries where large pieces of material need to be crushed before further processing. Mining is one of its important application areas because extracted rocks and minerals often require primary size reduction before moving through the processing plant.</p>
<h3>Stone Crushing and Quarrying</h3>
<p>In quarrying operations, a jaw crusher helps break large stones into smaller sizes for further crushing and screening. The crushed material can then be processed to meet the requirements of aggregate production and construction projects.</p>
<h3>Aggregate Production and Industrial Applications</h3>
<p>Stone crushing plants also use jaw crushers as part of their material processing setup. Depending on the plant design and material requirements, the crushed output may be transferred to secondary crushing equipment such as a cone crusher or a roll crusher.</p>
<p>The machine can also be considered for mineral processing and other industrial applications where the feed material and required output size are suitable for its design. The final selection should always be based on the material characteristics and the required production capacity.</p>
<h2>Double Toggle Jaw Crusher Capacity and Machine Selection</h2>
<h3>Factors Affecting Crusher Capacity</h3>
<p>The capacity of a Double Toggle Jaw Crusher depends on several operating and material-related factors. Feed size, rock hardness, material density, moisture content and the required discharge size can all affect the amount of material processed by the machine.</p>
<h3>Choosing the Right Crusher Model</h3>
<p>Before choosing a jaw crusher machine, it is important to understand the expected feed size and the production requirement of the plant. The crusher should be selected according to the material that needs to be processed rather than capacity alone.</p>
<p>Mewar Hi-Tech provides machine specifications and capacity information to help buyers understand the available options. Customers should refer to the relevant model's technical details and tonnage chart when comparing machines. Actual production can vary according to the material and operating conditions.</p>
<h2>Double Toggle Grease Jaw Crusher vs Double Toggle Oil Jaw Crusher</h2>
<h3>Difference in Lubrication Systems</h3>
<p>Both grease-lubricated and oil-lubricated double toggle jaw crushers are used for crushing applications. However, their lubrication arrangements are different. Understanding this difference can help buyers select equipment according to their plant requirements and maintenance preferences.</p>
<table>
  <thead>
    <tr>
      <th>Comparison</th>
      <th>Double Toggle Grease Jaw Crusher</th>
      <th>Double Toggle Oil Jaw Crusher</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lubrication system</td>
      <td>Uses grease lubrication for designated components</td>
      <td>Uses an oil lubrication arrangement</td>
    </tr>
    <tr>
      <td>Main purpose</td>
      <td>Designed for industrial crushing applications</td>
      <td>Designed for heavy-duty crushing applications</td>
    </tr>
    <tr>
      <td>Machine selection</td>
      <td>Depends on feed material, capacity and operating requirements</td>
      <td>Depends on feed material, capacity and operating requirements</td>
    </tr>
    <tr>
      <td>Maintenance</td>
      <td>Requires inspection and maintenance of grease-lubricated components</td>
      <td>Requires attention to the oil lubrication system and its operating requirements</td>
    </tr>
  </tbody>
</table>
<h3>Which Jaw Crusher Should You Choose?</h3>
<p>The right option depends on the machine design, production needs and maintenance arrangements at the plant. Buyers should compare the technical specifications of both models before making a decision.</p>
<h2>Important Jaw Crusher Parts and Their Functions</h2>
<h3>Fixed Jaw Plate and Moving Jaw Plate</h3>
<p>Understanding the main jaw crusher parts can make machine selection and maintenance easier. The fixed jaw plate and moving jaw plate form the crushing chamber where the material is compressed. These plates come into direct contact with the material and play an important role in the crushing process.</p>
<h3>Toggle Mechanism and Eccentric Shaft</h3>
<p>The toggle mechanism transfers the movement required for the crushing action. The eccentric shaft and other drive components support the movement of the jaw assembly. Bearings and lubrication arrangements help the relevant moving parts operate as intended.</p>
<h3>Importance of Regular Component Inspection</h3>
<p>Each component has a specific role in the overall performance of the jaw crusher machine. Regular inspection of jaw plates, toggle components, bearings and lubrication points can help identify wear or maintenance requirements before they affect plant operations.</p>
<h2>Factors to Consider Before Buying a Double Toggle Grease Jaw Crusher</h2>
<h3>Material Type and Feed Size</h3>
<p>Choosing a Double Toggle Grease Jaw Crusher requires more than comparing the machine price. Buyers should first consider the type of material they need to crush and its hardness. The maximum feed size is also important because the crusher must be suitable for the material entering the crushing chamber.</p>
<h3>Production Capacity and Output Requirements</h3>
<p>Production capacity is another major consideration. A machine should match the expected plant requirement and work effectively with the other equipment in the crushing line. The required output size, available installation space and power requirements should also be reviewed before finalising the model.</p>
<h3>Maintenance and Technical Support</h3>
<p>Maintenance requirements and the availability of technical support are worth considering as well. A clear understanding of these factors helps buyers select a jaw crusher that fits their actual operating conditions.</p>
<h2>Double Toggle Jaw Crusher Price and Cost Considerations</h2>
<h3>Factors That Affect Jaw Crusher Price</h3>
<p>The price of a Double Toggle Grease Jaw Crusher can vary according to its model, size, capacity and technical configuration. The required feed opening, production target and application can also influence the final machine selection and quotation.</p>
<h3>What to Check Before Comparing Prices</h3>
<p>A lower initial price should not be the only factor when comparing jaw crusher manufacturers. Buyers should also review the machine specifications, construction quality, maintenance requirements and suitability for their production process.</p>
<p>For an accurate quotation, it is useful to share details about the material, feed size, required output and expected capacity. This information helps the manufacturer recommend a suitable jaw crusher machine for the application.</p>
<h2>Why Choose Mewar Hi-Tech as Your Double Toggle Jaw Crusher Manufacturer?</h2>
<h3>Industrial Crushing Equipment and Product Range</h3>
<p>Selecting the right manufacturer is an important part of setting up a reliable crushing plant. Buyers need equipment that matches their material requirements and production goals. <a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> manufactures crushing and screening equipment for industrial applications, including mining, quarrying and aggregate processing.</p>
<h3>Finding the Right Jaw Crusher for Your Requirements</h3>
<p>Its product range includes different jaw crusher models designed for varying crushing requirements. Customers can review the available machine specifications and discuss their application needs before choosing a suitable model.</p>
<p>Whether you are looking for a Double Toggle Grease Jaw Crusher, a Double Toggle Oil Jaw Crusher or another type of jaw crusher machine, selecting equipment based on actual operating conditions is essential. Mewar Hi-Tech aims to support customers with crushing equipment suited to their plant requirements.</p>`
  },
  {
    slug: "cone-crusher",
    name: "Cone Crusher",
    category: "Crushers",
    subCategory: "Cone Crusher",
    shortDescription: "The Cone Crusher is designed for efficient secondary and tertiary crushing of hard rocks and minerals. It delivers consistent output and reliable performance in demanding mining and quarrying operations.",
    heroImage: "/images/cone-crusher-hero.webp",
    mainImage: "/images/cone-crusher.webp",
    model3d: "/3d-model-proudct-images/cone_crusher.glb",
    seoTitle: "Cone Crusher Manufacturer in India | Mewar Hi-Tech",
    seoDescription: "The Cone Crusher is designed for efficient secondary and tertiary crushing of hard rocks and minerals in mining and quarrying operations. Request a quote.",
    introText: "The Cone Crusher is designed for efficient secondary and tertiary crushing of hard rocks and minerals. It delivers consistent output and reliable performance in demanding mining and quarrying operations.",
    features: [
      "High crushing efficiency helps achieve consistent output while reducing wear on crusher components.",
      "The improved cavity design supports smooth material feeding and makes maintenance easier.",
      "The crushing action applies balanced pressure to produce uniform material size during operation.",
      "The thin oil lubrication system helps protect moving parts and extends the service life of wear components.",
      "The robust crusher structure is designed to handle demanding crushing operations with reliable performance."
    ],
    gallery: [
      "/images/cone-crusher-1.jpg"
    ],
    video: "/videos/cone-crusher.mp4",
    specsTable: {
      headers: [
        "S.No",
        "Model",
        "Product Type",
        "Rec. Feed (mm)",
        "Rec. Feed (Inch)",
        "CSS setting in MM (Capacity TPH)",
        "RPM",
        "Power (HP)",
        "Weight (Tons)"
      ],
      sections: [
        {
          title: "Technical Specifications",
          rows: [
            ["1", "KCC 750", "FINE", "50", "2.0", "6: 16-20 | 8: 18-25 | 10: 25-30", "375-400", "100", "8.0"],
            ["", "", "COARSE", "80", "3.2", "15: 30-40 | 20: 40-50 | 25: 50-60", "250-325", "100", "8.0"],
            ["2", "KCC 750 N", "FINE", "60", "2.4", "8: 20-30 | 10: 30-40 | 15: 45-65", "325-400", "120", "8.0"],
            ["", "", "COARSE", "140", "5.6", "20: 45-55 | 25: 60-70 | 30: 75-100 | 40: 90-120 | 50: 120-150", "200-285", "120", "8.0"],
            ["3", "KCC 900", "FINE", "60", "2.4", "8: 30-40 | 10: 40-55 | 15: 50-80", "325-400", "175", "11.0"],
            ["", "", "COARSE", "180", "7.2", "20: 60-75 | 25: 80-100 | 30: 100-125 | 40: 125-150 | 50: 160-200", "250-325", "175", "11.0"],
            ["4", "KCC 1000", "FINE", "60", "2.4", "8: 40-60 | 10: 55-75 | 15: 70-90", "325-400", "215", "13.0"],
            ["", "", "COARSE", "220", "8.8", "20: 75-90 | 25: 100-125 | 30: 125-150 | 40: 150-180 | 50: 200-240", "250-325", "215", "13.0"],
            ["5", "KCC 1200", "FINE", "60", "2.4", "8: 50-70 | 10: 70-90 | 15: 90-110", "325-400", "265", "16.0"],
            ["", "", "COARSE", "220", "8.8", "20: 90-110 | 25: 120-150 | 30: 150-180 | 40: 180-220 | 50: 240-290", "250-325", "265", "16.0"]
          ]
        }
      ]
    },
    faqs: [
      {
        question: "What is a Cone Crusher used for?",
        answer: "A Cone Crusher is mainly used for secondary and tertiary crushing of hard rocks and minerals. It reduces the size of material after primary crushing and is commonly used in mining, quarrying and aggregate production plants."
      },
      {
        question: "How does a Cone Crusher work?",
        answer: "A Cone Crusher works on the principle of compression crushing. Material enters the crushing chamber and gets compressed between the mantle and concave liner. This action breaks larger rocks into smaller pieces that pass through the discharge opening."
      },
      {
        question: "What are the main parts of a Cone Crusher?",
        answer: "The main cone crusher parts generally include the mantle, concave liner, main shaft, eccentric assembly, frame, drive system and lubrication arrangement. Hydraulic cone crusher models may also include hydraulic components for specific adjustment and protection functions."
      },
      {
        question: "What factors affect the capacity of a Cone Crusher?",
        answer: "Cone crusher capacity depends on feed size, material hardness, crushing chamber design, discharge setting and feeding conditions. A 100 TPH cone crusher should be selected according to the required production output and the manufacturer's capacity specifications."
      },
      {
        question: "How do I choose the right Cone Crusher manufacturer in India?",
        answer: "Look for a manufacturer with experience in industrial crushing equipment, clear technical specifications, reliable machine design and appropriate technical support. Comparing machine specifications and discussing your application requirements will help you make a more informed choice."
      }
    ],
    articleContent: `<h2>Cone Crusher for Efficient Crushing in Mining and Quarrying</h2>
<p>Choosing the right crushing equipment is important for maintaining a smooth production process in mining, quarrying and aggregate plants. A Cone Crusher is widely used when materials need to be reduced to smaller and more uniform sizes after primary crushing. It helps process hard rocks and minerals while supporting the production requirements of industrial crushing plants.</p>
<p>Mewar Hi-Tech offers crushing equipment for different material processing applications. Its cone crusher is designed for industrial crushing requirements where consistent output and dependable operation are important. Whether it is used in a stone crushing plant, mining operation or aggregate production setup, selecting the right cone crusher machine can make a difference to overall plant performance.</p>
<h2>What Is a Cone Crusher?</h2>
<h3>Understanding the Basic Design of a Cone Crusher</h3>
<p>A Cone Crusher is a crushing machine commonly used for secondary and tertiary crushing. It reduces the size of rocks and minerals by compressing material between a moving crushing surface and a fixed outer surface. The material enters through the top of the machine and moves into the crushing chamber, where pressure breaks it into smaller pieces.</p>
<h3>Role of Cone Crusher in a Crushing Plant</h3>
<p>Cone crushers are generally used after primary crushing equipment such as a<a href="https://www.mewarhitech.com/products/jaw-crusher"> </a><a href="https://www.mewarhitech.com/products/jaw-crusher">jaw crusher</a>. The jaw crusher handles larger feed material during the first stage, while the cone crusher further reduces the material to the required size. This combination is commonly used in crushing plants where different stages of size reduction are needed.</p>
<p>The final output depends on the machine configuration, feed material and operating settings. A suitable cone crusher machine helps maintain the required product size for applications such as aggregate production, road construction and mineral processing.</p>
<h2>How Does a Cone Crusher Work? Understanding Its Working Principle</h2>
<h3>Material Feeding and Crushing Process</h3>
<p>The cone crusher working principle is based on compression crushing. Material enters the crushing chamber from the top and moves into the space between the mantle and concave liner. The mantle moves in a circular or gyrating motion, creating pressure against the material inside the chamber.</p>
<p>As the material is compressed, larger pieces break into smaller particles. The crushed material gradually moves down through the chamber and exits through the discharge opening when it reaches a size that can pass through the available gap.</p>
<h3>Factors Affecting the Working Performance</h3>
<p>The crusher's performance depends on factors such as feed size, material hardness, chamber design and discharge setting. Correct feeding and regular inspection are important for maintaining stable operation. Operators should follow the manufacturer's instructions when adjusting the machine or carrying out maintenance.</p>
<h2>Key Features of a Cone Crusher Machine</h2>
<h3>Crushing Chamber and Liner Arrangement</h3>
<p>A cone crusher machine must handle continuous material flow and demanding working conditions. Its design and configuration play an important role in crushing performance, product size and machine reliability.</p>
<p>The crushing chamber is one of the main parts of the machine because it determines how material is compressed during operation. The mantle and concave liners are exposed to regular contact with the feed material, so their condition can influence crushing performance.</p>
<h3>Mechanical Components and Machine Performance</h3>
<p>The drive arrangement and other mechanical components work together to produce the movement required for size reduction.</p>
<p>A properly selected cone crusher can support the production needs of mining and quarrying plants. Its performance also depends on the material being processed, the feed arrangement and the operating conditions at the site.</p>
<h2>Cone Crusher Hydraulic System and Its Importance</h2>
<h3>How the Hydraulic System Works</h3>
<p>The cone crusher hydraulic system is an important area to understand when selecting and operating certain hydraulic cone crusher models. Depending on the machine design, hydraulic arrangements may support functions such as adjustment of the discharge setting, clearing of the crushing chamber and protection against certain operating conditions.</p>
<p>The hydraulic system uses controlled pressure to operate the components designed for these functions. Its condition can affect machine operation, so regular inspection of hydraulic lines, connections, filters and oil levels is important where these components are fitted.</p>
<h3>Hydraulic System Inspection and Maintenance</h3>
<p>Not every cone crusher uses an identical hydraulic arrangement. The functions and specifications depend on the particular model. Buyers should refer to the machine's technical documentation to understand the hydraulic features available in the selected cone crusher.</p>
<h2>Cone Crusher Parts Name and Their Functions</h2>
<h3>Main Crushing Components</h3>
<p>Understanding the cone crusher parts name makes it easier to learn how the machine works and what needs attention during maintenance. The main crushing components generally include the mantle and concave liner. These components form the crushing surfaces and are responsible for compressing the material inside the chamber.</p>
<h3>Supporting Mechanical Components</h3>
<p>The main shaft supports the crushing assembly, while the eccentric mechanism helps create the movement needed for crushing. The frame provides structural support to the machine. Other components may include the drive system, bearings, lubrication arrangement, adjustment mechanism and discharge area.</p>
<p>The exact parts and their arrangement can differ between cone crusher models. For this reason, operators and maintenance teams should use the parts information and technical drawings supplied for their specific machine.</p>
<h2>Understanding a Cone Crusher Diagram</h2>
<h3>Main Components Shown in a Cone Crusher Diagram</h3>
<p>A cone crusher diagram helps users understand the internal arrangement of the machine. It can show the position of important components such as the mantle, concave liner, main shaft, eccentric assembly and crushing chamber.</p>
<h3>Importance of Technical Drawings</h3>
<p>Studying a diagram is useful when learning the cone crusher working principle because it shows how the different parts work together during crushing. It can also help maintenance teams identify components when inspecting the machine or discussing replacement requirements.</p>
<p>A general cone crusher diagram may not match every model. Always refer to the manufacturer's drawing for the correct component arrangement and identification of parts.</p>
<h2>Cone Crusher Applications in Mining, Quarrying and Aggregate Production</h2>
<h3>Use of Cone Crushers in Mining</h3>
<p>A Cone Crusher is used in industries where hard rocks and minerals need further size reduction after primary crushing. In mining operations, it can process material that has already passed through the initial crushing stage. The crushed material may then move to screening or other processing equipment depending on the plant layout.</p>
<h3>Applications in Quarrying and Stone Crushing</h3>
<p>Quarrying is another important application. Cone crushers help reduce the size of extracted rocks and produce material for different construction and infrastructure requirements. They are also used in aggregate plants where the required output size and material grading are important.</p>
<h3>Role in Multi-Stage Crushing Plants</h3>
<p>In a typical crushing plant, a jaw crusher may be used for primary crushing and a cone crusher for secondary or tertiary crushing. This arrangement allows the plant to process larger feed material through more than one stage. The actual equipment combination depends on the rock type, production target and final product requirements.</p>
<h2>100 TPH Cone Crusher and Capacity Considerations</h2>
<h3>Understanding the 100 TPH Production Requirement</h3>
<p>Buyers searching for a 100 TPH cone crusher are generally looking for equipment that can support a production target of around 100 tonnes per hour. However, actual output is not determined by the machine name or capacity rating alone.</p>
<h3>Factors That Influence Crusher Capacity</h3>
<p>The production capacity of a cone crusher depends on several factors, including the size and hardness of the feed material, feed distribution, crushing chamber, discharge setting and operating conditions. The performance of the complete plant also depends on how the crusher works with feeders, conveyors, screens and other equipment.</p>
<h3>Selecting the Right Capacity Model</h3>
<p>Before selecting a 100 TPH cone crusher, it is important to discuss the required feed size, material type and final output. Buyers should check the manufacturer's capacity chart and technical specifications to confirm whether a particular model is suitable for their production target.</p>
<h2>Cone Crusher Parts and Maintenance Requirements</h2>
<h3>Inspection of Crushing Components</h3>
<p>Regular maintenance helps keep a cone crusher in suitable working condition. The mantle and concave liners should be inspected for wear because their condition affects the crushing chamber and product size. Bearings, drive components and lubrication arrangements also require attention according to the manufacturer's maintenance schedule.</p>
<h3>Hydraulic and Mechanical Maintenance</h3>
<p>For models equipped with a hydraulic system, operators should check the relevant hydraulic components and follow the recommended inspection procedure. Any unusual noise, vibration, temperature change or variation in output should be investigated rather than ignored.</p>
<h3>Importance of Using Suitable Replacement Parts</h3>
<p>Using the correct replacement parts is equally important. Cone crusher parts should match the machine model and its technical requirements. Using the correct components helps avoid compatibility problems and supports reliable operation.</p>
<h2>Cone Crusher Parts PDF and Technical Documentation</h2>
<h3>Information Available in Cone Crusher Parts PDFs</h3>
<p>A cone crusher parts PDF can be useful for operators, maintenance teams and buyers who need information about machine components. Depending on the manufacturer, technical documents may include parts identification, assembly drawings, machine specifications and maintenance instructions.</p>
<h3>How Technical Documents Help Maintenance Teams</h3>
<p>These documents help users understand the arrangement of the machine and identify the components required for inspection or replacement. They can also make communication between the plant team and manufacturer easier when discussing spare parts or servicing.</p>
<p>Always use the documentation supplied for the exact cone crusher model. A parts diagram or PDF from another machine may show a different design and component arrangement.</p>
<h2>Cone Crusher Price and Factors That Affect It</h2>
<h3>Machine Configuration and Capacity</h3>
<p>The cone crusher price depends on the model, machine configuration, capacity and technical requirements. The type of material being crushed and the expected production output can also influence the equipment selection.</p>
<h3>Maintenance and Operating Costs</h3>
<p>A buyer should not compare cone crusher prices based only on the initial cost. It is also important to consider the machine's suitability for the application, replacement part requirements, maintenance needs and compatibility with the existing plant.</p>
<h3>Getting an Appropriate Machine Quotation</h3>
<p>For a suitable quotation, buyers should share details about the material, feed size, required output size and expected production capacity. These details help the manufacturer understand the application and recommend an appropriate cone crusher machine.</p>
<h2>Cone Crusher Manufacturer in India: Choosing the Right Supplier</h2>
<h3>What to Check Before Selecting a Manufacturer</h3>
<p>When searching for a cone crusher manufacturer in India, buyers should consider the manufacturer's product range, technical knowledge and ability to understand different crushing requirements. The machine should be selected according to the material, plant capacity and required output rather than price alone.</p>
<p>It is also useful to review the manufacturer's technical specifications, available documentation and support for machine maintenance. A clear discussion about the application can help avoid selecting equipment that does not match the production requirement.</p>
<h3>Mewar Hi-Tech as a Crushing Equipment Manufacturer</h3>
<p>Mewar Hi-Tech manufactures crushing and screening equipment for mining, quarrying and aggregate processing applications. Its range includes jaw crushers, cone crushers and other machines used in material processing plants. Buyers can discuss their project requirements with the company to understand the available equipment options.</p>
<h2>Why Choose Mewar Hi-Tech for Cone Crusher Requirements?</h2>
<h3>Crushing Equipment for Different Industrial Applications</h3>
<p>Choosing a suitable crusher is an important decision for any industrial crushing plant. The equipment must match the material being processed and the production target of the operation. <a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> provides crushing and screening equipment for customers involved in mining, quarrying and aggregate production.</p>
<h3>Finding a Suitable Cone Crusher Configuration</h3>
<p>Its product range includes cone crushers and jaw crushers for different stages of material reduction. Customers can review the available machine details and discuss their requirements before deciding on a suitable configuration.</p>
<p>Whether you are planning a new crushing plant or looking to upgrade existing equipment, it is important to consider the complete production process. Mewar Hi-Tech can help you explore its crushing equipment range according to your application and plant requirements.</p>`
  },
  {
    slug: "roll-crusher",
    name: "Roll Crusher",
    category: "Crushers",
    subCategory: "Roll Crusher",
    shortDescription: "The Roll Crusher is designed for efficient size reduction of rocks, minerals and other materials. It delivers consistent crushing performance for mining, quarrying and industrial applications.",
    heroImage: "/images/roll-crusher-hero.webp",
    mainImage: "/images/roll-crusher.webp",
    model3d: "/3d-model-proudct-images/roll_crusher.glb",
    seoTitle: "Roll Crusher Manufacturer in India | Mewar Hi-Tech",
    seoDescription: "The Roll Crusher is designed for efficient size reduction of rocks, minerals and other materials in mining and industrial applications. Request a quote.",
    introText: "The Roll Crusher is designed for efficient size reduction of rocks, minerals and other materials. It delivers consistent crushing performance for mining, quarrying and industrial applications.",
    features: [
      "Adjustable roll spacing allows quick control over the output size for different crushing requirements.",
      "Heavy-duty compression springs provide release protection when uncrushable metal enters the crushing chamber.",
      "Replaceable segmented alloy steel roll shells make maintenance easier and reduce replacement time.",
      "The strong crusher frame supports stable operation during continuous material size reduction.",
      "The efficient roll crushing mechanism delivers uniform output with reduced fines in suitable materials."
    ],
    gallery: [],
    video: null,
    specsTable: {
      headers: [
        "S.No",
        "Model",
        "Machine Size (mm)",
        "Rec. Feed (mm)",
        "Capacity (TPH)",
        "Speed (RPM)",
        "Power (HP)",
        "Weight (Tons)"
      ],
      sections: [
        {
          title: "Technical Specifications",
          rows: [
            ["1", "KRC9060", "900x600", "20", "30-35", "100-120", "50X6", "6.00"],
            ["2", "KRC1050", "1000x500", "20", "35-40", "100-120", "60X2", "6.50"]
          ]
        }
      ]
    },
    faqs: [
      {
        question: "How does a Roll Crusher reduce the size of materials?",
        answer: "A Roll Crusher reduces material size by passing it between two rotating rolls. As the material enters the gap, the rolls apply pressure and break it into smaller pieces. The final output size depends on the roll gap, feed material and machine settings."
      },
      {
        question: "What is the difference between a Double Roll Crusher and other crushers?",
        answer: "A Double Roll Crusher uses two rotating rolls to crush material through compression. A jaw crusher uses a fixed jaw and a moving jaw, while a cone crusher compresses material between a mantle and a concave liner. The right crusher depends on the material, required output size and production requirements."
      },
      {
        question: "Which materials can be processed in a Roll Crusher?",
        answer: "A Roll Crusher can be used to process suitable rocks, minerals and other industrial materials that require controlled size reduction. The right machine depends on the material's hardness, feed size and required output. Before selecting a crusher, it is important to check whether the material is suitable for roll-based crushing."
      },
      {
        question: "What factors determine the output size of a Roll Crusher?",
        answer: "The output size of a Roll Crusher mainly depends on the gap between the rolls, the speed of rotation, the feed material and the surface profile of the roll shells. Proper machine adjustment helps maintain the required product size during operation."
      },
      {
        question: "What should be checked during Roll Crusher maintenance?",
        answer: "Regular maintenance involves checking roll shell wear, inspecting bearings and lubrication points, verifying drive belt condition and testing compression springs. Timely inspections help maintain crushing performance and reduce downtime."
      }
    ],
    articleContent: `<h2>Roll Crusher for Efficient Material Size Reduction</h2>
<p>Choosing the right crushing machine depends on the type of material, the required output size and the production needs of the plant. A Roll Crusher is used in material processing applications where controlled size reduction is important. It reduces material by passing it between rotating rolls that apply pressure to break larger pieces into smaller sizes.</p>
<p>Mewar Hi-Tech offers crushing equipment for industries involved in mining, quarrying and material processing. A roll crusher can be considered for applications where the feed material and required product size are suitable for roll-based crushing. Understanding its working principle, roll arrangement and operating requirements helps buyers select the right machine for their plant.</p>
<h2>What Is a Roll Crusher?</h2>
<p>A Roll Crusher is a size-reduction machine that uses two rotating rolls to crush material. Depending on the machine design, the rolls may rotate towards each other and draw material into the gap between them. Pressure applied by the rolls breaks the material into smaller pieces before it leaves through the discharge area.</p>
<p>Roll crushers are used in different industrial applications where controlled crushing is required. Their suitability depends on the material's hardness, size, moisture content and the required final output.</p>
<p>In a multi-stage crushing plant, a roll crusher may be used alongside other machines. For example, a <a href="https://www.mewarhitech.com/products/jaw-crusher">jaw crusher</a> can handle larger material during primary crushing, while a roll crusher can be used for a later size-reduction stage when the material and plant requirements allow it.</p>
<h2>How Does a Roll Crusher Work?</h2>
<p>The working principle of a roll crusher is based on compression. Material enters the machine from the top and moves towards the space between the rotating rolls. As the rolls turn, they pull the material into the crushing gap and apply pressure to break it.</p>
<p>The size of the crushed material is influenced by the gap between the rolls, the feed material and the operating conditions. Once the material has been reduced to a size that can pass through the gap, it moves out of the machine through the discharge section.</p>
<p>Correct feeding is important for smooth operation. The material should be distributed properly across the working width of the rolls to support consistent crushing. Operators should also follow the manufacturer's recommendations for roll gap adjustment, inspection and maintenance.</p>
<h2>What Is a Double Roll Crusher?</h2>
<p>A Double Roll Crusher is a type of roll crusher that uses two cylindrical rolls to reduce material size. The rolls rotate towards each other, allowing the feed material to enter the crushing gap. Pressure between the rolls breaks the material into smaller pieces.</p>
<p>The crushing process depends on the roll diameter, roll surface, gap setting and characteristics of the material. These factors influence how effectively the machine handles the feed and the size of the final product.</p>
<p>Double roll crushers are used in industrial material processing where their crushing action is suitable for the application. Before selecting a machine, buyers should check the feed size, material hardness, required output and expected production capacity.</p>
<h2>Understanding the Angle of Nip in Roll Crusher</h2>
<p>The angle of nip in a roll crusher is an important concept in understanding how material enters the crushing gap. It refers to the angle formed between the contact points of the material and the two rolls during the crushing process.</p>
<p>For successful crushing, the rolls must be able to grip the material and pull it into the gap. If the material cannot be gripped properly, it may slip instead of entering the crushing zone. The angle of nip therefore has a direct relationship with the ability of the rolls to capture the feed material.</p>
<p>The angle of the nip is influenced by factors such as roll diameter, roll spacing and the size of the material being fed. Material characteristics also affect how easily it is gripped. Understanding this concept is useful when evaluating roll crusher design and deciding whether a particular machine is suitable for the required feed material.</p>
<h2>Roll Crusher Diagram and Its Main Components</h2>
<p>A roll crusher diagram helps explain the arrangement of the machine and the movement of material during crushing. It generally shows the two rolls, the feed opening, the crushing gap and the discharge area. These parts work together to reduce the size of the material.</p>
<p>The rolls are the main crushing components. Their surface design and condition affect how material is gripped and crushed. The frame supports the machine assembly, while the drive arrangement provides the movement needed to rotate the rolls. The gap between the rolls determines the space through which crushed material can pass.</p>
<p>Studying a roll crusher diagram can make it easier to understand the machine's working principle. However, component arrangements may vary between models. Buyers and maintenance teams should refer to the manufacturer's technical drawing for the exact machine design.</p>
<h2>Applications of Roll Crusher in Industrial Crushing</h2>
<p>A roll crusher can be used in industrial operations where material needs to be reduced to a more manageable size. Its suitability depends on the characteristics of the feed and the required product.</p>
<p>In mining and mineral processing, roll crushers may be used for size reduction at different stages of a processing plant. They can also be considered in selected quarrying and aggregate applications where the material is appropriate for roll-based crushing.</p>
<p>The machine may form part of a larger crushing setup that includes feeders, conveyors, screens and other crushers. The complete arrangement should be planned according to the required production capacity and final material size.</p>
<h2>Roll Crusher vs Jaw Crusher: Understanding the Difference</h2>
<p>A roll crusher and a jaw crusher both reduce material size, but they use different crushing mechanisms. The following table highlights their main differences.</p>
<table>
  <thead>
    <tr>
      <th>Comparison Factor</th>
      <th>Roll Crusher</th>
      <th>Jaw Crusher</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Working Principle</td>
      <td>Uses two rotating rolls to apply pressure and crush material.</td>
      <td>Uses a fixed jaw and a moving jaw to compress and break material.</td>
    </tr>
    <tr>
      <td>Crushing Mechanism</td>
      <td>Reduces material through compression between rotating rolls.</td>
      <td>Reduces material through compression between two jaw plates.</td>
    </tr>
    <tr>
      <td>Main Application</td>
      <td>Used for controlled size reduction where roll-based crushing is suitable.</td>
      <td>Commonly used for primary crushing of large rocks and materials.</td>
    </tr>
    <tr>
      <td>Feed Material</td>
      <td>Suitable for materials that can be effectively gripped and crushed between the rolls.</td>
      <td>Can handle larger feed material depending on the machine model.</td>
    </tr>
    <tr>
      <td>Output Size</td>
      <td>Depends on the gap between the rolls and material characteristics.</td>
      <td>Depends on the jaw opening, discharge setting and material properties.</td>
    </tr>
    <tr>
      <td>Plant Usage</td>
      <td>Can be used at suitable stages of a material processing plant.</td>
      <td>Commonly used at the primary crushing stage.</td>
    </tr>
  </tbody>
</table>
<p>The choice between a roll crusher and a jaw crusher depends on the feed material, required capacity, final product size and position of the machine in the processing line. In some crushing plants, both machines are used at different stages to achieve the required output.</p>
<h2>Factors to Consider Before Choosing a Roll Crusher</h2>
<p>Selecting a roll crusher requires a clear understanding of the material and production requirements. The feed size is one of the first things to consider because the machine must be suitable for the material entering the rolls. Material hardness and moisture content should also be reviewed because they can affect the crushing process.</p>
<p>The required output size is another important factor. The roll gap and machine configuration should be suitable for the final product requirement. Buyers should also consider the expected production capacity and how the roll crusher will work with other equipment in the plant.</p>
<p>Maintenance access, replacement components and manufacturer support are worth reviewing before making a purchase. Comparing these details helps buyers choose a crusher that matches their actual operating conditions.</p>
<h2>Roll Crusher Capacity and Output Size</h2>
<p>The capacity of a roll crusher depends on its design and the material being processed. Roll diameter, roll width, rotational speed and the gap between the rolls can influence the amount of material handled by the machine.</p>
<p>Feed size, material hardness and moisture content also affect production. A machine that performs well with one type of material may produce a different output when the feed characteristics change.</p>
<p>For this reason, buyers should not select a roll crusher based on capacity alone. The required feed size, final product size and expected production rate should be discussed with the manufacturer. The machine's technical specifications should be checked before confirming the model.</p>
<h2>Roll Crusher Maintenance and Operating Considerations</h2>
<p>Regular inspection is important for maintaining the performance of a roll crusher. The roll surfaces should be checked for wear and damage because their condition affects how material is gripped and crushed. The drive arrangement, bearings and other moving components should also be inspected according to the manufacturer's maintenance schedule.</p>
<p>The roll gap should be checked to make sure it matches the required output setting. Feeding should remain consistent, and material that falls outside the machine's recommended operating range should be avoided.</p>
<p>Following the correct operating and maintenance instructions can help reduce unexpected interruptions. Maintenance requirements may differ between models, so operators should always refer to the documentation provided for their machine.</p>
<h2>Why Choose Mewar Hi-Tech for Roll Crusher Requirements?</h2>
<p>Choosing a suitable crusher manufacturer is important when planning a new crushing plant or upgrading existing equipment. The machine should match the material characteristics, production target and required output size.</p>
<p><a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> manufactures crushing and screening equipment for industrial applications. Its product range supports customers involved in mining, quarrying and material processing. Buyers can review the available equipment and discuss their application requirements before selecting a suitable crushing solution.</p>
<p>Whether a project requires a roll crusher, jaw crusher or other crushing equipment, the selection should be based on the complete plant requirement. Understanding the feed material and production process helps identify the right machine for the job.</p>`
  },
  {
    slug: "horizontal-shaft-impactor",
    name: "HSI Crusher (Horizontal Shaft Impactor)",
    category: "Impactors",
    subCategory: "Impactor",
    shortDescription: "High-reduction secondary impactor delivering cubical aggregates with tight flakiness control.",
    heroImage: "/images/horizontal-shaft-impactor-hero.webp",
    mainImage: "/images/horizontal-shaft-impactor.webp",
    model3d: "/3d-model-proudct-images/horizontal_shaft.glb",
    seoTitle: "Horizontal Shaft Impactor (HSI) | Mewar Hi-Tech",
    seoDescription: "Horizontal shaft impactor for secondary crushing with good product shape. See features and request a quote from Mewar Hi-Tech.",
    introText: "Mewar Hi-Tech's product series of Horizontal Shaft impactor is widely used in the mining, energy and chemical industry. The Horizontal Shaft Impactor has reasonable structure, high productivity, easy maintenance and safe performance. The most remarkable advantage of this machine is that its completed item is fit as a fiddle, non-tensile and crevice. Our Horizontal Shaft Impactor is known for the most outstanding advantage of the delivering goods cubic shapes, non-tensile and cranny products. Not only do they find a wide application in various industries but is also the first choice of crushing industries.",
    features: [
      "High reduction ratio and crushing efficiency, no-board connection; with blow bar of Chrome Steel.",
      "Impact plate has a special shape, with easy maintenance and reliable operation, connected with locking sleeve assembly and the blow bar of high chrome steel.",
      "Hydraulic or hand opening, impact plate with a special shape, crushing product with cubical shape."
    ],
    gallery: [
      "/images/horizontal-shaft-impactor-1.jpg",
      "/images/horizontal-shaft-impactor-2.jpg",
      "/images/horizontal-shaft-impactor-3.jpg"
    ],
    video: null,
    specsTable: {
      headers: [
        "S.No",
        "Model",
        "Machine Size (mm)",
        "Machine Size (Inch)",
        "Rec. Max Feed (mm)",
        "Rec. Max Feed (Inch)",
        "Throughput Capacity (TPH)",
        "Rotor (RPM)",
        "Power (HP)",
        "Weight (Tons)"
      ],
      sections: [
        {
          title: "Technical Specifications",
          rows: [
            ["1", "KHSI 8-08 / KHSI M-08", "800x800", "32x32", "40 / 200", "1.6 / 8", "24-40 / 50-70", "900-1000 / 750-850", "75", "7.00"],
            ["2", "KHSI-D 1010 / KHSI-V 1010", "1000x1000", "40x40", "40 / 250", "1.6 / 10", "70-90 / 100-140", "800-900 / 650-750", "150", "11.00"],
            ["3", "KHSI-D 1212 / KHSI-V 1212", "1200x1200", "48x48", "40 / 300", "1.6 / 12", "100-125 / 140-200", "700-800 / 600-700", "215", "13.00"],
            ["4", "KHSI-D 1315 / KHSI-V 1315", "1300x1500", "50x60", "40 / 400", "1.6 / 16", "140-170 / 180-230", "600-750 / 550-650", "330", "15.00"],
            ["5", "KHSI-D 1320 / KHSI-V 1320", "1350x2000", "54x80", "40 / 350", "1.6 / 14", "180-220 / 250-300", "750-850 / 600-700", "415", "16.00"]
          ]
        }
      ]
    }
  },
  {
    slug: "vertical-shaft-impactor",
    name: "VSI Crusher (Vertical Shaft Impactor)",
    category: "Impactors",
    subCategory: "Impactor",
    shortDescription: "Tertiary impact crusher for high-spec manufactured sand and aggregate shaping.",
    heroImage: "/images/vertical-shaft-impactor-hero.webp",
    mainImage: "/images/vertical-shaft-impactor.webp",
    model3d: "/3d-model-proudct-images/verticle_shaft_impactor.glb",
    seoTitle: "Vertical Shaft Impactor (VSI) | Mewar Hi-Tech",
    seoDescription: "Vertical shaft impactor for tertiary crushing and shaping aggregates and manufactured sand. View details and request a quote from Mewar Hi-Tech.",
    introText: "Mewar Hi-Tech's Impact Crusher-VSI Crusher incorporates rock-on-rock crushing technology that has revolutionized the aggregates and mineral industries worldwide. It is designed for low services requirement, with ease of lubrication and the assurance of continuous services. Mewar Hi-Tech VSI is an excellent third and fourth stage reduction unit, combing a unique crushing and grinding action in a single machine for the processing of abrasive friable or sticky material.",
    features: [
      "Competitive cost, especially when compared with conventional crushing equipment.",
      "Low service and maintenance requirements, minimum operating and wear cost.",
      "Produce and product of superior cubical shape due to preferential crushing action.",
      "Quick balance rotor, rock-on-rock technology minimizes wear part requirements."
    ],
    gallery: [],
    video: null,
    specsTable: {
      headers: [
        "S.No",
        "Model",
        "Recommended Feed Size (mm)",
        "Throughput Capacity (TPH)",
        "Speed (RPM)",
        "Drive (HP)",
        "Approx Weight (in Ton)"
      ],
      sections: [
        {
          title: "Technical Specifications",
          rows: [
            ["1", "KVSI-S 1500 / KVSI-M 1500", "10-20 / 20-40", "20-30 / 30-50", "1500-1750", "75", "4.50"],
            ["2", "KVSI-S 1600 / KVSI-M 1600", "12-20 / 20-50", "80-100 / 100-150", "1300-1500", "215", "6.70"],
            ["3", "KVSI-S 1800 / KVSI-M 1800", "12-30 / 30-50", "110-130 / 110-130", "1200-1400", "335", "8.50"]
          ]
        }
      ]
    }
  },
  {
    slug: "sand-making-machine",
    name: "SMM Crusher (Sand Making Machine)",
    category: "Impactors",
    subCategory: "Impactor",
    shortDescription: "Advanced sand maker producing high-grade concrete sand from crushed rock.",
    heroImage: "/images/sand-making-machine-hero.webp",
    mainImage: "/images/sand-making-machine.webp",
    model3d: "/3d-model-proudct-images/sand_making_machine.glb",
    seoTitle: "Sand Making Machine | Mewar Hi-Tech",
    seoDescription: "Sand making machine for producing manufactured sand from crushed rock. See features and request a quote from Mewar Hi-Tech, Udaipur.",
    introText: "Mewar Hi-Tech's Sand Making Machine is widely used for fines size reduction of mineral product including metal and non-metal ore, fireproof material, bauxite, diamond dust, glass raw materials, architectural materials, artificial Materials of all sorts of metal ores.",
    features: [
      "The Structure is simple, and the operating cost is low.",
      "High efficiency and low power consumption.",
      "It is more suitable for crushing materials of mid-hardness and high hardness.",
      "The product has a cubic shape, the density of piling up is high and the iron pollution is low.",
      "Slightly influenced by the humidity of material.",
      "The working noise is less than 75 decibels and dust pollution is on lower side."
    ],
    gallery: [],
    video: null,
    specsTable: {
      headers: [
        "S.No",
        "Machine Size (mm)",
        "Machine Size (Inch)",
        "Model",
        "Feed Size MM",
        "Feed Size Inch",
        "Output TPH (Min/Max)",
        "RPM",
        "Drive HP",
        "Approx Total W.T. (in Ton)"
      ],
      sections: [
        {
          title: "Technical Specifications",
          rows: [
            ["1", "800x800", "32x32", "KSMM88", "20", "0.8", "10mm-20mm", "650-750", "75", "4.6"],
            ["2", "1000x1000", "40x40", "KSMM1010", "25", "1.0", "20mm-35mm", "650-700", "150", "12.0"],
            ["3", "1200x1200", "48x48", "KSMM1212", "30", "1.2", "30mm-60mm", "600-650", "200", "15.0"]
          ]
        }
      ]
    }
  },
  {
    slug: "vibrating-screen",
    name: "Vibrating Screen",
    category: "Screens",
    subCategory: "Screen",
    shortDescription: "High-frequency screening for precise material grading and separation.",
    heroImage: "/images/vibrating-screen-hero.webp",
    mainImage: "/images/vibrating-screen.webp",
    model3d: "/3d-model-proudct-images/vibrating_screen.glb",
    seoTitle: "Vibrating Screen for Aggregates | Mewar Hi-Tech",
    seoDescription: "Vibrating screen for accurate sizing and separation of crushed aggregates. View details and request a quote from Mewar Hi-Tech.",
    introText: "Mewar Hi-Tech's vibrating screen, with a circular motion, is a two bearing free floating vibrating screen which proficiently screens all moderately free-flowing material. The circular throw action is delivered from uneven weights which are attached to the ends of the screening surfaces and ensure that the material travels over the screening surfaces at a constant rate. the amplitude or degree of vibration can be acclimated to fit a difference in obligation by adding a subtracting balance weight plate. The circular motion ensures rapid strait. The yield of the screen relies upon screen tendency; taking care of technique, screen RPM and vibration. We undertake all ranges of vibrating screens as per the capacity of plant and choices of the clients.",
    features: [
      "Sharp sized end products with higher capacity and lower costs. New technology equipped with two bearings and grease lubrication.",
      "Frames are of rugged construction with torsionally rigid tubular cross members.",
      "Perfect circle throw can be adjusted by adding or removing counterweights, discharging bulky goods, gravel, sand, coal ores and coke from hoppers."
    ],
    gallery: [],
    video: null,
    specsTable: {
      headers: [
        "S.No",
        "Model",
        "No. of Deck",
        "Screen Area (Sq Mtr)",
        "Screen Capacity (TPH)",
        "Drive HP",
        "RPM",
        "Approx Weight (in Ton)"
      ],
      sections: [
        {
          title: "Standard Screens",
          rows: [
            ["1", "KVS84", "1", "2.97", "12-19", "5", "800-1000", "1.50"],
            ["2", "KVS104", "3/4", "3.72", "20-29", "7.5", "800-1000", "1.80"],
            ["3", "KVS124", "3/4", "4.46", "30-39", "10", "800-1000", "2.32"],
            ["4", "KVS125", "1/3", "5.57", "40-59", "12.5", "800-1000", "2.92"],
            ["5", "KVS145", "3/4", "6.51", "60-69", "15", "800-1000", "3.01"],
            ["6", "KVS165", "3/4", "7.43", "70-79", "15", "800-1000", "3.94"],
            ["7", "KVS185", "3/4", "8.36", "80-99", "20", "800-1000", "5.39"],
            ["8", "KVS186", "1/3", "9.29", "100-124", "20", "800-1000", "5.77"],
            ["9", "KVS206", "1/3", "11.15", "125-149", "25", "800-1000", "7.10"],
            ["10", "KVS246", "3/4", "13.38", "150-200", "30", "850-950", "8.93"]
          ]
        },
        {
          title: "Heavy Duty Screens",
          rows: [
            ["11", "KVSH166", "1-4", "9", "100-250", "30", "800-1000", "10-12.5"],
            ["12", "KVSH88", "1-4", "11", "200-400", "40-50", "800-1000", "11-13.5"],
            ["13", "KVSH48", "1-3", "13", "300-600", "30X2", "800-1000", "12-14"],
            ["14", "KVSH247", "1-3", "15.6", "330-650", "30X2", "800-1000", "13-15"],
            ["15", "KVSH248", "1-3", "17.8", "400-700", "40X2", "800-1000", "13-15"]
          ]
        }
      ]
    }
  },
  {
    slug: "sand-washer",
    name: "Sand Washer",
    category: "Screens",
    subCategory: "Screen",
    shortDescription: "Advanced washing systems delivering clean, high-quality manufactured sand.",
    heroImage: "/images/sand-washer-hero.webp",
    mainImage: "/images/sand-washer.webp",
    model3d: "/3d-model-proudct-images/sand_washer.glb",
    seoTitle: "Sand Washer | Mewar Hi-Tech",
    seoDescription: "Sand washer for cleaning and sizing manufactured and natural sand in crushing plants. View details and request a quote from Mewar Hi-Tech.",
    introText: "Sand Washers use pressure hydraulic separation with water as the medium to clean and organise sand particles by weight. Bigger particles weigh more, sink and are gathered in the base of the trough. The sand particles are transported to the slanted release end by a double pitched steel spiral shaft with replaceable cast wear shoes. The lighter undesirable particles float to the surface of the claim settling pool and are released over the weirs. Dewatering happens as the winding shaft transports the settled sand up to the grade of the trough and is released.",
    features: [
      "Makes clean high-quality construction sand.",
      "Variable spiral speed and water input control product gradation.",
      "Gear reducers are capable of high reduction ratios to achieve low spiral speeds and high torque outputs.",
      "A head-end shaft to gearbox coupling ensures proper shaft alignment.",
      "A flexible spider coupling protects the rotating shaft from thrust loads and gear reducer against vibrations.",
      "Lower end shaft coupling ensures precise alignment and an easy method for removing the shaft for maintenance."
    ],
    gallery: [
      "/images/sand-washer-pro.webp"
    ],
    video: null,
    specsTable: {
      headers: [
        "S.No",
        "Model",
        "Wheel Diameter (Mtr)",
        "Number of Bucket",
        "Maximum Feed Size",
        "Machine Tank Capacity (Kgs)",
        "Water Tank Capacity",
        "Motor Power",
        "Capacity (TPH)"
      ],
      sections: [
        {
          title: "Technical Specifications",
          rows: [
            ["1", "KSW 50", "2.27", "34", "<8", "3500", "4500", "5.5KW", "40-55"],
            ["2", "KSW 100", "2.50", "38", "<8", "5000", "5000", "7.5KW", "55-75"],
            ["3", "KSW 150", "2.75", "42", "<8", "7000", "6000", "11KW", "75-110"],
            ["4", "KSW 200", "3.10", "48", "<8", "8200", "15000", "15KW", "110-150"]
          ]
        }
      ]
    }
  },
  {
    slug: "belt-conveyor",
    name: "Belt Conveyor",
    category: "Screens",
    subCategory: "Screen",
    shortDescription: "Durable belt conveyors engineered for continuous material transport.",
    heroImage: "/images/belt-conveyor-hero.webp",
    mainImage: "/images/belt-conveyor.webp",
    model3d: "/3d-model-proudct-images/belt_conveyor.glb",
    seoTitle: "Belt Conveyor for Crushing Plants | Mewar Hi-Tech",
    seoDescription: "Belt conveyor for moving crushed material between plant stages. See details and request a quote from Mewar Hi-Tech, Udaipur.",
    introText: "The Belt conveyor is a mechanical material handling equipment that moves materials and products from a point and a level to another. Its maintenance is easy and is generally associated with size reduction equipment. Most of the conveying of the materials is handled by the belt conveyor as it is the most suitable equipment for material transfer.\n\nMewar Hitech offers a wide range of belt conveyors and portable conveyors. Our equipment is ideal for all regular crushing plants and mobile crushing units. The conveyors are designed according to operations, such as transportation, accumulation and sorting, the material sizes, weights and shapes and where the loading and pickup points need to be.",
    features: [
      "Rigid steel truss framework with weather cover protection guards.",
      "Premium EP/NN rubber belts resisting heat, abrasion, and tear.",
      "Three-roll troughing idlers for maximum load cross section."
    ],
    gallery: [
      "/images/belt-conveyor-1.jpg"
    ],
    video: null,
    specsTable: {
      headers: ["Belt Width (mm)", "Conveyor Speed (m/s)", "Trough Angle", "Drive Type", "Max Capacity (TPH)"],
      sections: [
        {
          title: "Technical Specifications",
          rows: [
            ["500 mm", "1.25", "30 deg", "Gear Motor", "80 TPH"],
            ["650 mm", "1.6", "35 deg", "Pulley / Motor", "150 TPH"],
            ["800 mm", "2.0", "35 deg", "Snub Pulley Setup", "300 TPH"]
          ]
        }
      ]
    }
  },
  {
    slug: "vibro-feeder",
    name: "Vibro Feeder",
    category: "Feeders",
    subCategory: "Feeder",
    shortDescription: "Controlled, uniform feeding of bulk material into crushing circuits.",
    heroImage: "/images/vibro-feeder-hero.webp",
    mainImage: "/images/vibro-feeder.webp",
    model3d: "/3d-model-proudct-images/vibro_feeder.glb",
    seoTitle: "Vibro Feeder | Mewar Hi-Tech",
    seoDescription: "Vibro feeder for steady, controlled feeding of rock into crushers and screens. View details and request a quote from Mewar Hi-Tech.",
    introText: "The Vibro Feeder is used for transferring the large size materials and granular material from the hopper to the receiving device uniformly, periodically and continuously in the production flow and to feed material into the crusher continuously and uniformly to the screen. Capacity figures are indicative fir material of 99.88 IBS / CU FT bulk density. The actual capacity result may vary by depending upon the feed, RPM, grading, grit and moisture, etc.",
    features: [
      "Twin eccentric shaft vibrator unit with adjustable weight segments.",
      "Wear-resistant manganese steel liner plates protecting the feeder trough.",
      "Integrated grizzly bars section to bypass fines before crushing."
    ],
    gallery: [],
    video: null,
    specsTable: {
      headers: [
        "S.No",
        "Machine Type",
        "Machine Size (mm)",
        "Machine Size (Inch)",
        "Model",
        "Drive HP",
        "Maximum Feed Size (mm)",
        "Capacity (TPH)",
        "Approx Weight (in Ton)"
      ],
      sections: [
        {
          title: "Vibro Grizzly Feeder",
          rows: [
            ["1", "VIBRO GRIZZLY FEEDER", "1000X3000", "40x120", "KVF 1030", "3HP- 2 NOS", "500", "125-150", "6.00"],
            ["2", "VIBRO GRIZZLY FEEDER", "1200X3000", "48x120", "KVF 1230", "3HP- 2 NOS", "600", "150-200", "6.50"],
            ["3", "VIBRO GRIZZLY FEEDER", "1200X4000", "48x160", "KVF 1240", "5HP- 2 NOS", "750", "200-250", "7.00"],
            ["4", "VIBRO GRIZZLY FEEDER", "1500X5000", "60x60", "KVF 1550", "7.5HP- 2 NOS", "700", "300-350", "8.00"]
          ]
        },
        {
          title: "Vibro Pan Feeder",
          rows: [
            ["1", "VIBRO PAN FEEDER", "800X1600", "32x64", "KVF 816", "1HP- 2 NOS", "175", "50-80", "0.80"],
            ["2", "VIBRO PAN FEEDER", "800X2000", "32x80", "KVF 820", "1.5HP- 2 NOS", "200", "75-100", "1.10"],
            ["3", "VIBRO PAN FEEDER", "1000X2000", "40x80", "KVF 1020", "2HP- 2 NOS", "250", "175-200", "1.20"]
          ]
        }
      ]
    }
  },
  {
    slug: "single-shaft-feeders",
    name: "Single Shaft Feeders",
    category: "Feeders",
    subCategory: "Feeder",
    shortDescription: "Reliable grizzly feeding and scalping in crushing and screening plants.",
    heroImage: "/images/single-shaft-feeders-hero.webp",
    mainImage: "/images/single-shaft-feeders.webp",
    model3d: "/3d-model-proudct-images/single_shaft_feed.glb",
    seoTitle: "Single Shaft Feeders | Mewar Hi-Tech",
    seoDescription: "Single shaft feeders for reliable material feeding in crushing and screening plants. View details and request a quote from Mewar Hi-Tech.",
    introText: "Mewar Hi-Tech's Grizzly is a massive welded frame construction to withstand extreme shock loads. These are basically conveying decks with a combination of pan and grizzly and back & side renewable liners. Grizzly Feeder is non-stopping and ventured grizzly, independently inexhaustible, for material inclining and simple fines passing. It vibrating using installed consists of two contra-rotating eccentric shafts, geared together in oil-bath. The setting of amplitude is affected at the still machine by varying unbalance. Actuation is by 4-pole motor and V-belts drive. Special steel springs are arranged for the installation on concrete or steel supporting structure.",
    features: [
      "Width: 800mm to 1500mm",
      "Length: 2000mm to 6000mm",
      "Capacity: 100 to 600 (TPH)"
    ],
    gallery: [],
    video: null,
    specsTable: {
      headers: [
        "S.No",
        "Model",
        "Machine Size (mm)",
        "Machine Size (Inch)",
        "Drive HP",
        "Capacity (TPH)",
        "Approx Weight (in Ton)"
      ],
      sections: [
        {
          title: "Technical Specifications",
          rows: [
            ["1", "KSSF 1240", "1200X4000", "48 x 160", "10", "150", "2.68"],
            ["2", "KVF 1230", "1200X3000", "48 x 120", "7.5", "125", "2.00"],
            ["3", "KVF 1224", "1200X2400", "48 x 96", "7.5", "100", "1.80"],
            ["4", "KVF 1020", "1000X2000", "40 x 80", "5", "75", "1.40"],
            ["5", "KVF 1030", "1000X3000", "40 x 120", "7.5", "100", "1.85"],
            ["6", "KVF 918", "900X1800", "36 x 72", "3", "40", "1.30"],
            ["7", "KVF 924", "900X2400", "36 x 96", "5", "50", "1.50"],
            ["8", "KVF 816", "800X1600", "32 x 64", "3", "25", "1.00"]
          ]
        }
      ]
    }
  }
];

export function getProductBySlug(slug) {
  return PRODUCTS_DATA.find((item) => item.slug === slug);
}
