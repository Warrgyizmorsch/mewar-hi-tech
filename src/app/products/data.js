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
<p>Cone crushers are generally used after primary crushing equipment such as a <a href="https://www.mewarhitech.com/products/jaw-crusher">jaw crusher</a>. The jaw crusher handles larger feed material during the first stage, while the cone crusher further reduces the material to the required size. This combination is commonly used in crushing plants where different stages of size reduction are needed.</p>
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
    shortDescription: "The HSI Crusher is engineered for effective impact crushing of rocks, aggregates and minerals. It produces well-shaped material with high reduction efficiency for quarrying and construction applications.",
    heroImage: "/images/horizontal-shaft-impactor-hero.webp",
    mainImage: "/images/horizontal-shaft-impactor.webp",
    model3d: "/3d-model-proudct-images/horizontal_shaft.glb",
    seoTitle: "HSI Crusher (Horizontal Shaft Impactor) Manufacturer | Mewar Hi-Tech",
    seoDescription: "The HSI Crusher is engineered for effective impact crushing of rocks, aggregates and minerals with high reduction efficiency. Request a quote from Mewar Hi-Tech.",
    introText: "Mewar Hi-Tech's HSI Crusher is designed to handle demanding impact crushing operations with dependable performance. Its horizontal shaft mechanism delivers powerful impact force to break down rocks and aggregates into smaller sizes. The efficient crushing design supports consistent output and reliable operation in quarrying and material processing applications.",
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
    },
    faqs: [
      {
        question: "What is an HSI Crusher and how does it work?",
        answer: "An HSI Crusher (Horizontal Shaft Impactor) is a crushing machine that uses impact force to reduce the size of rocks and minerals. A high-speed rotor fitted with blow bars strikes the material and throws it against impact plates. This process breaks the material into smaller pieces and helps produce a well-shaped final product."
      },
      {
        question: "What materials can a Horizontal Shaft Impactor crush?",
        answer: "A Horizontal Shaft Impactor is suitable for crushing limestone, rocks, minerals, aggregates, concrete waste and other materials depending on their hardness and abrasiveness. It is widely used in quarrying, mining, road construction and aggregate production."
      },
      {
        question: "What is the capacity of an HSI Crusher?",
        answer: "The capacity of an HSI Crusher depends on its model, rotor size, feed material, feed size and operating conditions. Mewar Hi-Tech offers different HSI Crusher models with capacities ranging from approximately 24 TPH to 300 TPH. The right model can be selected based on the plant's production requirements."
      },
      {
        question: "What are the main advantages of an HSI Crusher?",
        answer: "An HSI Crusher offers a high reduction ratio, efficient crushing performance and well-shaped output material. Its impact-based crushing mechanism supports aggregate production, while its accessible design helps simplify maintenance and replacement of wear parts."
      },
      {
        question: "What is the price of an HSI Crusher?",
        answer: "The price of an HSI Crusher depends on the model, production capacity, rotor configuration, motor power and required specifications. For an accurate quotation, buyers should share their material type, feed size and expected output capacity with Mewar Hi-Tech."
      }
    ],
    articleContent: `<h2>HSI Crusher for Efficient Impact Crushing in Mining and Quarrying</h2>
<p>Crushing equipment plays an important role in producing aggregates, road materials and construction products. The quality of crushed material affects the performance of the next stage of processing. An HSI Crusher is widely used in crushing plants where rocks and minerals need to be reduced in size while maintaining a suitable particle shape.</p>
<p>Mewar Hi-Tech offers crushing solutions for different industrial requirements. Its HSI Crusher is designed for impact crushing operations in quarrying, mining, aggregate production and material processing plants. For plants that require fine crushing and aggregate shaping, a <a href="https://www.mewarhitech.com/products/vertical-shaft-impactor">VSI Crusher</a> may also be considered, depending on the material and output needs.</p>
<p>An HSI Crusher can be used as a secondary or tertiary crushing machine depending on the feed material and plant layout. It is a suitable option for businesses looking for efficient size reduction and consistent aggregate production.</p>
<h2>What Is an HSI Crusher?</h2>
<p>An HSI Crusher, also known as a Horizontal Shaft Impactor, is a crushing machine that reduces material size through repeated impact. It uses a high-speed rotor fitted with blow bars. When material enters the crushing chamber, the rotor strikes it and throws it against impact plates. These impacts break the material into smaller pieces.</p>
<p>The machine is commonly used in aggregate plants, limestone processing units, quarry operations and recycling facilities. Unlike crushers that mainly rely on compression, an HSI Crusher uses impact energy to break the material. This makes it useful for applications where a high reduction ratio and good particle shape are important.</p>
<p>A horizontal shaft impact crusher can process different types of feed material depending on its design, rotor speed and crushing chamber configuration. The right model depends on feed size, material hardness, required output and production capacity.</p>
<h2>How Does an HSI Crusher Work?</h2>
<p>The working principle of an HSI Crusher is based on impact force. Material enters the crushing chamber and moves towards the rotating rotor. The blow bars strike the material at high speed and throw it against impact plates. This action breaks larger pieces into smaller fragments.</p>
<h3>Impact Crushing Through the Rotor</h3>
<p>The rotor is one of the main components of the machine. It rotates at a controlled speed and carries blow bars that come in contact with the feed material. The impact force generated by the rotor helps break down rocks and aggregates. Rotor speed and blow bar arrangement influence the crushing performance and final product size.</p>
<h3>Material Reduction Inside the Crushing Chamber</h3>
<p>After the initial impact, material is thrown against impact plates or breaker plates installed inside the crushing chamber. These plates help reduce the material further. Larger pieces may remain inside for additional crushing, while smaller particles move towards the discharge area.</p>
<h3>Output Size Control</h3>
<p>The final output size depends on the feed material, rotor speed, impact plate setting and crushing chamber design. Proper adjustment helps maintain the required product size. Regular inspection of blow bars and impact plates is important because worn components can affect crushing efficiency.</p>
<h2>Key Features of Mewar Hi-Tech HSI Crusher</h2>
<p>The design of an HSI Crusher plays an important role in its crushing performance, service life and maintenance requirements. Mewar Hi-Tech provides crushing equipment designed for industrial material processing needs.</p>
<h3>Horizontal Shaft Rotor Design</h3>
<p>The horizontal shaft arrangement supports the high-speed rotation required for impact crushing. The rotor delivers the force needed to break down incoming material. Its configuration plays an important role in the machine's overall performance and output consistency.</p>
<h3>Heavy-Duty Crushing Chamber</h3>
<p>The crushing chamber is designed to withstand repeated impact during operation. Its internal arrangement allows material to move through different crushing stages. The impact plates help reduce material size while supporting the production of well-shaped aggregates.</p>
<h3>Replaceable Blow Bars</h3>
<p>Blow bars are important wear components in an HSI Crusher. They directly strike the material during crushing and gradually wear with use. Replaceable blow bars simplify maintenance and allow worn parts to be changed when needed. Their material selection depends on the feed type and its abrasive properties.</p>
<h3>Adjustable Impact Plates</h3>
<p>Impact plates help control the crushing action inside the chamber. Their position can influence the final output size and material reduction. Proper adjustment allows the operator to match the machine's performance with production requirements.</p>
<h2>Advantages of Using an HSI Crusher</h2>
<p>An HSI Crusher offers several advantages for crushing plants that process suitable materials. Its impact-based mechanism supports high material reduction and can help reduce the number of crushing stages required in certain applications.</p>
<h3>High Reduction Ratio</h3>
<p>The impact mechanism can reduce larger feed material into smaller sizes in a single crushing stage. This makes the machine useful for secondary and tertiary crushing operations. The actual reduction ratio depends on feed size, material properties and crusher settings.</p>
<h3>Better Aggregate Shape</h3>
<p>The impact action helps produce cubical and well-shaped aggregates. This is important for construction projects where aggregate shape affects material performance. Properly shaped aggregates are commonly required for concrete production, road construction and asphalt applications.</p>
<h3>Efficient Material Processing</h3>
<p>The machine can process suitable rocks, limestone and other materials at a steady production rate. Its performance depends on the selected model, feed conditions and operating settings. Proper feeding helps maintain a consistent crushing process.</p>
<h3>Convenient Maintenance</h3>
<p>The replacement of blow bars and impact plates is an important part of regular maintenance. A suitable machine design can make inspection and replacement easier. Routine maintenance helps reduce unexpected downtime and maintain output quality.</p>
<h2>Applications of HSI Crusher in Different Industries</h2>
<p>HSI Crushers are used in several industries where impact crushing is suitable for the material being processed.</p>
<h3>Quarrying and Stone Crushing</h3>
<p>Quarry plants use HSI Crushers to reduce limestone and other suitable rocks into aggregates. The crushed material can be used for road construction, concrete production and infrastructure development. The machine helps process material after primary crushing.</p>
<h3>Mining and Mineral Processing</h3>
<p>In mining operations, an HSI Crusher may be used to process selected minerals and softer rocks. Its suitability depends on material hardness and abrasiveness. Highly abrasive materials may require a different crushing solution to reduce wear and operating costs.</p>
<h3>Road Construction</h3>
<p>Road projects require aggregates in different sizes for base layers, sub-base materials and asphalt production. An HSI Crusher can help produce aggregates with suitable particle shape and size. The output can be further screened to separate different aggregate grades.</p>
<h3>Recycling Applications</h3>
<p>HSI Crushers can also be used in certain recycling operations, including the processing of concrete and construction waste. The machine reduces suitable materials and supports the production of recycled aggregates. Feed material should be checked for unwanted metal and contaminants before processing.</p>
<h2>HSI Crusher vs VSI Crusher vs SMM Crusher</h2>
<p>HSI, VSI and SMM crushing machines are used for different material processing requirements. Although they may be found in the same production plant, their crushing mechanisms and typical applications are not identical. Here, SMM refers to a sand making machine.</p>
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>HSI Crusher</th>
      <th>VSI Crusher</th>
      <th>SMM Crusher</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Full Form</td>
      <td>Horizontal Shaft Impactor</td>
      <td>Vertical Shaft Impactor</td>
      <td>Sand Making Machine</td>
    </tr>
    <tr>
      <td>Crushing Mechanism</td>
      <td>Impact through a horizontal rotor</td>
      <td>Impact through a vertical rotor</td>
      <td>Depends on machine design</td>
    </tr>
    <tr>
      <td>Main Application</td>
      <td>Secondary and tertiary crushing</td>
      <td>Fine crushing and shaping</td>
      <td>Sand production</td>
    </tr>
    <tr>
      <td>Typical Feed Material</td>
      <td>Limestone, rocks and aggregates</td>
      <td>Aggregates and suitable minerals</td>
      <td>Suitable rocks and aggregates</td>
    </tr>
    <tr>
      <td>Output Requirement</td>
      <td>Reduced material size with good shape</td>
      <td>Fine material and improved particle shape</td>
      <td>Manufactured sand</td>
    </tr>
    <tr>
      <td>Common Use</td>
      <td>Quarrying and aggregate plants</td>
      <td>Aggregate shaping and fine crushing</td>
      <td>Construction sand production</td>
    </tr>
  </tbody>
</table>
<h3>When Should You Choose an HSI Crusher?</h3>
<p>An HSI Crusher is a suitable option when the production requirement involves reducing material size through impact crushing. It is commonly selected for limestone and other materials that can be processed efficiently using impact force. In sand production applications, an <a href="https://www.mewarhitech.com/products/sand-making-machine">SMM Crusher</a> may be considered as part of the material processing setup.</p>
<h2>HSI Crusher Capacity and Selection Factors</h2>
<p>The production capacity of an HSI Crusher depends on several operating and material-related factors. Feed material, feed size, rotor speed and required product size all influence the actual production rate.</p>
<h3>Feed Size and Material Type</h3>
<p>The size of material entering the crusher should match the machine's recommended feed limit. Oversized material may affect performance and increase the risk of operating problems. Material hardness and abrasiveness also influence the choice of crusher and wear components.</p>
<h3>Required Output Capacity</h3>
<p>The expected production rate is an important factor when selecting an HSI Crusher. A plant processing a large quantity of material may require a different model from a smaller operation. The selected crusher should match the production requirement without creating unnecessary operating costs.</p>
<h3>Final Product Size</h3>
<p>The required output size influences the crusher setting and operating conditions. A smaller product size may require additional crushing effort. Screening equipment can be used after crushing to separate material into different size ranges.</p>
<h3>Plant Layout and Equipment Compatibility</h3>
<p>An HSI Crusher should work efficiently with the other equipment in the plant. The feeding system, conveyor arrangement and screening unit should be considered during selection. A suitable plant layout helps maintain steady material flow.</p>
<h2>Mobile HSI Crusher for Flexible Crushing Operations</h2>
<p>A mobile HSI Crusher is designed for crushing operations where equipment needs to move between different working locations. It combines an impact crusher with a mobile chassis and supporting equipment. This arrangement can be useful for quarrying, construction and recycling projects where the material source changes over time.</p>
<p>A mobile HSI Crusher can reduce the need to transport raw material to a fixed crushing plant. Instead, the machine can be positioned closer to the material source. This may help reduce material handling requirements and improve site flexibility.</p>
<p>Mobile crushing equipment can include a feeder, impact crusher, conveyor and screening unit. The exact configuration depends on the model and application. Operators should consider site conditions, feed material and production requirements before choosing a mobile crushing solution.</p>
<h2>Why Choose Mewar Hi-Tech for HSI Crusher?</h2>
<p>Selecting the right crushing equipment requires an understanding of the material, production capacity and final product requirements. <a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> provides crushing machinery for industrial applications where reliable material processing is important.</p>
<p>Its HSI Crusher is designed for impact-based crushing operations in quarrying, aggregate production and other suitable applications. The machine can be selected according to feed material, required output size and plant production needs.</p>
<p>For businesses planning a new crushing plant or upgrading an existing setup, choosing the right equipment can help improve material flow and production efficiency. The selection process should consider machine capacity, feed conditions, maintenance requirements and compatibility with other equipment.</p>
<h2>Find the Right HSI Crusher for Your Production Needs</h2>
<p>When rocks enter an HSI Crusher, the rotor and blow bars do most of the work. They break the material against impact plates until it reaches the required size. This makes the machine useful for limestone crushing, aggregate production and road construction. Some recycling plants also use it to process concrete waste.</p>
<p>Not every crushing plant has the same requirement. A quarry handling limestone may need a different setup from a plant processing harder rock. Feed size, production target and the shape of the final aggregate all matter when choosing a crusher. Wear parts also deserve attention, especially when the machine runs for long hours.</p>
<p>Mewar Hi-Tech supplies crushing equipment for a range of industrial applications. If you are planning to add an HSI Crusher to your plant, take a closer look at the available models and discuss the material you need to process with the Mewar Hi-Tech team. The right equipment choice starts with understanding the actual work the crusher will handle.</p>`
  },
  {
    slug: "vertical-shaft-impactor",
    name: "VSI Crusher (Vertical Shaft Impactor)",
    category: "Impactors",
    subCategory: "Impactor",
    shortDescription: "The VSI Crusher is engineered for efficient fine crushing and sand production. It delivers well-shaped aggregates for construction, quarrying and mineral processing applications.",
    heroImage: "/images/vertical-shaft-impactor-hero.webp",
    mainImage: "/images/vertical-shaft-impactor.webp",
    model3d: "/3d-model-proudct-images/verticle_shaft_impactor.glb",
    seoTitle: "VSI Crusher (Vertical Shaft Impactor) Manufacturer | Mewar Hi-Tech",
    seoDescription: "The VSI Crusher is engineered for efficient fine crushing and sand production, delivering well-shaped aggregates. Request a quote from Mewar Hi-Tech.",
    introText: "The VSI Crusher is engineered for efficient fine crushing and sand production. It delivers well-shaped aggregates for construction, quarrying and mineral processing applications.",
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
    },
    faqs: [
      {
        question: "What is a VSI Crusher and how does it work?",
        answer: "A VSI Crusher (Vertical Shaft Impactor) is a crushing machine that uses a high-speed vertical rotor to reduce material size. It accelerates the feed material and throws it against other rocks or impact surfaces. This process helps produce fine material and well-shaped aggregates for construction and industrial applications."
      },
      {
        question: "What is a VSI Crusher used for?",
        answer: "A VSI Crusher is mainly used for fine crushing, aggregate shaping and manufactured sand production. It is commonly used in quarrying, mining, construction and aggregate processing plants where a cubical product shape and consistent material size are required."
      },
      {
        question: "Can a VSI Crusher produce M-Sand?",
        answer: "Yes, a VSI Crusher can be used for manufacturing M-Sand from suitable rocks and aggregates. Its impact-based crushing process helps produce fine particles with a suitable shape. The final sand quality depends on the feed material, crusher settings and screening or classification process."
      },
      {
        question: "What is the difference between a VSI Crusher and a Cone Crusher?",
        answer: "A VSI Crusher uses high-speed impact to crush and shape material, while a Cone Crusher reduces material mainly through compression. VSI Crushers are commonly used for fine crushing, aggregate shaping and sand production. Cone Crushers are generally used for secondary and tertiary crushing of hard materials."
      },
      {
        question: "What factors affect VSI Crusher capacity?",
        answer: "VSI Crusher capacity depends on feed size, material hardness, rotor speed, moisture content and the required output size. The machine model and feeding conditions also influence production. Selecting the right crusher according to the plant's requirements helps maintain consistent output and efficient operation."
      }
    ],
    articleContent: `<h2>VSI Crusher for Efficient Fine Crushing and Aggregate Shaping</h2>
<p>The shape and size of aggregates affect how they perform in construction. Concrete, road materials and manufactured sand all require suitable particle characteristics. A VSI Crusher helps producers refine crushed material, particularly when a plant needs fine particles or well-shaped aggregates.</p>
<p>Mewar Hi-Tech offers Vertical Shaft Impactor equipment for quarrying, mining, aggregate production and sand manufacturing. The machine uses high-speed impact to break suitable rocks into smaller particles. It is commonly installed after primary or secondary crushing, where the feed has already been reduced to a manageable size.</p>
<p>Unlike crushers that mainly use compression, a VSI Crusher accelerates material and creates impact inside the crushing chamber. This process can improve particle shape while reducing material size. The right machine depends on feed material, capacity and the required finished product.</p>
<h2>What Is a VSI Crusher?</h2>
<p>A VSI Crusher, also known as a Vertical Shaft Impactor, is a machine that uses a vertically mounted rotor to accelerate material. Feed enters through the top and moves towards the rotor. The rotor throws the particles outward, where they strike other rocks or impact surfaces and break into smaller pieces.</p>
<p>The VSI full form in crusher terminology is Vertical Shaft Impactor. The machine is often used for tertiary or quaternary crushing, especially when the plant needs manufactured sand or cubical aggregates.</p>
<p>A vertical shaft impact crusher can process suitable materials such as granite, basalt, limestone and other rocks. Its performance depends on feed characteristics, rotor speed and crushing chamber design. Very wet, sticky or highly abrasive material may require special consideration before selection.</p>
<h2>How Does a VSI Crusher Work?</h2>
<p>The working principle of a VSI Crusher is based on centrifugal force and impact. Material enters the centre of the rotor. As the rotor spins, it accelerates the feed and releases it into the crushing chamber. The particles collide with rocks or impact surfaces, breaking into smaller fragments. Crushed material then moves to the discharge area and may pass through a screening unit.</p>
<h3>Feeding and Material Distribution</h3>
<p>Steady feeding helps the machine run smoothly. Material should enter within the recommended feed size and be distributed evenly. Oversized or irregular feed can affect performance and cause uneven wear.</p>
<h3>Rotor Impact and Rock-on-Rock Crushing</h3>
<p>The rotor is the main component that generates crushing force. In a rock-on-rock arrangement, particles thrown from the rotor hit a bed of other rocks. The material itself takes part in the crushing action, which can reduce wear on selected metal parts and help produce cubical aggregates.</p>
<p>Rotor speed affects the crushing result. The correct setting depends on the feed and the desired product rather than simply running the machine at its highest speed.</p>
<h3>Discharge and Product Sizing</h3>
<p>After crushing, material leaves the machine and can be screened into different sizes. Oversized particles may be returned for further reduction. This closed circuit can help a plant control product gradation.</p>
<h2>Key Features of Mewar Hi-Tech VSI Crusher</h2>
<p>A VSI Crusher’s components influence output quality, operating stability and maintenance. Mewar Hi-Tech supplies crushing equipment for industrial material processing, with its Vertical Shaft Impactor designed for fine crushing and aggregate shaping.</p>
<h3>Rock-on-Rock Crushing Technology</h3>
<p>The rock-on-rock method lets particles collide with other material inside the chamber. It can limit direct wear on selected surfaces and is useful when cubical aggregate is needed. Results still depend on the material and operating conditions.</p>
<h3>Balanced Rotor Arrangement</h3>
<p>The rotor spins at high speed, so balance is important. An imbalance can create vibration and place extra stress on the machine. Proper balancing, installation and inspection support stable operation.</p>
<h3>Industrial Construction and Wear Parts</h3>
<p>The crusher works under repeated impact. Its body and supporting structure must handle these demands. Rotor tips and other wear components gradually wear during use, so inspection and timely replacement are necessary to protect the machine and maintain output.</p>
<h3>Aggregate Shape</h3>
<p>Impact crushing can produce cubical, well-shaped particles. This matters in concrete, asphalt and road applications where aggregate shape is part of the material specification. Final shape also depends on feed and rotor settings.</p>
<h2>Advantages of Using a VSI Crusher</h2>
<p>A VSI Crusher can be a useful choice when a plant needs fine reduction or better particle shape. Its advantages depend on selecting the machine for the material and production target.</p>
<h3>Improved Particle Shape</h3>
<p>The impact action helps break irregular particles and can produce more cubical aggregates. This is useful for construction applications where shape influences material performance.</p>
<h3>Manufactured Sand Production</h3>
<p>Where suitable rock is available, a VSI Crusher can help produce manufactured sand (M-Sand). The quality of the finished sand depends on the feed, crusher settings and the screening or classification process. The crusher is one part of the overall sand plant.</p>
<h3>Fine Crushing After Primary Stages</h3>
<p>A VSI Crusher is commonly placed after a jaw or cone crusher. The earlier machine handles larger feed, while the VSI refines the material or improves its shape. This arrangement can be useful where final product specifications are demanding.</p>
<h3>Wear Considerations</h3>
<p>Rock-on-rock crushing may reduce wear on some metal surfaces, but it does not eliminate maintenance. Abrasive feed can wear rotor tips and other components. Regular checks help prevent avoidable downtime.</p>
<h2>Applications of VSI Crusher</h2>
<p>VSI Crushers are used where fine crushing and aggregate shaping are needed. Their suitability varies with material hardness, abrasiveness and the final product.</p>
<h3>Quarrying and Aggregate Plants</h3>
<p>Quarries may use a VSI Crusher after primary or secondary crushing to refine aggregate shape and size. The output can be used in concrete, road construction and infrastructure projects. Screening separates it into required grades.</p>
<h3>Manufactured Sand</h3>
<p>A VSI Crusher can be part of an M-Sand plant alongside feeders, screens and classification equipment. It reduces suitable rock into fine particles for construction use. Sand quality is influenced by the full processing arrangement, not only the crusher.</p>
<h3>Mining and Mineral Processing</h3>
<p>Selected minerals and rocks can be processed through a VSI in later crushing stages. The feed should be assessed for hardness and abrasiveness, as highly abrasive material may increase wear and operating cost.</p>
<h3>Road Construction and Recycling</h3>
<p>Well-shaped aggregates are used in road base, asphalt and other infrastructure work. Certain recycling operations may also use impact crushing to process concrete or construction material. Feed should be checked for metal and contaminants before crushing.</p>
<h2>VSI Crusher vs HSI Crusher vs SMM Crusher</h2>
<p>VSI, HSI and SMM machines are designed for different material processing needs. In this comparison, SMM refers to a sand making machine.</p>
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>VSI Crusher</th>
      <th>HSI Crusher</th>
      <th>SMM Crusher</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Full Form</td>
      <td>Vertical Shaft Impactor</td>
      <td>Horizontal Shaft Impactor</td>
      <td>Sand Making Machine</td>
    </tr>
    <tr>
      <td>Crushing Mechanism</td>
      <td>Impact through a vertical rotor</td>
      <td>Impact through a horizontal rotor</td>
      <td>Depends on machine design</td>
    </tr>
    <tr>
      <td>Main Application</td>
      <td>Fine crushing and shaping</td>
      <td>Secondary and tertiary crushing</td>
      <td>Manufactured sand</td>
    </tr>
    <tr>
      <td>Typical Output</td>
      <td>Fine material and cubical aggregates</td>
      <td>Reduced material with suitable shape</td>
      <td>Manufactured sand</td>
    </tr>
    <tr>
      <td>Common Use</td>
      <td>Aggregate plants and sand production</td>
      <td>Quarrying and stone crushing</td>
      <td>Sand manufacturing</td>
    </tr>
  </tbody>
</table>
<h3>When Should You Choose a VSI Crusher?</h3>
<p>Choose a VSI Crusher when the plant needs finer material, manufactured sand or improved aggregate shape. It is usually considered after initial crushing stages. An <a href="https://www.mewarhitech.com/products/horizontal-shaft-impactor">HSI Crusher</a> may suit secondary crushing, while an <a href="https://www.mewarhitech.com/products/sand-making-machine">SMM Crusher</a> may be considered for a sand-focused setup. Selection should reflect feed size, material properties and the required product.</p>
<h2>VSI Crusher Parts Name and Their Functions</h2>
<p>Knowing the main VSI crusher parts name helps operators understand the machine and plan maintenance.</p>
<h3>Rotor Assembly</h3>
<p>The rotor accelerates the feed and directs it into the crushing chamber. Its balance and condition influence performance.</p>
<h3>Feed Tube and Distributor Plate</h3>
<p>The feed tube guides material into the rotor. The distributor plate helps direct it towards the rotor openings. Correct material flow supports even operation.</p>
<h3>Rotor Tips and Wear Parts</h3>
<p>Rotor tips contact material during crushing and wear over time. Inspection and replacement help protect other components and maintain the crushing result.</p>
<h3>Main Shaft, Bearings and Crushing Chamber</h3>
<p>The main shaft supports the rotor, while bearings allow it to rotate. Lubrication and monitoring are important for both. The crushing chamber provides the space for impact and material reduction.</p>
<h2>VSI Crusher Capacity and Selection Factors</h2>
<p>Capacity depends on the model and operating conditions. Feed material, feed size, rotor speed and required output all affect the actual production rate.</p>
<h3>Feed Size and Material</h3>
<p>Incoming material must fit the crusher’s recommended feed range. Hardness and abrasiveness influence the machine choice and wear-part requirements. Oversized feed can affect operation.</p>
<h3>Production Capacity and Product Size</h3>
<p>The selected model should match the plant’s expected output. A smaller operation may not need the same capacity as a large quarry. Product size also affects settings; fine sand production may require different conditions from aggregate shaping.</p>
<h3>Plant Compatibility</h3>
<p>A VSI Crusher operates with feeders, conveyors and screening equipment. These components should be sized and arranged to handle the crusher’s output. A well-planned layout supports steady material flow.</p>
<h2>Why Choose Mewar Hi-Tech for VSI Crusher?</h2>
<p>Choosing crushing equipment requires matching the machine to the feed and finished product. <a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> manufactures crushing machinery for quarrying, mining and aggregate processing applications. Its Vertical Shaft Impactor is designed for fine crushing and aggregate shaping using impact-based material reduction.</p>
<p>The rotor arrangement and crushing method are intended to support stable operation. Actual results depend on feed, settings, installation and maintenance. When comparing the best VSI Crusher manufacturer, review technical specifications such as feed size, throughput, rotor speed and power requirement rather than relying on a general capacity claim.</p>
<p>Mewar Hi-Tech can help businesses evaluate equipment for a new plant or an existing setup. Discussing the material and target product with the supplier can help identify a suitable model.</p>
<h2>Explore VSI Crusher Solutions for Your Plant</h2>
<p>A VSI Crusher helps produce fine aggregates and improve particle shape by accelerating material through a vertical rotor. It is used in sand production, quarrying, aggregate processing and selected mining applications.</p>
<p>The right selection depends on material type, feed size, capacity and the required output. Routine checks of the rotor, wear parts and lubrication system also matter for reliable operation.</p>
<p>Mewar Hi-Tech offers Vertical Shaft Impactor equipment for industrial material processing. Explore the VSI Crusher range and contact the Mewar Hi-Tech team to discuss your plant’s requirements.</p>`
  },
  {
    slug: "sand-making-machine",
    name: "SMM Crusher (Sand Making Machine)",
    category: "Impactors",
    subCategory: "Impactor",
    shortDescription: "The SMM Crusher (Sand Making Machine) is designed to convert hard rocks and aggregates into quality sand. It delivers reliable crushing performance for sand production, construction and quarrying applications.",
    heroImage: "/images/sand-making-machine-hero.webp",
    mainImage: "/images/sand-making-machine.webp",
    model3d: "/3d-model-proudct-images/sand_making_machine.glb",
    seoTitle: "SMM Crusher (Sand Making Machine) Manufacturer | Mewar Hi-Tech",
    seoDescription: "The SMM Crusher (Sand Making Machine) is designed to convert hard rocks and aggregates into quality sand for construction and quarrying. Request a quote.",
    introText: "The SMM Crusher (Sand Making Machine) is designed to convert hard rocks and aggregates into quality sand. It delivers reliable crushing performance for sand production, construction and quarrying applications.",
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
    },
    faqs: [
      {
        question: "What is an SMM Crusher?",
        answer: "An SMM Crusher, also known as a Sand Making Machine, is used to convert crushed rocks, minerals and aggregates into fine sand. It is widely used in sand manufacturing, mining, quarrying and construction industries for producing high-quality manufactured sand and cubical aggregates."
      },
      {
        question: "What is the working principle of a Sand Making Machine?",
        answer: "A Sand Making Machine works by using high-speed impact and crushing forces to reduce the size of raw materials. The material is fed into the crushing chamber, where it undergoes impact and size reduction to produce sand and fine aggregates of the required size."
      },
      {
        question: "What materials can an SMM Crusher process?",
        answer: "An SMM Crusher can process materials such as granite, basalt, limestone, river gravel, bauxite and various metal and non-metal ores. The suitable material depends on its hardness, feed size and the selected machine configuration."
      },
      {
        question: "What is the production capacity of a Sand Making Machine?",
        answer: "The production capacity of a Sand Making Machine depends on its model, feed material, feed size and operating conditions. Mewar Hi-Tech offers different SMM Crusher models to meet varying sand production requirements in mining, quarrying and aggregate processing plants."
      },
      {
        question: "What is the price of an SMM Crusher (Sand Making Machine) in India?",
        answer: "The price of an SMM Crusher in India depends on the machine model, production capacity, motor power and plant configuration. Contact Mewar Hi-Tech to get a suitable Sand Making Machine with technical specifications and a quotation based on your production requirements."
      }
    ],
    articleContent: `<h2>SMM Crusher for Efficient Sand Production</h2>
<p>The SMM Crusher (Sand Making Machine) produces manufactured sand from suitable rocks, minerals and crushed aggregates. It is used in construction, mining, quarrying and aggregate plants that need a steady supply of fine material for concrete, roads and infrastructure projects.</p>
<p>Mewar Hi-Tech offers crushing equipment for industrial material processing. Its SMM Crusher can be considered for sand manufacturing where controlled size reduction and reliable material flow are important. Choosing the right machine helps match production needs with available stone resources.</p>
<h2>What Is an SMM Crusher?</h2>
<p>An SMM Crusher is used to reduce crushed stones and other suitable materials into manufactured sand. It is generally installed after primary or secondary crushing, when the feed has already reached a suitable size.</p>
<p>Manufactured sand, also called M-Sand, is produced by crushing and processing suitable rock. It is commonly used in concrete, masonry, plastering and road construction.</p>
<p>Natural river sand is not available in sufficient quantities in every region. Manufactured sand provides another source of fine aggregate for construction projects. Its quality depends on the raw material, crushing process and screening arrangement. A suitable SMM Crusher helps convert available stone into usable sand while supporting the required grading.</p>
<h2>How Does an SMM Crusher Work?</h2>
<p>The working principle of an SMM Crusher is to reduce feed material through a crushing mechanism. Material enters through the feed opening and moves into the crushing chamber, where crushing forces break it into smaller pieces.</p>
<p>Depending on the design, material may be accelerated and subjected to high-speed impact against internal surfaces or other particles. After crushing, it is discharged and transferred to a screening system. The screen separates particles by size. Oversized material may return for further crushing, while the required sand fraction is collected.</p>
<h3>Material Feeding and Crushing</h3>
<p>Consistent feeding supports stable performance. Feed should remain within the recommended size range because oversized rocks or irregular flow can affect production and increase wear. The crushing chamber design also influences material movement and the effectiveness of size reduction.</p>
<h3>Screening and Final Sand Production</h3>
<p>A vibrating screen separates the crushed material into different sizes and helps maintain the required sand grading. In a closed-circuit arrangement, oversized particles return to the crusher for additional processing. This supports control over product size and reduces coarse material in the final sand.</p>
<h2>Key Features of Mewar Hi-Tech SMM Crusher</h2>
<h3>Designed for Sand Manufacturing</h3>
<p>The SMM Crusher is intended for applications that require manufactured sand. It reduces suitable stone into fine aggregates for construction and infrastructure projects. Selection should be based on feed material, required output size and production demand.</p>
<h3>Efficient Crushing Performance</h3>
<p>The crushing mechanism reduces feed material and supports a steady flow through the machine. Performance depends on material hardness, feed size, moisture and operating conditions. With suitable feed and correct operation, the machine can support consistent sand production.</p>
<h3>Suitable for Different Rock Materials</h3>
<p>The machine may be used to process rocks such as granite, basalt, limestone and gravel. Suitability depends on the material’s physical properties and the machine configuration. Material testing and equipment selection help determine whether the crusher can meet the required conditions.</p>
<h3>Integration with Crushing Plant Equipment</h3>
<p>A sand making machine commonly operates as part of a crushing and screening plant. It can work with feeders, conveyors, vibrating screens and other crushers. A planned layout supports smooth material movement and better control of feeding, screening and oversize return.</p>
<h2>Advantages of Using an SMM Crusher</h2>
<h3>Consistent Manufactured Sand Production</h3>
<p>A properly selected SMM Crusher helps produce manufactured sand with a controlled output size. Final quality depends on the crushing process and screening arrangement. Suitable operating conditions support production for concrete plants, contractors and infrastructure projects.</p>
<h3>Better Utilisation of Stone Resources</h3>
<p>Quarry stone can be processed further to produce manufactured sand, making better use of suitable raw material. A stone crusher sand making machine can be useful where a plant requires both coarse aggregates and fine sand. The equipment layout depends on the material source and product range.</p>
<h3>Supports Plant Operations</h3>
<p>A consistent material flow is important for sand manufacturing. The SMM Crusher can form part of a well-designed processing line that supports regular handling and crushing. Correct feeding, inspection and maintenance help reduce the possibility of unexpected downtime.</p>
<h3>Applications in Construction and Infrastructure</h3>
<p>Manufactured sand from a suitable crushing arrangement may be used in concrete production, road construction, building work and other infrastructure applications. Since grading requirements vary, the crusher and screening system should be selected according to the final product specification.</p>
<h2>VSI Crusher and Its Role in Sand Making</h2>
<p>A <a href="https://www.mewarhitech.com/products/vertical-shaft-impactor">VSI Crusher</a>, or Vertical Shaft Impactor, is widely used in aggregate processing and manufactured sand production. It uses a vertical shaft arrangement to accelerate material and reduce its size through impact.</p>
<p>VSI crushers are often selected when fine aggregates with a controlled particle shape are required. Their suitability depends on feed material, output needs and plant configuration.</p>
<h3>How VSI Crusher Supports Sand Production</h3>
<p>In a VSI Crusher, material is accelerated through the rotor and impacted against surrounding surfaces or other particles. This reduces material size and can improve aggregate shape. VSI equipment is often used in the final crushing stage when manufactured sand is required, with screening separating the product by size.</p>
<p>An SMM Crusher and a VSI Crusher may have related roles in sand manufacturing, but the exact arrangement depends on machine design and plant requirements.</p>
<h2>HSI Crusher for Secondary Crushing Applications</h2>
<p>An <a href="https://www.mewarhitech.com/products/horizontal-shaft-impactor">HSI Crusher</a>, or Horizontal Shaft Impactor, reduces rocks and suitable materials through impact crushing. It is commonly used for secondary crushing when material needs further size reduction.</p>
<p>A horizontal rotor carries blow bars that strike incoming material and throw it against impact plates. This further reduces the material and can produce aggregates with a suitable shape.</p>
<h3>Role of HSI Crusher in a Sand Making Plant</h3>
<p>An HSI Crusher may be placed before a sand making machine when feed needs additional size reduction. It helps prepare material for the next processing stage. The choice between HSI and VSI depends on the crushing stage and product requirements. HSI crushers are generally used for secondary crushing, while VSI crushers are often used for shaping and fine aggregate production.</p>
<h2>SMM Crusher vs VSI Crusher vs HSI Crusher</h2>
<p>These machines serve different functions according to their design and the stage of material processing.</p>
<table>
  <thead>
    <tr>
      <th>Equipment</th>
      <th>Crushing Arrangement</th>
      <th>Common Application</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SMM Crusher</td>
      <td>Sand making equipment for fine aggregate production</td>
      <td>Manufactured sand production</td>
    </tr>
    <tr>
      <td>VSI Crusher</td>
      <td>Vertical shaft impact crushing</td>
      <td>Sand production and aggregate shaping</td>
    </tr>
    <tr>
      <td>HSI Crusher</td>
      <td>Horizontal shaft impact crushing</td>
      <td>Secondary crushing and aggregate reduction</td>
    </tr>
  </tbody>
</table>
<p>Selection should consider feed size, material properties, production capacity and final aggregate specifications. Machine configuration and operating conditions also affect performance.</p>
<h2>Sand Making Machine Price and Selection Factors</h2>
<p>The sand machine price depends on model, production capacity, motor power, feed material and plant configuration. Additional equipment for feeding, screening, conveying and handling can also affect the total cost.</p>
<p>When evaluating an SMM Crusher, consider the complete production requirement rather than only the initial purchase price. A suitable configuration can support steady production and efficient processing.</p>
<h3>What Affects M Sand Machine Price?</h3>
<p>The m sand machine price varies with capacity and the type of raw material. Harder rocks may require a different configuration from softer materials. Required output size also matters: a plant producing fine manufactured sand may need a different arrangement from one producing several aggregate sizes. Screening, motor power and installation requirements can influence project cost.</p>
<h3>Choosing a Small Sand Making Machine</h3>
<p>A small sand making machine may suit lower production requirements or sites with limited space. It can be considered by small aggregate plants and construction material suppliers that do not need a high-volume line.</p>
<p>The machine still needs to match the feed material and output target. A smaller unit may not suit continuous hard-rock processing or high production volumes. An artificial sand making machine should be assessed using its technical specifications, capacity and compatibility with existing equipment. Buyers should also consider maintenance access, power requirements and replacement-part availability.</p>
<h2>Maintenance and Operating Practices for SMM Crusher</h2>
<p>Regular maintenance helps keep a sand making machine operating effectively. Inspect the crushing chamber, wear components, drive arrangement and lubrication system according to the manufacturer’s recommendations.</p>
<p>Check feed material before it enters the machine. Excessive moisture, unsuitable feed size or foreign objects can affect performance. A suitable feed rate helps avoid unnecessary loading.</p>
<p>Inspect wear parts at regular intervals and replace them when needed. Operators should monitor vibration, unusual noise and changes in output quality. Abnormal conditions should be checked before operation continues. Correct installation and following the manufacturer’s operating instructions are important for safe, reliable performance.</p>
<h2>Choose Mewar Hi-Tech SMM Crusher for Your Sand Production Plant</h2>
<p>Choosing an SMM Crusher is an important step in planning a manufactured sand production line. The machine should match the raw material, required sand grading and expected production volume.</p>
<p><a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> provides crushing equipment for different material processing requirements. Its SMM Crusher can be considered for applications where suitable rock is converted into fine aggregates for construction and infrastructure work.</p>
<p>Before selecting a machine, evaluate feed size, material hardness, output requirements, available installation space and supporting equipment. These details help determine a suitable configuration.</p>
<p>For sand production, the right SMM Crusher can support a consistent crushing process and manufactured sand quality. Contact Mewar Hi-Tech to discuss your application, review available specifications and identify a solution for your plant.</p>`
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
    seoTitle: "Vibrating Screen Manufacturer for Aggregates | Mewar Hi-Tech",
    seoDescription: "Mewar Hi-Tech's Vibrating Screen delivers efficient circular-motion screening, smooth material flow and low maintenance. Request a quote today.",
    introText: "Mewar Hi-Tech's Vibrating Screen is designed for efficient screening and smooth material flow. Its circular motion ensures uniform material movement across the screen surface for effective separation. The vibration and amplitude can be adjusted according to material requirements and plant capacity. Built for continuous operation, it delivers reliable screening performance with low maintenance requirements.",
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
    },
    faqs: [
      {
        question: "What is a Vibrating Screen and what is it used for?",
        answer: "A vibrating screen is an industrial screening machine used to separate materials according to their particle size. It is commonly used in mining, quarrying, stone crushing and aggregate plants to separate fine and coarse materials."
      },
      {
        question: "How does a Vibrating Screen work?",
        answer: "A vibrating screen works by using mechanical vibration to move material across a screening surface. Smaller particles pass through the screen mesh while larger particles move towards the discharge end, allowing effective material separation."
      },
      {
        question: "What are the different types of Vibrating Screens?",
        answer: "The common types of vibrating screens include circular motion vibrating screens, linear vibrating screens, horizontal vibrating screens and inclined vibrating screens. Each type is used for different material screening and separation requirements."
      },
      {
        question: "What factors should be considered when choosing a Vibrating Screen?",
        answer: "Important factors include material type, feed size, required output capacity, moisture content, screen mesh size and the number of screening decks. Selecting the right machine helps achieve better screening performance."
      },
      {
        question: "What is the capacity of an industrial Vibrating Screen?",
        answer: "The capacity of an industrial vibrating screen depends on its screen dimensions, number of decks, mesh opening, material properties and feed rate. Mewar Hi-Tech offers vibrating screen solutions based on different industrial screening and plant capacity requirements."
      }
    ],
    articleContent: `<h2>Vibrating Screen for Efficient Material Screening and Separation</h2>
<p>A <strong>Vibrating Screen</strong> plays an important role in mining, quarrying and stone crushing plants. It separates crushed materials into different sizes so they can be used for specific purposes or sent for further processing. From small aggregates to large stone particles, screening helps maintain the required size of material and keeps the production process organised.</p>
<p>Mewar Hi-Tech manufactures industrial screening equipment for plants that handle different types of minerals and aggregates. Its circular motion vibrating screen features a two-bearing free-floating design. The machine uses controlled vibration to move material across the screen surface, allowing smaller particles to pass through while larger pieces travel towards the discharge end.</p>
<p>In sand and aggregate production, screening is often followed by washing to improve the quality of the final material. A <strong><a href="https://www.mewarhitech.com/products/sand-washer">Sand Washer</a></strong> removes unwanted dust, clay and other impurities from sand. While the vibrating screen separates materials according to size, washing equipment helps clean the processed sand before it is supplied for construction and other applications.</p>
<h2>What Is a Vibrating Screen?</h2>
<p>A vibrating screen is a mechanical machine used to separate materials according to their particle size. It has one or more screening decks fitted with mesh or perforated plates. When material enters the machine, vibration spreads it across the screen surface. Smaller particles pass through the openings, while larger particles move towards the discharge outlet.</p>
<p>These machines are commonly installed after primary and secondary crushers. For example, when stones are crushed in a jaw crusher or cone crusher, the resulting material contains particles of different sizes. A vibrating screen separates these particles into the required aggregate grades.</p>
<p>The number of decks depends on how many sizes a plant needs to produce. A single-deck screen separates material into two fractions, while double-deck and multi-deck arrangements can produce several sizes in one operation. This makes the equipment useful for plants supplying aggregates for road construction, concrete production and infrastructure projects.</p>
<h2>Working Principle of Vibrating Screen</h2>
<p>The working principle of a vibrating screen is based on mechanical movement. An electric motor drives the vibrating mechanism, which creates movement in the screen body. This movement allows material to travel across the screening surface while particles pass through openings that match their size.</p>
<p>In a circular motion vibrating screen, unbalanced weights fitted to the ends of the screening shaft generate circular movement. As the machine operates, material moves along the deck and spreads across its surface. Fine particles gradually pass through the mesh, while oversized material continues towards the discharge section.</p>
<p>The screening process depends on factors such as vibration speed, amplitude, feed rate and mesh opening. Amplitude refers to the distance covered by the screen during its movement. Changing the balance weight arrangement can adjust vibration intensity to suit different material conditions.</p>
<p>Material should also be fed evenly across the screen. If too much material enters at one time, particles may not get enough opportunity to pass through the openings. This can affect separation quality and reduce the machine's effective capacity. A steady feed helps maintain better screening results.</p>
<h2>Types of Vibrating Screens</h2>
<p>Different industries use different screening arrangements depending on the material being processed and the required output. The main types of vibrating screens include circular motion, linear, inclined and horizontal designs.</p>
<h3>Circular Motion Vibrating Screen</h3>
<p>A circular motion vibrating screen moves material in a circular path across the screening deck. The movement helps distribute material over the surface and carries it towards the discharge outlet.</p>
<p>This type is widely used in mining, quarrying and aggregate production. It can handle crushed stones, gravel and other moderately free-flowing materials. Mewar Hi-Tech offers circular motion screening equipment for industrial plants that require continuous material separation.</p>
<h3>Linear Vibrating Screen</h3>
<p>A linear vibrating screen uses two vibrating forces to create straight-line movement. Material moves forward along the deck while smaller particles pass through the mesh openings.</p>
<p>These screens are used in applications where controlled material movement and size separation are required. Their design and screen arrangement can be selected according to the properties of the feed material and the production process.</p>
<h3>Inclined Vibrating Screen</h3>
<p>An inclined vibrating screen has a sloping screening surface. Its angle helps material move towards the discharge end with the combined effect of gravity and vibration.</p>
<p>These machines are commonly found in stone crushing plants and aggregate production units. They are used to separate crushed stones into different sizes before the material is transferred to storage or further processing.</p>
<h3>Horizontal Vibrating Screen</h3>
<p>A horizontal vibrating screen has a nearly level screening surface. It uses mechanical movement to carry material across the deck and separate particles according to their size.</p>
<p>Horizontal screens are used in mineral processing and aggregate plants where controlled material movement is required. Their performance depends on the screen design, feed conditions and operating settings.</p>
<h2>Types and Uses of Vibratory Screening</h2>
<p>Vibratory screening is used in several industries to separate materials based on particle size. A <strong>vibratory separator</strong> uses vibration to move material over a screening surface. Depending on its design, it can separate different material sizes and help remove unwanted particles from the main product.</p>
<p>In stone crushing plants, vibrating screens separate crushed stones into aggregate sizes used in road construction, concrete and building projects. The screening stage also identifies oversized stones that may need to return to the crusher for further size reduction.</p>
<p>Mining operations use screening equipment to classify ores, minerals and rock particles. Separating material before the next processing stage helps maintain a suitable feed size and makes material handling easier.</p>
<p>In manufactured sand plants, screening helps separate fine particles and larger stone pieces. The process allows operators to manage the size of the final product according to construction requirements. Different mesh openings can be selected depending on the grade of sand or aggregate being produced.</p>
<p>Vibratory screening is also used in recycling plants. Crushed concrete, construction waste and recovered materials can be separated into different size fractions for reuse. The type of screen depends on the nature of the material and the required output.</p>
<h2>Applications of Vibrating Screen</h2>
<h3>Mining and Mineral Processing</h3>
<p>Mining plants handle large quantities of extracted rock and minerals. A vibrating screen separates these materials into different size ranges before they move to further processing equipment. Proper screening helps control the feed size and supports a steady flow of material through the plant.</p>
<h3>Stone Crushing and Quarrying</h3>
<p>Quarrying operations use vibrating screens to classify crushed stones after the crushing process. The machine separates aggregates into different sizes that can be used for road construction, concrete manufacturing and other building applications.</p>
<h3>Sand and Aggregate Production</h3>
<p>Sand and aggregate plants require proper size separation to maintain product quality. Vibrating screens help separate fine and coarse particles and remove oversized material from the required product. This makes it easier to maintain consistent aggregate grades.</p>
<h3>Construction and Infrastructure</h3>
<p>Construction projects use aggregates of different sizes for concrete, road foundations and other structural work. Screening machines help producers supply material according to the required size specifications.</p>
<h3>Recycling and Material Recovery</h3>
<p>Recycling facilities use vibrating screens to sort processed materials according to size. Crushed concrete, demolition waste and other recovered materials can be separated before reuse or additional processing.</p>
<h2>Key Features of Mewar Hi-Tech Vibrating Screen</h2>
<h3>Two-Bearing Free-Floating Design</h3>
<p>Mewar Hi-Tech's circular motion vibrating screen uses a two-bearing free-floating arrangement. This design supports the movement of the screening body and is suitable for regular industrial screening operations.</p>
<h3>Circular Throw Mechanism</h3>
<p>Unbalanced weights fitted to the screening shaft generate the circular movement required for material separation. This movement helps material travel across the screen surface at a steady rate.</p>
<h3>Adjustable Vibration Amplitude</h3>
<p>The vibration amplitude can be changed by adjusting the balance weight arrangement. This allows the machine to be set according to the material being screened and the operating requirements of the plant.</p>
<h3>Multiple Screen Deck Options</h3>
<p>Different deck arrangements can be selected according to the number of material sizes required. Screen mesh openings also help determine which particles pass through and which remain on the screening surface.</p>
<h3>Continuous Screening Operation</h3>
<p>The machine is developed for continuous screening in mining, quarrying and aggregate plants. Correct installation, suitable feed conditions and regular maintenance help maintain its operating performance.</p>
<h2>Factors to Consider When Selecting a Vibrating Screen</h2>
<p>Before selecting a vibrating screen, it is important to understand the type and quantity of material that needs to be processed. Feed size is one of the main considerations because the screen must handle the incoming material without frequent blockages.</p>
<p>Required output capacity is another important factor. The machine should match the production needs of the plant. If the screening capacity is lower than the crusher output, material can accumulate and affect the overall production process.</p>
<p>Screen mesh size should be selected according to the final product requirements. Plants producing multiple aggregate grades may need a double-deck or multi-deck arrangement. Material properties such as moisture, density and particle shape should also be considered because they affect how easily particles move across the screening surface.</p>
<p>The available installation space, motor requirements and maintenance access are also worth checking before finalising the machine. Discussing these details with the equipment manufacturer can help in selecting a suitable configuration.</p>
<h2>Maintenance Tips for Better Screening Performance</h2>
<p>Regular inspection is important for keeping a vibrating screen in working condition. The screen mesh should be checked for wear, tears and blocked openings. Damaged panels can affect the size separation process and should be replaced when required.</p>
<p>Bearings and the vibrating mechanism also need attention. Lubrication should be carried out according to the manufacturer's instructions. Unusual noise, excessive vibration or a sudden change in operating temperature should not be ignored, as these may indicate a mechanical issue.</p>
<p>The screen body, support structure and connecting bolts should be inspected at regular intervals. Operators should also avoid feeding too much material at once. Uneven loading can affect screening results and place additional stress on machine components.</p>
<p>Following a suitable maintenance schedule helps reduce unexpected stoppages and keeps the screening process running smoothly.</p>
<h2>Choose Mewar Hi-Tech for Industrial Screening Requirements</h2>
<p>The quality of screening has a direct effect on the material produced by a crushing plant. Incorrect separation can lead to mixed aggregate sizes, unnecessary recirculation and problems in further processing. Choosing a suitable Vibrating Screen helps maintain the required material size and supports the overall production process.</p>
<p><a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> provides crushing and screening equipment for mining, quarrying and aggregate processing applications. Its circular motion vibrating screen is designed around industrial screening requirements, with adjustable vibration and a two-bearing free-floating arrangement.</p>
<p>For selecting the right machine, factors such as feed material, required output, screen size and plant capacity should be considered. Contact Mewar Hi-Tech to discuss your screening requirements and find a suitable solution for your crushing and material processing plant.</p>`
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
    },
    faqs: [
      {
        question: "What is a Sand Washer and what is it used for?",
        answer: "A Sand Washer is an industrial machine used to clean sand by removing dust, clay, silt and other unwanted impurities. It is commonly used in sand manufacturing, mining, quarrying and aggregate processing plants to improve sand quality."
      },
      {
        question: "How does a Sand Washing Machine work?",
        answer: "A sand washing machine uses water and mechanical movement to clean sand. During the process, unwanted fine particles mix with water and are discharged, while the cleaned sand is collected for further processing or storage."
      },
      {
        question: "What are the different types of Sand Washing Machines?",
        answer: "Common types include wheel sand washers, spiral sand washers and bucket type sand washers. Each type has a different working mechanism and is selected according to the material, washing requirements and production capacity."
      },
      {
        question: "What factors affect the Sand Washing Machine Price?",
        answer: "The sand washing machine price depends on machine capacity, equipment design, construction quality, washing requirements and additional plant components. Water consumption, installation and maintenance requirements should also be considered when selecting a machine."
      },
      {
        question: "How do I choose the right Sand Washing Plant for my business?",
        answer: "To select the right sand washing plant, consider the raw material type, required production capacity, impurity levels, water availability and final sand quality. Choosing equipment from an experienced manufacturer like Mewar Hi-Tech can help you find a suitable solution for your processing requirements."
      }
    ],
    articleContent: `<h2>Sand Washer for Efficient Sand Cleaning and Washing</h2>
<p>Sand quality plays an important role in construction, concrete production and other building applications. Raw sand collected from natural sources or manufactured through crushing can contain dust, clay, silt and other unwanted particles. A <strong>Sand Washer</strong> helps remove these impurities and improves the quality of sand before it is used in different applications. It is an important part of sand processing plants where clean and properly graded material is required.</p>
<p>Mewar Hi-Tech provides industrial sand washing equipment for aggregate processing and manufactured sand production. The machine is used to wash sand and remove unwanted particles through a controlled water-based cleaning process. It helps improve the appearance and cleanliness of processed sand while supporting the regular production requirements of crushing and screening plants.</p>
<p>In a complete sand processing setup, different machines work together to handle the material. Crushing equipment reduces stone size, screening machines separate particles and washing equipment removes unwanted impurities. A properly planned washing system helps maintain the quality of the final sand and prepares it for construction and other industrial uses.</p>
<h2>What Is a Sand Washer?</h2>
<p>A sand washer is an industrial machine used to clean sand by removing dust, clay, silt and other unwanted materials. During sand production, small impurities can remain mixed with the usable particles. If these impurities are not removed, they may affect the quality and suitability of the final sand.</p>
<p>The machine uses water and mechanical movement to separate unwanted particles from sand. Depending on the equipment design, sand is mixed with water and moved through a washing section. Lighter impurities are carried away with the wastewater, while the cleaned sand is collected for further processing or storage.</p>
<p>Sand washing equipment is commonly installed in manufactured sand plants, stone crushing units and aggregate processing facilities. It is useful for businesses that need to supply cleaner sand for concrete, plastering, road construction and other applications.</p>
<h2>Working Principle of Sand Washer</h2>
<p>The working principle of a sand washer involves washing, separating and discharging sand through the controlled use of water and mechanical movement. The incoming material enters the washing section, where water helps loosen dust, clay and other impurities attached to the sand particles.</p>
<p>As the machine operates, the sand moves through the washing area. Unwanted fine particles mix with water and are carried away through the discharge system. Heavier sand particles remain in the machine and move towards the cleaned sand outlet.</p>
<p>The washing process depends on the water supply, feed material and machine operating conditions. Sand containing more clay or fine dust may require closer attention to the washing arrangement. The water flow should be suitable for the quantity of material being processed so that impurities can be removed without unnecessary loss of usable sand.</p>
<p>After washing, the cleaned sand is discharged for further handling. Depending on the plant arrangement, it may be transferred to a stockpile, dewatering section or another processing stage. Proper control of the washing process helps maintain consistent sand quality.</p>
<h2>Importance of Sand Washing in Construction</h2>
<p>Sand used in construction needs to meet the quality requirements of its intended application. Natural sand and crushed sand may contain unwanted dust, clay and other fine impurities. These materials can affect the properties of concrete and mortar if their quantity is not properly controlled.</p>
<p><strong>Sand washing</strong> helps remove these unwanted particles and improves the cleanliness of the material. This is particularly useful in manufactured sand plants, where crushed stone is processed into sand for construction purposes.</p>
<p>Clean sand is important when preparing concrete mixes because excessive clay, silt and dust can influence water demand and the bonding behaviour of the mix. Washing helps producers control these impurities before the sand reaches the customer. However, the final suitability of sand also depends on grading, particle shape and applicable construction standards.</p>
<p>For sand suppliers and aggregate producers, a suitable washing machine makes it easier to maintain product quality across regular production batches. It also helps reduce the amount of unwanted material in the final product.</p>
<h2>Types of Sand Washing Machines</h2>
<p>Different sand washing machines are used depending on the type of material, washing requirement and production capacity. The machine should be selected according to the characteristics of the incoming sand and the required cleanliness of the final product.</p>
<h3>Wheel Sand Washer</h3>
<p>A wheel sand washer uses a rotating wheel arrangement to wash and clean sand. The wheel collects material from the washing tank and helps separate unwanted impurities through water movement. Cleaned sand is then discharged for further handling.</p>
<p>This type of machine is commonly used in aggregate processing and manufactured sand plants. It is suitable for applications where sand needs regular washing before storage or supply.</p>
<h3>Spiral Sand Washer</h3>
<p>A spiral sand washer uses a rotating spiral mechanism to move sand through a water-filled washing trough. During operation, the spiral lifts and transports the sand while water carries away lighter impurities.</p>
<p>This arrangement is used in sand processing operations where washing and material movement are required in a single machine. Its performance depends on the feed material, water flow and operating conditions.</p>
<h3>Bucket Type Sand Washer</h3>
<p>A bucket type sand washer uses rotating buckets to collect and wash sand. The buckets lift the material from the washing tank, allowing water and unwanted particles to drain away during the process.</p>
<p>This design is used in different aggregate washing applications. The washing arrangement can help recover usable sand while reducing the amount of unwanted fine material in the output.</p>
<h2>Applications of Sand Washer</h2>
<h3>Manufactured Sand Production</h3>
<p>Manufactured sand is produced by crushing hard stones into smaller particles. The crushing process can leave dust and fine impurities mixed with the sand. A sand washing machine helps remove these unwanted particles and prepares the material for construction applications.</p>
<h3>Concrete and Building Construction</h3>
<p><strong>Washing sand for concrete</strong> is important when the raw material contains excessive clay, silt or dust. Clean sand helps producers maintain better control over concrete mix quality. The material should also meet the required grading and quality standards before being used in concrete production.</p>
<h3>Stone Crushing and Quarrying Plants</h3>
<p>Stone crushing plants often produce different sizes of aggregates and manufactured sand. Washing equipment can be installed after crushing and screening to clean the sand before it is stored or supplied. This helps maintain a consistent quality of processed material.</p>
<h3>Road Construction</h3>
<p>Road construction projects require aggregates and sand with suitable size and cleanliness. A sand washer helps remove unwanted impurities from processed sand, making it more suitable for applications where material quality is important.</p>
<h3>Aggregate Processing Plants</h3>
<p>Aggregate producers use washing machines to clean sand obtained from crushing and screening operations. The washed material can be separated, stored and supplied according to customer requirements.</p>
<h2>Role of Belt Conveyor in a Sand Washing Plant</h2>
<p>Material handling is an important part of any sand washing setup. A <strong><a href="https://www.mewarhitech.com/products/belt-conveyor">Belt Conveyor</a></strong> is used to transport sand and aggregates from one machine to another without requiring repeated manual handling. It can transfer raw material towards the washing section and carry processed material to the next stage.</p>
<p>In a sand washing plant, conveyors help connect crushers, vibrating screens, washing machines and stockpile areas. Their length and arrangement depend on the plant layout and the distance between equipment.</p>
<p>A properly planned conveyor system helps maintain a steady material supply to the washing machine. It also makes the overall plant arrangement easier to manage and supports continuous material movement during production.</p>
<h2>Factors Affecting Sand Washing Plant Price</h2>
<p>The <strong>sand washing plant price</strong> depends on the plant configuration, production capacity and type of washing equipment required. A small setup for limited production will have different requirements from a large industrial plant handling high volumes of sand every day.</p>
<p>The type of raw material is another important factor. Sand containing more clay, silt or unwanted impurities may require a different washing arrangement from relatively clean material. Water availability, recycling facilities and the required output quality can also influence the plant design.</p>
<p>The number of machines included in the setup affects the overall investment. A complete plant may include crushers, vibrating screens, sand washers, conveyors, pumps and water management equipment. Installation requirements and available space should also be considered before selecting the equipment.</p>
<h3>What Determines Sand Washing Machine Price?</h3>
<p>The <strong>sand washing machine price</strong> mainly depends on machine size, construction, production capacity and washing mechanism. The type of sand being processed and the required level of cleaning also influence equipment selection.</p>
<p>Buyers should consider more than the initial purchase cost. Water consumption, maintenance requirements, spare parts availability and operating expenses are also important when evaluating a machine. Choosing equipment according to actual production needs can help avoid unnecessary investment and operating difficulties.</p>
<h2>Sand Washing Plant Process</h2>
<p>A typical sand washing plant process begins with the feeding of raw sand or crushed material into the processing system. The material may first pass through a vibrating screen to separate oversized particles before entering the washing section.</p>
<p>The sand then moves towards the washing machine, where water is used to remove dust, clay and other impurities. The unwanted particles are carried away with wastewater, while the washed sand moves towards the discharge section.</p>
<p>Depending on the plant design, the cleaned material may pass through a dewatering arrangement before being transferred to a storage area. Water recovery and recycling systems can also be included to reduce fresh water requirements and manage wastewater more effectively.</p>
<p>Each stage should be selected according to the raw material and production target. A suitable plant arrangement helps maintain a steady feed, reduces unnecessary material handling and supports consistent output quality.</p>
<h2>Choosing Sand Washing Plant Manufacturers in India</h2>
<p>Selecting the right equipment supplier is an important step when setting up a sand processing facility. Businesses looking for <strong>sand washing plant manufacturers in India</strong> should consider the manufacturer's experience with crushing and screening equipment, machine construction and ability to understand different material requirements.</p>
<p>A reliable <strong>sand washing plant manufacturer</strong> should be able to discuss production capacity, raw material conditions, water requirements and plant layout before suggesting equipment. These details help determine which washing arrangement is suitable for the application.</p>
<p>It is also useful to check the availability of technical support, replacement parts and maintenance guidance. Industrial washing equipment operates under regular production loads, so proper support can make a difference to long-term plant operation.</p>
<p>One point worth understanding is that a <strong>pressure washer sand blast kit</strong> is different from an industrial sand washer. A pressure washer attachment is generally used for surface cleaning and abrasive blasting applications, whereas an industrial sand washer processes bulk quantities of sand for aggregate and construction use. Both serve different purposes and should not be treated as the same equipment.</p>
<h2>Maintenance Tips for Sand Washer</h2>
<p>Regular maintenance helps keep a sand washer working properly. The washing section should be checked for accumulated material, blockages and signs of wear. Removing unwanted material from the machine at suitable intervals helps maintain smooth operation.</p>
<p>Moving components, bearings and drive arrangements should be inspected according to the manufacturer's maintenance instructions. Any unusual noise, vibration or change in machine performance should be checked before it develops into a larger mechanical issue.</p>
<p>Water supply lines and discharge sections also need regular inspection. Blocked outlets or irregular water flow can affect the washing process and reduce cleaning efficiency. Operators should also check conveyor connections and feeding arrangements to ensure that material reaches the machine at a steady rate.</p>
<p>Following a planned maintenance schedule helps reduce unexpected stoppages and keeps the washing plant ready for regular production.</p>
<h2>Industrial Sand Washing Solutions by Mewar Hi-Tech</h2>
<p>Clean sand is an important requirement for construction, concrete production and aggregate processing. The right washing equipment helps remove unwanted impurities and prepares sand for its intended application. Selecting a machine according to feed material, production capacity and washing requirements is important for maintaining consistent output.</p>
<p>Mewar Hi-Tech provides crushing and screening solutions for industrial material processing applications. Its equipment range supports different requirements in stone crushing, aggregate production and manufactured sand processing. When planning a sand washing setup, factors such as raw material quality, water availability, plant capacity and material handling should be considered.</p>
<p>For businesses planning a new washing facility or upgrading an existing processing plant, Mewar Hi-Tech can help assess the equipment requirements and suitable plant arrangement. Contact <a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> to discuss your sand washing needs and find an appropriate solution for your production setup.</p>`
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
    },
    faqs: [
      {
        question: "What is a Belt Conveyor and what is it used for?",
        answer: "A Belt Conveyor is a material handling system used to transport bulk materials from one location to another. It is commonly used in mining, quarrying, cement plants and stone crushing industries to move materials such as sand, gravel, crushed stones and minerals."
      },
      {
        question: "How does a Belt Conveyor work?",
        answer: "A belt conveyor works with the help of a continuous moving belt supported by rollers and pulleys. An electric motor drives the pulley, which moves the belt and carries material along the conveyor path. The material is loaded at one end and discharged at the required location."
      },
      {
        question: "What are the different types of Belt Conveyors?",
        answer: "Common types of belt conveyors include flat belt conveyors, troughed belt conveyors, inclined belt conveyors, horizontal belt conveyors and portable belt conveyors. Each type is selected according to material characteristics, conveyor layout and transportation requirements."
      },
      {
        question: "What factors affect the Belt Conveyor Price?",
        answer: "The belt conveyor price depends on conveyor length, belt width, load capacity, motor power, belt material and structural design. Installation requirements, operating conditions and additional accessories can also affect the overall cost."
      },
      {
        question: "How do I choose the right Belt Conveyor for a crushing plant?",
        answer: "To choose the right belt conveyor, consider the material type, required carrying capacity, conveyor length, belt speed and plant layout. The conveyor should match the output capacity of the crushing equipment to maintain smooth material movement and avoid production delays. Mewar Hi-Tech offers material handling solutions for different crushing and screening plant requirements."
      }
    ],
    articleContent: `<h2>Belt Conveyor for Efficient Material Handling in Crushing Plants</h2>
<p>Moving materials from one machine to another is an important part of mining, quarrying and stone crushing operations. A <strong>Belt Conveyor</strong> makes this process easier by carrying bulk materials continuously between different sections of a plant. It is commonly used to transport sand, gravel, crushed stones, coal and minerals while maintaining a steady flow of material during production.</p>
<p>Mewar Hi-Tech provides industrial material handling solutions for crushing and screening plants. Its belt conveyor systems are used to transfer raw materials and processed aggregates between different machines. The conveyor arrangement can be selected according to plant layout, material type and production capacity.</p>
<p>In a typical crushing plant, a <strong><a href="https://www.mewarhitech.com/products/vibrating-screen">Vibrating Screen</a></strong> separates crushed material into different sizes, while belt conveyors transport the separated material to the next processing stage or storage area. This combination helps maintain a smooth production flow and reduces the need for repeated material handling.</p>
<h2>What Is a Belt Conveyor?</h2>
<p>A belt conveyor is a mechanical material handling system that uses a continuous moving belt to transport materials from one location to another. The belt runs over pulleys and is supported by rollers along its length. An electric motor drives the pulley, allowing the belt to carry material towards the required discharge point.</p>
<p>Belt conveyors are widely used for handling bulk materials such as limestone, coal, sand, gravel, crushed stones and minerals. They are suitable for short-distance as well as long-distance transportation within industrial facilities.</p>
<p>In stone crushing plants, conveyors transfer raw stones towards crushers and carry crushed material to screening machines. After screening, different aggregate sizes can be transported to separate stockpiles or further processing sections.</p>
<h2>Working Principle of Belt Conveyor</h2>
<p>The working principle of a belt conveyor is based on the continuous movement of a belt around a pulley system. An electric motor supplies power to the drive pulley, which moves the belt along the conveyor frame. Supporting rollers keep the belt in position and help it move smoothly.</p>
<p>Material is loaded onto the belt through a feeding arrangement. As the belt moves, it carries the material towards the discharge point, where it falls into a hopper, stockpile or another machine.</p>
<p>The belt speed and carrying capacity depend on the conveyor design and operating requirements. Belt width, motor power, material weight and conveyor length all influence its performance. Proper belt tension and alignment are also important because an incorrectly adjusted belt can slip or move sideways during operation.</p>
<p>A suitable drive arrangement helps maintain consistent material movement. The conveyor should always be selected according to the type of material being transported and the distance it needs to cover.</p>
<h2>Different Types of Belt Conveyor</h2>
<p>Different industrial applications require different conveyor arrangements. The selection depends on plant layout, material characteristics, transportation distance and required output. Understanding the common <strong>belt conveyor types</strong> helps businesses choose equipment that suits their material handling requirements.</p>
<h3>Flat Belt Conveyor</h3>
<p>A flat belt conveyor uses a flat carrying surface to move materials between different locations. It is commonly used for transporting packaged products, lighter materials and certain industrial goods. Its simple arrangement makes it suitable for applications where material needs to travel along a straight path.</p>
<h3>Troughed Belt Conveyor</h3>
<p>A troughed belt conveyor has a curved carrying surface formed by angled idler rollers. These rollers create a trough shape that holds bulk material towards the centre of the belt.</p>
<p>This type is commonly used in mining, quarrying and aggregate plants for transporting sand, gravel, coal and crushed stones. The trough arrangement helps reduce material spillage during transportation.</p>
<h3>Inclined Belt Conveyor</h3>
<p>An inclined belt conveyor is used when material needs to move from a lower level to a higher point. It is commonly installed between processing sections where machines are positioned at different heights.</p>
<p>The conveyor angle and belt surface should be selected according to material characteristics. A suitable arrangement helps prevent material from sliding backwards while the belt is moving.</p>
<h3>Portable Belt Conveyor</h3>
<p>A portable belt conveyor is designed for applications where material handling equipment needs to be moved between different working locations. It is useful in temporary processing setups, stockyards and construction sites.</p>
<h2>Applications and Uses of Belt Conveyor</h2>
<p>A belt conveyor is used wherever bulk materials need to be transported regularly. Its continuous movement makes it suitable for industries involving crushing, processing, storage and transportation.</p>
<h3>Mining and Mineral Processing</h3>
<p>Mining operations handle large quantities of minerals, ores and extracted rocks. Belt conveyors transport these materials between crushers, screening units and storage facilities. They reduce repeated loading and unloading and help maintain material movement throughout the processing plant.</p>
<h3>Stone Crushing and Quarrying</h3>
<p>Stone crushing plants use conveyors to move raw stones towards primary crushers. After crushing, the material is transferred to screening equipment. Different aggregate sizes can then be carried to separate storage areas.</p>
<h3>Sand and Aggregate Production</h3>
<p>Sand and aggregate plants use belt conveyors to transport crushed material between screening and washing sections. They also carry finished products towards stockpiles and loading areas. The conveyor capacity should match the output of connected machines to avoid material accumulation.</p>
<h3>Cement and Construction Industries</h3>
<p>Cement and construction facilities use conveyors to handle raw materials and processed aggregates. Materials such as limestone, sand and gravel can be transported between storage and production sections.</p>
<h3>Coal and Bulk Material Handling</h3>
<p>Coal handling plants use belt conveyors to move bulk coal between storage yards, processing equipment and loading sections. Their design allows continuous transportation over different distances depending on plant requirements.</p>
<h2>Important Features of an Industrial Belt Conveyor</h2>
<h3>Strong Conveyor Structure</h3>
<p>The conveyor frame supports the belt, rollers and drive arrangement. A suitable structure is important for handling material weight and maintaining stability during operation.</p>
<h3>Drive and Pulley Arrangement</h3>
<p>The motor and drive pulley provide the movement required to carry material along the conveyor. Their capacity should match the belt dimensions, load and operating conditions.</p>
<h3>Supporting Idler Rollers</h3>
<p>Idler rollers support the belt and help maintain its position during movement. Properly installed rollers reduce unnecessary friction and allow the belt to travel smoothly.</p>
<h3>Continuous Material Transportation</h3>
<p>A belt conveyor carries material continuously instead of requiring repeated manual movement. This helps maintain a regular supply to crushers, screens and other processing equipment.</p>
<h3>Flexible Installation</h3>
<p>Conveyors can be arranged according to available plant space and material transfer requirements. Their length, width and installation angle can be planned to connect different processing machines.</p>
<h2>Belt Conveyor Specification and Selection Factors</h2>
<p>The <strong>belt conveyor specification</strong> depends on the quantity and type of material being transported. Before selecting a conveyor, it is important to understand the production requirements and operating conditions of the plant.</p>
<p>Belt width is one of the main factors because it determines how much material can be carried. A wider belt may be required when handling large quantities of bulk material. Belt speed also affects transportation capacity and should match the required material flow.</p>
<p>Conveyor length and inclination are equally important. The distance between two machines determines the required conveyor length, while the height difference affects the drive arrangement and belt design.</p>
<p>Material weight, size and characteristics should also be considered. Heavy stones require a conveyor suitable for higher loading conditions, while fine materials may need additional arrangements to prevent dust and spillage.</p>
<p>Motor power, pulley dimensions, idler spacing and belt material should be selected according to the expected load. Checking these factors before installation helps ensure that the conveyor matches the plant's production requirements.</p>
<h2>Factors Affecting Belt Conveyor Price</h2>
<p>The <strong>belt conveyor price</strong> depends on several design and operating factors. Conveyor length, belt width, carrying capacity and structural construction influence the overall cost. A short conveyor for a small processing unit will have different requirements from a long conveyor installed in a large mining or quarrying plant.</p>
<p>The type of material also affects equipment selection. Heavy and abrasive materials may require stronger belts and more durable supporting components. Motor capacity, drive arrangement and additional accessories can further change the equipment cost.</p>
<p>Installation conditions should also be considered. Conveyors installed at an incline or over longer distances may require a different structural and drive arrangement. Buyers should consider maintenance, replacement parts and operating expenses along with the initial purchase price.</p>
<p>The right conveyor is one that matches the actual material handling requirements without unnecessary capacity or additional operating costs.</p>
<h2>Belt Conveyor Maintenance</h2>
<p>Regular <strong>belt conveyor maintenance</strong> helps prevent unexpected breakdowns and keeps material movement consistent. The belt should be inspected for cuts, cracks, worn areas and surface damage. Small problems should be addressed early to avoid larger repairs.</p>
<p>Belt alignment and tension should also be checked regularly. If the belt moves towards one side, it may rub against the conveyor frame and become damaged. Incorrect tension can lead to slipping or put additional strain on the drive components.</p>
<p>Idler rollers, pulleys and bearings should be inspected to ensure that they rotate properly. Accumulated material around the rollers should be removed because it can affect belt movement. The motor and gearbox should also be checked according to the manufacturer's maintenance recommendations.</p>
<p>The conveyor frame, joints and supporting structure should be examined for loose bolts or visible damage. Regular inspection helps reduce unnecessary production interruptions.</p>
<h2>Understanding Belt Conveyor Design and Layout</h2>
<p>A conveyor system should be planned according to the arrangement of machines within the plant. The distance between equipment, material discharge height and available installation space determine how the conveyor will be positioned.</p>
<p>For example, a stone crushing plant may require one conveyor to carry raw material towards a jaw crusher, another to transfer crushed stones to a screening machine and additional conveyors to move separated aggregates towards stockpiles.</p>
<p>The conveyor layout should allow material to move without unnecessary transfer points. Proper feeding and discharge arrangements also help reduce material spillage around the plant.</p>
<p>A <strong>belt conveyor photo</strong> or layout drawing can help buyers understand the equipment structure, belt direction, support rollers and drive arrangement before installation. However, the final design should always be selected according to the plant's working conditions and material handling requirements.</p>
<h2>Choose Mewar Hi-Tech for Industrial Material Handling Solutions</h2>
<p>Material transportation is an important part of mining, quarrying and aggregate production. A properly selected belt conveyor connects different machines and helps maintain a steady flow of material throughout the plant. Its capacity, belt dimensions and drive arrangement should match the production requirements of the application.</p>
<p><a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> provides crushing, screening and material handling equipment for industrial processing plants. Its conveyor solutions support the movement of raw materials, crushed stones, sand and aggregates between different processing sections.</p>
<p>Whether you are setting up a new crushing plant or improving an existing material handling system, selecting the right conveyor arrangement can make daily operations easier to manage. Contact Mewar Hi-Tech to discuss your plant layout, material type and production requirements and find a suitable Belt Conveyor for your application.</p>`
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
    seoTitle: "Vibro Feeder Manufacturer for Crushing Plants | Mewar Hi-Tech",
    seoDescription: "Industrial Vibro Feeder manufacturer for mining, quarrying and aggregate crushing plants. Delivers uniform, controlled bulk material feeding. Request a quote.",
    introText: "A consistent material feeding process is essential for the smooth operation of crushing plants, mining units and aggregate production facilities. A Vibro Feeder regulates the movement of bulk materials using controlled mechanical vibration to transfer raw stones and minerals from hoppers to primary crushers and screening equipment, preventing sudden machine surges and ensuring steady plant output.",
    features: [
      "Twin eccentric shaft vibrator unit generating steady linear stroke for uniform material progression.",
      "Available in both Vibro Grizzly (with fines bypass bars) and Vibro Pan feeder configurations.",
      "Wear-resistant manganese steel trough plates protecting against severe rock impact and sliding abrasion.",
      "Heavy-duty steel coil springs and rugged supporting frame providing superior vibration isolation.",
      "Continuous, controlled material flow protecting primary jaw crushers from uneven or sudden surge loading.",
      "Accessible component layout enabling quick inspection of vibrator motors, bearings, and wear liners."
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
    },
    faqs: [
      {
            "question": "What is a Vibro Feeder and what is it used for?",
            "answer": "A Vibro Feeder is an industrial feeding machine used to transfer bulk materials from a hopper to a crusher or screening machine at a controlled and uniform rate. It is commonly used in mining, quarrying, stone crushing and aggregate processing plants."
      },
      {
            "question": "How does a Vibro Feeder work?",
            "answer": "A Vibro Feeder works through controlled mechanical vibration generated by an eccentric shaft mechanism. The vibration moves material forward along the feeder tray, allowing a continuous and uniform supply to the receiving equipment."
      },
      {
            "question": "What are the different types of Vibro Feeders?",
            "answer": "Common types include Vibro Grizzly Feeders and Vibro Pan Feeders. Grizzly feeders have bars that allow smaller particles to pass through before reaching the crusher, while pan feeders are mainly used for controlled feeding of bulk materials."
      },
      {
            "question": "What factors affect Vibro Feeder capacity?",
            "answer": "Vibro Feeder capacity depends on feeder dimensions, motor power, vibration speed, feed material size, bulk density, moisture content and material grading. Selecting the right feeder according to plant capacity helps maintain a steady material supply and avoid overloading."
      },
      {
            "question": "How do I choose the right Vibro Feeder for a stone crushing plant?",
            "answer": "Consider the required production capacity, maximum feed size, material type and crusher requirements before selecting a Vibro Feeder. Mewar Hi-Tech offers Vibro Grizzly Feeders and Vibro Pan Feeders in different models to suit industrial crushing and material handling requirements."
      }
],
    articleContent: `<h2>Vibro Feeder for Efficient Material Feeding in Crushing Plants</h2>
<p>A consistent material feeding process is important for the smooth operation of crushing plants, mining units and aggregate production facilities. Feeding equipment controls how raw materials move from storage hoppers to crushers and screening machines. When material enters the processing line unevenly, it can affect production speed and put additional load on other machines.</p>
<p>A reliable feeding system helps maintain a steady supply of stones, minerals and other bulk materials. It also reduces the need for manual material handling and supports better coordination between different stages of a crushing plant.</p>
<p>A <strong>Vibro Feeder</strong> is widely used in industrial plants to regulate the movement of bulk materials. It uses controlled vibration to transfer raw materials from a hopper or storage unit towards crushing and screening equipment. Mewar Hi-Tech provides material handling and crushing equipment for industrial applications where consistent feeding and dependable machine performance are required.</p>
<h2>What Is a Vibro Feeder?</h2>
<p>A Vibro Feeder is a mechanical machine that moves bulk materials through controlled vibrations. It is generally installed below a hopper or storage bin to supply material to the next stage of processing. The vibrating movement allows stones and other materials to travel along the feeder tray at a controlled rate.</p>
<p>In stone crushing plants, the machine is commonly installed before a Jaw Crusher. It regulates the supply of large stones and helps prevent sudden material loading. Depending on the plant arrangement, it can also supply material to screening machines, conveyors and other processing equipment.</p>
<p>The feeder is suitable for applications where continuous material movement is required. Its design and feeding capacity depend on the size, weight and characteristics of the material being handled.</p>
<h2>Vibro Feeder Working Principle</h2>
<p>Understanding the vibrating feeder working principle helps operators select suitable feeding equipment for their plants. The machine operates through a vibrating mechanism that produces controlled movements in the feeder body. These movements push material forward along the feeding tray.</p>
<p>When the machine starts, its vibrating arrangement generates regular vibrations. Material placed inside the tray moves towards the discharge end through repeated movements. The feeding rate depends on vibration intensity, tray inclination, material properties and machine settings.</p>
<h3>Material Feeding Process</h3>
<p>Raw material enters the feeder through a hopper or storage arrangement. The vibrating mechanism then moves the material towards the outlet, where it is transferred to a crusher or conveyor. This process helps maintain a controlled supply without requiring continuous manual movement.</p>
<h3>Importance of Controlled Vibration</h3>
<p>Controlled vibration helps distribute material across the feeder tray and maintain a steady discharge. It is particularly useful when handling irregular stones and mixed-size aggregates. Proper adjustment of the machine helps maintain the required material flow according to plant capacity.</p>
<h2>Important Vibro Feeder Parts and Their Functions</h2>
<p>The performance of a feeder depends on the condition and quality of its main components. Different vibro feeder parts work together to produce vibration and move material through the machine.</p>
<h3>Feeding Tray</h3>
<p>The feeding tray provides the surface on which raw material moves. It is manufactured to handle regular material loads and impact during operation. Its size and construction depend on the required feeding capacity.</p>
<h3>Vibrating Mechanism</h3>
<p>The vibrating mechanism produces the movement required for material transportation. It plays an important role in maintaining consistent feeding and smooth machine operation.</p>
<h3>Vibro Feeder Motor</h3>
<p>The vibro feeder motor supplies the power required to operate the vibrating arrangement. Its selection depends on feeder dimensions, material weight and operating requirements.</p>
<h3>Springs and Supporting Frame</h3>
<p>Springs support the feeder body and help manage vibrations during operation. The supporting frame provides structural stability and holds the machine in its installed position.</p>
<h3>Vibro Feeder Parts Name</h3>
<p>Common vibro feeder parts name include the feeding tray, motor, springs, bearings, exciter assembly, support frame and drive components. Their arrangement may differ according to the machine model. Regular inspection helps identify wear and loose connections before they affect machine performance.</p>
<h2>Key Features of Mewar Hi-Tech Vibro Feeder</h2>
<p>A feeder used in an industrial crushing plant must handle regular material loads and operate under demanding conditions. Mewar Hi-Tech designs its material handling equipment for applications where feeding consistency and machine reliability are important.</p>
<h3>Controlled Material Flow</h3>
<p>The machine regulates the supply of raw materials to downstream equipment. This helps maintain a balanced flow and reduces sudden loading on crushers.</p>
<h3>Strong Machine Construction</h3>
<p>The feeder requires a sturdy structure to handle heavy stones and bulk materials. Its construction should support regular industrial operation and withstand material impact.</p>
<h3>Consistent Vibration</h3>
<p>A suitable vibrating arrangement helps move material along the tray without unnecessary interruptions. Consistent vibration supports the feeding requirements of crushing and screening plants.</p>
<h3>Maintenance Accessibility</h3>
<p>Regular inspection of the motor, springs, bearings and other components helps maintain machine condition. Timely maintenance also reduces the chances of unexpected production stoppages.</p>
<h2>Applications of Vibro Feeder</h2>
<p>Vibro Feeders are used in different industries where bulk materials need to be transferred at a controlled rate. Their applications depend on the material type and plant configuration.</p>
<h3>Mining and Mineral Processing</h3>
<p>Mining operations handle large quantities of extracted rocks and minerals. A Vibro Feeder supplies these materials to crushing equipment and helps maintain a continuous processing flow.</p>
<h3>Stone Crushing Plants</h3>
<p>In stone crushing units, the feeder is generally positioned before primary crushing equipment. It regulates the supply of raw stones to the Jaw Crusher and helps prevent uneven feeding.</p>
<h3>Aggregate Production</h3>
<p>Aggregate plants process different sizes of stones for construction and infrastructure projects. The feeder supports material movement between storage arrangements and crushing equipment.</p>
<h3>Cement and Industrial Processing</h3>
<p>Cement and other processing industries use feeding equipment to transfer raw materials between different stages of production. A Vibro Feeder can be installed where controlled material supply is required.</p>
<h2>Role of Single Shaft Feeders in Material Handling</h2>
<p><a href="https://www.mewarhitech.com/products/single-shaft-feeders"><strong>Single Shaft Feeders</strong></a> are used in industrial material handling applications to regulate the movement of bulk materials. Their construction and operating mechanism depend on the specific equipment design.</p>
<p>The selection of a feeder should consider material size, weight, required feeding capacity and plant layout. In applications involving heavy stones, the machine must have suitable structural strength to handle the operating load.</p>
<p>Choosing appropriate feeding equipment helps maintain a balanced supply of material to crushing and screening machinery.</p>
<h2>Vibro Feeder in a Vibrating Feeder Conveyor System</h2>
<p>A vibrating feeder conveyor arrangement helps transfer bulk materials between different sections of a processing plant. A Vibro Feeder controls the initial supply of material from a hopper, while a <a href="https://www.mewarhitech.com/products/belt-conveyor">belt conveyor</a> generally carries it towards another machine or storage location.</p>
<p>Both machines perform different functions but can work together in the same material handling system. The feeder regulates the quantity of material entering the processing line, while the conveyor supports transportation over longer distances.</p>
<p>The equipment arrangement depends on plant capacity, material characteristics and available installation space. Proper planning helps maintain smooth material movement throughout the production process.</p>
<h2>Factors to Consider When Selecting a Vibro Feeder</h2>
<p>Selecting the right feeder requires an understanding of the plant's operating requirements. Feeding capacity is one of the main factors because the machine must supply material according to the production capacity of the crusher or screening equipment.</p>
<p>Material size and weight should also be considered. Large stones require a suitable tray design and strong supporting structure. Moisture content and material flow characteristics can also influence feeding performance.</p>
<p>Installation space, motor capacity and maintenance requirements are other important considerations. The selected machine should fit the plant layout and provide easy access for regular inspection.</p>
<h2>Why Choose Mewar Hi-Tech for Vibro Feeder?</h2>
<p>Choosing an experienced equipment manufacturer is important when setting up or upgrading a crushing plant. Mewar Hi-Tech offers crushing and material handling solutions for mining, quarrying and aggregate production applications.</p>
<p>Businesses searching for vibratory feeder manufacturers in India should consider machine construction, equipment specifications, application requirements and after-sales support before making a purchase decision.</p>
<p>Mewar Hi-Tech focuses on industrial equipment suited to different material processing requirements. Its product range supports various stages of crushing and screening operations, helping businesses develop an organised production setup.</p>
<h2>Find the Right Feeding Solution for Your Plant</h2>
<p>A properly selected Vibro Feeder helps maintain a steady supply of raw materials and supports the smooth functioning of crushing and screening equipment. Its performance depends on suitable machine selection, correct installation and regular maintenance.</p>
<p>Before choosing a feeder, businesses should evaluate their material type, required capacity and existing plant arrangement. <a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> provides industrial machinery for businesses looking for dependable material feeding and crushing solutions. Contact Mewar Hi-Tech to discuss your requirements and find a suitable Vibro Feeder for your plant.</p>`
  },
  {
    slug: "single-shaft-feeders",
    name: "Single Shaft Feeders",
    category: "Feeders",
    subCategory: "Feeder",
    shortDescription: "Heavy-duty grizzly and pan feeders engineered for continuous bulk material feeding and quarry fines separation.",
    heroImage: "/images/single-shaft-feeders-hero.webp",
    mainImage: "/images/single-shaft-feeders.webp",
    model3d: "/3d-model-proudct-images/single_shaft_feed.glb",
    seoTitle: "Single Shaft Feeder Manufacturer in India | Mewar Hi-Tech",
    seoDescription: "Heavy-duty Single Shaft Feeders with pan and grizzly deck for mining, quarrying, and crushing plants. Efficient fines scalping and bulk material feeding. Request a quote.",
    introText: "Mewar Hi-Tech's Single Shaft Feeders feature massive welded frame construction designed to withstand extreme shock loads and heavy dumping impacts. Equipped with a combined pan and grizzly conveying deck and replaceable back and side wear liners, they ensure continuous, uniform bulk material feeding while allowing quarry fines to pass through before entering the primary crushing stage.",
    features: [
      "Massive welded steel frame engineered to withstand severe shock loads and rock dumping impact.",
      "Combined pan and grizzly deck providing both bulk material progression and natural fines separation.",
      "Contra-rotating eccentric shafts geared together in an oil-bath casing for steady linear vibrating strokes.",
      "Renewable back and side manganese steel liner plates protecting the feeder structure against heavy abrasive wear.",
      "Adjustable vibration amplitude via unbalance settings to match plant processing capacity from 25 to 150 TPH.",
      "Special steel spring suspension system delivering exceptional vibration dampening on concrete or steel supports."
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
    },
    faqs: [
      {
            "question": "What is a Single Shaft Feeder and how does it work?",
            "answer": "A Single Shaft Feeder is an industrial feeding machine used to transfer and regulate bulk materials in crushing and screening plants. It uses a vibrating mechanism to move stones, minerals and aggregates towards the next processing stage. Its controlled feeding action helps maintain a steady material supply and supports continuous plant operation."
      },
      {
            "question": "What is the capacity of a Single Shaft Feeder?",
            "answer": "The capacity of a Single Shaft Feeder depends on its model, machine dimensions, material size and operating conditions. Mewar Hi-Tech offers feeder models with listed capacities ranging from 25 TPH to 150 TPH in its product specifications. The suitable model can be selected according to the required production capacity and plant requirements."
      },
      {
            "question": "Where are Single Shaft Feeders used?",
            "answer": "Single Shaft Feeders are commonly used in mining, stone crushing, quarrying and aggregate processing plants. They help transfer raw stones and minerals to crushers and screening equipment. These feeders are also suitable for applications involving granite, basalt, limestone, iron ore and other bulk materials."
      },
      {
            "question": "What are the main features of Mewar Hi-Tech Single Shaft Feeders?",
            "answer": "Mewar Hi-Tech Single Shaft Feeders feature heavy-duty welded frame construction, a vibrating feeding arrangement, replaceable wear liners and an adjustable vibration amplitude. Their design supports heavy material handling, continuous feeding and operation under demanding quarry and mining conditions."
      },
      {
            "question": "How do I choose the right Single Shaft Feeder manufacturer in India?",
            "answer": "When selecting a Single Shaft Feeder manufacturer in India, consider machine construction, feeding capacity, material handling requirements, component quality and maintenance support. Mewar Hi-Tech offers different feeder models for industrial crushing and screening applications. Buyers can contact the company to discuss machine specifications and select a suitable feeder for their plant."
      }
],
    articleContent: `<h2>Single Shaft Feeders for Heavy-Duty Crushing and Material Handling</h2>
<p>Material feeding plays an important role in the performance of a stone crushing plant. Raw stones and minerals must move from storage areas to crushing equipment at a controlled rate. Uneven feeding can affect production flow and create unnecessary pressure on machines. A suitable feeding system helps maintain a steady supply of material and keeps different stages of the plant working together.</p>
<p>In mining, quarrying and aggregate production, feeding equipment must handle heavy loads and regular material impact. It should also support continuous operation under demanding working conditions. The selection of the right feeder depends on material size, required production capacity and the layout of the processing plant.</p>
<p><strong>Single Shaft Feeders</strong> are used in industrial crushing plants to transfer bulk materials towards crushers and other processing equipment. Their heavy-duty construction and vibrating arrangement help maintain controlled material movement. Mewar Hi-Tech offers feeder solutions for applications where strength, feeding capacity and consistent plant performance are important.</p>
<h2>What Are Single Shaft Feeders?</h2>
<p>Single Shaft Feeders are industrial material handling machines used to regulate the movement of stones, minerals and other bulk materials. They are generally installed below storage hoppers or material loading points to supply raw material to the next stage of processing.</p>
<p>These machines are commonly used in stone crushing plants where large rocks need to be transferred to primary crushing equipment. Their feeding deck allows material to move forward while the grizzly section helps smaller particles pass through before reaching the crusher, depending on the plant arrangement.</p>
<p>A grizzly feeder is particularly useful in applications involving mixed-size materials. It helps manage the incoming feed and supports the separation of smaller fines from larger stones. This arrangement can reduce unnecessary material entering the primary crusher and support better plant operation.</p>
<h2>Working Principle of Single Shaft Feeders</h2>
<p>The working principle of Single Shaft Feeders is based on controlled mechanical vibration. The drive arrangement produces movement in the feeder body, allowing bulk material to travel along the feeding deck towards the discharge point.</p>
<p>When the machine starts, the vibrating mechanism creates regular movement in the feeder structure. The material placed on the deck moves forward through repeated vibrations. The speed and quantity of material movement depend on factors such as vibration settings, feed characteristics and machine design.</p>
<h3>How Material Moves Through the Feeder</h3>
<p>Raw material enters the feeder from a hopper or loading arrangement. The vibrating deck moves the material towards the outlet, where it is transferred to a crusher or conveyor. During this process, the grizzly section allows suitable smaller particles to pass through its openings.</p>
<h3>Role of the Eccentric Drive Mechanism</h3>
<p>The eccentric drive arrangement generates the vibration required for material movement. The machine uses a motor and V-belt drive system to operate its vibrating mechanism. Its amplitude can be adjusted by changing the unbalance setting according to the machine design.</p>
<p>Special steel springs support the feeder on its concrete or steel foundation. This arrangement helps manage machine vibration during regular operation.</p>
<h2>Main Components of Single Shaft Feeders</h2>
<p>Every component of a feeder has a role in maintaining material movement and supporting machine performance. The construction of these components is important because the equipment regularly handles heavy stones and abrasive materials.</p>
<h3>Heavy-Duty Welded Frame</h3>
<p>The welded frame provides structural support to the machine. It is designed to withstand material impact and the forces generated during operation. A strong frame is particularly important in mining and quarrying applications where feeders handle large quantities of raw material.</p>
<h3>Pan and Grizzly Deck</h3>
<p>The feeding deck combines a pan section with grizzly bars. The pan carries bulk material towards the discharge point, while the grizzly section allows smaller particles to pass through its openings. This helps separate fines from larger feed material before primary crushing.</p>
<h3>Replaceable Wear Liners</h3>
<p>Back and side renewable liners protect the feeder structure from material impact and abrasion. These liners can be inspected and replaced when required, helping maintain the condition of the feeding deck.</p>
<h3>Motor and V-Belt Drive</h3>
<p>The motor supplies the power required to operate the vibrating mechanism. The V-belt drive transfers power to the machine's drive arrangement. Correct motor selection and regular inspection of the drive components help maintain dependable operation.</p>
<h3>Special Steel Springs</h3>
<p>Steel springs support the feeder body and are arranged according to the installation requirements. They help accommodate the vibrating movement and provide support during continuous operation.</p>
<h2>Key Features of Mewar Hi-Tech Single Shaft Feeders</h2>
<p>A feeder used in a crushing plant must handle demanding operating conditions without frequent interruptions. Mewar Hi-Tech develops heavy-duty feeding equipment for industrial applications where structural strength and consistent material handling are important.</p>
<h3>Strong Construction for Heavy Loads</h3>
<p>The welded frame construction is designed to withstand shock loads during material feeding. This is useful when handling large rocks and minerals in mining and quarrying plants.</p>
<h3>Continuous Material Feeding</h3>
<p>The vibrating deck supports the regular movement of bulk material towards the receiving equipment. It helps maintain a steady supply of raw stones and reduces sudden variations in the feeding process.</p>
<h3>Grizzly Arrangement for Fines Separation</h3>
<p>The combination of pan and grizzly sections supports material movement while allowing smaller particles to pass through. This arrangement helps manage feed material before it enters the primary crushing stage.</p>
<h3>Adjustable Vibration Amplitude</h3>
<p>The vibration amplitude can be adjusted through the unbalance setting. This provides flexibility when managing different material feeding requirements within the limits of the machine design.</p>
<h3>Renewable Liner Arrangement</h3>
<p>Replaceable back and side liners help protect the feeder from wear caused by continuous material movement. Regular liner inspection supports longer equipment life and helps maintain the condition of the machine.</p>
<h2>Applications of Single Shaft Feeders in Different Industries</h2>
<p>Single Shaft Feeders are used in industries where large quantities of bulk material need to be transferred to crushing and screening equipment. Their heavy-duty design makes them suitable for different mineral processing operations.</p>
<h3>Mining and Ore Processing</h3>
<p>Mining operations involve handling materials such as iron ore, copper, bauxite and other minerals. A suitable feeder helps transfer extracted material towards crushing equipment and supports a continuous processing flow.</p>
<h3>Stone Crushing and Quarrying</h3>
<p>In quarrying operations, raw materials such as granite, basalt and limestone need to be transferred to primary crushers. The feeder manages the incoming stones and helps maintain a controlled supply to the crushing plant.</p>
<h3>Aggregate Production</h3>
<p>Aggregate processing plants produce different sizes of construction materials for roads, buildings and infrastructure projects. Single Shaft Feeders support the movement of raw material through the initial stages of processing.</p>
<h3>Road Construction and Infrastructure</h3>
<p>Road construction requires aggregates with suitable sizes and grading. Feeding equipment helps maintain the supply of raw material to crushing and screening machines used in aggregate production.</p>
<h3>Recycling and Demolition</h3>
<p>Recycling facilities process concrete debris, asphalt and other recovered materials. A suitable feeder can help transfer these materials towards crushing equipment for further size reduction and reuse.</p>
<h2>Single Shaft Feeders and Vibro Feeder in Crushing Plants</h2>
<p>Both Single Shaft Feeders and a <a href="https://www.mewarhitech.com/products/vibro-feeder"><strong>Vibro Feeder</strong></a> are used in material handling systems, but their design and feeding arrangements can differ. Single Shaft Feeders are commonly associated with heavy-duty pan-and-grizzly arrangements, while Vibro Feeders are used to regulate the supply of bulk material through controlled vibration.</p>
<p>The selection depends on the material being handled, the required separation of fines and the feeding capacity of the plant. Both types of equipment can support crushing operations when selected according to the application.</p>
<h2>Technical Specifications and Available Models</h2>
<p>Selecting the correct feeder model is important for maintaining the required production output. Mewar Hi-Tech provides different machine sizes with varying drive power and feeding capacities to suit industrial requirements.</p>
<p>The published specifications include models ranging from KVF 816 to KSSF 1240. The available machine sizes range from 800 &times; 1600 mm to 1200 &times; 4000 mm in the listed models.</p>
<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Machine Size (mm)</th>
      <th>Drive Power</th>
      <th>Capacity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>KSSF 1240</td>
      <td>1200 &times; 4000</td>
      <td>10 HP</td>
      <td>150 TPH</td>
    </tr>
    <tr>
      <td>KVF 1230</td>
      <td>1200 &times; 3000</td>
      <td>7.5 HP</td>
      <td>125 TPH</td>
    </tr>
    <tr>
      <td>KVF 1224</td>
      <td>1200 &times; 2400</td>
      <td>7.5 HP</td>
      <td>100 TPH</td>
    </tr>
    <tr>
      <td>KVF 1020</td>
      <td>1000 &times; 2000</td>
      <td>5 HP</td>
      <td>75 TPH</td>
    </tr>
    <tr>
      <td>KVF 1030</td>
      <td>1000 &times; 3000</td>
      <td>7.5 HP</td>
      <td>100 TPH</td>
    </tr>
    <tr>
      <td>KVF 918</td>
      <td>900 &times; 1800</td>
      <td>3 HP</td>
      <td>40 TPH</td>
    </tr>
    <tr>
      <td>KVF 924</td>
      <td>900 &times; 2400</td>
      <td>5 HP</td>
      <td>50 TPH</td>
    </tr>
    <tr>
      <td>KVF 816</td>
      <td>800 &times; 1600</td>
      <td>3 HP</td>
      <td>25 TPH</td>
    </tr>
  </tbody>
</table>
<p>The actual feeding capacity can vary according to material size, bulk density, moisture content and operating conditions. Buyers should confirm the suitable model and its technical specifications with the manufacturer before installation.</p>
<h2>Factors to Consider When Choosing Single Shaft Feeders</h2>
<p>Choosing the right feeder requires more than checking its dimensions and motor power. The material entering the machine should be evaluated first. Large rocks and heavy minerals require a suitable feeding deck and strong structural construction.</p>
<p>Production capacity is another important factor. The feeder should supply material according to the capacity of the receiving crusher. A mismatch between feeding and crushing capacity can affect the overall production process.</p>
<p>The grizzly opening size also matters when the plant needs to separate smaller particles before primary crushing. Installation space, foundation requirements and maintenance access should be checked before finalising the machine.</p>
<p>Businesses should also consider the availability of replacement liners and other important components. Proper installation and regular inspection help maintain machine performance over time.</p>
<h2>Why Choose Mewar Hi-Tech for Single Shaft Feeders?</h2>
<p>Selecting the right manufacturer is important when investing in industrial crushing and material handling equipment. Mewar Hi-Tech provides machinery for mining, quarrying, aggregate production and other material processing applications.</p>
<p>The company offers different feeder models with varying machine dimensions, drive power and production capacities. Its product range is developed for industrial environments where equipment must handle regular material loads and demanding operating conditions.</p>
<p>Businesses looking for Single Shaft Feeder manufacturers in India should evaluate the machine specifications, construction quality and suitability for their production requirements. Mewar Hi-Tech provides technical information to help buyers identify an appropriate model for their crushing plant.</p>
<h2>Get the Right Single Shaft Feeder for Your Plant</h2>
<p>A suitable feeding machine helps maintain a steady supply of raw material and supports the smooth operation of crushing equipment. From mining and quarrying to aggregate production, Single Shaft Feeders play an important role in managing bulk material movement.</p>
<p>Before selecting a model, consider the material type, required TPH capacity, machine dimensions and plant layout. <a href="https://www.mewarhitech.com/">Mewar Hi-Tech</a> offers industrial feeding and crushing solutions for different production requirements.</p>
<p>Contact Mewar Hi-Tech to discuss your application, request technical specifications and get information about the right Single Shaft Feeder for your plant.</p>`
  }
];

export function getProductBySlug(slug) {
  return PRODUCTS_DATA.find((item) => item.slug === slug);
}
