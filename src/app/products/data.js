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
    shortDescription: "High-efficiency primary jaw crusher engineered for lower power utilization.",
    heroImage: "/images/single-toggle-grease-jaw-crusher-hero.webp",
    mainImage: "/images/single-toggle-grease-jaw-crusher.webp",
    model3d: "/3d-model-proudct-images/single_toggle_greese_crusher.glb",
    seoTitle: "Single Toggle Grease Jaw Crusher | Mewar Hi-Tech",
    seoDescription: "Single toggle grease jaw crusher built for primary crushing of hard rock and aggregates. View details and request a quote from Mewar Hi-Tech.",
    introText: "Mewar Hi-Tech's Single Toggle Grease Jaw Crusher is usually utilized where size conveyance isn't of fundamental significance, be that as it may, efficiency is to be increased with lower power utilization, in contrast with Double Toggle Grease Lubricated Jaw Crusher and hence working expense is lower. These do not require high operating skills and gap setting is easier and manageable. Additionally, the support necessity is much lower and it doesn't require high maintenance.",
    features: [
      "Increased stroke for greater productivity, large eccentric shaft for strong stroke in the upper chamber.",
      "High angle toggle plate increases stroke in the lower chamber.",
      "The large precise counter balanced flywheel provides continuous crushing in toughest applications.",
      "Stress relieved, robust, heavy duty crusher body and cast steel jaw plates for higher strength.",
      "In case of use as primary crusher, a hydraulic cylinder is provided for easy adjustment of gap setting."
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
    }
  },
  {
    slug: "double-toggle-grease-jaw-crusher",
    name: "Double Toggle Grease Jaw Crusher",
    category: "Crushers",
    subCategory: "Jaw Crusher",
    shortDescription: "Robust crushing units built for tough aggregate and mining applications.",
    heroImage: "/images/double-toggle-grease-jaw-crusher-hero.webp",
    mainImage: "/images/double-toggle-grease-jaw-crusher.webp",
    model3d: "/3d-model-proudct-images/double_toggle_grease_jaw_crusher.glb",
    seoTitle: "Double Toggle Grease Jaw Crusher | Mewar Hi-Tech",
    seoDescription: "Double toggle grease jaw crusher for tough primary crushing duty. Check the features and ask Mewar Hi-Tech for a quote and technical details.",
    introText: "Our organization has garnered a striking position in this industry as the Exporter, Manufacturer, Service Provider and Supplier of Double Toggle Grease Based Jaw Crusher in Udaipur, Rajasthan, India. It is precisely designed by using excellent material and hi-end technology and innovation. Besides, our customers can procure our products at effectively moderate costs. The capacities may vary depending upon the type of rock gradation, breaking characteristics, compressive strength, rate and method of feeding, bulk density of feed, percentage of moisture in feed, method of operation etc. The production capacity is affected by the type of jaw plates (plain/toothed) and RPM of the machine cast through lifting on crushing stroke.",
    features: [
      "Double Toggle provides maximum leverage to the long stroke eccentric.",
      "Wide entry throat ensures easy feeding to the crushing chamber.",
      "Strong steel structure and other parts are made from certified quality material only."
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
    }
  },
  {
    slug: "cone-crusher",
    name: "Cone Crusher",
    category: "Crushers",
    subCategory: "Cone Crusher",
    shortDescription: "Precision secondary crushing engineered for consistent particle shape.",
    heroImage: "/images/cone-crusher-hero.webp",
    mainImage: "/images/cone-crusher.webp",
    model3d: "/3d-model-proudct-images/cone_crusher.glb",
    seoTitle: "Cone Crusher for Secondary Crushing | Mewar Hi-Tech",
    seoDescription: "Cone crusher for secondary and tertiary crushing with consistent product size. See features and request a quote from Mewar Hi-Tech.",
    introText: "Mewar Hi-tech is proud to reveal that it is one of the top Cone Crusher manufacturers providing the highest grade machinery for the crushing of feed materials. We don't simply concentrate on helping our clients in getting their ideal outcomes yet additionally on making the procedure progressively solid, financially savvy, and flexible. Along these lines, we resolve to give you the most lucrative outcome.",
    features: [
      "Higher crushing ratio and production efficiency result in lower spare part consumption and lower operating cost.",
      "Easy maintenance from top reduces downtime. Improved cavity architecture helps in feed opening maintenance.",
      "The tangential and radial forces result in uniform pressure and product of uniform shape.",
      "Thin oil lubrication increases the life of consumable parts."
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
    }
  },
  {
    slug: "roll-crusher",
    name: "Roll Crusher",
    category: "Crushers",
    subCategory: "Roll Crusher",
    shortDescription: "Efficient compression crushing for medium-hard and soft materials.",
    heroImage: "/images/roll-crusher-hero.webp",
    mainImage: "/images/roll-crusher.webp",
    model3d: "/3d-model-proudct-images/roll_crusher.glb",
    seoTitle: "Roll Crusher | Mewar Hi-Tech",
    seoDescription: "Roll crusher for controlled size reduction of medium-hard and soft materials. View details and request a quote from Mewar Hi-Tech, Udaipur.",
    introText: "Mewar Hi-Tech's Roll Crusher machine is widely used for the powder process of mineral products, including metal and non-metal ore, fireproof material, bauxite, diamond dust, glass raw materials, architectural materials, artificial sand and all kinds of metals and materials. The design is robust to cater to the customer need.",
    features: [
      "Adjustable rolling spacing to change output sizing instantly.",
      "Heavy duty compression spring release protection against metal tramps.",
      "Replaceable segmented alloy steel roll shells for quick field replacement."
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
    }
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
