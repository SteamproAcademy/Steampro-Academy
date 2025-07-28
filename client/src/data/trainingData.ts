export interface QuizQuestion {
  question: string;
  choices: string[];
  correctAnswer: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  videoUrl: string;
  startTime?: string; // Format: 'MM:SS' or 'HH:MM:SS'
  endTime?: string;   // Format: 'MM:SS' or 'HH:MM:SS'
  transcript: string;
  readingMaterial: string;
  quiz: QuizQuestion[];
  duration: string;
}

export interface TrainingData {
  core: TrainingModule[];
  core2: TrainingModule[];
  sales: TrainingModule[];
  ops: TrainingModule[];
  marketing: TrainingModule[];
  finance: TrainingModule[];
  manufacturing: TrainingModule[];
  hr: TrainingModule[];
}

export const trainingData: TrainingData = {
  core: [
    {
      id: "core-1",
      title: "Welcome to SteamPRO",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript:
        "Welcome to SteamPRO! We're a bath-tech startup revolutionizing luxury bathing experiences...",
      readingMaterial: `
        <h3>About SteamPRO</h3>
        <p>Welcome to SteamPRO, India's premier bath-tech startup revolutionizing the way people experience luxury bathing. Founded in 2020, we've quickly established ourselves as leaders in innovative steam solutions and premium bathroom fixtures.</p>
        
        <h4>Our Mission</h4>
        <p>To transform every bathroom into a personal wellness sanctuary, combining cutting-edge technology with timeless design principles.</p>
        
        <h4>Company Values</h4>
        <ul>
          <li><strong>Innovation:</strong> We continuously push the boundaries of bath technology</li>
          <li><strong>Quality:</strong> Every product meets the highest standards of craftsmanship</li>
          <li><strong>Customer Focus:</strong> Our customers' satisfaction drives everything we do</li>
          <li><strong>Sustainability:</strong> We're committed to environmentally responsible practices</li>
        </ul>
        
        <h4>Our Products</h4>
        <p>SteamPRO offers a comprehensive range of premium bath solutions including steam generators, luxury shower systems, and smart bathroom fixtures. Our products are designed and manufactured with precision in our state-of-the-art facilities.</p>
      `,
      quiz: [
        {
          question: "When was SteamPRO founded?",
          choices: ["2018", "2020", "2022"],
          correctAnswer: "2020",
        },
        {
          question: "What is SteamPRO's primary mission?",
          choices: [
            "To sell bathroom fixtures",
            "To transform bathrooms into wellness sanctuaries",
            "To compete with other startups",
          ],
          correctAnswer: "To transform bathrooms into wellness sanctuaries",
        },
        {
          question: "Which of these is NOT a SteamPRO value?",
          choices: ["Innovation", "Speed", "Quality"],
          correctAnswer: "Speed",
        },
      ],
      duration: "15 minutes",
    },
    {
      id: "core-2",
      title: "History",
      videoUrl: "https://www.youtube.com/watch?v=8GvULCHyPBE",
      startTime: "15:15",
      endTime: "26:00",
      transcript:
        "Our company values form the foundation of everything we do...",
      readingMaterial: `
        <h3>Our Journey: From Humble Beginnings to a Wellness Revolution</h3>
        <p>Our story is one of resilience, innovation, and a deep-seated belief in the power of water to heal and relax. It began generations ago, built on a foundation of hard work and an entrepreneurial spirit that has defined our family and our business every step of the way.</p>
        
        <h4>Founded on Humility and Hard Work</h4>
        <p>The roots of our company trace back to Lahore, where our grandfather, a goldsmith, had to rebuild his life from scratch. With his experience in fabrication, he started a small stainless steel business with very little capital. This legacy of perseverance was passed down to our father, who joined his grandfather at the age of 17. His first job? Cleaning the workshop. This instilled in him the core value that we live by today: <strong>no job is too small or big</strong>. When work needs to be done, it must be done with heart and full responsibility. This dedication allowed him to master every aspect of the fabrication trade within just two years.</p>
        
        <h4>A Legacy of Innovation and Market Vision</h4>
        <p>Spotting a gap in the market during an era before geysers were common, our father pioneered the manufacturing of immersion heating rods. His brand, 'Hot', became the biggest name in heating elements, with a distribution network across 250 Indian cities in just five years. After successfully exiting that business, a trip to a New York spa in the 90s changed everything. Experiencing different water temperatures, steam, and saunas was a mind-blowing revelation. He immediately saw the potential to bring this concept of wellness to a newly liberalized India, where aspirations were beginning to rise. He became the pioneer of the spa industry in India, delivering world-class projects for landmarks like Ananda in the Himalayas (one of the world's top spas) and for the nation's leading business families.</p>

        <h4>Forging Excellence Through Experience and Failure</h4>
        <p>Our expertise isn't just theoretical; it's forged in experience. As the next generation, we joined the family business after gaining corporate experience at scale with firms like CBRE and Gartner. We’ve personally been the test subjects for every new technology. We’ve taken the first-ever chilled showers, tested temperature controls, and yes, we’ve even witnessed "steam and sauna blasts" during development. We believe you must go through failures to truly learn and innovate. This rigorous, hands-on R&D ensures that the products reaching our customers are safe, perfected, and built on real-world learning. We don't repeat our failures, we learn from them to build better systems.</p>
        
        <h4>Our Mission: To Bring Relaxation to a Stressed Nation</h4>
        <p>While our B2B work impacted the elite, we realized we were serving less than 1% of the country. With 89% of Indians reporting stress, we felt a deep calling to share our knowledge with a wider audience. We are inspired by the ancient meaning of "Spa" – <em>Salus per Aquam</em>, or "Health/Solace through Water," a concept deeply rooted in our own Vedic and Ayurvedic traditions. Our mission is to start a relaxation wave across India. We want to transform the one thing we all do every day—take a bath. By adding the therapeutic benefits of hydrotherapy to this daily ritual, we give you a moment to relax, plan your day, and be kinder to yourself and others. Our purpose is fulfilled when we help relax the world, one bath at a time.</p>
      `,
      quiz: [
        {
          question: "Where did the family's business journey originally begin?",
          choices: ["New York, in the spa industry", "Lahore, as a goldsmith and fabricator", "Delhi, in the heating element business"],
          correctAnswer: "Lahore, as a goldsmith and fabricator"
        },
        {
          question: "What was the father's very first task when he joined his grandfather's business at age 17?",
          choices: ["Managing finances", "Selling products", "Cleaning the workshop"],
          correctAnswer: "Cleaning the workshop"
        },
        {
          question: "What was the first highly successful product pioneered by the founder's father?",
          choices: ["Geysers", "Immersion heating rods under the brand 'Hot'", "Stainless steel equipment"],
          correctAnswer: "Immersion heating rods under the brand 'Hot'"
        },
        {
          question: "What key event inspired the founder's father to enter the spa and wellness industry?",
          choices: ["A decline in the heating element market", "A visit to a spa in New York", "Reading ancient texts about water"],
          correctAnswer: "A visit to a spa in New York"
        },
        {
          question: "What does the Latin term for Spa, 'Salus per Aquam', translate to?",
          choices: ["Steam Powered Aquatics", "Special Personal Area", "Health/Solace through Water"],
          correctAnswer: "Health/Solace through Water"
        },
        {
          question: "What is the company's attitude towards failure during product development?",
          choices: ["Failure is unacceptable", "It's a necessary part of learning and creating better products", "It means the product idea is not viable"],
          correctAnswer: "It's a necessary part of learning and creating better products"
        },
        {
          question: "What was the primary motivation for the second generation to move beyond high-end B2B projects?",
          choices: ["B2B projects were not profitable", "They wanted their solutions to impact a much larger portion of the population", "Corporate jobs were more appealing"],
          correctAnswer: "They wanted their solutions to impact a much larger portion of the population"
        },
        {
          question: "What is the company's ultimate mission?",
          choices: ["To become the most profitable wellness company in Asia", "To bring a 'relaxation wave' to India by enhancing the daily bath", "To exclusively serve the world's top hotels"],
          correctAnswer: "To bring a 'relaxation wave' to India by enhancing the daily bath"
        },
        {
          question: "Which world-renowned spa was mentioned as a major project completed by the company?",
          choices: ["The Serenity Spa, Mumbai", "Ananda in the Himalayas", "The Google Wellness Center"],
          correctAnswer: "Ananda in the Himalayas"
        },
        {
          question: "According to the text, what percentage of Indians report feeling stressed, motivating the company's mission?",
          choices: ["50%", "75%", "89%"],
          correctAnswer: "89%"
        }
      ],
      duration: "20 minutes",
    },
    {
      id: "core-3",
      title: "Start of SteamPRO",
      videoUrl: "https://www.youtube.com/watch?v=8GvULCHyPBE",
      startTime: "26:00",
      endTime: "37:00",
      transcript: "Safety is our top priority at SteamPRO...",
      readingMaterial: `
        <h3>The Problem: Your Bathroom is Stuck in the 90s</h3>
        <p>In a world where our watches, glasses, and homes have become smart, the bathroom remains the last frontier of outdated technology. Life has become digital-first; we can dim lights with our voice and have everything wireless, but the moment we step into the bathroom, we're transported back in time. We are still manually turning the same old taps, struggling with water that's either scalding hot in winter or too warm in summer. The dream of a luxurious rain shower often ends in disappointment due to a lack of water pressure. This daily frustration leads many to just give up and resort to a bucket and mug—the exact opposite of a relaxing, modern experience.</p>
        
        <h4>The Market Gap: Why Legacy Players Can't Solve This</h4>
        <p>The established brands like Kohler and Jaquar are fundamentally "hardware people." Their expertise lies in fabrication and hardware: brass faucets, chrome plating, and ceramics like WCs and basins. Their vast product catalogs are filled with items that have no wires or circuits. They operate on a high-volume, distributor-based model focused on "selling goods" and maximizing margins, not on creating an integrated technological experience. When they do offer a tech product like a steam generator, it's an afterthought, often oversized and not supported by their core expertise.</p>

        <h4>The Service Nightmare: A Broken and Risky System</h4>
        <p>This lack of in-house tech expertise creates a dangerous gap in service. Installation of these complex systems is outsourced to uncertified, third-party local fitters. This results in inconsistent quality and non-standardized pricing—a customer in a premium location could be charged thousands more than someone elsewhere for the same job. Most critically, you are trusting unverified individuals to handle the combination of electricity and water in your home, a space used by your entire family. These plumbers may have simply watched a job being done once and now claim to be experts, putting users at risk. There is no accountability, and the end-users, often high-profile individuals, face immense difficulty and risk.</p>
        
        <h4>The Perfect Time for a Revolution</h4>
        <p>Several market shifts have created the perfect opportunity for change. The COVID-19 pandemic reshaped consumer behavior. Firstly, it accelerated trust in Direct-to-Consumer (D2C) brands as traditional retail was shut down. Secondly, it fostered a "live for today" mentality, where people realized the importance of spending on quality of life and aspirational goods now. With India poised for a "glorious decade" of growth, we are positioned at the perfect intersection of the booming consumer durables, wellness, and sanitary ware industries. Today’s customers are digitally savvy, aspirational, and ready for products that truly enhance their lives.</p>

        <h4>Our Mission: Full-Stack Solutions and "Water Joy"</h4>
        <p>We see this huge gap as our call to action. We are here to cause a revolution in the bathroom. Unlike the legacy players, we are a full-stack company—we handle everything from "Zero to 10." Our deep expertise means we aren't just selling a product; we are delivering a complete, safe, and exceptional experience. We know that the joy, fun, and true experience of water have been lost. Our core beliefs are centered around two key ideas: <strong>Water Joy</strong> and <strong>Hydro-wellness</strong>. We understand the deep, curative, and enjoyable properties of water better than anyone, and our mission is to share that joy with every Indian, changing the way they interact with water and transforming their daily bath into the best start to their day.</p>
      `,
      quiz: [
        {
          question: "According to the text, what part of the home is described as the 'last frontier of outdated technology'?",
          choices: ["The kitchen", "The bathroom", "The living room"],
          correctAnswer: "The bathroom"
        },
        {
          question: "What is the primary expertise of established brands like Kohler and Jaquar?",
          choices: ["Integrated technology", "Software development", "Fabrication and hardware"],
          correctAnswer: "Fabrication and hardware"
        },
        {
          question: "What is the most critical risk associated with installations done by third-party fitters mentioned in the text?",
          choices: ["Using incorrect tools", "Mishandling the combination of electricity and water", "Taking too long to complete the job"],
          correctAnswer: "Mishandling the combination of electricity and water"
        },
        {
          question: "Which major event is credited with accelerating consumer trust in Direct-to-Consumer (D2C) brands?",
          choices: ["The rise of the internet", "The COVID-19 pandemic", "The 2008 financial crisis"],
          correctAnswer: "The COVID-19 pandemic"
        },
        {
          question: "What approach does the new company take to differentiate itself from legacy players?",
          choices: ["A distributor-focused model", "A hardware-only strategy", "A full-stack solution"],
          correctAnswer: "A full-stack solution"
        },
        {
          question: "What are the two core beliefs central to the company's mission?",
          choices: ["Profit and Volume", "Water Joy and Hydro-wellness", "Speed and Efficiency"],
          correctAnswer: "Water Joy and Hydro-wellness"
        },
        {
          question: "According to the reading, why do established brands struggle with offering high-tech bathroom products?",
          choices: ["They lack marketing funds", "Their expertise is not in technology", "There is no customer demand for them"],
          correctAnswer: "Their expertise is not in technology"
        }
      ],
      duration: "25 minutes",
    },
    {
      id: "core-4",
      title: "Core-Belief",
      videoUrl: "https://www.youtube.com/watch?v=8GvULCHyPBE",
      startTime: "37:30",
      endTime: "59:40",
      transcript:
        "Our mission and vision guide our path forward as we transform the bath industry...",
      readingMaterial: `
        <h3>The QPT Framework at SteamPRO: Revolutionizing Hydro-Wellness</h3>

        <p>At SteamPRO, we believe true hydro-wellness goes beyond simply using water. Our QPT Framework - focusing on Quantity, Quality, Pressure, and Temperature - revolutionizes the bathing experience and forms the core of our product development.</p>

        <h4>Understanding the QPT Framework</h4>

        <p>The QPT Framework recognizes water's multifaceted ability to heal, relax, and rejuvenate. We manipulate the core characteristics to achieve optimal results.</p>

        <ul>
          <li><strong>Quantity: Immersion and Flow</strong> How much water is applied and how does it envelop the body? From full immersion in large tubs to targeted flows in sophisticated shower systems, quantity dictates the immersive sensation. Larger water surfaces can reduce stress and allow more focus.</li>
          <li><strong>Quality: Purity and Composition</strong> Is the water pure, free of impurities, and optimized for health? SteamPRO prioritizes advanced filtration and purification technologies, addressing concerns from TDS (Total Dissolved Solids) to organic contaminants.</li>
          <li><strong>Pressure: Stimulation and Therapy</strong> What is the power behind water impacting skin or stimulating specific areas of the body? Precise pressure application is key to effective hydro-massage and muscle relaxation through our hydrotherapy functions.</li>
          <li><strong>Temperature: Invigoration and Relief</strong> The thermal dimension offers invigorating contrasts to hot or cold to boost immunity and other processes. Varying temperatures promote a holistic impact on wellbeing and relief for our consumers.</li>
        </ul>

        <h4>Integrating QPT into SteamPRO Products</h4>

        <p>QPT informs the design of every SteamPRO offering, delivering personalized and therapeutic benefits.</p>

        <ul>
          <li><strong>Smart Showers:</strong> Integrated smart shower settings offer various adjustments to QPT controls, enabling users to calibrate temperatures and adjust spray for massages</li>
          <li><strong>Therapeutic Tubs:</strong> These offer clients opportunities to luxuriate through advanced jacuzzi and tub jets in order to massage target pressure points for therapeutic value and holistic wellness</li>
          <li><strong>Advanced Saunas:</strong> Saunas designed at specific humid and heat temperatures can engage customers for targeted hydrotherapies, to further enhance the positive impact from this form of dry bathing</li>
        </ul>

        <h4>Why QPT Matters to SteamPRO's Mission and Vision</h4>

        <ul>
          <li><strong>Enhancing the Wellness Sanctuary:</strong> Through controlled quantities of the most pure high-quality water, alongside optimal temperature management and accurate jets for relaxation in bathrooms we create transformative atmospheres</li>
          <li><strong>Leading with Innovation:</strong> QPT pushes the innovation envelope by empowering us to solve critical global issues with water conservation through precision</li>
          <li><strong>Sustainability:</strong> Optimizing each attribute allows less wasted output of the resources during the development cycle and operations which advances the core tenants of responsibility that underly sustainability through precision of resources for hydrowellness</li>
        </ul>

        <h4>The Future of Hydro-Wellness</h4>

        <p>SteamPRO’s QPT framework revolutionizes bathroom well being one feature at a time. Join our team in prioritizing transformative opportunities and design excellence across QPT hydrotherapy opportunities through innovative solutions today.</p>
      `,
      quiz: [
        {
          question: "What does the 'Q' in the QPT Framework stand for?",
          choices: [
            "Quickness",
            "Quality",
            "Quenching"
          ],
          correctAnswer: "Quality"
        },
        {
          question: "In the QPT framework, what are some features we address concerning optimal water purity?",
          choices: [
            "Alkalinity & Acidity",
            "Organic & Inorganics",
            "Taste & Smell"
          ],
          correctAnswer: "Organic & Inorganics"
        },
        {
          question: "The 'T' in QPT represents which element?",
          choices: [
            "Time",
            "Toxicity",
            "Temperature"
          ],
          correctAnswer: "Temperature"
        },
        {
          question: "What benefits do precise Hydro Pressure Jets have?",
          choices: [
            "Creates optimal pressure release valve management",
            "Targets acupressure points for relaxation through massage settings",
            "Enables better regulation in local water reservoirs and bodies"
          ],
          correctAnswer: "Targets acupressure points for relaxation through massage settings"
        },
        {
          question: "True or False: Sustainability can be integrated across innovative opportunities concerning precision, well-being, QPTs.",
          choices: [
            "True",
            "False",
            "Neutral"
          ],
          correctAnswer: "True"
        },
        {
          question: "Which of the following BEST defines 'quantity' within SteamPRO's QPT Framework?",
          choices: [
            "The temperature in a particular pool set",
            "The minerals dissolved within the waters of natural water reservoirs ",
            "The sheer immersive experience caused from submersion inside hot or cold tub jets, bathes and waterfalls"
          ],
          correctAnswer: "The sheer immersive experience caused from submersion inside hot or cold tub jets, bathes and waterfalls"
        },
        {
          question: "What's a core focus of QPT that can benefit communities regarding our carbon goals in climate action and carbon goals?",
          choices: [
            "Conserving water using each QPT feature across various client systems",
            "Overengineering the designs using additional precious raw resources, so its easier to operate systems more easily.",
            "Optimally enhancing new and complex machinery while neglecting past equipment so our overall output accelerates with growth."
          ],
          correctAnswer: "Conserving water using each QPT feature across various client systems"
        },
        {
          question: "Why does optimizing the amount of total usage of water benefit SteamPRO customers, partners, consumers in QPT?",
          choices: [
            "Customers may experience even greater luxury and savings by cutting operational costs, maintenance through effective use water output without wastage.",
            "SteamPRO must prioritize design innovation instead of past trends for consumer safety",
            "As water features diminish with rising ecological crisis that can directly impact future populations"
          ],
          correctAnswer: "Customers may experience even greater luxury and savings by cutting operational costs, maintenance through effective use water output without wastage."
        },
        {
          question: "Does SteamPRO plan on optimizing each attribute so they may enhance and achieve greater excellence while reducing waste of the output?",
          choices: [
            "Negative, overproducing helps accelerate SteamPRO as marketleader!",
            "Sure! Sustainable approaches with minimal environmental impacts across business segments accelerates better outputs for our consumers. ",
            "Our leadership should engage experts more often to enable an environmental mandate instead."
          ],
          correctAnswer: "Sure! Sustainable approaches with minimal environmental impacts across business segments accelerates better outputs for our consumers. "
        },
        {
          question: "Does advanced QPT push innovative ideas from SteamPRO? ",
          choices: [
            "Of course, with all design elements we use innovation to disrupt water scarcity in novel and exciting methodologies to ensure clean H2O stays well-suited within society!",
            "Yes, if the project benefits SteamPRO, regardless consumer opinion.",
            "Most likely so"
          ],
          correctAnswer: "Of course, with all design elements we use innovation to disrupt water scarcity in novel and exciting methodologies to ensure clean H2O stays well-suited within society!"
        }
      ],
      duration: "18 minutes",
    },
    {
      id: "core-5",
      title: "Mission and Vision",
      videoUrl: "https://www.youtube.com/watch?v=8GvULCHyPBE",
      startTime: "62:30",
      endTime: "78:00",
      transcript:
        "Our mission and vision guide our path forward as we transform the bath industry...",
      readingMaterial: `
        <h3>SteamPRO: Immersion into Deep Hydro-Wellness and Our Path to Domination</h3>

        <p>This guide dives into our history, core values, customer understanding, innovative vision, sales targets, growth path, and what we are as a holistic health-providing entity for millions today!</p>

        <h4>Our North Star: Super-Chill Vision</h4>
        <p>“Relax everyone.”</p>
        <p>  - Simple yet powerful. Stressed-out people seek sanctuary which drives all that we must perform as colleagues.</p>

        <p>From founder to the ops employee - relaxation comes above anything. SteamPRO offers far reaching avenues where customers may achieve transformative states from products & team guidance alone - from wellness features that offer great experiences such as transformative soundscapes from spa features integrated during Steam routines to high functioning tools we share with our customer's homes!</p>
        <h4>Our mission to be met, what do we offer!</h4>

        <p> Our development enables customers, partners with tools on the wellness path forward!</p>
        <li>Our products is used extensively today - we strive to create opportunities, expand and distribute the unique innovations for society using a service driven design framework where one may receive high level care along wellness journey </li>

        <h4>Product Promise: Customer Wellness, Sales Expansion via Viral Loops - THE SECRET STEAM THERAPY TECHNIQUE !</h4>

        <p> "When people inquire 'have I put resources in correct spot with this decision' becomes met upon delivery; high degrees immersion, steam and the first experience."<p>
        Steam sessions ensure complete wellness for SteamPRO families, where each receives high amounts relief to take part through various family routines.</p>

        <h4>STEAM THE BEST, OUR STEAM: KEY FACTS & DEMOGRAPHICS! </h4>

        <li> The key towards sales requires our products meet market readiness so those around our family can promote, connect during daily lives whether around colleagues with shared goals on growth from client satisfaction towards community expansion (each in constant action & service). 
        </ol>   

        <li> Key audience types such doctors, fitness fans etc may all see shared gains for the medical. < /ol>   

        <h4>Understanding How These Core Communities Operate : Connecting Wellness. Our Demographic </h4>

        <h5> ASPIRATIONAL </h5>
        <li> Wealth from access various tech solutions plus information means can participate among trends around town so come those with awareness will ask why should adopt now rather hold.  

        </ol>   
        <h5> HEALTH AWARE  </h5>
        <li> From cold plunge challenges over VLC health center wellness checkins this demographic makes choices based on performance where what offers makes worth compared all possible; to see it in them as must join group vs individual solution means its not alone!/ol>
        </ul>

        <h5>  PEOPLE with MEDICAL NEED </h5>
        From Asthma cases as PreDiabetes preCheck they act the quickest especially near Winter during haze or haze outbreaks.   They pursue services with direct results versus over hype as trust versus hype comes on as well/ol>
        </ul>

        <h4>BUILDING OUR BRAND TO GET US 4x Sales! Six Month Strategy </h4>
        All in to serve, install or engage! As we work the greater result means larger chance client tells relatives that great new spa system in neighborhood plus friend got something worth sharing also from their life!< /ol>
        We shall promote & elevate a community so no external promo actions may require but shared connection for that the key with sales on fire.</p>

        <h4> Our Plan To Dominate, Expansive Six to Nine to Twelve Month Goalset </h4>
        We expand tech group within and so forth will work for local street sales for constant sales to build the funnel  - will share SteamPro joy into global population from each street  then build team larger in many territories and soon build in hundreds with partners too for team and product spread! </p>

        <h4> Revisions and Revenue </h4>

        Today in a six (now down five) months: reach revenue by four-fold on-pace that equals SteamPRO is hitting annual returns of eight point million in twelve. The process builds team strength and capacity expansion by that goal also</p>

        <li>  Steam is our success!

        We commit always by 2031 into as dominate product to society by wellness and tech that Steam and innovation drives.</p> </li>
      </html>
      `,
      quiz: [
        {
          question: "What two seemingly opposing features did SteamPRO creatively merge into one at the Claridges hotel in Surajkund?",
          choices: [
            "Ice and Fire",
            "Light and Darkness",
            "Water and Fire",
            "Stone and Air"
          ],
          correctAnswer: "Water and Fire"
        },
        {
          question: "In chromotherapy, what color light is associated with helping to alleviate anger?",
          choices: [
            "Red",
            "Yellow",
            "Green",
            "Blue"
          ],
          correctAnswer: "Blue"
        },
        {
          question: "According to the discussion, why has flotation therapy become so popular?",
          choices: [
            "It's a new luxury trend.",
            "It’s the opposite concept so great, that hot/cold comes secondary",
            "It allows the body to escape gravity, promoting muscle relaxation and a meditative state.",
            "Dead Sea’s promote healthy products and results!"
          ],
          correctAnswer: "It allows the body to escape gravity, promoting muscle relaxation and a meditative state."
        },
        {
          question: "Which international golf figure has reportedly used SteamPRO’s systems at the Delhi Golf Club?",
          choices: [
            "Jack Nicklaus",
            "Arnold Palmer",
            "Tiger Woods",
            "Rory McIlroy"
          ],
          correctAnswer: "Tiger Woods"
        },
        {
          question: "What U.S. President used SteamPRO systems as they entered hotels?",
          choices: [
            "Joe Biden",
            "The Clintons",
            "Don Trumps",
            "Bush family"
          ],
          correctAnswer: "Bush family"
        },
        {
          question: "From which element do all clients find greater states through well-being with health by all that STEAMPRO provides?",
          choices: [
            "Fire with minerals, air combined at great temperatures!",
            "Well placed light around!",
            "From minerals at source origin!"
          ],
          correctAnswer: "Fire with minerals, air combined at great temperatures!"
        },
        {
          question: "In just that little place within baths what elementals do those at SteanPro find value within our innovations today and beyond to enable each to find states wellbeing?",
          choices: [
            "Heat at high or low heat capacitys across each range to the high highs.",
            "Hot to air plus dry cold.",
            "Pressure and therapy light, contrast, hydrol, light and Steam Aromatherapy!"
          ],
          correctAnswer: "Pressure and therapy light, contrast, hydrol, light and Steam Aromatherapy!"
        },
        {
          question: "During community creations with each, whats required for client care so that knowledge flows effectively? Which does everyone engage over?",
          choices: [
            "From ayurvedda! Steam should engage those where swdish benefits may amplify gains well across ",
            "Just trust!",
            "Every Steam engages each - those gains should support with key info"
          ],
          correctAnswer: "From ayurvedda! Steam should engage those where swdish benefits may amplify gains well across "
        },
        {
          question: "What benefits, that will reach consumers around India may become a tangible feature when STEAM achieves market excellence? What do customers do as routine that will ensure expansion?",
          choices: [
            "Be very proud",
            "Each will let partner-friend in-group community partner relative share those insights.",
            "Ensure sales remain sustainable by expansion and revenue stream for everyone over time!"        
          ],
          correctAnswer: "Each will let partner-friend in-group community partner relative share those insights."
        },
        {
          question: "Today to elevate team members must enhance output by the months of - that may occur only if all are involved in great productivity. From where is to-dom and where must we aim! The team will require what?",
          choices: [
            "High rates client service and that customer loves products - engagement required!!!.",
            "High focus around sales tech- all on each day at local",
            "Both",   
          ],
          correctAnswer: "Both"
        }
      ],
      duration: "18 minutes",
    },
  ],
  core2: [
    {
      id: "core2-1",
      title: "Hydrotherapy: Intro to Well-being",
      videoUrl: "https://www.youtube.com/watch?v=Hy7kXHPf93w",
      startTime: "00:00",
      endTime: "07:38",
      transcript: "Welcome to the advanced training module...",
      readingMaterial:` 
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unlocking Wellness: Hydrotherapy, Immunity, and the Mind-Body-Soul Connection</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2 {
            color: #333;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
        p {
            margin-bottom: 15px;
        }
        .highlight {
            font-weight: bold;
        }
    </style>
</head>
<body>

    <article>
        <h1>Unlocking Wellness: Hydrotherapy, Immunity, and the Mind-Body-Soul Connection</h1>

        <p>This article explores the principles of hydrotherapy within the broader context of naturopathy, emphasizing their potential benefits for overall well-being. We'll also address prevalent health challenges, the crucial role of a robust immune system, and the holistic concept of wellness as a balance between mind, body, and soul.</p>

        <h2>Hydrotherapy: Tapping into Nature's Healing Power</h2>

        <p>This section will review therapies rooted in naturopathy, particularly those utilizing water, known as hydrotherapy. Key examples include:</p>

        <ul>
            <li>Sauna: Heat therapy for detoxification and relaxation.</li>
            <li>Jacuzzi: Hydro massage for muscle relief and stress reduction.</li>
            <li>Cold Plunges (and Cold Water Immersion): Exposure to cold for invigorating circulation and boosting the immune system.</li>
            <li>Salt Floatation (Sensory Deprivation):  Creating a state of deep relaxation by minimizing external stimuli.</li>
        </ul>

        <p>These practices fall under the umbrella of <span class="highlight">Naturopathy</span>, with <span class="highlight">Hydrotherapy</span> representing a significant branch. The aim is to delve into how these therapies exert their effects on the body. Understanding the mechanisms behind these practices can empower us to make informed decisions about our health and well-being.</p>

        <h2>India's Health Landscape: A Context for Wellness</h2>

        <p>To understand the relevance of these therapies, it's crucial to acknowledge the major health challenges facing India.  Several factors contribute significantly to mortality rates:</p>

        <ul>
            <li><span class="highlight">Tuberculosis (TB):</span>  A persistent lung-related disease.</li>
            <li><span class="highlight">Stroke and Heart Attacks:</span>  Cardiovascular issues remain a leading cause of death.</li>
            <li><span class="highlight">Cancer:</span> A growing concern across various demographics.</li>
            <li><span class="highlight">Stress:</span>  A pervasive issue impacting individuals at all levels of society, from drivers to business executives.</li>
            <li><span class="highlight">Pollution:</span>  Encompassing air, water, noise, and food contamination, affecting everyone regardless of socioeconomic status.  Even highly successful individuals are exposed to the same polluted air and potentially compromised food sources.</li>
        </ul>

        <p>The omnipresence of <span class="highlight">stress</span> and <span class="highlight">pollution</span> underscores the need for proactive strategies to mitigate their negative impacts on our health.</p>

        <h2>Viral Threats and the Importance of Long-Term Health</h2>

        <p>The recurring emergence of viruses, such as the Coronavirus, poses ongoing challenges. While young individuals often demonstrate a remarkable capacity for recovery due to their resilient immune systems, these infections can leave lasting consequences. These consequences include:</p>

        <ul>
            <li><span class="highlight">Potential Lung Damage:</span>  Scar tissue formation in the lungs, possibly leading to chronic respiratory conditions such as asthma and COPD.</li>
            <li><span class="highlight">Metabolic Imbalances:</span>  Fat accumulation, contributing to elevated cholesterol levels and the constriction of blood vessels, increasing the risk of strokes and other cardiovascular complications.</li>
        </ul>

        <p>These accumulated imbalances, often referred to as "<span class="highlight">vikars</span>," can gradually transform into full-blown diseases or ailments as we age. This underscores the importance of adopting preventative measures early in life.</p>

        <h2>Building a Strong Immune Foundation</h2>

        <p>Given the inevitability of aging and the persistent threat of illness, it's paramount to prioritize strengthening our own immunity from an early age. The Coronavirus pandemic served as a stark reminder of the limitations of medical science and the critical role of a robust immune system.</p>

        <p>As a result, we are better positioned to prevent or effectively manage disease in our later years. Building a strong immunity is a long-term investment in health, enabling a better quality of life.</p>

        <h2>Redefining Wellness: Beyond Traditional Health Metrics</h2>

        <p>While concepts like health, fitness, and medical treatments are well-understood, a separate and equally vital term to consider is <span class="highlight">wellness</span>.  It is a crucial shift in perspective. So, what does wellness truly mean?</p>

        <h2>The Three Pillars of Wellness: Mind, Body, and Soul</h2>

        <p>Wellness is a more encompassing and holistic concept that encompasses health, fitness, and various other dimensions of well-being. It can be broken down into three key interconnected components:</p>

        <ul>
            <li><span class="highlight">Balance of the Mind:</span>  Mental clarity, emotional stability, and cognitive function.</li>
            <li><span class="highlight">Balance of the Body:</span>  Physical health, vitality, and optimal physiological function.</li>
            <li><span class="highlight">Balance of the Soul:</span>  Spiritual connection, purpose, and inner peace.</li>
        </ul>

        <p>True wellness is achieved when all three aspects are in harmony and equilibrium. This holistic perspective recognizes that our mental, physical, and spiritual states are intrinsically linked and mutually influential.</p>

        <h2>The Interconnectedness of Mind, Body, and Soul</h2>

        <p>The essence of wellness lies in the equilibrium between the mind, body, and soul. The mind, as our functional center, empowers our performance and decision-making. The body serves as the physical vehicle through which we accomplish our tasks and realize our goals. And the soul is the vital force that drives our purpose and directs our actions.</p>
        <p>To further understand how this plays out in daily life we break this down into five different components.</p>

    </article>

</body>
</html>

      
      `,
      quiz: [
        {
          "question": "Which of the following is a key component of hydrotherapy?",
          "choices": ["Aromatherapy", "Water", "Massage", "Dietary Supplements"],
          "correctAnswer": "Water"
        },
        {
          "question": "Which of these conditions is highlighted as a significant health challenge in India?",
          "choices": ["Alzheimer's Disease", "Tuberculosis", "Arthritis", "Migraines"],
          "correctAnswer": "Tuberculosis"
        },
        {
          "question": "According to the article, what is a consequence of fat accumulation in the body?",
          "choices": ["Increased Bone Density", "Lower Blood Pressure", "Elevated Cholesterol", "Improved Vision"],
          "correctAnswer": "Elevated Cholesterol"
        },
        {
          "question": "What is the primary lesson highlighted from the Coronavirus pandemic?",
          "choices": ["The importance of medication", "The effectiveness of lockdowns", "The limits of medical science and the importance of immunity", "The benefits of social distancing"],
          "correctAnswer": "The limits of medical science and the importance of immunity"
        },
        {
          "question": "What are the three components that contribute to wellness?",
          "choices": ["Diet, Exercise, and Sleep", "Mind, Body, and Soul", "Wealth, Health, and Happiness", "Family, Friends, and Career"],
          "correctAnswer": "Mind, Body, and Soul"
        },
        {
          "question": "Which hydrotherapy technique creates a state of deep relaxation by minimizing external stimuli?",
          "choices": ["Sauna", "Jacuzzi", "Salt Floatation (Sensory Deprivation)", "Cold Plunge"],
          "correctAnswer": "Salt Floatation (Sensory Deprivation)"
        },
        {
          "question": "Which factor affects individuals regardless of their socioeconomic status in India?",
          "choices": ["Access to healthcare", "Stress", "Pollution", "Diet"],
          "correctAnswer": "Pollution"
        },
        {
          "question": "What is the essence of wellness that ensures our daily performance?",
          "choices": ["Body", "Mind", "Soul", "Health"],
          "correctAnswer": "Mind"
        },
        {
          "question": "What do we use the body as?",
          "choices": ["Purpose", "Vehicle", "Dream", "Goal"],
          "correctAnswer": "Vehicle"
        },
        {
          "question": "What kind of effect, does metabolic imbalance due to viruses have in our bodies?",
          "choices": ["Increases bone density", "Improve vision", "Fat accumulation", "Lower blood pressure"],
          "correctAnswer": "Fat accumulation"
        }
      ],
      duration: "15 minutes"
    },
    {
      id: "core2-2",
      title: "The Holistic Trio: Diet, Exercise, and Detoxification for Optimal Wellness",
      videoUrl: "https://www.youtube.com/watch?v=Hy7kXHPf93w",
      startTime: "07:30",
      endTime: "26:01",
      transcript: "This module covers advanced techniques and operations...",
      readingMaterial: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Holistic Trio: Diet, Exercise, and Detoxification for Optimal Wellness</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
        p {
            margin-bottom: 15px;
        }
        .highlight {
            font-weight: bold;
        }
    </style>
</head>
<body>

    <article>
        <h1>The Holistic Trio: Diet, Exercise, and Detoxification for Optimal Wellness</h1>

        <p>This article explores the foundational elements of a comprehensive wellness approach, focusing on the interconnectedness of diet, exercise, detoxification, social connection, and gratitude. By understanding these principles, individuals can cultivate a lifestyle that promotes physical, mental, and spiritual well-being.</p>

        <h2>The Holy Trinity of Health: Diet</h2>

        <p>Within the realm of wellness, health is paramount, and diet forms the cornerstone of good health. A well-balanced diet contributes significantly to various aspects of well-being:</p>

        <ul>
            <li><span class="highlight">Skin Health:</span> A proper diet can lead to radiant and healthy skin.</li>
            <li><span class="highlight">Mental State:</span> Diet influences mental well-being, promoting a happier, less aggressive, and less irritable state of mind.</li>
            <li><span class="highlight">Body Tone:</span>  A balanced diet helps maintain a healthy body composition.</li>
        </ul>

        <p>Therefore, diet is arguably the most crucial aspect of overall health.</p>

        <h2>The Holy Trinity of Health: Workout</h2>

        <p>The second pillar of the "holy trinity" is exercise. "Workout" refers to actively moving your body to maintain fitness. This encompasses a broad range of activities:</p>

        <ul>
            <li>Yoga</li>
            <li>Calisthenics</li>
            <li>Pilates</li>
            <li>Swimming</li>
            <li>Cricket</li>
            <li>Jogging</li>
            <li>And countless other activities</li>
        </ul>

        <p>Engaging in regular physical activity is essential for maintaining a healthy and functional body.</p>

        <h2>The Holy Trinity of Health: Detoxification</h2>

        <p>Detoxification is often overlooked but plays a critical role in health.  On a daily basis, we are exposed to numerous toxins from various sources:</p>

        <ul>
            <li>Pollution</li>
            <li>Environmental toxins</li>
            <li>Processed Foods</li>
            <li>Even everyday products like soaps and cosmetics.</li>
        </ul>

        <p>These toxins accumulate within our cells. While cells work to expel these toxins to structures called lysosomes, these toxins may not be fully eliminated from the body without intentional detoxification efforts. Fast food, now delivered within minutes, raises concerns about food freshness and potential toxins. Additionally, the skin absorbs toxins from beauty products. All contribute to the toxic load. A large part is due to people not focusing on proper detoxification.</p>

        <p>Detoxification strategies include:</p>

        <ul>
            <li><span class="highlight">Steam Therapy:</span> Facilitating toxin release through sweat.</li>
            <li><span class="highlight">Alkaline Water:</span> Potentially aiding in detoxification.</li>
            <li><span class="highlight">Green Tea:</span>  Known for its detoxifying properties.</li>
            <li><span class="highlight">Spices (Masala):</span> Certain spices act as catalysts to help cleanse the lysosomes.</li>
        </ul>

        <p>Activities like working out and sweating also support detoxification.</p>

        <h2>Beyond Physical Health: Social Connection and Mental Well-being</h2>

        <p>Wellness extends beyond physical health and encompasses mental well-being. A significant factor in mental health is social connection:</p>

        <ul>
            <li>Spending quality time with friends</li>
            <li>Maintaining a strong social circle</li>
            <li>Nurturing positive relationships with family, parents, and children</li>
        </ul>

        <p>Humans are social beings, and strong connections foster happiness, reduce stress, and promote both physical and mental growth. Maintaining good relationships in the office and at home is crucial for overall well-being.</p>

        <h2>Gratitude and Faith</h2>

        <p>Cultivating gratitude and having faith, regardless of specific beliefs, is also important. Everyone needs to feel grateful for this beautiful life, planet, and the shared existence with friends and family. Gratitude can be expressed through:</p>

        <ul>
            <li>Prayer</li>
            <li>Meditation</li>
            <li>Simply appreciating the beauty of life, including good food, physical activity, and relaxation.</li>
        </ul>

        <h2>Regularity and Lifestyle Integration</h2>

        <p>The key to achieving true wellness is <span class="highlight">regularity</span>.  Sporadic efforts, such as occasional gym visits or a single day of dieting, yield minimal benefits.  All these elements must become part of a <span class="highlight">lifestyle</span> to foster genuine well-being.</p>

        <p>Integrating these practices into daily life allows individuals to thrive, feel good about themselves, connect with others, and appreciate the world around them.</p>

        <h2>The Benefits of Steam: A Lifestyle Choice</h2>

        <p>Many customers inquire about steam therapy, often intending to implement it only during the winter months. However, incorporating steam into one's lifestyle yields far greater benefits. While a single steam session offers relaxation, consistent steam therapy as part of a lifestyle leads to enhanced sleep and stress management, especially for individuals with high-pressure responsibilities. Instead of resorting to medication, regular steam sessions can promote natural, restful sleep.</p>

        <p>Steam must become an element of the "diet, workout, and detox" equation to get the most benefits.</p>

        <h2>The Power of Water and Heat: Ancient Wisdom</h2>

        <p>The Rig Veda states, "In the water lies medicine and Agni gives health to all." This highlights the ancient belief in the healing power of water and the importance of heat (Agni), which can be associated with the sun and its benefits. The combination of water and heat, as found in steam, is considered a source of healing.</p>

        <h2>Steam Across Cultures: A Universal Practice</h2>

        <p>Steam bathing has been recognized and practiced across various cultures and civilizations throughout history. Different cultures have different names for it and different ways they used steam.
        <ul>
          <li>Finland: Sauna (Sauna machines outnumber the people!)</li>
          <li>Russia: Banya</li>
          <li>Ayurveda (India): Swedana (Part of the Panchakarma where toxins are released through the skin. The toxins are fully released only after taking a Steam bath)</li>
          <li>Mughals: Hammam Khane (Bath Houses with various temperature rooms, warm, cool, and steam)</li>
          <li>Latin America (Inca): Tesmacal (Meditation ceremonies require participant to cleanse and purify their bodies with steam.)</li>
        </ul>
        </p>

        <p>While other countries and cultures embrace the traditions of heat and water, the culture seems to be diminishing in India, and this article aims to revive its popularity.</p>
        <p>Examples: Many french, Spanish and Italian people regularly work out and take regular team baths. In Japan friends will leave on a trip for work, and will often find streets deserted, but there is a communal spa where people get their relaxation from.</p>

        <p>All this can be recaptured with the ancient traditions that India had.</p>

        <h2>Detoxification: Reclaiming Our Health</h2>

        <p>India, one of the most hardworking populations of the world, must reclaim its health by making it easier to offer our fellow brothers and sisters the relaxation they deserve and that is achieved with detoxification and that brings us to the topic:
        why do we take steam and what are the difference between steam and sonas (that can also be a part of sweat therapy)?</p>

    </article>

</body>
</html>

      `,
      quiz: [
        {
          "question": "What are the three key elements of the 'holy trinity' for optimal wellness?",
          "choices": ["Meditation, Yoga, and Sleep", "Diet, Exercise, and Detoxification", "Supplements, Therapy, and Rest", "Socializing, Travel, and Hobbies"],
          "correctAnswer": "Diet, Exercise, and Detoxification"
        },
        {
          "question": "Which of the following is considered the cornerstone of good health within the context of wellness?",
          "choices": ["Regular Exercise", "A Balanced Diet", "Stress Management", "Sufficient Sleep"],
          "correctAnswer": "A Balanced Diet"
        },
        {
          "question": "What is the primary function of lysosomes in the context of detoxification?",
          "choices": ["To break down proteins", "To store energy", "To eliminate toxins from cells", "To transport nutrients"],
          "correctAnswer": "To eliminate toxins from cells"
        },
        {
          "question": "Besides physical health, what other aspect is significantly influenced by strong social connections?",
          "choices": ["Financial Stability", "Career Advancement", "Mental Well-being", "Increased Productivity"],
          "correctAnswer": "Mental Well-being"
        },
        {
          "question": "According to the article, what is the key to achieving true wellness?",
          "choices": ["Occasional efforts and sporadic activities", "High-intensity workouts", "Following strict diets", "Regularity and lifestyle integration"],
          "correctAnswer": "Regularity and lifestyle integration"
        },
        {
          "question": "In steam and heat therapies, What is the name that vedas gave it?",
          "choices": ["Agni", "Water", "Fire", "Hydro"],
          "correctAnswer": "Agni"
        },
        {
          "question": "In ancient Ayurvedic terms, what is the best and most natural way to take steam in their processes?",
          "choices": ["Hot Baths", "Saunas", "Swimming", "Swedana"],
          "correctAnswer": "Swedana"
        },
        {
          "question": "Where did the Mughals like to perform their steam and bath house routines?",
          "choices": ["Saunas", "Temples", "Hammam Khane", "Tesmacal"],
          "correctAnswer": "Hammam Khane"
        },
        {
          "question": "What did the ancient population in Latin America call their steam baths?",
          "choices": ["Saunas", "Hammam Khane", "Tesmacal", "Swedana"],
          "correctAnswer": "Tesmacal"
        },
         {
          "question": "What did the population believe they were able to achieve with their purified bodies?",
          "choices": ["Purified Water", "Purified Health", "Purified mind", "Purified bones"],
          "correctAnswer": "Purified mind"
        },
         {
          "question": "There is so much value of social gathering, so where did the Japanese go relax?",
          "choices": ["Tesmacal", "Community spas", "Yoga classes", "Local gyms"],
          "correctAnswer": "Community spas"
        }
      ],
      duration: "35 minutes"
    },
    {
      id: "core2-3",
      title: "Steam vs. Sauna: Unveiling the Science Behind Heat and Humidity",
      videoUrl: "https://www.youtube.com/watch?v=Hy7kXHPf93w",
      startTime: "26:02",
      endTime: "41:58",
      transcript: "Welcome to the advanced training module...",
      readingMaterial:` 
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steam vs. Sauna: Unveiling the Science Behind Heat and Humidity</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
        p {
            margin-bottom: 15px;
        }
        .highlight {
            font-weight: bold;
        }
    </style>
</head>
<body>

    <article>
        <h1>Steam vs. Sauna: Unveiling the Science Behind Heat and Humidity</h1>

        <p>This article delves into the distinct characteristics of steam rooms and saunas, exploring the scientific principles that govern their effects on the body. We'll examine the impact of heat and humidity on cardiovascular function, detoxification processes, and overall well-being, ultimately highlighting the unique benefits of steam therapy.</p>

        <h2>Understanding Heat and Steam: Key Differences</h2>

        <p>First, let's define key terms:</p>

        <ul>
            <li><span class="highlight">Sauna:</span> Relies on dry heat. Typical sauna temperatures range from 90 to 100 degrees Celsius, with a low relative humidity of 10 to 20%. Sessions typically last 15 to 20 minutes.</li>
            <li><span class="highlight">Steam Room:</span> Employs moist heat. Steam rooms maintain a temperature of approximately 50 degrees Celsius with a high relative humidity of 80 to 100%. Sessions usually last 10-15 minutes.</li>
        </ul>

        <p>The question that arises is: Why does steam therapy achieve similar results in a shorter timeframe despite operating at a lower temperature compared to saunas? If saunas are twice as hot, shouldn't they do their work at half the time.</p>

        <h2>The Science of Sweat: Thermoregulation</h2>

        <p>The answer lies in the science of thermoregulation. Understanding sweat's function in temperature control is critical.</p>

        <ul>
            <li><span class="highlight">The Function of Sweat:</span> We sweat to regulate body temperature. When we get hot, our bodies produce sweat, which evaporates from the skin's surface, creating a cooling effect.</li>
            <li><span class="highlight">The Evaporation Process:</span> The science is: Heat energy makes the sweat turn into vapour when coming from the skin. Then the process of vaporising absorbs the heat energy and helps cool down the skin. This is the underlying principle.</li>
        </ul>

        <p>This process of evaporation is key to understanding the differences between steam rooms and saunas. Dry and cool the humidity evaporate quicker and cools you down faster. Humid air does not allow the evaporated sweat to get vapourized.</p>

        <h2>Sauna Dynamics: Heat and Rapid Evaporation</h2>

        <p>In a sauna, the extremely hot, dry air causes pores to open rapidly and triggers profuse sweating. However, due to the low humidity, the sweat evaporates almost instantly. This keeps the skin cool, counteracting the high temperature. This is why you can be in a room with high temperatures. This process makes the sauna bearable for longer periods.</p>

        <h2>Steam Room Dynamics: Heat and Impeded Evaporation</h2>

        <p>In contrast, humidity restricts the sweat from evaporating and therefore you cannot lower your core heat as quickly. This leads to a build up in body temperatures.</p>

        <h2>Retrofitting: Easy with Steam</h2>

        <p>Because of the temperatures that need to be achieved, you must have specific equipment for a steam sauna. Steam, can often be done even inside an existing shower.</p>

        <h2>Heat Plus Humdity: Extra benefits</h2>
        <p>Both saunas and steam therapies have significant cardiovascular benefits and help detoxify our kidneys and livers but where steam really begins to excel is through its heat plus humidity approach. In particular the heat plus humidity works best with organs such as the lungs.</p>

        <h2>The Cardiovascular Connection: Vasodilation and Heart Rate</h2>

        <p>Heat causes expansion in organic material. So how does the heat from Steam work?</p>
        <ul>
          <li>Cells get expanded</li>
          <li>Blood vessels, nerves, arteries, and veins also start to become expanded.</li>
        </ul>

        <ul>
            <li><span class="highlight">Vasodilation:</span> Heat causes blood vessels to expand, a process called vasodilation.</li>
            <li><span class="highlight">Blood Pressure Reduction:</span> As blood vessels widen, blood pressure decreases.</li>
            <li><span class="highlight">Heart Rate Increase:</span> To maintain adequate blood flow to organs, the heart rate increases to compensate for the decreased blood pressure.</li>
        </ul>

        <p>This combination of vasodilation, reduced blood pressure, and increased heart rate mimics the effects of a cardiovascular workout. The steam session causes the heat to trigger a cardio workout for you! It is a mild workout, however. And that strengthens your heart muscle, as your heart becomes more strong and the muscles grow.</p>

        <h2>Research-Backed Benefits: The Finnish Study</h2>

        <p>Dr. Jari Laukkanen led a groundbreaking 30-year study in Finland, following over 2,500 middle-aged men. The study divided participants into groups based on their sauna (heat therapy) frequency:</p>

        <ul>
            <li>Group 1: No sauna use</li>
            <li>Group 2: Sauna use 2-3 times per week</li>
            <li>Group 3: Sauna use 4-7 times per week</li>
        </ul>

        <p>The results were striking. Men in the "4-7 times per week" group experienced a 46% reduction in the risk of heart disease compared to those who did not use saunas at all. This highlights the significant cardiovascular benefits of regular heat therapy.</p>
    </article>

</body>
</html>
       
      `,
      quiz: [
        {
          "question": "What is the typical temperature range in a sauna (in Celsius)?",
          "choices": ["40-50", "60-70", "90-100", "110-120"],
          "correctAnswer": "90-100"
        },
        {
          "question": "What is the typical humidity range in a steam room?",
          "choices": ["10-20%", "30-40%", "50-60%", "80-100%"],
          "correctAnswer": "80-100%"
        },
        {
          "question": "What is the primary function of sweat in thermoregulation?",
          "choices": ["To increase body temperature", "To transport nutrients", "To create a cooling effect through evaporation", "To store energy"],
          "correctAnswer": "To create a cooling effect through evaporation"
        },
        {
          "question": "In a sauna, why does sweat evaporate quickly?",
          "choices": ["Due to the low temperature", "Due to the high humidity", "Due to the low humidity", "Due to the high air pressure"],
          "correctAnswer": "Due to the low humidity"
        },
        {
          "question": "What is the cardiovascular effect of heat on blood vessels?",
          "choices": ["Vasoconstriction (narrowing)", "Vasodilation (widening)", "No effect", "Increased blood viscosity"],
          "correctAnswer": "Vasodilation (widening)"
        },
        {
          "question": "What happens to blood pressure when blood vessels dilate?",
          "choices": ["Increases", "Decreases", "Remains the same", "Fluctuates randomly"],
          "correctAnswer": "Decreases"
        },
        {
          "question": "What happens to heart rate as a result of vasodilation and decreased blood pressure?",
          "choices": ["Increases", "Decreases", "Remains the same", "Becomes irregular"],
          "correctAnswer": "Increases"
        },
        {
          "question": "Which of the following best mimics a cardio workout",
          "choices": ["Vasoconstriction (narrowing)", "Vasodilation (widening)", "No effect", "Increased blood viscosity"],
          "correctAnswer": "Vasodilation (widening)"
        },
        {
          "question": "What was the primary conclusion of Dr. Laukkanen's 30-year Finnish study?",
          "choices": ["Sauna use has no effect on heart disease risk", "Infrequent sauna use is more beneficial than frequent use", "Regular sauna use reduces the risk of heart disease", "Sauna use increases the risk of skin cancer"],
          "correctAnswer": "Regular sauna use reduces the risk of heart disease"
        },
        {
          "question": "Compared with other therapies, which offers the most benefit?",
          "choices": ["Vasoconstriction (narrowing)", "Saunas with high temperatures", "Steam with lower tempteratures but more humidity", "Increased blood viscosity"],
          "correctAnswer": "Steam with lower tempteratures but more humidity"
        }
      ],
      duration: "15 minutes"
    },
    {
      id: "core2-4",
      title: "Steam Therapy: A Deep Dive into Cardiovascular, Pulmonary, and Mental Health Benefits",
      videoUrl: "https://www.youtube.com/watch?v=x4qG8IDv12E",
      startTime: "00:00",
      endTime: "20:14",
      transcript: "Welcome to the advanced training module...",
      readingMaterial:` 
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steam Therapy: A Deep Dive into Cardiovascular, Pulmonary, and Mental Health Benefits</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
        p {
            margin-bottom: 15px;
        }
        .highlight {
            font-weight: bold;
        }
    </style>
</head>
<body>

    <article>
        <h1>Steam Therapy: A Deep Dive into Cardiovascular, Pulmonary, and Mental Health Benefits</h1>

        <p>This article delves into the multifaceted benefits of steam therapy, exploring its impact on various organ systems. We will explain how it promotes cardiovascular health, supports pulmonary function, and positively influences mental well-being.</p>

        <h2>Steam vs. Workout</h2>

        <p>When we are working out, it can be exhausting and makes us breathless. What is the key difference in steam rooms? With steam practices, it does not make you breathless!</p>

        <h2>Heat Therapy and Internal Organs</h2>

        <p>The key concept with heat therapy is raising and keeping those levels with what the body needs. Our organs all operate at 37 degrees Celcius. For any treatment to be beneficial, you want to get your organs to increase in temperature.</p>

        <h2>How Does Steam Elevate Body Temperature?</h2>

        <p>Steam is the only element where you can raise your body temperature. And this is where heat therapy benefits begin.</p>

        <h2>The Heat That Strengthens the Cardio</h2>

        <p>We discussed in the last chapter how the vessels dilate and that expands. Because of this, your heart muscles can strengthen, and studies and publicly available research can back this. A major study on this is a pubmed study, meaning not something that only we here at Steampromotions could find value out of!</p>

        <h2>Weight Loss? Avoid Stints? Problems with Blood Vessels?</h2>

        <p>One can avoid all of these with regular steam. There is a 40-70% chance of not getting heart disease with regular steam. Open heart surgery can be a related problem. This can be easily avoided with taking care to include regular steam in your life.</p>

        <h2>Find Out More Yourself</h2>

        <p>You guys can check out the amazing links that are available on the slides for the study!</p>

        <h2>Pulmonary Benefits: Lungs</h2>

        <p>Aside from blood vessels, the most notable organ to benefit is the lungs. During the peak of the corona virus we all realized the benefits. It provided relief to the sinus and the lung to hydrate and provide comfort.</p>

        <h2>Pollution</h2>

        <p>For those of you who don't know, air with particulate matter above 2.5 microns is very small and can easily get past the body's defenses such as the hairs in our nose. These particles then get stuck on the surface and not even coughing or violently sneezing will remove them. The doctors will always advise water and staying hydrated to help protect against these. This will then help wash the impurities down into the stomach.</p>

        <h2>Full Body Better!</h2>

        <p>Regular facial steamers may only get a portion but full body steam can benefit the entire pulmonary system with added heat as it promotes dilation. The heat and the vibration help to remove the impurities from the airwaves and then move to the GI to be expelled!</p>

        <h2>Why Does the Heat Matter?!</h2>

        <ul>
          <li>Heat opens up the airways, allowing for easier breathing</li>
          <li>The humidity hydrates the area so it washes down</li>
          <li>The vibration from the heat pushes the impurities for extraction</li>
        </ul>

        <h2>What is Next Step</h2>

        <p>Any medical expert will prescribe steam. It is the natural cure. Medicine comes second, and nature always heals first.</p>

        <h2>Mental Health!</h2>

        <p>There are tons of benefits for the mental state. Normal body temperatures are 37 degrees. When there are external factors, the body's temperature elevates and becomes abnormal. This can trigger responses in the brain and set off alarms! In effect, some of the body's most important chemicals are released. </p>

        <ul>
          <li>Heat shock proteins HSP: This is a great chemical! People with this chemical tend to live longer</li>
          <li>Adrenaline for the boost of energy!</li>
          <li>Releasing of 'DOSE' chemicals Dopamine, Oxytocin, Serotonin, Endorphins which are chemicals related to the sleep cycles, digestions, moods. This chemical release has links to emotions, and love!</li>
        </ul>

        <h2>Circadian Rhythm</h2>

        <p>Early humans followed the sun. Waking when up and sleeping the moment it went down. And 7-8 hours of sleep is required as the brain will then activate cerebrospinal fluid, which will clean the brain! And this is done more effectively when in tune with nature.</p>

        <h2>The Brain</h2>

        <p>The brain is the collection of neurons, and the neurons are like cells with electrical pulses. Because of the fast pace, we get overwhelmed in our bodies and forget what is important!</p>

    </article>

</body>
</html>
       
      `,
      quiz: [
        {
            "question": "According to the content, what is a primary difference between a gym workout and a steam session?",
            "choices": [
                "Gym workouts primarily target mental health, while steam sessions target physical health.",
                "Gym workouts always lead to breathlessness, while steam sessions do not.",
                "Steam sessions always lead to breathlessness, while gym workouts do not.",
                "Steam session are only for those already in good physical conditions",
            ],
            "correctAnswer": "Gym workouts always lead to breathlessness, while steam sessions do not."
        },
        {
            "question": "What is the normal operating temperature of human internal organs?",
            "choices": [
                "40 degrees Celsius",
                "32 degrees Celsius",
                "37 degrees Celsius",
                "39 degrees Fahrenheit",
            ],
            "correctAnswer": "37 degrees Celsius"
        },
        {
            "question": "The most important part of what is being raised by the process of steam?",
            "choices": [
                "Fat percentages",
                "1 and 2 degrees Celsius of internal temperatures",
                "Blood flow rates",
                "Electrolyte storage",
            ],
            "correctAnswer": "1 and 2 degrees Celsius of internal temperatures"
        },
        {
            "question": "According to the content, what chemical is associated with a longer lifespan and can be developed through heat shock from steam baths?",
            "choices": [
                "EDP",
                "VLC",
                "THC",
                "HSP",
            ],
            "correctAnswer": "HSP"
        },
        {
            "question": "HSP, as related to the chemical of living longer, stands for?",
            "choices": [
                "Heat Stroke Process",
                "Heat Shock Proteins",
                "Heat Stocking Power",
                "Heat Struck Process",
            ],
            "correctAnswer": "Heat Shock Proteins"
        },
        {
            "question": "DOSE brain chemicals help regulate what bodily functions?",
            "choices": [
                "They do not relate to the body's function",
                "Sleep cycles, Moods, Digestion",
                "Fatigue",
                "Losing or building muscles",
            ],
            "correctAnswer": "Sleep cycles, Moods, Digestion"
        },
        {
            "question": "It allowed for tools and agriculture was the biggest help with early humans, and what led to this benefit?",
            "choices": [
                "Bigger brains",
                "Fire",
                "The Moon",
                "More strength",
            ],
            "correctAnswer": "Fire"
        },
        {
            "question": "What helped dictate the daily process of the first homosapians?",
            "choices": [
                "Family",
                "Leaders",
                "The Moon",
                "The Sun",
            ],
            "correctAnswer": "The Sun"
        },
        {
            "question": "The cerebrospinal fluid is activated for what part of brain function?",
            "choices": [
                "During the day",
                "As a drink",
                "When you move",
                "During sleep",
            ],
            "correctAnswer": "During sleep"
        },
        {
            "question": "What can people also align themselves with for overall wellness?",
            "choices": [
                "Good friends",
                "More technology",
                "Local bars",
                "Nature",
            ],
            "correctAnswer": "Nature"
        },
        {
            "question": "It is proven that, with what the medical field agrees, you can better protect yourself with sinus functions and water vapors because it is with what part of steam?",
            "choices": [
                "Hydration",
                "Fatigue",
                "Mood",
                "Emotions",
            ],
            "correctAnswer": "Hydration"
        }
    ],
      duration: "15 minutes"
    },
    {
      id: "core2-5",
      title: "Unlocking Cellular Health, Mental Well-being, and Skin Radiance Through Steam Therapy",
      videoUrl: "https://www.youtube.com/watch?v=INAZjUx_fE8",
      startTime: "00:00",
      endTime: "14:`13",
      transcript: "Welcome to the advanced training module...",
      readingMaterial:` 
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unlocking Cellular Health, Mental Well-being, and Skin Radiance Through Steam Therapy</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
        p {
            margin-bottom: 15px;
        }
        .highlight {
            font-weight: bold;
        }
    </style>
</head>
<body>

    <article>
        <h1>Unlocking Cellular Health, Mental Well-being, and Skin Radiance Through Steam Therapy</h1>

        <p>This article explores the transformative effects of steam therapy on a cellular level. We will discuss how it can positively impact everything from the mind to the skin to overall general well-being, backed by science and research.</p>

        <h2>Neural Connections</h2>

        <p>Neurons connect with each other through their tails. These tails have a protein called myelin. Myelin protein's thickness can provide a quick transmission. That helps with focus, attention to detail, and quick response</p>

        <p>The great thing is the protein is directly impacted by taking heat therapy.</p>

        <h2>Releasing Endorphins</h2>

        <p>Take note that", along with that myelin protein", there can be other positive functions. Endorphins levels increase when heat-based therapy is done. And it helps with great feelings."

        <h2>Curbing Cortisol</h2>

        <p>High cortisol levels in the blood means higher stress levels. Steam helps inhibit session and the release of those stressful side effects of cortisol.</p>

        <p>With this knowledge, know that mental health is a big concern. People are moving towards medications and incorporating something simple as 10 minutes of steam a day can help with the brain to function more effectively and increases longevity. Mental health is now being approached more with drugs but steam is completely natural to balance the mind.</p>

        <h2>How About the Pain?!</h2>

        <p>Steam is also effective with pain management, as with arthritis, slipped disks and cancer treatment. It calms the mind and helps it not be as apparent. That is why this is such an important part of mental health.</p>

        <h2>Skin</h2>

        <p>Skin is the biggest organ and is also a communication device. Eating certain foods can change the body odor, as it connects the inside with the outside. What is inside, impacts everything outside!</p>

        <h2>All Organs</h2>

        <p>All organs inside are connected to the skin. In Naturopathy, people with great and glowing skin have detoxified internal organs. With pimples or irritations, it has been proven that the body is communicating something. Kidneys are impacted and if a person is having problems, this will be translated on the skin.</p>

        <h2>Spare Kidney</h2>

        <p>There was a story about one of the customers with kidney problems, his kidneys were a point in which it was a struggle to go to the park. Now, there is something to be said that his skin became a spare kidney. Now for those of you who are new, steam's high heat opens the pores and skin where impurities get expelled and the kidney doesn't have to work as hard.</p>

        <p>What happened three months later?! The customer was able to enjoy walking in the park again and now does SunBaths! The toxins that are being extracted have helped him feel better. He has been on the process of 1.5 bags instead of 2! The guy was so happy that he started taking regular steam twice a day!</p>

        <h2>Benefits of a Workout</h2>

        <p>Steam is nothing more than a small and simple workout. Just a small 10 minute session and you are good. What is needed? Well first stay hydrated and don't start if you have had a long night of drinking, nor if the body has cold like symptoms. Use common sense!</p>

        <h2>What is Skin For?</h2>

        <p>The skin lets both the inside and outside be felt. A steam room can help improve overall skin. Steam brings the body to its natural balance.

        <h2>Cellular Level Oxidation</h2>

        <ul>
          <li>Each cell has a waste basket - called Lysosomes</li>
          <li>Cell death is due to the layer of cholesterol between the cell</li>
        </ul>

        <p>To start a process, you need a catalyst of heat. Great catalyst with taking steam will help with great release and get the cholesterol out. It gets all the waste and makes it explode out! </p>
        <p>It had been theorized that, in some studies, cancer is cells that turn death cells to go good and killing others. But what steam also does, since heat makes everything vibrate, that vibrations spreads uniformly throughout the cell. And that vibration due to the heat gets that oxidation flowing! So what does that do? It helps reduce chances of cancer! The cellular level oxidation gets moving throughout and reduces the chances of cancers. This gets you the cure for the cells that have problems now!</p>

        <h2>Steam Linked to Reduce Cancer?!</h2>

        <p>It is to note that what has been said: is a thought that has been given a white paper and it is going to get evaluated by the scientific community!</p>

        <h2>Hyper-Saturated Steam</h2>

        <p>Hyper saturated steam is the tool being used. You can get it through probes in the body, giving it to the cell directly. It's said that with the new study there is very little pain and a 100% cure! It is proven and has been backed!"

        <h2>What Does It All Mean?</h2>

        <p>With this conversation and if people realize the key concepts and important ideas here", there is no one in the right mind who would not first seek something to take care of themselves and their family and try all of this out. </p>
        "The steam industry is very natural". You'll find that there is a joy found and a water wellness benefit that people yearn for." And with all of that... You don't have to trudge to the mountains and the parks... you get to enjoy the sweating in the comfort of your space!" It helps both the genders, from men who want to lift, to mothers in home, and more.</p>

        <p>For so little of 10 minutes a day all of that can be handled! You can focus on the detoxification, working out and diet can be balanced from there."This also brings you to a nice life where it is all balanced." This is power! It is now the goal of Steampromotions... Get one in every home and make each life that much better!"

    </article>

</body>
</html>
       
      `,
      quiz: [
        {
            "question": "The protein between the neuron's tails, which impacts how great it can make everything perform to impact your brain, is?",
            "choices": [
                "Elastin",
                "Mylin",
                "Hydro",
                "Calci",
            ],
            "correctAnswer": "Mylin"
        },
        {
            "question": "Heat therapy positively impacts mental health through what effect?",
            "choices": [
                "Low Blood Pressure",
                "High Blood Sugar",
                "Release of Endorphins",
                "It actually has zero effect!",
            ],
            "correctAnswer": "Release of Endorphins"
        },
        {
            "question": "With the high release and good feelings, what other negative is curved at the same time?",
            "choices": [
                "Lower Cholesterol",
                "Good Memory",
                "Skin Problems",
                "Stress",
            ],
            "correctAnswer": "Stress"
        },
        {
            "question": "If you wanted to protect your well-being, and what others might look to medicine or even drugs for... what is the natural way?",
            "choices": [
                "Balance the mind",
                "Increase heart activity",
                "Regulate the digestion",
                "The normal medicine and drug path is the way to go!",
            ],
            "correctAnswer": "Balance the mind"
        },
        {
            "question": "Because the skin is our biggest organ, it also is a:",
            "choices": [
                "Waste removal area",
                "Communication device",
                "Food source",
                "Protector of fats",
            ],
            "correctAnswer": "Communication device"
        },
        {
            "question": "When that kidney is not working well, what gets relied upon",
            "choices": [
                "The liver",
                "The brain",
                "The skin",
                "More water consumption",
            ],
            "correctAnswer": "The skin"
        },
        {
            "question": "Heat dilates the cells and opens up the pores to do what function?",
            "choices": [
                "More water storage",
                "Expelling more toxins",
                "Stop sweating",
                "Regulate heart rhythms",
            ],
            "correctAnswer": "Expelling more toxins"
        },
        {
            "question": "With the heat catalyzing the process, what also is now able to be released with the help of vibration?",
            "choices": [
                "Bone density",
                "White Blood Cells",
                "Cholesterol",
                "Mitochondria",
            ],
            "correctAnswer": "Cholesterol"
        },
        {
            "question": "What major organ has been found to have an extremely impressive change thanks to steam therapy, with some even now theorizing of it as a 'cure'?",
            "choices": [
                "The Brain",
                "The Heart",
                "Skin",
                "Cancers",
            ],
            "correctAnswer": "Cancers"
        },
        {
            "question": "For people already putting forth effort for toothpaste and so much more, for the power of water and natural benefits ...what is now easy to do?",
            "choices": [
                "Join an exclusive gym",
                "Eat healthily",
                "Get a home steam unit",
                "Move to the forest",
            ],
            "correctAnswer": "Get a home steam unit"
        },
        {
            "question": "Because the customers don't always want to work out, thanks to getting so sweaty and going to mountains and so on, how do we provide a better middle ground for customers?",
            "choices": [
                "Encourage gym workouts",
                "Tell people to move higher into the mountains",
                "Go to war with the mountain people",
                "Tell them that with water and a 10 minute steam bath, that that makes a world of difference",
            ],
            "correctAnswer": "Tell them that with water and a 10 minute steam bath, that that makes a world of difference"
        }
    ],
      duration: "15 minutes"
    }
  ],
  marketing: [
    {
      id: "marketing-1",
      title: "Brand Strategy & Positioning",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      startTime: "00:00",
      endTime: "10:00",
      transcript: "Our brand represents innovation, quality, and luxury in the bath industry...",
      readingMaterial: `
        <h3>SteamPRO Brand Strategy</h3>
        <p>Our brand positioning establishes SteamPRO as the premium choice in bath technology.</p>
      `,
      quiz: [
        {
          question: "What does SteamPRO's brand promise to do?",
          choices: ["Sell more products", "Transform bathrooms into wellness experiences", "Beat competitors"],
          correctAnswer: "Transform bathrooms into wellness experiences"
        }
      ],
      duration: "30 minutes"
    }
  ],
  hr: [
    {
      id: "hr-1",
      title: "Hr basic training",
      videoUrl: "https://www.youtube.com/embed/7z9wxcSu6yc",
      startTime: "00:00",
      endTime: "00:18",
      transcript: "Welcome to the workplace safety training...",
      readingMaterial: `

      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SteamPRO HR Culture & Conduct Guide</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      line-height: 1.6;
      color: #333;
    }
    h1, h2, h3 {
      color: #0c4a6e;
    }
    ul {
      margin-left: 20px;
    }
    .highlight {
      background-color: #f0f9ff;
      padding: 10px;
      border-left: 4px solid #0c4a6e;
      margin: 20px 0;
    }
  </style>
</head>
<body>

  <h1>SteamPRO HR Culture & Conduct Guide</h1>
  <p>Welcome to the team! At SteamPRO, our strength lies not just in our products and innovation but in the values and behaviors we uphold every day. This guide will help you understand our workplace culture, team expectations, and how to align yourself for success here.</p>

  <h2>1. Our Culture at SteamPRO</h2>
  <p>SteamPRO is driven by values of wellness, innovation, and respect. We believe in:</p>
  <ul>
    <li><strong>Customer-first thinking:</strong> Always prioritize the experience of the end user.</li>
    <li><strong>Ownership & Accountability:</strong> If you take on a task, own it end-to-end.</li>
    <li><strong>Speed & Simplicity:</strong> Move fast, communicate clearly, and avoid unnecessary complexity.</li>
    <li><strong>Wellness-driven:</strong> We promote a healthy work-life balance and encourage personal well-being.</li>
  </ul>

  <h2>2. Behavior & Communication</h2>
  <p>Your behavior reflects the brand. Internally or externally, keep the following in mind:</p>
  <ul>
    <li><strong>Politeness:</strong> Always greet clients, guests, and colleagues with respect.</li>
    <li><strong>Timeliness:</strong> Show up on time—whether for meetings, work, or commitments.</li>
    <li><strong>Clear communication:</strong> Avoid vague answers. Be direct but respectful. If in doubt, over-communicate.</li>
    <li><strong>Positive attitude:</strong> Be solution-focused. Avoid blame games.</li>
    <li><strong>Dress code:</strong> Be clean and presentable—especially during client visits or installations.</li>
  </ul>

  <h2>3. Core Conduct Guidelines</h2>
  <p>Some key do's and don’ts that help us maintain a smooth workplace:</p>
  <div class="highlight">
    <strong>Do’s:</strong>
    <ul>
      <li>Document everything—especially client calls, orders, follow-ups.</li>
      <li>Be proactive in updating team members or clients.</li>
      <li>Respect client privacy and data security.</li>
      <li>Help others when you can—this is a team, not a competition.</li>
    </ul>
    <strong>Don'ts:</strong>
    <ul>
      <li>Never make false commitments to clients.</li>
      <li>Do not share internal info outside the company.</li>
      <li>Avoid gossip or negativity about any teammate.</li>
      <li>Never ignore client messages or follow-ups.</li>
    </ul>
  </div>

  <h2>4. How We Work</h2>
  <ul>
    <li><strong>Responsiveness:</strong> All messages (Slack, WhatsApp, Email) must be acknowledged within a reasonable time (max 2 hours during working hours).</li>
    <li><strong>Reporting:</strong> Update your progress daily or as per team norms. Transparency is key.</li>
    <li><strong>Feedback:</strong> Always open to feedback. We improve by learning together.</li>
    <li><strong>Escalation:</strong> If you’re stuck, escalate early. Silence is not acceptable.</li>
  </ul>

  <h2>5. Respecting Wellness</h2>
  <p>SteamPRO was built on the idea of well-being. As such:</p>
  <ul>
    <li>Take regular breaks—don’t burn out.</li>
    <li>Health issues? Flag them early, take the time you need.</li>
    <li>Mental wellness matters too—talk to your manager or HR if you're overwhelmed.</li>
  </ul>

  <h2>6. Team Dynamics</h2>
  <p>We believe in collaboration over hierarchy. You can always speak up—whether it's a field technician or the CEO. Good ideas come from everywhere.</p>
  <ul>
    <li><strong>Weekly Check-ins:</strong> Used to align on goals, share updates, and raise blockers.</li>
    <li><strong>Recognition:</strong> We celebrate effort and wins, no matter how small.</li>
  </ul>

  <h2>7. Exit & Resignation Conduct</h2>
  <p>If you choose to leave the company:</p>
  <ul>
    <li>Provide at least 1 month of notice.</li>
    <li>Ensure smooth handover of responsibilities and client accounts.</li>
    <li>HR will help with final clearance and documentation.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>At SteamPRO, HR isn’t just about policies—it’s about people. When we support each other, show professionalism, and commit to wellness, we all grow together. We’re glad you’re part of this journey.</p>

</body>
</html>
      `,
      quiz: [
        {
          question: "What is one of SteamPRO's core values?",
          choices: ["Perfectionism", "Customer-first thinking", "Micromanagement"],
          correctAnswer: "Customer-first thinking",
        },
        {
          question: "What is the expected response time for internal communication during work hours?",
          choices: ["1 hour", "Same day", "Max 2 hours"],
          correctAnswer: "Max 2 hours",
        },
        {
          question: "Which of the following is a 'Do' at SteamPRO?",
          choices: [
            "Make verbal commitments only",
            "Document client interactions",
            "Ignore client follow-ups",
          ],
          correctAnswer: "Document client interactions",
        },
        {
          question: "How should you dress during client visits?",
          choices: ["Casual wear is fine", "Be clean and presentable", "Traditional attire only"],
          correctAnswer: "Be clean and presentable",
        },
        {
          question: "What should you do if you're feeling overwhelmed or unwell?",
          choices: [
            "Continue working in silence",
            "Talk to your manager or HR",
            "Complain to a colleague",
          ],
          correctAnswer: "Talk to your manager or HR",
        },
        {
          question: "Which behavior is discouraged at SteamPRO?",
          choices: ["Offering help to teammates", "Over-communicating", "Sharing internal info outside"],
          correctAnswer: "Sharing internal info outside",
        },
        {
          question: "What is emphasized over hierarchy at SteamPRO?",
          choices: ["Formality", "Collaboration", "Strict reporting"],
          correctAnswer: "Collaboration",
        },
        {
          question: "What happens during weekly check-ins?",
          choices: [
            "Discuss personal issues",
            "Align on goals and raise blockers",
            "Celebrate birthdays",
          ],
          correctAnswer: "Align on goals and raise blockers",
        },
        {
          question: "What’s expected during an employee's resignation?",
          choices: [
            "Immediate exit",
            "1 month notice and proper handover",
            "Only verbal resignation is needed",
          ],
          correctAnswer: "1 month notice and proper handover",
        },
        {
          question: "Which of the following reflects SteamPRO’s workplace behavior expectations?",
          choices: ["Silence over escalation", "Blame games", "Clear, respectful communication"],
          correctAnswer: "Clear, respectful communication",
        },
      ],
      duration: "20 minutes"
    }
  ],
  sales: [
    {
      id: "sales-1",
      title: "Sales Basic",
      videoUrl: "https://www.youtube.com/watch?v=jiN6hwbHmhM",
      startTime: "00:35",
      endTime: "08:38",
      transcript:
        "Our sales process is designed to understand customer needs and provide solutions...",
      readingMaterial: `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sales Training: Understanding Hydrotherapy's Benefits and Connecting with Customers</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.8;
      margin: 30px;
      background-color: #fefefe;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    ul {
      list-style-type: disc;
      margin-left: 25px;
    }
    p {
      margin-bottom: 20px;
      font-size: 16px;
    }
    .highlight {
      font-weight: bold;
      color: #007bff;
    }
    .benefits {
      font-style: italic;
      color: #6c757d;
    }
    .selling-point {
      font-weight: bold;
      color: #28a745;
    }
    .tip {
      background-color: #f1f3f5;
      padding: 12px;
      border: 1px solid #ced4da;
      border-radius: 6px;
      margin-top: 15px;
    }
    .quote {
      color: #555;
      margin: 10px 0;
      font-style: italic;
    }
  </style>
</head>
<body>

<article>
  <h1>Sales Training: Understanding Hydrotherapy's Benefits and Connecting with Customers</h1>

  <p>This training module is designed to empower you with a deep understanding of how hydrotherapy aligns with the real-world problems your customers face. By connecting their stressors to the proven benefits of steam and heat-based therapy, you will become not just a salesperson—but a trusted wellness advisor.</p>

  <h2>Understanding the Modern Customer: Stress, Pollution, and Disease</h2>

  <p>Today’s customers are not just looking for luxury—they’re searching for relief, for solutions to daily pressures that are affecting their physical and mental well-being. To connect meaningfully, you must understand their pain points.</p>

  <ul>
    <li><span class="highlight">Constant Stress:</span> Juggling work, finances, family responsibilities, and the 24/7 digital world causes ongoing mental and emotional strain. Chronic stress is linked to anxiety, insomnia, and heart issues. When you acknowledge this, you create empathy and trust.</li>
    <li><span class="highlight">Environmental Pollution:</span> From toxic air and contaminated water to pesticide-laden produce, people feel overwhelmed by the unhealthy elements surrounding them. Many are actively seeking ways to "detox" or counteract these daily exposures.</li>
    <li><span class="highlight">Emerging Diseases:</span> With rising awareness about respiratory illness, lifestyle diseases, and viral outbreaks, customers are more focused on prevention than ever before. They want immunity, resilience, and protection.</li>
  </ul>

  <p><span class="selling-point">The Sales Insight:</span> Don’t just sell steam; sell **recovery** and **resilience**. Position hydrotherapy as a trusted ally in combating modern health challenges—without pills, without side effects, and without invasive procedures.</p>

  <h2>Hydrotherapy: Your Customer's Shield Against the Modern World</h2>

  <p>Hydrotherapy isn’t a trend—it’s a scientifically backed, ancient method of wellness, reimagined for the modern customer. Make them realize: they don’t have to suffer silently. They can take control of their health in a natural and enjoyable way.</p>

  <h3>Key Hydrotherapy Benefits (Connect These to Customer Needs!)</h3>

  <ul>
    <li>
      <span class="highlight">Cardiovascular Health:</span>
      Steam sessions raise the heart rate similarly to light cardio. This promotes better blood circulation, reduces blood pressure, and improves oxygen flow.
      <div class="quote">"A study by Dr. Jari Laukkanen found that people who used saunas 4-7 times a week had a <strong>46% lower risk of fatal heart disease</strong> compared to those who used it once a week."</div>
      <span class="benefits">You can confidently tell customers this is more than relaxation—it's heart protection.</span>
    </li>

    <li>
      <span class="highlight">Pulmonary Support & Detoxification:</span>
      Breathing in warm, moist steam helps open nasal passages, loosen mucus in the lungs, and improve respiratory function. For people exposed to dust, pollution, or allergens, this is powerful.
      <div class="quote">"Steam therapy can act like a natural humidifier and detox system for your lungs."</div>
      <span class="benefits">Especially useful for smokers, city dwellers, or people prone to allergies or sinus problems.</span>
    </li>

    <li>
      <span class="highlight">Stress Relief & Better Sleep:</span>
      Steam helps calm the nervous system and lower cortisol (stress hormone) levels. It also increases serotonin production, enhancing mood and promoting deeper, restorative sleep.
      <div class="quote">"One session a day can help reduce burnout and reset the mind. It’s like a gym for your emotions."</div>
    </li>

    <li>
      <span class="highlight">Skin Rejuvenation:</span>
      The heat opens pores, flushes out toxins, and improves circulation to the skin. This leads to fewer breakouts, glowing complexion, and faster skin repair.
      <span class="benefits">Perfect for people dealing with acne, dry skin, or just wanting to look and feel younger.</span>
    </li>

    <li>
      <span class="highlight">Muscle Recovery & Pain Relief:</span>
      Heat improves blood flow to muscles and joints, easing soreness, stiffness, and chronic pain. Ideal for athletes, older adults, or anyone with physical tension.
    </li>
  </ul>

  <div class="tip">
    💡 <strong>Pro Tip:</strong> Tailor your pitch. If your customer is an office worker—focus on stress. If they’re a gym-goer—highlight muscle recovery. If they live in a polluted city—emphasize detox and lung health.
  </div>

  <h2>How to Build Trust & Close More Sales</h2>

  <p>Hydrotherapy is not just about a product—it’s about a **solution**. The more specific you are in addressing a customer’s pain points, the more they’ll see you as a problem-solver rather than a seller.</p>

  <ul>
    <li><strong>Ask Discovery Questions:</strong> “What’s been stressing you out lately?” or “Do you ever feel like your body needs a reset?”</li>
    <li><strong>Listen Actively:</strong> Let them talk. Show empathy. Then connect their concern to a benefit.</li>
    <li><strong>Use Testimonials:</strong> Share brief real stories of others who have benefited. Make it relatable.</li>
    <li><strong>Offer Demos:</strong> If possible, offer a short demo or sample session. The experience sells itself.</li>
  </ul>

  <p class="selling-point">Remember: You're not selling steam—you’re selling strength, balance, recovery, and peace of mind. When you believe in that, your customer will too.</p>

</article>

</body>
</html>  

      
      `,
      quiz: [
        {
          question: "What is a key emotional burden modern customers face that hydrotherapy can help with?",
          choices: ["Lack of money", "Constant stress", "Overeating"],
          correctAnswer: "Constant stress",
        },
        {
          question: "How does hydrotherapy support cardiovascular health?",
          choices: [
            "By strengthening bones",
            "By mimicking a mild cardio workout and improving blood flow",
            "By reducing appetite"
          ],
          correctAnswer: "By mimicking a mild cardio workout and improving blood flow",
        },
        {
          question: "Which study supports the claim that frequent sauna use reduces heart disease risk?",
          choices: [
            "Dr. Gupta's lung study",
            "World Health Organization report",
            "Dr. Laukkanen's study"
          ],
          correctAnswer: "Dr. Laukkanen's study",
        },
        {
          question: "What does steam therapy help remove from the lungs and skin?",
          choices: ["Calcium", "Harmful particulate matter", "Protein"],
          correctAnswer: "Harmful particulate matter",
        },
        {
          question: "How does hydrotherapy help in managing stress biologically?",
          choices: [
            "By increasing blood sugar",
            "By raising heart rate",
            "By lowering cortisol levels"
          ],
          correctAnswer: "By lowering cortisol levels",
        },
        {
          question: "How should a salesperson empathize with modern customers?",
          choices: [
            "By ignoring their problems and focusing on product features",
            "By connecting hydrotherapy benefits to their daily struggles",
            "By selling cheaper alternatives"
          ],
          correctAnswer: "By connecting hydrotherapy benefits to their daily struggles",
        },
        {
          question: "What is a key selling point for customers worried about pollution?",
          choices: [
            "Hydrotherapy adds more oxygen to polluted air",
            "Steam therapy helps cleanse the lungs and skin from toxins",
            "Hydrotherapy prevents pollution exposure completely"
          ],
          correctAnswer: "Steam therapy helps cleanse the lungs and skin from toxins",
        },
        {
          question: "How should you approach the customer when explaining hydrotherapy benefits?",
          choices: [
            "Recite technical jargon",
            "Use relatable examples and studies",
            "Avoid medical references"
          ],
          correctAnswer: "Use relatable examples and studies",
        },
        {
          question: "What mindset should salespeople adopt during a pitch?",
          choices: [
            "Be aggressive to close fast",
            "Position yourself as a wellness guide, not a seller",
            "Only focus on high-income clients"
          ],
          correctAnswer: "Position yourself as a wellness guide, not a seller",
        },
        {
          question: "What can steam therapy do for athletes and active people?",
          choices: [
            "Build muscle faster",
            "Help in muscle recovery and reduce inflammation",
            "Replace gym workouts"
          ],
          correctAnswer: "Help in muscle recovery and reduce inflammation",
        },
        {
          question: "Which of the following best explains why hydrotherapy is a proactive health solution?",
          choices: [
            "It prevents all diseases permanently",
            "It helps manage the impact of stress, pollution, and illness before they worsen",
            "It replaces the need for any medical checkup"
          ],
          correctAnswer: "It helps manage the impact of stress, pollution, and illness before they worsen",
        },
        {
          question: "What is the most effective way to close a hydrotherapy sale?",
          choices: [
            "Pressure the customer for quick purchase",
            "Show them the long-term wellness value and build trust",
            "Offer the cheapest deal"
          ],
          correctAnswer: "Show them the long-term wellness value and build trust",
        },
      ],
      duration: "30 minutes",
    },
    {
      id: "sales-2",
      title: "Pitch",
      videoUrl: "https://www.youtube.com/watch?v=jiN6hwbHmhM",
      startTime: "00:35",
      endTime: "08:38",
      transcript:
        "Our sales process is designed to understand customer needs and provide solutions...",
      readingMaterial: `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>How to Pitch a Client on a Call</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    ul {
      list-style-type: disc;
      margin-left: 20px;
    }
    p {
      margin-bottom: 15px;
    }
    .highlight {
      font-weight: bold;
      color: #007bff;
    }
    .tip {
      background-color: #f0f8ff;
      border-left: 5px solid #007bff;
      padding: 10px;
      margin: 15px 0;
    }
    .quote {
      font-style: italic;
      color: #555;
      margin: 10px 0;
    }
  </style>
</head>
<body>

  <article>
    <h1>How to Pitch a Client on a Call</h1>
    <p>Mastering the art of pitching over a phone or video call is essential for closing deals and building long-term relationships. Here's a step-by-step guide to help you confidently pitch any client.</p>

    <h2>1. Prepare Before the Call</h2>
    <p>Preparation is 70% of the pitch. Do not enter a sales call blind.</p>
    <ul>
      <li><span class="highlight">Research the client:</span> Understand their business, pain points, and decision-making power.</li>
      <li><span class="highlight">Know your offering:</span> Be crystal clear about your product/service features, benefits, and pricing.</li>
      <li><span class="highlight">Set objectives:</span> Know what you want out of the call — booking a demo, sending a proposal, or closing the deal.</li>
    </ul>
    <div class="tip">
      <strong>Pro Tip:</strong> Prepare a one-pager or pitch deck you can quickly refer to or screen-share.
    </div>

    <h2>2. Build Rapport</h2>
    <p>Begin by making the client comfortable. This helps reduce resistance.</p>
    <ul>
      <li>Start with a warm greeting and small talk — refer to something relevant or local if possible.</li>
      <li>Smile (even on phone) — tone matters!</li>
      <li>Match their communication style — fast-paced, structured, casual, etc.</li>
    </ul>

    <h2>3. Identify Their Needs (Discovery)</h2>
    <p>Don't jump into your solution right away. Ask open-ended questions to diagnose their problems first.</p>
    <ul>
      <li>“What challenges are you facing in [specific area]?”</li>
      <li>“What are your top priorities this quarter?”</li>
      <li>“Have you tried something like this before?”</li>
    </ul>
    <div class="quote">"Prescription without diagnosis is malpractice."</div>

    <h2>4. Make a Tailored Pitch</h2>
    <p>Now, present your solution — but always frame it in the context of their specific needs.</p>
    <ul>
      <li>Start with a <span class="highlight">summary of their pain points</span> to show you listened.</li>
      <li>Explain <span class="highlight">how your solution helps</span>, using benefits, not just features.</li>
      <li>Use relatable examples or client success stories.</li>
    </ul>
    <div class="tip">
      <strong>Script Line:</strong> “Based on what you shared, here’s how we can help you specifically…”
    </div>

    <h2>5. Handle Objections Gracefully</h2>
    <p>Objections are not rejections — they are buying signals!</p>
    <ul>
      <li>Listen fully — don't interrupt.</li>
      <li>Empathize — “I completely understand where you're coming from.”</li>
      <li>Respond with data, guarantees, or alternate options.</li>
    </ul>

    <h2>6. Share Next Steps Clearly</h2>
    <p>Don't leave the conversation open-ended. Guide them toward a clear action.</p>
    <ul>
      <li>“Would it be okay if I send you a proposal by tonight?”</li>
      <li>“Can we schedule a product demo this week?”</li>
      <li>“Would you like to move forward with onboarding?”</li>
    </ul>

    <h2>7. Follow Up Immediately</h2>
    <p>Right after the call, send a personalized follow-up with:</p>
    <ul>
      <li>Summary of the conversation</li>
      <li>Attachments (deck, proposal, brochure)</li>
      <li>Call-to-action or next meeting invite</li>
    </ul>
    <div class="tip">
      <strong>Template Subject Line:</strong> “Great speaking today — proposal inside”
    </div>

    <h2>Bonus: What to Avoid</h2>
    <ul>
      <li>Don’t talk too much — let them speak.</li>
      <li>Don’t use jargon or technical terms.</li>
      <li>Don’t pressure — make it feel like a conversation, not a transaction.</li>
    </ul>

    <h2>Final Words</h2>
    <p>A good sales pitch is really a helpful conversation. Keep it personal, relevant, and solution-oriented. Always aim to leave the client feeling understood and excited about working with you.</p>
  </article>

</body>
</html>
      
      `,
      quiz: [
        {
          question: "What should you do before entering any sales call?",
          choices: ["Jump straight into pitching", "Research the client and prepare objectives", "Send a proposal first"],
          correctAnswer: "Research the client and prepare objectives",
        },
        {
          question: "How should you begin a pitch call with a client?",
          choices: ["Talk about pricing first", "Immediately ask for the sale", "Start with rapport and small talk"],
          correctAnswer: "Start with rapport and small talk",
        },
        {
          question: "Which type of questions should you ask during the discovery phase?",
          choices: ["Closed yes/no questions", "Open-ended questions", "Personal questions"],
          correctAnswer: "Open-ended questions",
        },
        {
          question: "When should you start presenting your solution?",
          choices: ["Right after greeting", "After understanding the client’s pain points", "Before the client speaks"],
          correctAnswer: "After understanding the client’s pain points",
        },
        {
          question: "How should you frame your pitch to make it effective?",
          choices: ["List all features in detail", "Talk about how it helps the client’s specific needs", "Use technical language"],
          correctAnswer: "Talk about how it helps the client’s specific needs",
        },
        {
          question: "What does a client objection typically indicate?",
          choices: ["They are not interested", "They are asking to negotiate", "A buying signal and interest"],
          correctAnswer: "A buying signal and interest",
        },
        {
          question: "What’s the best way to handle objections?",
          choices: ["Interrupt quickly and defend", "Empathize and respond with data or options", "Avoid answering"],
          correctAnswer: "Empathize and respond with data or options",
        },
        {
          question: "Why is a follow-up email important after the call?",
          choices: ["To repeat everything", "To keep a record only", "To summarize, attach materials, and show professionalism"],
          correctAnswer: "To summarize, attach materials, and show professionalism",
        },
        {
          question: "Which of the following should be avoided during a pitch call?",
          choices: ["Letting the client speak", "Using heavy jargon", "Listening to objections"],
          correctAnswer: "Using heavy jargon",
        }
      ],
      duration: "30 minutes",
    },
    {
      id: "sales-3",
      title: "Estimation",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript:
        "Customer objections are opportunities to provide clarity and build trust...",
      readingMaterial: `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sales Training: How to Do Estimation for Steam Generator Installation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    h1, h2, h3 {
      color: #333;
    }
    ul {
      list-style-type: disc;
      margin-left: 20px;
    }
    p {
      margin-bottom: 15px;
    }
    .highlight {
      font-weight: bold;
      color: #007bff;
    }
    .tip {
      background-color: #f8f9fa;
      padding: 10px;
      border: 1px solid #dee2e6;
      border-radius: 5px;
      margin-top: 10px;
    }
    .warning {
      background-color: #fff3cd;
      padding: 10px;
      border: 1px solid #ffeeba;
      border-radius: 5px;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <article>
    <h1>Sales Training: How to Do Estimation for Steam Generator Installation</h1>

    <p>When selling a steam generator to a home client, your estimation process plays a major role in closing the deal. It's not just about the product—it's about understanding the client's space, material, environment, and needs while explaining everything calmly and clearly.</p>

    <h2>1. Begin with Empathy and Clarity</h2>
    <p>Start your call or visit with a calm tone. Tell them: <span class="highlight">"Before we talk price or recommend a machine, we want to make sure it’s the right fit for your bathroom and lifestyle."</span></p>

    <h2>2. Key Estimation Factors to Cover</h2>

    <h3>A. Size of the Steam Room</h3>
    <ul>
      <li>Measure the <span class="highlight">length × width × height</span> of the bathroom or shower area.</li>
      <li>Note ceiling height—taller rooms need more power.</li>
      <li>Convert this into cubic feet/meters to match generator capacity.</li>
    </ul>

    <div class="tip"><strong>Tip:</strong> Always round up the size slightly to ensure adequate steam performance.</div>

    <h3>B. Bathroom Material</h3>
    <p>The material absorbs or reflects heat, impacting generator choice:</p>
    <ul>
      <li><span class="highlight">Glass walls</span> = Higher heat loss (increase capacity by 25–30%)</li>
      <li><span class="highlight">Marble or stone tiles</span> = Heat absorptive (increase capacity)</li>
      <li><span class="highlight">Acrylic or ceramic</span> = Standard requirements</li>
    </ul>

    <div class="warning"><strong>Important:</strong> Always ask if the bathroom has insulation. Poor insulation means more steam is needed to maintain warmth.</div>

    <h3>C. Location & Climate</h3>
    <ul>
      <li>Colder climates (e.g., Himachal, Kashmir) may need stronger generators.</li>
      <li>Warmer cities (e.g., Mumbai, Chennai) may work fine with smaller units.</li>
    </ul>

    <h3>D. Usage Pattern</h3>
    <p>Ask: “How many people will use it at a time and how often?”</p>
    <ul>
      <li>One user daily = standard 4.5–6 kW unit</li>
      <li>Family use or multiple sessions = consider 7.5–9 kW or dual output</li>
    </ul>

    <h2>3. Presenting the Estimation to the Client</h2>

    <h3>Step-by-Step Tone</h3>
    <p>Don't throw numbers. Instead, walk them through it:</p>
    <ul>
      <li>“Your bathroom is 6 × 5 × 8 feet = 240 cubic feet.”</li>
      <li>“It has one glass wall and stone tiles, so we’ll add ~25% extra capacity.”</li>
      <li>“You’re in Delhi, where winters are chilly, so we’ll adjust a bit more.”</li>
    </ul>
    <p>Then say: <span class="highlight">“Based on this, I recommend our 6 kW model—it’ll give you fast steam and energy efficiency.”</span></p>

    <h3>Always End with Confidence + Flexibility</h3>
    <p>Let the client feel heard and involved. Tell them: <span class="highlight">“If you want a faster steam-up time, we can go 7.5 kW too, but this one will work great as well.”</span></p>

    <h2>4. Common Mistakes to Avoid</h2>
    <ul>
      <li>Giving only a price without explaining what goes into the estimate</li>
      <li>Ignoring material or ceiling height</li>
      <li>Sounding rushed or robotic</li>
    </ul>

    <div class="tip">
      <strong>Pro Tip:</strong> Show them sample photos or videos of installations that match their setup. Visuals build trust.
    </div>

    <h2>Final Note</h2>
    <p>Estimation is about <span class="highlight">educating + guiding</span>, not just calculating. When done properly, the client feels confident that you understand their space and are recommending the best—not the most expensive—solution.</p>

  </article>

</body>
</html>
      `,
      quiz: [
        {
          question: "What is the first thing you should do before starting estimation?",
          choices: ["Quote the price", "Ask for payment", "Speak calmly and show empathy"],
          correctAnswer: "Speak calmly and show empathy",
        },
        {
          question: "How is the bathroom size calculated for steam generator estimation?",
          choices: ["Area only", "Volume: length × width × height", "Height only"],
          correctAnswer: "Volume: length × width × height",
        },
        {
          question: "What effect does a glass wall have on steam estimation?",
          choices: ["Reduces required power", "No effect", "Increases required capacity by 25–30%"],
          correctAnswer: "Increases required capacity by 25–30%",
        },
        {
          question: "What kind of material absorbs more heat and requires higher capacity?",
          choices: ["Ceramic tiles", "Glass", "Marble or stone"],
          correctAnswer: "Marble or stone",
        },
        {
          question: "Which climate requires more steam generator power?",
          choices: ["Humid coastal areas", "Cold regions like Himachal", "Desert areas"],
          correctAnswer: "Cold regions like Himachal",
        },
        {
          question: "What’s a good question to ask the client during estimation?",
          choices: [
            "Do you want a discount?",
            "How often and how many people will use the steam?",
            "Are you buying today?",
          ],
          correctAnswer: "How often and how many people will use the steam?",
        },
        {
          question: "For a 6 × 5 × 8 ft bathroom with one glass wall and stone tiles, what’s the right approach?",
          choices: [
            "Recommend smallest model to save cost",
            "Add ~25% capacity and suggest 6–7.5 kW model",
            "Ignore the materials",
          ],
          correctAnswer: "Add ~25% capacity and suggest 6–7.5 kW model",
        },
        {
          question: "What tone should you use when walking a client through the estimate?",
          choices: ["Fast and confident", "Detailed and calm", "Aggressive and persuasive"],
          correctAnswer: "Detailed and calm",
        },
        {
          question: "What’s a mistake you should avoid during estimation?",
          choices: [
            "Explaining the space and material",
            "Using visuals for clarity",
            "Giving only a price without explanation",
          ],
          correctAnswer: "Giving only a price without explanation",
        },
        {
          question: "Why is showing similar installation photos or videos useful?",
          choices: [
            "It distracts the client",
            "It builds trust by providing real-world examples",
            "It increases confusion",
          ],
          correctAnswer: "It builds trust by providing real-world examples",
        },
        {
          question: "What does good estimation combine?",
          choices: ["Guesswork and confidence", "Aggression and urgency", "Education and guidance"],
          correctAnswer: "Education and guidance",
        },
        {
          question: "What’s the benefit of rounding up bathroom size slightly?",
          choices: [
            "Client will pay more",
            "Ensures sufficient steam performance",
            "Lowers energy consumption",
          ],
          correctAnswer: "Ensures sufficient steam performance",
        },
      ],
      duration: "25 minutes",
    },
    {
      id: "sales-4",
      title: "Closure",
      videoUrl: "https://www.youtube.com/watch?v=jiN6hwbHmhM",
      startTime: "00:35",
      endTime: "08:38",
      transcript:
        "Our sales process is designed to understand customer needs and provide solutions...",
      readingMaterial: `
      <div class="training-module">
  <h1>🔒 Closure: Turning a "Yes" into a Confirmed Deal</h1>

  <h2>🎯 What is Closure?</h2>
  <p>
    Closure is the <strong>final milestone</strong> in the SteamPRO sales process. It’s where the lead who showed interest, heard the pitch, and received the estimation, <strong>finally commits</strong>.
  </p>
  <p>
    But here’s what every team member must remember:
  </p>
  <ul>
    <li><strong>Closure is not complete</strong> until one of two things happens:</li>
    <li>You receive <strong>written confirmation</strong> (WhatsApp message, email, etc.)</li>
    <li>OR the client sends an <strong>advance payment</strong></li>
  </ul>
  <p>A simple “haan bhai de do” on call is <strong>not closure</strong>.</p>

  <h2>🧠 Why Clients Delay Even After Saying Yes</h2>
  <ul>
    <li>💸 Financial hesitation (price, budget doubts)</li>
    <li>👨‍👩‍👧‍👦 Family or spouse influence</li>
    <li>😟 Fear of making the wrong decision</li>
    <li>📦 Uncertainty about post-sale service or installation</li>
    <li>🧠 Too many options (analysis paralysis)</li>
  </ul>

  <h2>🧰 What You Must Do at the Closure Stage</h2>

  <h3>1. ✅ Reconfirm Their Decision & Value</h3>
  <p>
    Repeat everything they’re getting clearly so they feel confident:
  </p>
  <blockquote>
    “Sir, just confirming — you’re going ahead with the 6kW commercial-grade generator with automatic drain and control panel. This includes free installation, 1-year support, and full setup at your bathroom.”
  </blockquote>

  <h3>2. ✅ Confirm Bathroom & Order Details Again</h3>
  <p>Before you close, repeat:</p>
  <ul>
    <li>Bathroom size, tile type</li>
    <li>Number of users</li>
    <li>Generator KW and model</li>
    <li>Accessories selected</li>
    <li>Final price & GST clarity</li>
    <li>Delivery and installation timeline</li>
  </ul>
  <blockquote>
    “Sir, I’m writing everything down for our service team, just want to double-confirm the details…”
  </blockquote>

  <h3>3. 💬 Ask for Confirmation Softly</h3>
  <p>Use lines like:</p>
  <blockquote>“Great, I’ll get the team ready. Just drop a confirmation message here on WhatsApp so I can get this unit locked.”</blockquote>
  <blockquote>“I’ll send a payment link — a small advance locks your delivery and installation slot.”</blockquote>

  <h3>4. 🎯 Create Urgency — The Right Way</h3>
  <p>
    Avoid saying things like “offer expires today.” Instead, use calm urgency:
  </p>
  <blockquote>
    “We’re getting a lot of orders — if we lock it today, we can install by Friday. Else, next availability is Monday.”
  </blockquote>

  <h2>🧾 Handling Objections at Closure</h2>
  <ul>
    <li>Re-send testimonials or client videos</li>
    <li>Remind them of limited stock or technician availability</li>
    <li>Offer to help them with payment/confirmation process</li>
    <li>Ask gently what they’re unsure about — and address that</li>
  </ul>

  <h2>🔄 After Closure: What Next?</h2>
  <ul>
    <li>✔️ Save all order and bathroom details</li>
    <li>✔️ Update the CRM (client record)</li>
    <li>✔️ Notify the service/delivery team</li>
    <li>✔️ Send a post-sale onboarding message</li>
  </ul>
  <p><strong>Remember — closure is not the end. It’s the beginning of experience delivery.</strong></p>
      
      `,
      quiz: [
        {
          question: "What officially counts as a closure in the SteamPRO sales process?",
          choices: [
            "Client says yes on call",
            "Client sees a demo",
            "Client sends a confirmation message or makes an advance payment"
          ],
          correctAnswer: "Client sends a confirmation message or makes an advance payment",
        },
        {
          question: "Why do clients delay even after saying yes?",
          choices: [
            "They forget the product",
            "They want to waste time",
            "They have fears, family influence, or budget doubts"
          ],
          correctAnswer: "They have fears, family influence, or budget doubts",
        },
        {
          question: "What should you do before final closure?",
          choices: [
            "Push hard to close quickly",
            "Repeat all bathroom and order details for clarity",
            "Ignore the client's doubts"
          ],
          correctAnswer: "Repeat all bathroom and order details for clarity",
        },
        {
          question: "How should you ask for closure confirmation?",
          choices: [
            "Demand immediate payment",
            "Say 'just WhatsApp me back to confirm'",
            "Tell them to confirm later"
          ],
          correctAnswer: "Say 'just WhatsApp me back to confirm'",
        },
        {
          question: "What is a good way to create urgency during closure?",
          choices: [
            "Lie about offer expiry",
            "Say only 1 piece is left",
            "Mention realistic delivery timelines like 'we can deliver by Friday if closed today'"
          ],
          correctAnswer: "Mention realistic delivery timelines like 'we can deliver by Friday if closed today'",
        },
        {
          question: "What should you do if a client hesitates at closure?",
          choices: [
            "Ignore them",
            "Send testimonials or address concerns calmly",
            "Reduce the price instantly"
          ],
          correctAnswer: "Send testimonials or address concerns calmly",
        },
        {
          question: "Which of the following is NOT part of closure?",
          choices: [
            "Confirming bathroom and product details",
            "Reconfirming value",
            "Skipping payment because they said yes"
          ],
          correctAnswer: "Skipping payment because they said yes",
        },
        {
          question: "What comes immediately after a successful closure?",
          choices: [
            "Take a break",
            "Forget the client",
            "Update CRM, alert team, and send onboarding"
          ],
          correctAnswer: "Update CRM, alert team, and send onboarding",
        },
        {
          question: "Why is repeating order details important at closure?",
          choices: [
            "It wastes time",
            "It shows you don't trust them",
            "It builds trust and removes confusion"
          ],
          correctAnswer: "It builds trust and removes confusion",
        },
        {
          question: "How should your tone be during closure?",
          choices: [
            "Aggressive and urgent",
            "Over-friendly and casual",
            "Calm, confident, and clear"
          ],
          correctAnswer: "Calm, confident, and clear",
        },
        {
          question: "How can you make closure smoother for the client?",
          choices: [
            "Send complex payment options",
            "Ask them to call later",
            "Make next steps easy and walk them through it"
          ],
          correctAnswer: "Make next steps easy and walk them through it",
        },
        {
          question: "Closure marks the beginning of what?",
          choices: [
            "Sales celebration",
            "Product delivery and client experience",
            "A new sales pitch"
          ],
          correctAnswer: "Product delivery and client experience",
        },
      ],
      duration: "30 minutes",
    }

  ],
  ops: [
    {
      id: "ops-1",
      title: "Operations Excellence",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript:
        "Operations excellence drives our ability to deliver quality products consistently...",
      readingMaterial: `
        <h3>Operations Excellence Framework</h3>
        <p>Our operations team ensures efficient, quality-driven processes across all functions.</p>
        
        <h4>Process Optimization</h4>
        <p>Continuously improving workflows for maximum efficiency and quality output.</p>
        
        <h4>Quality Control</h4>
        <p>Implementing rigorous quality checks at every stage of production and delivery.</p>
        
        <h4>Supply Chain Management</h4>
        <p>Maintaining strong supplier relationships and inventory management systems.</p>
        
        <h4>Continuous Improvement</h4>
        <p>Regular analysis and enhancement of operational processes and outcomes.</p>
      `,
      quiz: [
        {
          question:
            "What drives SteamPRO's ability to deliver quality products?",
          choices: ["Operations excellence", "Marketing", "Sales"],
          correctAnswer: "Operations excellence",
        },
        {
          question: "When should quality checks be implemented?",
          choices: [
            "At the end",
            "At every stage",
            "Only when problems occur",
          ],
          correctAnswer: "At every stage",
        },
        {
          question:
            "What approach does SteamPRO take to operational processes?",
          choices: [
            "Set and forget",
            "Continuous improvement",
            "Monthly reviews",
          ],
          correctAnswer: "Continuous improvement",
        },
      ],
      duration: "35 minutes",
    },
  ],
  finance: [
    {
      id: "finance-1",
      title: "Financial Planning & Analysis",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript:
        "Financial planning drives strategic decision-making at SteamPRO...",
      readingMaterial: `
        <h3>Financial Excellence at SteamPRO</h3>
        <p>Sound financial planning and analysis support our growth and sustainability goals.</p>
        
        <h4>Budget Planning</h4>
        <p>Comprehensive planning process involving all departments for accurate forecasting.</p>
        
        <h4>Financial Controls</h4>
        <p>Robust controls and approval processes to ensure financial integrity.</p>
        
        <h4>Performance Analysis</h4>
        <p>Regular analysis of financial performance against targets and industry benchmarks.</p>
        
        <h4>Strategic Support</h4>
        <p>Providing financial insights to support strategic business decisions.</p>
      `,
      quiz: [
        {
          question: "What drives strategic decision-making at SteamPRO?",
          choices: [
            "Financial planning",
            "Market trends",
            "Competitor actions",
          ],
          correctAnswer: "Financial planning",
        },
        {
          question: "Who should be involved in the budget planning process?",
          choices: [
            "Only finance team",
            "All departments",
            "Only senior management",
          ],
          correctAnswer: "All departments",
        },
        {
          question: "How often should performance analysis be conducted?",
          choices: ["Annually", "Regularly", "Only when problems occur"],
          correctAnswer: "Regularly",
        },
      ],
      duration: "32 minutes",
    },
  ],
  manufacturing: [
    {
      id: "manufacturing-1",
      title: "Production Excellence",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript:
        "Manufacturing excellence ensures quality products that meet customer expectations...",
      readingMaterial: `
        <h3>Manufacturing Excellence Standards</h3>
        <p>Our manufacturing processes are designed for quality, efficiency, and safety.</p>
        
        <h4>Quality Systems</h4>
        <p>Implementing ISO-standard quality management systems across all production lines.</p>
        
        <h4>Lean Manufacturing</h4>
        <p>Eliminating waste and optimizing efficiency while maintaining quality standards.</p>
        
        <h4>Safety Protocols</h4>
        <p>Comprehensive safety procedures to protect all team members and equipment.</p>
        
        <h4>Continuous Improvement</h4>
        <p>Regular process reviews and improvements based on data and feedback.</p>
      `,
      quiz: [
        {
          question:
            "What ensures quality products that meet customer expectations?",
          choices: ["Marketing", "Manufacturing excellence", "Sales process"],
          correctAnswer: "Manufacturing excellence",
        },
        {
          question:
            "What standard quality management systems does SteamPRO implement?",
          choices: [
            "Custom systems",
            "ISO-standard systems",
            "Industry-basic systems",
          ],
          correctAnswer: "ISO-standard systems",
        },
        {
          question: "What is the goal of lean manufacturing?",
          choices: [
            "Reduce costs only",
            "Eliminate waste while maintaining quality",
            "Speed up production",
          ],
          correctAnswer: "Eliminate waste while maintaining quality",
        },
      ],
      duration: "40 minutes",
    },
  ],
}