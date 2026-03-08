// Icons are now mapped in ServiceLayout.tsx
export interface Project {
    title: string;
    desc: string;
    image: string;
    tags: string[];
    link: string;
    category?: string; // Enhanced property for filtering
    serviceId?: string; // Enhanced property for filtering
}

export interface ServiceData {
    title: string;
    subtitle: string;
    badge: string;
    heroImage: string;
    stats: { value: string; label: string }[];
    features: { icon: string; title: string; desc: string }[];
    techStack: string[];
    process: { step: string; title: string; desc: string }[];
    benefits: { title: string; desc: string }[];
    industries: string[];
    projects: Project[];
    faq: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceData> = {
    'wordpress': {
        title: 'Enterprise WordPress Development',
        subtitle: 'Scalable, secure, and high-performance WordPress solutions designed for modern enterprises, not just blogs.',
        badge: 'No Code / Low Code',
        heroImage: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '40%+', label: 'Faster Load Times' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: 'SEO', label: 'Optimized Architecture' },
            { value: '24/7', label: 'Support & Maintenance' }
        ],
        features: [
            { icon: 'FaCode', title: 'Custom Theme Development', desc: 'Pixel-perfect themes built from scratch to match your exact brand identity, no bloatware.' },
            { icon: 'FaRocket', title: 'Performance Optimization', desc: 'Advanced caching, CDN integration, and code splitting for sub-second page loads.' },
            { icon: 'FaTools', title: 'Headless WordPress', desc: 'Decoupled architecture using React/Next.js frontends for ultimate speed and flexibility.' },
            { icon: 'FaCheckCircle', title: 'Security Hardening', desc: 'Enterprise-grade security implementations to protect against vulnerabilities and attacks.' }
        ],
        techStack: ['WordPress 6.x', 'PHP 8.2', 'MySQL', 'WooCommerce', 'HTML5 & CSS3', 'JavaScript (ES6)', 'Gutenberg'],
        process: [
            { step: '01', title: 'Discovery & Strategy', desc: 'We analyze your current setup and define scalable architecture goals.' },
            { step: '02', title: 'Design & Prototyping', desc: 'Visualizing the user experience before writing a single line of code.' },
            { step: '03', title: 'Agile Development', desc: 'Iterative sprints with regular updates and feedback loops.' },
            { step: '04', title: 'Launch & Scale', desc: 'Seamless migration and deployment with zero downtime.' }
        ],
        benefits: [
            { title: 'Ease of Use', desc: 'Intuitive interface allowing your team to update content without technical support.' },
            { title: 'SEO Dominance', desc: 'Built-in features and plugins that give you a head start in search engine rankings.' },
            { title: 'Ecosystem', desc: 'Access to thousands of plugins to extend functionality instantly.' }
        ],
        industries: ['E-Commerce', 'Publishing & Media', 'Corporate', 'Education', 'Non-Profit'],
        projects: [
            {
                title: 'TechCrunch Redesign',
                desc: 'A complete overhaul of the TechCrunch news portal focusing on speed and ad-tech integration.',
                image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['High Traffic', 'Media', 'AdTech'],
                link: '/work/techcrunch'
            },
            {
                title: 'Sony Music Artists',
                desc: 'A multisite network managing over 500 artist portfolios from a single dashboard.',
                image: 'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Multisite', 'Entertainment', 'React'],
                link: '/work/sony-music'
            },
            {
                title: 'Vogue Archive',
                desc: 'Digitizing 100 years of fashion history into a searchable, subscription-based archive.',
                image: 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Membership', 'Archives', 'Search'],
                link: '/work/vogue'
            }
        ],
        faq: [
            { q: 'Is WordPress secure enough for enterprise?', a: 'Yes. With proper hardening, enterprise-grade hosting, and regular maintenance, WordPress is extremely secure and used by major global brands.' },
            { q: 'Can you migrate our existing site?', a: 'Absolutely. We specialize in complex migrations from other CMS platforms or older WordPress versions with zero data loss.' },
            { q: 'Will the site be fast?', a: 'Performance is our priority. We use advanced caching, CDNs, and clean code to ensure sub-second load times.' }
        ]
    },
    'software-dev': {
        title: 'Custom Software Development',
        subtitle: 'Bespoke software solutions engineered to solve complex business challenges and drive operational efficiency.',
        badge: 'Custom Development',
        heroImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '100%', label: 'Tailored Solution' },
            { value: '2x', label: 'Efficiency Gain' },
            { value: 'Secure', label: 'By Design' },
            { value: 'Agile', label: 'Methodology' }
        ],
        features: [
            { icon: 'FaLaptopCode', title: 'Web Application Development', desc: 'Robust, scalable web apps built with modern frameworks like React, Angular, and Vue.' },
            { icon: 'FaServer', title: 'Backend API Engineering', desc: 'High-performance microservices and RESTful/GraphQL APIs.' },
            { icon: 'FaMobileAlt', title: 'Cross-Platform Portability', desc: 'Solutions that work seamlessly across desktop, tablet, and mobile.' },
            { icon: 'FaCloud', title: 'Cloud-Native Architecture', desc: 'Built for the cloud from day one, leveraging AWS/Azure for infinite scalability.' }
        ],
        techStack: ['Node.js', 'Python', 'Go', 'React', 'PostgreSQL', 'Kubernetes', 'AWS Lambda'],
        process: [
            { step: '01', title: 'Requirement Analysis', desc: 'Deep dive into your business logic and technical requirements.' },
            { step: '02', title: 'Architecture Design', desc: 'Planning the database, API structure, and frontend flow.' },
            { step: '03', title: 'Development', desc: 'Clean, documented code writing with rigorous testing.' },
            { step: '04', title: 'Deployment', desc: 'CI/CD pipelines for automated and safe production releases.' }
        ],
        benefits: [
            { title: 'Competitive Advantage', desc: 'Software built specifically for your unique business processes gives you an edge.' },
            { title: 'Ownership', desc: 'You own the code and the intellectual property, free from licensing fees of off-the-shelf software.' },
            { title: 'Integration', desc: 'Seamlessly connect with your existing legacy systems and third-party tools.' }
        ],
        industries: ['FinTech', 'Healthcare', 'Logistics & Supply Chain', 'Real Estate', 'Manufacturing'],
        projects: [
            {
                title: 'Healthcare Patient Portal',
                desc: 'A HIPAA-compliant telemedicine platform connecting patients with doctors via secure video calls.',
                image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Healthcare', 'Telemedicine', 'React Native'],
                link: '/work/med-portal'
            },
            {
                title: 'Logistics ERP System',
                desc: 'Custom enterprise resource planning software tracking 10,000+ shipments daily.',
                image: 'https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Logistics', 'SaaS', 'IoT'],
                link: '/work/logistics-erp'
            },
            {
                title: 'FinTech Trading Dashboard',
                desc: 'Real-time high-frequency trading interface with millisecond latency.',
                image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['FinTech', 'WebSocket', 'Go'],
                link: '/work/trading-app'
            }
        ],
        faq: [
            { q: 'How long does a custom project take?', a: 'Timelines vary based on complexity, but a typical MVP takes 3-4 months, while enterprise solutions may take 6-12 months.' },
            { q: 'Do you provide post-launch support?', a: 'Yes, we offer comprehensive SLA-based support packages to ensure your software remains up-to-date and bug-free.' },
            { q: 'What ownership rights do we have?', a: 'You retain 100% intellectual property rights to the custom code we write for you upon full payment.' }
        ]
    },

    // --- NO CODE DEVELOPMENT ---
    'webflow': {
        title: 'Webflow Development',
        subtitle: 'High-fidelity visual development for marketing sites that demand pixel perfection and speed.',
        badge: 'No Code / Low Code',
        heroImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '2x', label: 'Faster Build' },
            { value: '100%', label: 'Custom Design' },
            { value: 'CMS', label: 'Client Friendly' },
            { value: 'SEO', label: 'Optimized' }
        ],
        features: [
            { icon: 'FaPalette', title: 'Visual Freedom', desc: 'Complete design control without code constraints.' },
            { icon: 'FaRocket', title: 'Fast Hosting', desc: 'Powered by AWS global CDN for lightning-fast delivery.' },
            { icon: 'FaCheckCircle', title: 'Clean Code', desc: 'Exports compliant semantic HTML5 and CSS3.' },
            { icon: 'FaTools', title: 'Editor Access', desc: 'Empower your marketing team to edit content directly.' }
        ],
        techStack: ['Webflow', 'HTML5', 'CSS3', 'JavaScript', 'Zapier'],
        process: [
            { step: '01', title: 'Design', desc: 'Crafting the visual experience in Figma.' },
            { step: '02', title: 'Development', desc: 'Translating design to Webflow interactions.' },
            { step: '03', title: 'CMS Setup', desc: 'Structuring dynamic content collections.' },
            { step: '04', title: 'Launch', desc: 'Publishing to the global edge network.' }
        ],
        benefits: [
            { title: 'Speed to Market', desc: 'Launch beautiful sites in weeks, not months.' },
            { title: 'Maintenance Free', desc: 'No plugin updates or server management required.' },
            { title: 'Animation', desc: 'Complex interactions made simple and performant.' }
        ],
        industries: ['SaaS', 'Agencies', 'Startups', 'Portfolios'],
        projects: [
            {
                title: 'Lattice Marketing Site',
                desc: 'A scalable marketing engine built on Webflow Enterprise for a unicorn HR platform.',
                image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['SaaS', 'Enterprise', 'B2B'],
                link: '/work/lattice'
            },
            {
                title: 'VC Fund Portfolio',
                desc: 'A visually stunning portfolio site for a top-tier venture capital firm.',
                image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Finance', 'Animation', 'CMS'],
                link: '/work/vc-fund'
            },
            {
                title: 'Event Landing Page',
                desc: 'High-conversion landing page for a global tech conference with 10k+ attendees.',
                image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Event', 'Conversion', '3D'],
                link: '/work/conference'
            }
        ],
        faq: [
            { q: 'Is Webflow good for SEO?', a: 'Yes, Webflow gives full control over SEO markup, leading to excellent ranking potential.' },
            { q: 'Can we export the code?', a: 'Yes, on higher plans you can export clean HTML/CSS/JS to host anywhere.' },
            { q: 'Is it secure?', a: 'Webflow is SOC2 compliant and includes enterprise-grade security features out of the box.' }
        ]
    },
    'wix': {
        title: 'Wix Studio Development',
        subtitle: 'Advanced creation platform for agencies to deliver exceptional client sites at scale.',
        badge: 'No Code',
        heroImage: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '50%', label: 'Faster Build' },
            { value: 'All-in-One', label: 'Platform' },
            { value: 'High', label: 'Performance' },
            { value: '24/7', label: 'Support' }
        ],
        features: [
            { icon: 'FaLayerGroup', title: 'Responsive AI', desc: 'Layouts that adapt intelligently to every screen size automatically.' },
            { icon: 'FaCode', title: 'Custom Code Velo', desc: 'Extend native functionality with Velo serverless coding when standard tools limit you.' },
            { icon: 'FaShoppingCart', title: 'Native E-comm', desc: 'Built-in powerful store capabilities with payments and inventory management.' },
            { icon: 'FaBullhorn', title: 'Marketing Suite', desc: 'Integrated email marketing, SEO tools, and social posts.' }
        ],
        techStack: ['Wix Studio', 'Velo (Node.js)', 'JavaScript', 'React', 'Wix Payments'],
        process: [
            { step: '01', title: 'Strategy', desc: 'Defining site goals, user flow, and content structure.' },
            { step: '02', title: 'Visual Build', desc: 'Constructing the interface with Wix Studio\'s advanced visual tools.' },
            { step: '03', title: 'Custom Logic', desc: 'Adding complex behavior and database connections with Velo.' },
            { step: '04', title: 'Handoff & Train', desc: 'Training your team on the dashboard and transferring ownership.' }
        ],
        benefits: [
            { title: 'Ease of Management', desc: 'Everything in one place: hosting, domain, CRM, and email marketing.' },
            { title: 'Cost Effective', desc: 'Lower total cost of ownership compared to custom stacks with similar features.' },
            { title: 'Rapid Iteration', desc: 'Make changes and publish them instantly without a deployment pipeline.' }
        ],
        industries: ['Small Business', 'Hospitality', 'Events', 'Professional Services'],
        projects: [
            {
                title: 'Boutique Hotel Booking',
                desc: 'A complete booking engine and visual overhaul for a luxury boutique hotel chain.',
                image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Hospitality', 'Booking', 'Wix Studio'],
                link: '/work/boutique-hotel'
            },
            {
                title: 'Global Event Series',
                desc: 'Event management site handling ticketing and schedules for a 3-day design conference.',
                image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Events', 'Ticketing', 'Velo'],
                link: '/work/design-conf'
            },
            {
                title: 'Architect Portfolio',
                desc: 'Minimalist high-impact portfolio showcasing architectural work with smooth transitions.',
                image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Portfolio', 'Animation', 'Architecture'],
                link: '/work/architect'
            }
        ],
        faq: [
            { q: 'Is Wix professional enough?', a: 'Modern Wix Studio is built specifically for agencies and high-end web design.' },
            { q: 'Is Wix good for SEO?', a: 'Yes, Wix has advanced SEO tools including custom meta tags, structured data, and sitemaps.' },
            { q: 'Can I export my site?', a: 'Wix is a hosted platform, so you cannot export the code, but we can migrate content if you choose to leave.' }
        ]
    },
    'shopify': {
        title: 'Shopify Store Development',
        subtitle: 'World-class e-commerce experiences that convert visitors into loyal customers.',
        badge: 'E-Commerce',
        heroImage: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '$1B+', label: 'Sales Processed' },
            { value: 'Global', label: 'Payments' },
            { value: '99.99%', label: 'Uptime' },
            { value: 'Mobile', label: 'First' }
        ],
        features: [
            { icon: 'FaShoppingCart', title: 'Custom Themes', desc: 'Unique storefronts using Liquid code tailored precisely to your brand guidelines.' },
            { icon: 'FaTools', title: 'App Integration', desc: 'Seamless connection with ERP, CRM, marketing tools and 3rd party logistics.' },
            { icon: 'FaRocket', title: 'High Conversion', desc: 'Streamlined checkout flows and UX best practices to maximize sales.' },
            { icon: 'FaGlobe', title: 'International Sales', desc: 'Multi-currency and multi-language support for breaking into global markets.' }
        ],
        techStack: ['Shopify Plus', 'Liquid', 'React (Hydrogen)', 'GraphQL', 'Remix'],
        process: [
            { step: '01', title: 'Discovery', desc: 'Catalog analysis, shipping rules, and payment gateway selection.' },
            { step: '02', title: 'Design & UX', desc: 'Creating a high-converting UI optimized for mobile shopping.' },
            { step: '03', title: 'Theme Dev', desc: 'Pixel-perfect implementation of the design using Liquid or Hydrogen.' },
            { step: '04', title: 'Migration', desc: 'Safe transfer of products, customers, and orders from legacy systems.' }
        ],
        benefits: [
            { title: 'Scalability', desc: 'Handle Black Friday traffic spikes without a single server hiccup.' },
            { title: 'App Ecosystem', desc: 'Access the largest e-commerce app marketplace to add features instantly.' },
            { title: 'Security', desc: 'PCI Level 1 compliant hosting included out of the box.' }
        ],
        industries: ['Fashion', 'Electronics', 'Beauty', 'Home Goods'],
        projects: [
            {
                title: 'High-Scale Fashion Brand',
                desc: 'A custom Shopify Plus implementation for a brand handling 50k orders per minute during drops.',
                image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Fashion', 'Shopify Plus', 'Drops'],
                link: '/work/fashion-brand'
            },
            {
                title: 'Global Beauty Cosmetics',
                desc: 'Headless Shopify Hydrogen build enabling unique 3D product configurators.',
                image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Beauty', 'Headless', 'Hydrogen'],
                link: '/work/cosmetics'
            },
            {
                title: 'DTC Beverage Subscription',
                desc: 'Complex subscription logic with distinct recurring billing cycles and box customization.',
                image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Food & Bev', 'Subscription', 'DTC'],
                link: '/work/beverage'
            }
        ],
        faq: [
            { q: 'Do you work with Shopify Plus?', a: 'Yes, we specialize in enterprise migrations to Shopify Plus for high-volume merchants.' },
            { q: 'Can I use a custom payment gateway?', a: 'Shopify supports hundreds of gateways, though using Shopify Payments offers the lowest transaction fees.' },
            { q: 'Do you build custom Shopify Apps?', a: 'Yes, we develop private apps to extend store functionality using the Shopify API.' }
        ]
    },
    'magento': {
        title: 'Adobe Commerce (Magento)',
        subtitle: 'Powerhouse open-source e-commerce for complex enterprise requirements.',
        badge: 'Enterprise E-Commerce',
        heroImage: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '∞', label: 'Customizability' },
            { value: 'B2B', label: 'Specialized' },
            { value: 'Global', label: 'Multi-Store' },
            { value: 'Secure', label: 'Enterprise' }
        ],
        features: [
            { icon: 'FaServer', title: 'Complex Catalogs', desc: 'Manage millions of SKUs with intricate attributes, bundles, and variations.' },
            { icon: 'FaGlobe', title: 'Multi-Region', desc: 'Run multiple global stores with different currencies/languages from one admin panel.' },
            { icon: 'FaUserFriends', title: 'B2B Modules', desc: 'Shared catalogs, corporate accounts, quick ordering, and requisition lists.' },
            { icon: 'FaShieldAlt', title: 'Data Sovereignty', desc: 'Host on your own infrastructure to maintain 100% control over your data.' }
        ],
        techStack: ['PHP 8', 'MySQL', 'Elasticsearch', 'Varnish', 'Redis', 'RabbitMQ'],
        process: [
            { step: '01', title: 'Architect', desc: 'Planning the server infrastructure, database sharding, and caching layers.' },
            { step: '02', title: 'Integrate', desc: 'Building middleware to connect ERP, PIM, WMS and legacy systems.' },
            { step: '03', title: 'Build & Theme', desc: 'Developing custom modules and a responsive, fast frontend theme.' },
            { step: '04', title: 'Optimize', desc: 'Server tuning, index optimization, and load testing for maximum throughput.' }
        ],
        benefits: [
            { title: 'Total Control', desc: 'Own your code, data, and infrastructure completely. No platform lock-in.' },
            { title: 'Flexibility', desc: 'If you can dream it, Magento can build it. Almost any logic can be customized.' },
            { title: 'B2B Power', desc: 'Review features specifically designed for wholesalers and manufacturers.' }
        ],
        industries: ['Wholesale', 'Automotive', 'Manufacturing', 'Large Retail'],
        projects: [
            {
                title: 'Auto Parts Mega-Store',
                desc: 'B2B portal with 2M+ SKUs, vehicle fitment filters, and dealer pricing tiers.',
                image: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Automotive', 'B2B', 'Search'],
                link: '/work/auto-parts'
            },
            {
                title: 'Electronics Distributor',
                desc: 'Multi-region commerce solution for a consumer electronics distributor operating in 12 countries.',
                image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Global', 'Electronics', 'B2C'],
                link: '/work/electronics'
            },
            {
                title: 'Pharma Supply Chain',
                desc: 'Secure ordering platform for pharmacies with strict compliance and batch tracking.',
                image: 'https://images.pexels.com/photos/3652103/pexels-photo-3652103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Healthcare', 'B2B', 'Compliance'],
                link: '/work/pharma-b2b'
            }
        ],
        faq: [
            { q: 'Is Magento slow?', a: 'Only if poorly optimized. We configure Varnish, Redis, and proper hosting to make it fly.' },
            { q: 'Is it hard to maintain?', a: 'It requires technical expertise. Our maintenance packages ensure security patches and updates are applied safely.' },
            { q: 'Why choose Magento over Shopify?', a: 'Magento offers complete ownership of code and data, which is critical for complex B2B or custom workflows.' }
        ]
    },
    'bubble': {
        title: 'Bubble.io Development',
        subtitle: 'Full-stack visual programming to build powerful web apps without traditional coding.',
        badge: 'Visual Development',
        heroImage: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '10x', label: 'Faster Dev' },
            { value: 'Full', label: 'Stack' },
            { value: 'DB', label: 'Integrated' },
            { value: 'API', label: 'Connectors' }
        ],
        features: [
            { icon: 'FaDatabase', title: 'Integrated DB', desc: 'Built-in scalable real-time database with complex data relationships.' },
            { icon: 'FaNetworkWired', title: 'API Connector', desc: 'Connect to any external service (Stripe, AI, Google) via REST APIs.' },
            { icon: 'FaLock', title: 'Secure Logic', desc: 'Server-side workflows ensure business logic is secure and hidden from the client.' },
            { icon: 'FaMobile', title: 'Responsive', desc: 'Design once and deploy to desktop, tablet, and mobile automatically.' }
        ],
        techStack: ['Bubble', 'API Connector', 'Stripe', 'SendGrid', 'Algolia'],
        process: [
            { step: '01', title: 'Data Plan', desc: 'Mapping out user types, data structures and relationship fields.' },
            { step: '02', title: 'UI Design', desc: 'Building the visual interface pixel-by-pixel in the Bubble editor.' },
            { step: '03', title: 'Logic Dev', desc: 'Programming the workflows, backend triggers, and third-party APIs.' },
            { step: '04', title: 'Launch', desc: 'Deploying to live production with custom domain setup.' }
        ],
        benefits: [
            { title: 'MVP to Scale', desc: 'Start small and grow to thousands of users without rewriting code.' },
            { title: 'Cost Efficiency', desc: 'Significant savings on initial development costs vs traditional engineering.' },
            { title: 'No Tech Debt', desc: 'Visual code is easier to read and maintain for future developers.' }
        ],
        industries: ['Marketplaces', 'SaaS', 'Social Networks', 'Internal Tools'],
        projects: [
            {
                title: 'Freelance Marketplace',
                desc: 'Two-sided talent marketplace connecting designers with agencies, built entirely on Bubble.',
                image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Marketplace', 'SaaS', 'Stripe'],
                link: '/work/talent-market'
            },
            {
                title: 'Property Management CRM',
                desc: 'Internal tool for a real estate firm to manage listings, viewings, and contracts.',
                image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['CRM', 'Real Estate', 'Internal'],
                link: '/work/prop-tech'
            },
            {
                title: 'On-Demand Delivery',
                desc: 'Uber-like delivery platform with live tracking and driver dispatch.',
                image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Logistics', 'Mobile', 'GPS'],
                link: '/work/delivery-app'
            }
        ],
        faq: [
            { q: 'Does Bubble scale?', a: 'Yes, Bubble powers apps with millions of dollars in revenue and heavy traffic loads.' },
            { q: 'Who owns the data?', a: 'You own your data completely and can export it as CSV/JSON at any time.' },
            { q: 'Can I host it myself?', a: 'No, Bubble is a PaaS (Platform as a Service), meaning they handle all hosting and infrastructure.' }
        ]
    },
    'framer': {
        title: 'Framer Sites',
        subtitle: 'The best site builder for designers. From canvas to published in seconds.',
        badge: 'Design First',
        heroImage: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Instant', label: 'Publishing' },
            { value: 'React', label: 'Powered' },
            { value: 'Motion', label: 'Magic' },
            { value: 'Top', label: 'Performance' }
        ],
        features: [
            { icon: 'FaPenNib', title: 'Freeform Canvas', desc: 'Design exactly like in Figma—absolute positioning, stacks, and layers.' },
            { icon: 'FaBolt', title: 'Interactive', desc: 'World-class animations, scroll transforms, and component states builtin.' },
            { icon: 'FaMobile', title: 'Responsive', desc: 'Pixel-perfect breakpoints for tablet and mobile adjusted visually.' },
            { icon: 'FaGlobe', title: 'Localization', desc: 'Built-in localization support to reach global audiences easily.' }
        ],
        techStack: ['Framer', 'React', 'Framer Motion', 'Fiber'],
        process: [
            { step: '01', title: 'Import', desc: 'Importing designs directly from Figma via the Framer plugin.' },
            { step: '02', title: 'Animate', desc: 'Adding appear effects, scroll animations, and interactive components.' },
            { step: '03', title: 'CMS', desc: 'Connecting dynamic content for blogs, portfolios, and team pages.' },
            { step: '04', title: 'Ship', desc: 'One-click publish to a high-performance global CDN.' }
        ],
        benefits: [
            { title: 'Visual Impact', desc: 'Create award-winning visuals that are impossible for competitors to copy.' },
            { title: 'Speed', desc: 'Fastest route from a design file to a live, hosted website.' },
            { title: 'Designer Autonomy', desc: 'Designers can update the site without waiting for developers.' }
        ],
        industries: ['Portfolios', 'Marketing', 'Events', 'Landing Pages'],
        projects: [
            {
                title: 'AI Startup Launch',
                desc: 'High-conversion landing page for a Series A AI startup, shipped in 3 days.',
                image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Startup', 'SaaS', 'Motion'],
                link: '/work/ai-startup'
            },
            {
                title: 'Music Festival',
                desc: 'Vibrant, interactive site for a music festival featuring scroll-triggered audio visualization.',
                image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Music', 'Events', 'Experience'],
                link: '/work/music-fest'
            },
            {
                title: 'Designer Portfolio',
                desc: 'Award-winning portfolio for a senior product designer with unique navigation.',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Portfolio', 'Design', 'Creative'],
                link: '/work/designer-folio'
            }
        ],
        faq: [
            { q: 'Is it good for large sites?', a: 'Framer is best for marketing sites, portfolios, and landing pages. Large web apps should use React/Next.js.' },
            { q: 'How is the SEO?', a: 'Framer sites rank exceptionally well due to clean code, semantic tags, and blazing fast performance.' },
            { q: 'Can we add custom code?', a: 'Yes, as a React-based tool, we can write custom code and override components for unique functionality.' }
        ]
    },
    'dora': {
        title: 'Dora 3D Web',
        subtitle: 'No-code platform for creating 3D and animated websites.',
        badge: '3D Web',
        heroImage: 'https://images.pexels.com/photos/8386365/pexels-photo-8386365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '3D', label: 'Native' },
            { value: 'Zero', label: 'Code' },
            { value: '4K', label: 'Resolution' },
            { value: 'Next-Gen', label: 'Visuals' }
        ],
        features: [
            { icon: 'FaCube', title: '3D Import', desc: 'Import .glb/.gltf 3D models directly into the web canvas with textures.' },
            { icon: 'FaFilm', title: 'Keyframe Anim', desc: 'Control 3D camera movements and object animations on a timeline.' },
            { icon: 'FaLayerGroup', title: 'Physics', desc: 'Add real-time physics interactions to 3D objects for gaming-like feel.' },
            { icon: 'FaBolt', title: 'Performance', desc: 'Optimized rendering pipeline ensures smooth frame rates.' }
        ],
        techStack: ['Dora', 'WebGL', 'Three.js', 'Blender'],
        process: [
            { step: '01', title: 'Asset Prep', desc: 'Optimizing and texturing 3D models in Blender/Cinema4D.' },
            { step: '02', title: 'Scene Setup', desc: 'Setting up the 3D stage, lighting, and camera angles in Dora.' },
            { step: '03', title: 'Animation', desc: 'Linking object movements and transitions to scroll progress.' },
            { step: '04', title: 'Publish', desc: 'Deploying the immersive experience to the web.' }
        ],
        benefits: [
            { title: 'Wow Factor', desc: 'Create immersive 3D experiences that stand out from 2D flat webs.' },
            { title: 'Engagement', desc: 'Interactive 3D elements keep users on the page significantly longer.' },
            { title: 'No Coding', desc: 'Achieve WegGL mastery without writing a single shader.' }
        ],
        industries: ['Product Showcases', 'Creative Agencies', 'Gaming', 'Luxury Goods'],
        projects: [
            {
                title: 'Sneaker Launch 3D',
                desc: 'A fully interactive 3D product configurator for a limited edition sneaker drop.',
                image: 'https://images.pexels.com/photos/1456733/pexels-photo-1456733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['3D Web', 'Fashion', 'WebGL'],
                link: '/work/sneaker-drop'
            },
            {
                title: 'Luxury Car Experience',
                desc: 'Scroll-driven storytelling page with a high-fidelity 3D car model.',
                image: 'https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Automotive', 'Luxury', 'Interaction'],
                link: '/work/luxury-car'
            },
            {
                title: 'Gaming Hardware',
                desc: 'Immersive landing page for a new gaming headset with exploding view animations.',
                image: 'https://images.pexels.com/photos/7862594/pexels-photo-7862594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Gaming', 'Hardware', 'Animation'],
                link: '/work/game-peripherals'
            }
        ],
        faq: [
            { q: 'Can I export the 3D models?', a: 'Yes, Dora allows you to export assets or embed the entire 3D scene into other web projects.' },
            { q: 'Is it mobile responsive?', a: 'Absolutely. Dora provides granular control over how 3D elements behave on different screen sizes.' },
            { q: 'Do I need 3D modeling skills?', a: 'Basic familiarity helps, but Dora is designed for web designers, not just 3D artists.' }
        ]
    },
    'studio-ai': {
        title: 'Studio AI Development',
        subtitle: 'Intelligent design-to-code platform leveraging AI.',
        badge: 'AI Web Design',
        heroImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'AI', label: 'Assisted' },
            { value: 'Smart', label: 'Layouts' },
            { value: 'Auto', label: 'Responsive' },
            { value: 'Clean', label: 'Code' }
        ],
        features: [
            { icon: 'FaRobot', title: 'Generative Design', desc: 'Generate unique layout options, color palettes, and typography from text prompts.' },
            { icon: 'FaBrain', title: 'Smart Adapt', desc: 'Components that intelligently resize and stack based on content.' },
            { icon: 'FaCode', title: 'Code Export', desc: 'Export production-ready React/CSS code that developers love.' },
            { icon: 'FaPalette', title: 'Style Systems', desc: 'Global design tokens managed by AI for consistency.' }
        ],
        techStack: ['Studio AI', 'React', 'CSS Modules'],
        process: [
            { step: '01', title: 'Prompting', desc: 'Describing your vision in natural language to the AI agent.' },
            { step: '02', title: 'Refining', desc: 'Manually tweaking the generated layouts and styles.' },
            { step: '03', title: 'Content', desc: 'Populating with real copy and images assisted by AI.' },
            { step: '04', title: 'Integration', desc: 'Exporting the code for full application integration.' }
        ],
        benefits: [
            { title: 'Future Tech', desc: 'Leverage the latest in generative UI to work at 10x speed.' },
            { title: 'Creative Exploration', desc: 'Explore dozens of design directions in minutes.' },
            { title: 'Reduced Grunt Work', desc: 'AI handles the responsive resizing and constraints.' }
        ],
        industries: ['Startups', 'Tech', 'Agencies'],
        projects: [
            {
                title: 'AI Agency Site',
                desc: 'Generated and refined entirely by AI, acting as a case study for the technology itself.',
                image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['AI Design', 'Agency', 'Generative'],
                link: '/work/agency-ai'
            },
            {
                title: 'HealthTech Dashboard',
                desc: 'Complex dashboard UI layout generated from simple text prompts.',
                image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Healthcare', 'Dashboard', 'UI/UX'],
                link: '/work/health-ui'
            },
            {
                title: 'Marketing Campaign',
                desc: 'Rapidly produced set of 5 distinct landing pages for A/B testing ad creative.',
                image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Marketing', 'Conversion', 'Speed'],
                link: '/work/market-test'
            }
        ],
        faq: [
            { q: 'How does AI help in design?', a: 'Studio AI analyzes your prompt and generates layout options, color palettes, and typography instantly.' },
            { q: 'Is the code clean?', a: 'Yes, the generated code is semantic, accessible, and ready for production use.' },
            { q: 'Can I use my own design system?', a: 'Yes, you can feed your existing design tokens into the AI to ensure brand consistency.' }
        ]
    },

    // --- IT SOLUTIONS ---
    'digital-transformation': {
        title: 'Digital Transformation',
        subtitle: 'Reimagining business processes with modern digital technologies.',
        badge: 'Strategy',
        heroImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '300%', label: 'ROI Average' },
            { value: 'End-to-End', label: 'Coverage' },
            { value: 'Cloud', label: 'Native' },
            { value: 'Data', label: 'Driven' }
        ],
        features: [
            { icon: 'FaChartLine', title: 'Process Audit', desc: 'Identify bottlenecks in legacy workflows and manual processes.' },
            { icon: 'FaCloud', title: 'Cloud Migration', desc: 'Move on-premise infrastructure to scalable AWS/Azure cloud environments.' },
            { icon: 'FaRobot', title: 'Automation', desc: 'Implement RPA and AI to handle repetitive tasks automatically.' },
            { icon: 'FaDatabase', title: 'Data Modernization', desc: 'Unify siloed data into data lakes for actionable business intelligence.' }
        ],
        techStack: ['Azure', 'AWS', 'Salesforce', 'ServiceNow', 'PowerBI'],
        process: [
            { step: '01', title: 'Assess', desc: 'Deep-dive analysis of current technology stack and business goals.' },
            { step: '02', title: 'Roadmap', desc: 'Developing a phased strategic plan to minimize disruption.' },
            { step: '03', title: 'Implement', desc: 'Executing the migration and development of new digital tools.' },
            { step: '04', title: 'Adoption', desc: 'Training staff and managing change for successful rollout.' }
        ],
        benefits: [
            { title: 'Efficiency', desc: 'Drastically reduce manual overhead and processing times.' },
            { title: 'Agility', desc: 'Respond to market changes faster with flexible infrastructure.' },
            { title: 'Customer Exp', desc: 'Deliver modern, seamless experiences to your customers.' }
        ],
        industries: ['Enterprise', 'Legacy Business', 'Finance', 'Logistics'],
        projects: [
            {
                title: 'Legacy Bank Migration',
                desc: 'Migrating 20 years of on-premise data to AWS cloud for a regional bank.',
                image: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Banking', 'Cloud', 'AES-256'],
                link: '/work/bank-cloud'
            },
            {
                title: 'Logistics Digital Twin',
                desc: 'Creating a digital replica of a supply chain network to simulate and optimize routes.',
                image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Logistics', 'IoT', 'Efficiency'],
                link: '/work/supply-chain'
            },
            {
                title: 'Paperless Office',
                desc: 'Digitizing all physical workflows for a 500-person insurance firm.',
                image: 'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Automation', 'Workflow', 'RPA'],
                link: '/work/insurance-digitization'
            }
        ],
        faq: [
            { q: 'How long does a transformation take?', a: 'It depends on the scope, but typically we aim for quick wins within 3 months while pursuing long-term goals.' },
            { q: 'Will this disrupt our operations?', a: 'We plan carefully to minimize downtime and ensure business continuity during the transition.' },
            { q: 'Do you train our staff?', a: 'Yes, change management and staff training are integral parts of our digital transformation process.' }
        ]
    },
    'staff-augmentation': {
        title: 'IT Staff Augmentation',
        subtitle: 'Scale your team instantly with top-tier global engineering talent.',
        badge: 'Talent',
        heroImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '48h', label: 'Placement' },
            { value: 'Top 1%', label: 'Talent' },
            { value: 'Zero', label: 'Risk' },
            { value: '100%', label: 'Dedicated' }
        ],
        features: [
            { icon: 'FaUserFriends', title: 'Vetted Experts', desc: 'Developers undergo a rigorous 5-stage technical interview process.' },
            { icon: 'FaGlobe', title: 'Timezone Aligned', desc: 'We provide talent that overlaps with your working hours for seamless collab.' },
            { icon: 'FaLaptopCode', title: 'Plug & Play', desc: 'Engineers come ready with their own hardware and software setup.' },
            { icon: 'FaCheckCircle', title: 'Cultural Fit', desc: 'We screen for soft skills to ensure smooth integration with your team.' }
        ],
        techStack: ['React', 'Node.js', 'Python', 'Java', '.NET', 'DevOps'],
        process: [
            { step: '01', title: 'Requirements', desc: 'We define the exact skills and seniority level you need.' },
            { step: '02', title: 'Vetting', desc: 'Our team handpicks the best matches from our talent pool.' },
            { step: '03', title: 'Interviews', desc: 'You interview the candidates to confirm technical fit.' },
            { step: '04', title: 'Onboarding', desc: 'Immediate start with our HR handling payroll and compliance.' }
        ],
        benefits: [
            { title: 'Scalability', desc: 'Scale up or down instantly without long-term hiring commitments.' },
            { title: 'Cost Savings', desc: 'Avoid recruitment fees, benefits, and office overhead costs.' },
            { title: 'Specialized Skills', desc: 'Access niche technologies that are hard to find locally.' }
        ],
        industries: ['All Industries'],
        projects: [
            {
                title: 'FinTech DevOps Team',
                desc: 'Provisioned a 5-person DevOps pod to accelerate Kubernetes adoption for a Series B fintech.',
                image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['DevOps', 'FinTech', 'Kubernetes'],
                link: '/work/fintech-pod'
            },
            {
                title: 'React Native Expert',
                desc: 'Senior mobile engineer augmented an existing team to ship critical features before a deadline.',
                image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Mobile', 'Staffing', 'React Native'],
                link: '/work/mobile-sprint'
            },
            {
                title: 'QA Automation Squad',
                desc: 'Deployed a dedicated QA team to build an end-to-end testing suite for an e-commerce giant.',
                image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['QA', 'Automation', 'E-commerce'],
                link: '/work/qa-squad'
            }
        ],
        faq: [
            { q: 'How fast can you provide developers?', a: 'We can typically present vetted candidates within 48 to 72 hours.' },
            { q: 'Are they completely dedicated to us?', a: 'Yes, the augmented staff works exclusively for your project and reports directly to your managers.' },
            { q: 'What if a developer isn\'t a good fit?', a: 'We offer a replacement guarantee. If you are not satisfied within the first two weeks, we will replace them at no cost.' }
        ]
    },
    'tech-consulting': {
        title: 'Technology Consulting',
        subtitle: 'Strategic guidance to navigate the complex technology landscape.',
        badge: 'Advisory',
        heroImage: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Expert', label: 'Insights' },
            { value: 'Strategic', label: 'Planning' },
            { value: 'Audit', label: 'Deep Dive' },
            { value: 'Future', label: 'Proof' }
        ],
        features: [
            { icon: 'FaLightbulb', title: 'CTO Advisory', desc: 'Fractional CTO services to guide high-level technical decisions.' },
            { icon: 'FaShieldAlt', title: 'Security Audits', desc: 'Comprehensive vulnerability assessments and compliance checks.' },
            { icon: 'FaLayerGroup', title: 'Architecture Review', desc: 'Evaluating your system design for scalability and maintainability.' },
            { icon: 'FaCheckCircle', title: 'Vendor Selection', desc: 'Unbiased evaluation of third-party tools and platforms.' }
        ],
        techStack: ['Architecture', 'Security', 'Compliance', 'GDPR', 'HIPAA'],
        process: [
            { step: '01', title: 'Discovery', desc: 'Understanding your business objectives and pain points.' },
            { step: '02', title: 'Audit', desc: 'Thorough review of current infrastructure and codebases.' },
            { step: '03', title: 'Strategy', desc: 'Developing a comprehensive improvement roadmap.' },
            { step: '04', title: 'Guidance', desc: 'Ongoing support during implementation.' }
        ],
        benefits: [
            { title: 'Clarity', desc: 'Make informed decisions backed by decades of engineering experience.' },
            { title: 'Risk Reduction', desc: 'Avoid costly architectural mistakes and security breaches.' },
            { title: 'Speed', desc: 'Accelerate development by unblocking technical bottlenecks.' }
        ],
        industries: ['Startups', 'Enterprise', 'Healthcare', 'FinTech'],
        projects: [
            {
                title: 'Security Architecture',
                desc: 'Redesigned the security posture for a healthcare provider to achieve HIPAA compliance.',
                image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Security', 'Healthcare', 'HIPAA'],
                link: '/work/health-sec'
            },
            {
                title: 'Scalability Audit',
                desc: 'Analyzed bottlenecks in a high-traffic social app and proposed a microservices roadmap.',
                image: 'https://images.pexels.com/photos/17483848/pexels-photo-17483848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Scalability', 'Microservices', 'Audit'],
                link: '/work/social-scale'
            },
            {
                title: 'Merger IT Integration',
                desc: 'Strategic plan to merge IT systems of two newly acquired logistics companies.',
                image: 'https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['M&A', 'Strategy', 'Integration'],
                link: '/work/it-merger'
            }
        ],
        faq: [
            { q: 'What industries do you consult for?', a: 'We have experience across Finance, Healthcare, Retail, Manufacturing, and Tech startups.' },
            { q: 'Do you offer implementation?', a: 'Yes, we can seamlessly transition from advisory to full-scale engineering and implementation.' },
            { q: 'How do you bill for consulting?', a: 'We offer hourly rates for ad-hoc advice or retainer packages for ongoing strategic support.' }
        ]
    },
    'maintenance': {
        title: 'Maintenance & Support',
        subtitle: 'Keep your digital assets running smoothly 24/7.',
        badge: 'Support',
        heroImage: 'https://images.pexels.com/photos/8386444/pexels-photo-8386444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '24/7', label: 'Monitoring' },
            { value: '99%+', label: 'Uptime' },
            { value: '1hr', label: 'Response' },
            { value: 'SLA', label: 'Guaranteed' }
        ],
        features: [
            { icon: 'FaShieldAlt', title: 'Security Patches', desc: 'Regular application of security updates to prevent vulnerabilities.' },
            { icon: 'FaTools', title: 'Bug Fixes', desc: 'Rapid resolution of reported issues and regressions.' },
            { icon: 'FaServer', title: 'Server Health', desc: 'Continuous monitoring of CPU, RAM, and disk usage.' },
            { icon: 'FaDatabase', title: 'Backups', desc: 'Automated daily backups and disaster recovery planning.' }
        ],
        techStack: ['DevOps', 'AWS CloudWatch', 'Datadog', 'Sentry', 'New Relic'],
        process: [
            { step: '01', title: 'Onboard', desc: 'Setting up monitoring tools and access protocols.' },
            { step: '02', title: 'Monitor', desc: 'Continuous automated checks for site health.' },
            { step: '03', title: 'Resolve', desc: 'Immediate action on alerts within SLA times.' },
            { step: '04', title: 'Report', desc: 'Monthly reports on performance, uptime, and work done.' }
        ],
        benefits: [
            { title: 'Peace of Mind', desc: 'We watch your back while you sleep. No more 3AM panic calls.' },
            { title: 'Longevity', desc: 'Regular maintenance extends the lifespan of your software.' },
            { title: 'Compliance', desc: 'Ensure your software stays compliant with latest standards.' }
        ],
        industries: ['All Industries'],
        projects: [
            {
                title: 'Global Hosting Support',
                desc: 'Providing 24/7 monitoring and incident response for a multinational media corporation.',
                image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Support', 'Media', '24/7'],
                link: '/work/media-support'
            },
            {
                title: 'Legacy App Rescue',
                desc: 'Took over a crashing legacy Laravel app, optimized DB queries, and stabilized uptime to 99.9%.',
                image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Maintenance', 'PHP', 'Optimization'],
                link: '/work/laravel-rescue'
            },
            {
                title: 'SaaS Platform Audit',
                desc: 'Ongoing monthly security patches and performance tuning for a healthcare SaaS.',
                image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['SaaS', 'Security', 'Healthcare'],
                link: '/work/saas-maintenance'
            }
        ],
        faq: [
            { q: 'What is your response time?', a: 'Our standard SLA includes a 1-hour response time for critical issues.' },
            { q: 'Do you only support your own code?', a: 'No, we can take over and maintain legacy codebases after an initial audit.' },
            { q: 'Do you provide 24/7 support?', a: 'Yes, our global team ensures there are eyes on your system 24 hours a day, 7 days a week.' }
        ]
    },

    // --- CUSTOM DEV (Extras) ---
    'web-app-dev': {
        title: 'Web Application Development',
        subtitle: 'Powerful, progressive web apps that behave like native software.',
        badge: 'PWA / SPA',
        heroImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Fast', label: 'Performance' },
            { value: 'Offline', label: 'Capable' },
            { value: 'App', label: 'Like' },
            { value: 'SEO', label: 'Friendly' }
        ],
        features: [
            { icon: 'FaLaptopCode', title: 'SPA Architecture', desc: 'Single Page Applications for fluid, flash-free path navigation.' },
            { icon: 'FaMobile', title: 'PWA Features', desc: 'Installable on home screens, offline mode, and push notifications.' },
            { icon: 'FaDatabase', title: 'Real-time', desc: 'Live data updates using WebSockets for collaborative features.' },
            { icon: 'FaLock', title: 'Secure', desc: 'Enterprise-grade authentication and data encryption.' }
        ],
        techStack: ['React', 'Vue', 'Next.js', 'Redux', 'Firebase', 'Socket.io'],
        process: [
            { step: '01', title: 'Plan', desc: 'Defining the module architecture and data flow.' },
            { step: '02', title: 'Prototype', desc: 'Creating clickable wireframes to validate UX.' },
            { step: '03', title: 'Build', desc: 'Agile development with bi-weekly sprints.' },
            { step: '04', title: 'Deploy', desc: 'CI/CD setup and cloud hosting configuration.' }
        ],
        benefits: [
            { title: 'User Engagement', desc: 'App-like experiences increase session duration and retention.' },
            { title: 'Reach', desc: 'Accessible via a clear URL, no app store friction.' },
            { title: 'Cross-Device', desc: 'Works flawlessly on desktop, tablet, and mobile.' }
        ],
        industries: ['SaaS', 'Tools', 'EdTech', 'Social'],
        projects: [
            {
                title: 'Project Management SaaS',
                desc: 'Collaborative task management tool with real-time updates and team chat.',
                image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['SaaS', 'React', 'Real-time'],
                link: '/work/pm-tool'
            },
            {
                title: 'EdTech Learning Platform',
                desc: 'Interactive video learning platform with quizzes and progress tracking for students.',
                image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['EdTech', 'Video', 'PWA'],
                link: '/work/edtech-platform'
            },
            {
                title: 'Social Fitness App',
                desc: 'Web-based social network for fitness enthusiasts to share workouts and goals.',
                image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Social', 'Fitness', 'Mobile-First'],
                link: '/work/fitness-social'
            }
        ],
        faq: [
            { q: 'PWA vs Native App?', a: 'PWAs offer a broader reach and lower development cost, while native apps provide deeper device integration.' },
            { q: 'Do PWAs work offline?', a: 'Yes, we use service workers to cache content and enable core functionality without an internet connection.' },
            { q: 'Is it discoverable on Google?', a: 'Yes, unlike native apps, PWAs are fully indexable by search engines, boosting your SEO.' }
        ]
    },
    'custom-cms': {
        title: 'Custom Website & CMS',
        subtitle: 'Tailored content management systems for unique publishing needs.',
        badge: 'Custom',
        heroImage: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '100%', label: 'Fit' },
            { value: 'Fast', label: 'Admin' },
            { value: 'Secure', label: 'Data' },
            { value: 'Flexible', label: 'Fields' }
        ],
        features: [
            { icon: 'FaColumns', title: 'Custom Dashboard', desc: 'Admin panels designed specifically for your editorial workflow.' },
            { icon: 'FaDatabase', title: 'Structured Content', desc: 'Flexible content modeling that fits your data, not generic posts.' },
            { icon: 'FaRocket', title: 'API Driven', desc: 'Content delivered via API to websites, apps, and smart devices.' },
            { icon: 'FaUserFriends', title: 'Granular Permissions', desc: 'Role-based access for editors, authors, and admins.' }
        ],
        techStack: ['Laravel', 'Node.js', 'Strapi', 'Sanity', 'Contentful'],
        process: [
            { step: '01', title: 'Model', desc: 'Defining your content types and relationships.' },
            { step: '02', title: 'Design', desc: 'Creating the frontend and admin UI experience.' },
            { step: '03', title: 'Code', desc: 'Building the API and management interfaces.' },
            { step: '04', title: 'Train', desc: 'Teaching your team how to use the new system.' }
        ],
        benefits: [
            { title: 'Workflow Optimization', desc: 'Cut down publishing time with tools that match your process.' },
            { title: 'Scalability', desc: 'Headless architecture allows the frontend to scale independently.' },
            { title: 'Longevity', desc: 'No plugin bloat or "hacky" workarounds.' }
        ],
        industries: ['Media', 'Publishing', 'Real Estate', 'Listings'],
        projects: [
            {
                title: 'News Media Portal',
                desc: 'High-traffic news site with distinct editorial workflows for authors, editors, and admins.',
                image: 'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Publishing', 'CMS', 'High Traffic'],
                link: '/work/news-portal'
            },
            {
                title: 'Real Estate Listings',
                desc: 'Custom headless CMS managing 50k+ property listings with advanced filtering.',
                image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Real Estate', 'Headless', 'Search'],
                link: '/work/realty-cms'
            },
            {
                title: 'Museum Archive',
                desc: 'Digital asset management system for a national museum to catalog vast collections.',
                image: 'https://images.pexels.com/photos/2096054/pexels-photo-2096054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Archive', 'DAM', 'Culture'],
                link: '/work/museum-cms'
            }
        ],
        faq: [
            { q: 'Is a custom CMS hard to maintain?', a: 'We build them with standard frameworks (Laravel/Node), making them easy for any developer to maintain.' },
            { q: 'Can it handle high traffic?', a: 'Yes, since it is custom-built, we optimize the database and caching specifically for your traffic patterns.' },
            { q: 'Is it secure?', a: 'We implement role-based access control and sanitize all inputs to prevent common vulnerabilities.' }
        ]
    },
    'portals': {
        title: 'Enterprise Portals',
        subtitle: 'Secure internal portals and dashboards for large organizations.',
        badge: 'Enterprise',
        heroImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Secure', label: 'SSO' },
            { value: 'Unified', label: 'Data' },
            { value: 'Role', label: 'Based' },
            { value: 'Audit', label: 'Logs' }
        ],
        features: [
            { icon: 'FaLock', title: 'SSO Integration', desc: 'Connect with AD, Okta, or Google Workspace for seamless login.' },
            { icon: 'FaUserFriends', title: 'RBAC', desc: 'Strict Role-Based Access Control to ensure data privacy.' },
            { icon: 'FaChartLine', title: 'Reporting', desc: 'Visual dashboards pulling real-time data from ERP/CRM.' },
            { icon: 'FaGlobe', title: 'Intranet', desc: 'Company-wide communication and resource sharing hubs.' }
        ],
        techStack: ['React', 'Java', '.NET', 'Keycloak', 'OAuth2'],
        process: [
            { step: '01', title: 'Auth Plan', desc: 'Mapping user roles and specific access rights.' },
            { step: '02', title: 'Data Map', desc: 'Integrating disparate data sources into one view.' },
            { step: '03', title: 'Build', desc: 'Developing the secure portal interface.' },
            { step: '04', title: 'Audit', desc: 'Security testing and penetration testing.' }
        ],
        benefits: [
            { title: 'Productivity', desc: 'Employees find what they need instantly in one central place.' },
            { title: 'Data Security', desc: 'Reduce risk by centralizing access control.' },
            { title: 'Visibility', desc: 'Management gets a bird\'s eye view of operations.' }
        ],
        industries: ['Corporate', 'Finance', 'Healthcare', 'Government'],
        projects: [
            {
                title: 'Employee Intranet',
                desc: 'Secure internal hub for 5,000 employees with HR tools, news, and document search.',
                image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Intranet', 'Enterprise', 'SSO'],
                link: '/work/corp-intranet'
            },
            {
                title: 'Vendor Partner Portal',
                desc: 'Self-service portal for suppliers to manage invoices and orders securely.',
                image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['B2B', 'Portal', 'Finance'],
                link: '/work/vendor-portal'
            },
            {
                title: 'Patient Records System',
                desc: 'HIPAA-compliant portal for doctors to access and update patient history.',
                image: 'https://images.pexels.com/photos/4031685/pexels-photo-4031685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Healthcare', 'Secure', 'Data'],
                link: '/work/patient-records'
            }
        ],
        faq: [
            { q: 'Is SSO included?', a: 'Yes, we integrate with Azure AD, Okta, Google Workspace, and other identity providers.' },
            { q: 'How secure is the data?', a: 'We use end-to-end encryption and role-based access control (RBAC) to ensure highest security.' },
            { q: 'Can it integrate with our ERP?', a: 'Yes, we can build custom connectors to fetch and display data from SAP, Oracle, or Salesforce.' }
        ]
    },
    'ecommerce': {
        title: 'Custom eCommerce',
        subtitle: 'Headless and custom commerce solutions for unique business models.',
        badge: 'Commerce',
        heroImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Scale', label: 'Global' },
            { value: 'Speed', label: 'Blazing' },
            { value: 'API', label: 'First' },
            { value: 'Unique', label: 'UX' }
        ],
        features: [
            { icon: 'FaShoppingCart', title: 'Headless Commerce', desc: 'Frontend completely decoupled from backend for ultimate speed.' },
            { icon: 'FaCode', title: 'Custom Checkout', desc: 'Tailored checkout flows for subscriptions or complex products.' },
            { icon: 'FaGlobe', title: 'Omnichannel', desc: 'Sell on web, mobile, social, and POS from one engine.' },
            { icon: 'FaServer', title: 'Microservices', desc: 'Modular architecture for flexibility and fault tolerance.' }
        ],
        techStack: ['Shopify Hydrogen', 'CommerceTools', 'Next.js', 'Stripe', 'Algolia'],
        process: [
            { step: '01', title: 'Model', desc: 'Mapping complex product data and pricing rules.' },
            { step: '02', title: 'API', desc: 'Networking the commerce engine with CMS and ERP.' },
            { step: '03', title: 'Frontend', desc: 'Building a blazing fast PWA storefront.' },
            { step: '04', title: 'Launch', desc: 'Rigorous load testing before going live.' }
        ],
        benefits: [
            { title: 'Uniqueness', desc: 'Don\'t look like another generic template. Stand out.' },
            { title: 'Performance', desc: 'Sub-second load times lead to higher conversion rates.' },
            { title: 'Agility', desc: 'Change the frontend layout without touching backend logic.' }
        ],
        industries: ['Retail', 'DTC', 'Subscriptions', 'Luxury'],
        projects: [
            {
                title: 'Luxury Watch Marketplace',
                desc: 'Custom headless commerce platform for trading high-value timepieces.',
                image: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Luxury', 'Marketplace', 'Headless'],
                link: '/work/watch-market'
            },
            {
                title: 'Subscription Box Service',
                desc: 'Complex recurring billing engine with "build your own box" functionality.',
                image: 'https://images.pexels.com/photos/6865267/pexels-photo-6865267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Subscription', 'DTC', 'Stripe'],
                link: '/work/sub-box'
            },
            {
                title: 'Furniture Configurator',
                desc: 'Commerce site with real-time 3D product customization for sofas.',
                image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Furniture', '3D', 'Commerce'],
                link: '/work/furniture-shop'
            }
        ],
        faq: [
            { q: 'Why go headless?', a: 'Headless allows you to have a blazing fast frontend and change backend services without a full rebuild.' },
            { q: 'Can you migrate data?', a: 'Yes, we migrate products, customers, and order history from your legacy platform.' },
            { q: 'Is it PCI compliant?', a: 'We use secure payment gateways like Stripe/Adyen that handle PCI compliance, keeping your servers out of scope.' }
        ]
    },

    // --- AI & DATA ---
    'ai-integration': {
        title: 'AI Integration & Strategy',
        subtitle: 'Embed artificial intelligence into your existing products to unlock new capabilities.',
        badge: 'AI',
        heroImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Smart', label: 'Automation' },
            { value: '10x', label: 'Efficiency' },
            { value: 'Data', label: 'Insights' },
            { value: 'Secure', label: 'AI' }
        ],
        features: [
            { icon: 'FaBrain', title: 'ML Models', desc: 'Custom machine learning models trained on your specific business data.' },
            { icon: 'FaRobot', title: 'Process Automation', desc: 'Automate complex decision-making workflows with AI agents.' },
            { icon: 'FaSearch', title: 'Semantic Search', desc: 'Implement vector search to let users find content by meaning, not just keywords.' },
            { icon: 'FaChartLine', title: 'Predictive Analytics', desc: 'Forecast trends and user behavior with high accuracy.' }
        ],
        techStack: ['OpenAI', 'TensorFlow', 'PyTorch', 'Pinecone', 'LangChain'],
        process: [
            { step: '01', title: 'Data Audit', desc: 'Evaluating your data quality and availability for AI training.' },
            { step: '02', title: 'Model Select', desc: 'Choosing the right foundation models (LLMs) or architectures.' },
            { step: '03', title: 'Fine-Tuning', desc: 'Customizing the model capabilities with your proprietary dataset.' },
            { step: '04', title: 'Deploy', desc: 'Integrating the AI API into your production environment securely.' }
        ],
        benefits: [
            { title: 'Innovation', desc: 'Stay ahead of competitors by adopting cutting-edge AI features first.' },
            { title: 'Efficiency', desc: 'Automate tasks that previously required expensive human cognition.' },
            { title: 'Personalization', desc: 'Deliver hyper-personalized experiences to every single user.' }
        ],
        industries: ['FinTech', 'Healthcare', 'E-commerce', 'SaaS'],
        projects: [
            {
                title: 'FinTech Risk Engine',
                desc: 'AI model predicting loan default risk with 94% accuracy for a digital bank.',
                image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['FinTech', 'ML', 'Risk'],
                link: '/work/fintech-risk'
            },
            {
                title: 'Ecommerce Recommendation',
                desc: 'Personalized product recommendation engine boosting AOV by 25%.',
                image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Ecommerce', 'AI', 'Growth'],
                link: '/work/shop-ai'
            },
            {
                title: 'Medical Imaging AI',
                desc: 'Assisting radiologists by pre-screening X-Rays for anomalies using Computer Vision.',
                image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Healthcare', 'Vision', 'Deep Learning'],
                link: '/work/med-vision'
            }
        ],
        faq: [
            { q: 'Do I need a lot of data?', a: 'Not necessarily. We can use pre-trained models and fine-tune them with your specific (even limited) dataset.' },
            { q: 'Is my data private?', a: 'Yes, we implement enterprise-grade data privacy measures and can deploy models on your private cloud.' },
            { q: 'How long does integration take?', a: 'Simple integrations can take 2-4 weeks, while complex custom model training may take 2-3 months.' }
        ]
    },
    'ai-agents': {
        title: 'AI Agents Development',
        subtitle: 'Autonomous agents that perform multi-step tasks and make decisions.',
        badge: 'Advanced AI',
        heroImage: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Auto', label: 'Execution' },
            { value: '24/7', label: 'Workforce' },
            { value: 'Multi', label: 'Step' },
            { value: 'Goal', label: 'Oriented' }
        ],
        features: [
            { icon: 'FaRobot', title: 'Autonomous Action', desc: 'Agents that define their own sub-tasks to achieve a high-level goal.' },
            { icon: 'FaGlobe', title: 'Web Browsing', desc: 'Agents that can search the live web to gather real-time information.' },
            { icon: 'FaTools', title: 'Tool Use', desc: 'Equipping agents with APIs (Calendar, Email, CRM) to perform actions.' },
            { icon: 'FaUserFriends', title: 'Multi-Agent Swarms', desc: 'Teams of specialized agents collaborating on complex projects.' }
        ],
        techStack: ['LangChain', 'AutoGPT', 'BabyAGI', 'Pinecone', 'Python'],
        process: [
            { step: '01', title: 'Goal Definition', desc: 'Defining clearly what the agent should achieve and its constraints.' },
            { step: '02', title: 'Toolsmithing', desc: 'Creating the custom tools and APIs the agent needs to use.' },
            { step: '03', title: 'Sandbox Test', desc: 'Running the agent in a controlled environment to verify behavior.' },
            { step: '04', title: 'Production', desc: 'Deploying with "human-in-the-loop" safeguards.' }
        ],
        benefits: [
            { title: 'Reduced Operations', desc: 'Replace entire manual workflows with autonomous digital workers.' },
            { title: 'Scalability', desc: 'Spin up 1,000 agents instantly to handle demand spikes.' },
            { title: 'Availability', desc: 'Agents don\'t sleep, take breaks, or get tired.' }
        ],
        industries: ['Customer Support', 'Sales Ops', 'Market Research', 'Logistics'],
        projects: [
            {
                title: 'Sales Outreach Agent',
                desc: 'Autonomous agent researching leads and drafting hyper-personalized outreach emails.',
                image: 'https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Sales', 'Automation', 'Agents'],
                link: '/work/sales-bot'
            },
            {
                title: 'Market Research Swarm',
                desc: 'Swarm of agents browsing the web to compile competitor analysis reports.',
                image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Research', 'Data', 'Multi-Agent'],
                link: '/work/market-research'
            },
            {
                title: 'Customer Support Bot',
                desc: 'Level 1 support agent handling refunds and order tracking autonomously.',
                image: 'https://images.pexels.com/photos/7709212/pexels-photo-7709212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Support', 'Chatbot', 'CS'],
                link: '/work/support-agent'
            }
        ],
        faq: [
            { q: 'What can AI agents do?', a: 'They can browse the web, use software tools, analyze data, and perform multi-step workflows autonomously.' },
            { q: 'How do you control them?', a: 'We implement "human-in-the-loop" safeguards to ensure agents operate within defined boundaries.' },
            { q: 'Can they replace employees?', a: 'They are designed to augment your workforce by handling repetitive tasks, not necessarily to replace humans entirely.' }
        ]
    },
    'nlp': {
        title: 'Natural Language Processing',
        subtitle: 'Machines that actually understand and generate human language.',
        badge: 'NLP',
        heroImage: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '99%', label: 'Accuracy' },
            { value: '50+', label: 'Languages' },
            { value: 'Real', label: 'Time' },
            { value: 'Context', label: 'Aware' }
        ],
        features: [
            { icon: 'FaCommentDots', title: 'Contextual Chatbots', desc: 'Assistants that remember context and handle complex queries.' },
            { icon: 'FaSearch', title: 'Sentiment Analysis', desc: 'Automatically gauge customer sentiment from thousands of reviews.' },
            { icon: 'FaDraftingCompass', title: 'Text Summarization', desc: 'Turn long reports into concise executive summaries instantly.' },
            { icon: 'FaGlobe', title: 'Translation', desc: 'Real-time neural machine translation for global apps.' }
        ],
        techStack: ['GPT-4', 'HuggingFace', 'Spacy', 'NLTK', 'Python'],
        process: [
            { step: '01', title: 'Corpus', desc: 'Gathering and cleaning the text data needed for training.' },
            { step: '02', title: 'Training', desc: 'Fine-tuning models on specific domain vocabulary.' },
            { step: '03', title: 'Integration', desc: 'Connecting the NLP engine to your chat or email systems.' },
            { step: '04', title: 'Eval', desc: 'Continuous testing against human benchmarks.' }
        ],
        benefits: [
            { title: 'Improved Support', desc: 'Resolve 80% of customer queries instantly without humans.' },
            { title: 'Global Reach', desc: 'Break language barriers effortlessly.' },
            { title: 'Deep Insights', desc: 'Unlock the value hidden in unstructured text data.' }
        ],
        industries: ['Customer Service', 'Legal', 'Healthcare', 'Media'],
        projects: [
            {
                title: 'Legal Contract Review',
                desc: 'NLP tool extracting key clauses and risks from legal contracts in seconds.',
                image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Legal', 'NLP', 'Automation'],
                link: '/work/legal-review'
            },
            {
                title: 'Customer Sentiment Tracker',
                desc: 'Real-time dashboard visualizing brand sentiment from social media mentions.',
                image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Social', 'Analytics', 'NLP'],
                link: '/work/sentiment-track'
            },
            {
                title: 'Multi-Language Chat',
                desc: 'Instant translation layer allowing support teams to chat in any language.',
                image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Translation', 'Global', 'Chat'],
                link: '/work/global-chat'
            }
        ],
        faq: [
            { q: 'Can it understand technical jargon?', a: 'Yes, we fine-tune models on your industry-specific documents to understand domain language.' },
            { q: 'Is it better than standard chatbots?', a: 'Much better. NLP allows for context-aware, natural conversations rather than just keyword matching.' },
            { q: 'What languages are supported?', a: 'Our models support over 50 languages, enabling real-time translation and multilingual support.' }
        ]
    },

    // --- DESIGN ---
    'ui-ux': {
        title: 'UI/UX & Product Design',
        subtitle: 'User-centric design that delights users and drives conversions.',
        badge: 'Design',
        heroImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'User', label: 'Centric' },
            { value: 'Pixel', label: 'Perfect' },
            { value: 'System', label: 'Based' },
            { value: 'Test', label: 'Driven' }
        ],
        features: [
            { icon: 'FaPenNib', title: 'Prototyping', desc: 'High-fidelity interactive prototypes that feel like the real app.' },
            { icon: 'FaSearch', title: 'User Research', desc: 'Deep interviews and testing to validate assumptions before building.' },
            { icon: 'FaPalette', title: 'Design Systems', desc: 'Comprehensive component libraries for consistent UI scaling.' },
            { icon: 'FaMobile', title: 'Responsive UI', desc: 'Designs that work flawlessly across all device sizes.' }
        ],
        techStack: ['Figma', 'Sketch', 'Adobe XD', 'Maze', 'Principle'],
        process: [
            { step: '01', title: 'Discover', desc: 'Workshops to understand user needs and business goals.' },
            { step: '02', title: 'Wireframe', desc: 'Low-fidelity layouts to structure information architecture.' },
            { step: '03', title: 'Visuals', desc: 'Applying brand identity and high-fidelity polish.' },
            { step: '04', title: 'Handoff', desc: 'Detailed specs and assets for the development team.' }
        ],
        benefits: [
            { title: 'Higher Conversion', desc: 'Good UX removes friction, leading to more sales and signups.' },
            { title: 'Lower Dev Costs', desc: 'Fixing usability issues in design is 10x cheaper than in code.' },
            { title: 'Brand Loyalty', desc: 'Users return to products that are a joy to use.' }
        ],
        industries: ['All Industries'],
        projects: [
            {
                title: 'FinTech App Redesign',
                desc: 'Complete UX overhaul for a mobile banking app, increasing engagement by 40%.',
                image: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['FinTech', 'UX', 'Mobile'],
                link: '/work/banking-ux'
            },
            {
                title: 'SaaS Dashboard',
                desc: 'Complex data visualization dashboard made simple and intuitive for users.',
                image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['SaaS', 'Dashboard', 'UI'],
                link: '/work/saas-dash'
            },
            {
                title: 'Travel Booking Flow',
                desc: 'Optimized booking conversion funnel for a major travel agency.',
                image: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Travel', 'CRO', 'UX Research'],
                link: '/work/travel-ux'
            }
        ],
        faq: [
            { q: 'What is your design process?', a: 'We follow the Double Diamond process: Discover, Define, Develop, and Deliver.' },
            { q: 'Do you do user testing?', a: 'Yes, we conduct usability testing sessions to validate decisions with real users.' },
            { q: 'Do you provide the design files?', a: 'Yes, you get full access to the Figma source files, including the design system and assets.' }
        ]
    },
    'branding': {
        title: 'Branding & Visual Identity',
        subtitle: 'Crafting unforgettable brand experiences that stand the test of time.',
        badge: 'Creative',
        heroImage: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Unique', label: 'Identity' },
            { value: 'Brand', label: 'Guidelines' },
            { value: 'Vector', label: 'Assets' },
            { value: 'Print', label: 'Ready' }
        ],
        features: [
            { icon: 'FaPalette', title: 'Logo Design', desc: 'Timeless, memorable marks that encapsulate your values.' },
            { icon: 'FaDraftingCompass', title: 'Brand Strategy', desc: 'Defining your voice, tone, and market positioning.' },
            { icon: 'FaImage', title: 'Visual Assets', desc: 'Business cards, letterheads, and social media kits.' },
            { icon: 'FaColumns', title: 'Guidelines', desc: 'A rulebook ensuring your brand stays consistent everywhere.' }
        ],
        techStack: ['Illustrator', 'Photoshop', 'InDesign'],
        process: [
            { step: '01', title: 'Discovery', desc: 'Analysis of competitors and target demographics.' },
            { step: '02', title: 'Concept', desc: 'Sketching and exploring multiple creative directions.' },
            { step: '03', title: 'Refine', desc: 'Polishing the chosen direction into a final system.' },
            { step: '04', title: 'Deliver', desc: 'Providing all file formats and usage manuals.' }
        ],
        benefits: [
            { title: 'Recognition', desc: 'Stand out in a crowded market with a distinct look.' },
            { title: 'Trust', desc: 'Professional branding signals quality and reliability.' },
            { title: 'Consistency', desc: 'Ensure your team always uses the right colors and fonts.' }
        ],
        industries: ['Startups', 'Consumer Goods', 'Corporate'],
        projects: [
            {
                title: 'Sustainable Coffee Brand',
                desc: 'Complete visual identity redesign for a fair-trade coffee roaster.',
                image: 'https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Branding', 'Packaging', 'Retail'],
                link: '/work/coffee-brand'
            },
            {
                title: 'Tech Unicorn Rebrand',
                desc: 'Modernizing the logo and brand guidelines for a billion-dollar SaaS company.',
                image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['SaaS', 'Rebrand', 'Strategy'],
                link: '/work/unicorn-rebrand'
            },
            {
                title: 'Luxury Hotel Identity',
                desc: 'Elegant typographic system and color palette for a boutique hotel chain.',
                image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Hospitality', 'Luxury', 'Print'],
                link: '/work/hotel-brand'
            }
        ],
        faq: [
            { q: 'Do I get the source files?', a: 'Yes, you receive full ownership of all source files (AI, PSD, EPS) upon completion.' },
            { q: 'How many revisions?', a: 'Our standard packages include 3 rounds of revisions to ensure you are perfectly happy.' },
            { q: 'How long does the branding process take?', a: 'Typically 2-4 weeks, depending on the complexity of the requirements and the speed of feedback.' }
        ]
    },
    'graphic-design': {
        title: 'Graphic Design',
        subtitle: 'Marketing materials that communicate your message clearly and beautifully.',
        badge: 'Visuals',
        heroImage: 'https://images.pexels.com/photos/1543666/pexels-photo-1543666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'High', label: 'Quality' },
            { value: 'Fast', label: 'Turnaround' },
            { value: 'Print', label: 'Digital' },
            { value: 'On', label: 'Brand' }
        ],
        features: [
            { icon: 'FaImage', title: 'Social Media', desc: 'Engagement-driving creatives for Instagram, LinkedIn and Twitter.' },
            { icon: 'FaNewspaper', title: 'Print Design', desc: 'Brochures, flyers, packaging, and large format banners.' },
            { icon: 'FaChartLine', title: 'Infographics', desc: 'Turning complex data into easy-to-understand visuals.' },
            { icon: 'FaLayerGroup', title: 'Slide Decks', desc: 'Pitch decks and presentation designs that win clients.' }
        ],
        techStack: ['Adobe Suite', 'Canva', 'Figma'],
        process: [
            { step: '01', title: 'Brief', desc: 'Understanding the goal and specs of the deliverable.' },
            { step: '02', title: 'Draft', desc: 'Creating initial concepts for review.' },
            { step: '03', title: 'Polish', desc: 'Refining based on feedback.' },
            { step: '04', title: 'Output', desc: 'Delivering print-ready or web-optimized files.' }
        ],
        benefits: [
            { title: 'Consistency', desc: 'Maintain a cohesive look across all marketing channels.' },
            { title: 'Communication', desc: 'Visuals process 60,000x faster than text in the brain.' },
            { title: 'Sales Enablement', desc: 'Give your sales team the collateral they need to close deals.' }
        ],
        industries: ['Marketing', 'Events', 'Food & Bev', 'Corporate'],
        projects: [
            {
                title: 'Event Conference Assets',
                desc: 'Designed booths, banners, and digital displays for a major tech conference.',
                image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Print', 'Events', 'Large Format'],
                link: '/work/tech-conf'
            },
            {
                title: 'Social Media Kit',
                desc: '300+ template assets for an influencer agency to speed up content production.',
                image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Social', 'Templates', 'Canva'],
                link: '/work/social-kit'
            },
            {
                title: 'Annual Report Design',
                desc: 'Transforming dry financial data into an engaging 80-page visual report.',
                image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Print', 'Corporate', 'Data Viz'],
                link: '/work/annual-report'
            }
        ],
        faq: [
            { q: 'Can you handle print design?', a: 'Yes, we design for both digital and physical media including brochures, business cards, and banners.' },
            { q: 'What is the turnaround time?', a: 'Simple assets can be delivered in 24-48 hours.' },
            { q: 'Do you provide editable files?', a: 'Yes, we can provide the source files (Canva, AI, PSD) so your team can make future edits if needed.' }
        ]
    },

    // --- MOBILE ---
    'native-app': {
        title: 'Native Mobile App Dev',
        subtitle: 'High-performance iOS and Android applications for the ultimate user experience.',
        badge: 'Mobile',
        heroImage: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Native', label: 'Speed' },
            { value: '100%', label: 'API Access' },
            { value: 'Fluid', label: 'Animations' },
            { value: 'Store', label: 'Ready' }
        ],
        features: [
            { icon: 'FaMobile', title: 'Performance', desc: 'Uncompromised speed and responsiveness using native compiled code.' },
            { icon: 'FaTools', title: 'Device Access', desc: 'Full access to camera, Bluetooth, GPS, ARKit and sensors.' },
            { icon: 'FaLayerGroup', title: 'Platform UI', desc: 'Respecting the specific design language of iOS (Cupertino) and Android (Material).' },
            { icon: 'FaLock', title: 'Security', desc: 'Highest level of security and encryption available on mobile.' }
        ],
        techStack: ['Swift', 'Kotlin', 'SwiftUI', 'Jetpack Compose', 'Realm'],
        process: [
            { step: '01', title: 'Blueprint', desc: 'Wireframing screens and defining the navigation flows.' },
            { step: '02', title: 'Code', desc: 'Developing the iOS and Android codebases in parallel.' },
            { step: '03', title: 'Test', desc: 'Rigorous beta testing on real devices via TestFlight.' },
            { step: '04', title: 'Submit', desc: 'Managing the App Store and Google Play review process.' }
        ],
        benefits: [
            { title: 'Best UX', desc: 'Nothing beats the feel of a truly native application.' },
            { title: 'Feature Set', desc: 'Do things web apps simply cannot do (background tasks, AR, etc).' },
            { title: 'Monetization', desc: 'Easier In-App Purchases and subscription management.' }
        ],
        industries: ['Consumer', 'Tech', 'Health', 'Transport'],
        projects: [
            {
                title: 'Fitness Tracker App',
                desc: 'Native iOS app with HealthKit integration and real-time workout tracking.',
                image: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Health', 'iOS', 'Swift'],
                link: '/work/fitness-ios'
            },
            {
                title: 'Ride Sharing App',
                desc: 'Native Android driver app with GPS navigation and ride dispatching.',
                image: 'https://images.pexels.com/photos/593339/pexels-photo-593339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Transport', 'Android', 'Maps'],
                link: '/work/driver-app'
            },
            {
                title: 'Social Media Camera',
                desc: 'Photo sharing app leveraging native camera APIs for AR filters.',
                image: 'https://images.pexels.com/photos/33696/boy-looking-at-smartphone.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Social', 'Camera', 'AR'],
                link: '/work/cam-app'
            }
        ],
        faq: [
            { q: 'iOS or Android first?', a: 'We recommend starting with both simultaneousy if budget allows, otherwise pick based on your target demographic.' },
            { q: 'Do you handle App Store approval?', a: 'Yes, we manage the entire submission and review process with Apple and Google.' },
            { q: 'Do you provide post-launch maintenance?', a: 'Yes, we offer ongoing maintenance packages to ensure your app stays compatible with new iOS/Android OS updates.' }
        ]
    },
    'hybrid-app': {
        title: 'Hybrid Mobile App Dev',
        subtitle: 'Cross-platform apps from a single codebase ensuring consistent behavior.',
        badge: 'Cross-Platform',
        heroImage: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '1', label: 'Codebase' },
            { value: '2x', label: 'Faster' },
            { value: 'Cost', label: 'Efficient' },
            { value: 'Native', label: 'Feel' }
        ],
        features: [
            { icon: 'FaLayerGroup', title: 'Multi-OS', desc: 'Deploy to both iOS and Android from a single source of truth.' },
            { icon: 'FaRocket', title: 'Hot Reload', desc: 'Rapid development cycles allowing for faster iteration.' },
            { icon: 'FaCode', title: 'Shared Logic', desc: 'Share business logic between your web app and mobile app.' },
            { icon: 'FaMobile', title: 'Native Modules', desc: 'Bridge to native code when specific hardware access is needed.' }
        ],
        techStack: ['React Native', 'Flutter', 'Ionic', 'Expo', 'Capacitor'],
        process: [
            { step: '01', title: 'Setup', desc: 'Configuring the cross-platform environment.' },
            { step: '02', title: 'Dev', desc: 'Writing UI and Logic in TypeScript or Dart.' },
            { step: '03', title: 'QA', desc: 'Testing functionality across both platforms simultaneously.' },
            { step: '04', title: 'Deploy', desc: 'Building binaries for distribution on stores.' }
        ],
        benefits: [
            { title: 'Lower Budget', desc: 'Develop for two platforms for the price of one (almost).' },
            { title: 'Faster to Market', desc: 'Launch on both stores simultaneously.' },
            { title: 'Easy Maintenance', desc: 'Fix a bug once, and it\'s fixed everywhere.' }
        ],
        industries: ['Startups', 'SaaS Extension', 'Internal Tools'],
        projects: [
            {
                title: 'Field Service App',
                desc: 'Cross-platform app for field technicians to manage work orders offline.',
                image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Field Ops', 'Offline', 'Flutter'],
                link: '/work/field-ops'
            },
            {
                title: 'Event Companion',
                desc: 'Conference guide app available on both iOS and Android stores.',
                image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Events', 'React Native', 'Cross-Platform'],
                link: '/work/conf-app'
            },
            {
                title: 'Internal Inventory',
                desc: 'Barcode scanning inventory app for warehouse staff.',
                image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Logistics', 'Internal', 'Tools'],
                link: '/work/inventory-app'
            }
        ],
        faq: [
            { q: 'Is performance worse than native?', a: 'With modern frameworks like Flutter, the difference is negligible for most business applications.' },
            { q: 'Can it access camera/GPS?', a: 'Yes, hybrid apps have full access to native device features.' },
            { q: 'Can I migrate to native later?', a: 'Yes, though it requires a rewrite. However, most businesses find hybrid apps scale perfectly well to millions of users.' }
        ]
    },

    // --- MARKETING ---
    'inbound-marketing': {
        title: 'Inbound Marketing',
        subtitle: 'Attract, engage, and delight customers with valuable content.',
        badge: 'Growth',
        heroImage: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Leads', label: 'Generation' },
            { value: 'High', label: 'Intent' },
            { value: 'Long', label: 'Term' },
            { value: 'Brand', label: 'Athority' }
        ],
        features: [
            { icon: 'FaBullhorn', title: 'Content Strategy', desc: 'Blogs, whitepapers, and guides that address customer pain points.' },
            { icon: 'FaTree', title: 'Lead Nurturing', desc: 'Automated email sequences to guide prospects down the funnel.' },
            { icon: 'FaSearch', title: 'SEO Align', desc: 'Content built around search intent to pull in organic traffic.' },
            { icon: 'FaChartLine', title: 'Analytics', desc: 'Tracking every touchpoint to understand what converts.' }
        ],
        techStack: ['HubSpot', 'Marketo', 'Mailchimp', 'Semrush'],
        process: [
            { step: '01', title: 'Persona', desc: 'Defining your ideal customer profiles.' },
            { step: '02', title: 'Plan', desc: 'Creating an editorial calendar.' },
            { step: '03', title: 'Create', desc: 'Producing high-quality educational content.' },
            { step: '04', title: 'Distribute', desc: 'Sharing across social, email, and organic channels.' }
        ],
        benefits: [
            { title: 'Trust', desc: 'Become the thought leader in your industry.' },
            { title: 'Cost Per Lead', desc: 'Inbound leads cost 61% less than outbound leads on average.' },
            { title: 'Compounding', desc: 'Content assets continue to drive traffic years after publishing.' }
        ],
        industries: ['B2B', 'SaaS', 'Professional Services'],
        projects: [
            {
                title: 'B2B SaaS Growth',
                desc: 'Content strategy resulting in 300% increase in organic leads for a CRM startup.',
                image: 'https://images.pexels.com/photos/7367/startup-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['SaaS', 'Content', 'Lead Gen'],
                link: '/work/saas-growth'
            },
            {
                title: 'Whitepaper Campaign',
                desc: 'Technical whitepaper series that generated $2M in pipeline for a cybersecurity firm.',
                image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Cybersec', 'Whitepaper', 'B2B'],
                link: '/work/security-paper'
            },
            {
                title: 'Email Nurture Flow',
                desc: 'Automated 12-step email sequence nurturing prospects into sales meetings.',
                image: 'https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Email', 'Automation', 'HubSpot'],
                link: '/work/email-flow'
            }
        ],
        faq: [
            { q: 'How long to see results?', a: 'Inbound marketing is a long-term play. typically seeing significant traction in 6-9 months.' },
            { q: 'Do you write the content?', a: 'Yes, our team of copywriters creates SEO-optimized, industry-relevant content for you.' },
            { q: 'What metrics do you track?', a: 'We focus on revenue-generating metrics like organic traffic growth, lead conversion rates, and customer acquisition cost.' }
        ]
    },
    'seo': {
        title: 'SEO Services',
        subtitle: 'Rank higher and drive organic traffic that converts.',
        badge: 'Traffic',
        heroImage: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '#1', label: 'Rankings' },
            { value: 'Organic', label: 'Growth' },
            { value: 'White', label: 'Hat' },
            { value: 'Tech', label: 'Optimized' }
        ],
        features: [
            { icon: 'FaSearch', title: 'Keyword Research', desc: 'Finding the high-intent terms your customers are searching for.' },
            { icon: 'FaCode', title: 'Technical SEO', desc: 'Optimizing site speed, mobile usability, and crawlability.' },
            { icon: 'FaLink', title: 'Link Building', desc: 'Acquiring high-authority backlinks to boost domain trust.' },
            { icon: 'FaMapMarkerAlt', title: 'Local SEO', desc: 'Dominating local map packs for brick-and-mortar visibility.' }
        ],
        techStack: ['Ahrefs', 'Semrush', 'GSC', 'Screaming Frog', 'Moz'],
        process: [
            { step: '01', title: 'Audit', desc: 'Comprehensive technical and content audit of your site.' },
            { step: '02', title: 'Fix', desc: 'Resolving technical errors and on-page issues.' },
            { step: '03', title: 'Create', desc: 'Publishing optimized content to target keywords.' },
            { step: '04', title: 'Outreach', desc: 'Promoting content to earn backlinks.' }
        ],
        benefits: [
            { title: 'Free Traffic', desc: 'Reduce reliance on paid ads by earning organic visitors.' },
            { title: 'Credibility', desc: 'Users trust organic results more than paid advertisements.' },
            { title: 'Sustainable', desc: 'A well-ranked page can drive business for years.' }
        ],
        industries: ['All Industries'],
        projects: [
            {
                title: 'Ecommerce SEO Fix',
                desc: 'Recovered a fashion retailer from a Google penalty, restoring $50k/mo revenue.',
                image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Ecommerce', 'Recovery', 'Technical'],
                link: '/work/seo-recovery'
            },
            {
                title: 'Local SEO Dominance',
                desc: 'Helped a dental franchise rank #1 in maps across 15 different cities.',
                image: 'https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Local', 'Medical', 'Maps'],
                link: '/work/dental-seo'
            },
            {
                title: 'Content Cluster Strategy',
                desc: 'Implemented topic clusters for a travel blog, doubling traffic in 6 months.',
                image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Travel', 'Content', 'Strategy'],
                link: '/work/travel-seo'
            }
        ],
        faq: [
            { q: 'Is SEO a one-time thing?', a: 'No, SEO requires ongoing optimization to maintain rankings against competitors and algo updates.' },
            { q: 'Do you guarantee #1 ranking?', a: 'No ethical SEO agency guarantees #1, but we have a track record of significant ranking improvements.' },
            { q: 'Do you handle local SEO?', a: 'Yes, we optimize your Google Business Profile and local citations to capture high-intent traffic in your specific geographic area.' }
        ]
    },
    'social-media': {
        title: 'Social Media & Ads',
        subtitle: 'Amplify your brand on social platforms with viral content and targeted ads.',
        badge: 'Social',
        heroImage: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Reach', label: 'Viral' },
            { value: 'High', label: 'ROAS' },
            { value: 'Cmnty', label: 'Building' },
            { value: 'Brand', label: 'Love' }
        ],
        features: [
            { icon: 'FaHashtag', title: 'Ad Campaigns', desc: 'Precision-targeted paid campaigns on Meta, LinkedIn, and TikTok.' },
            { icon: 'FaUserFriends', title: 'Community Mgmt', desc: 'Engaging with your audience to build a loyal following.' },
            { icon: 'FaImage', title: 'Content Creation', desc: 'Thumb-stopping visuals and reels that grab attention.' },
            { icon: 'FaChartLine', title: 'Reporting', desc: 'Detailed analytics on engagement, reach, and conversions.' }
        ],
        techStack: ['Meta Ads', 'LinkedIn Ads', 'TikTok', 'Buffer', 'Hootsuite'],
        process: [
            { step: '01', title: 'Strategy', desc: 'Defining the mix of platforms and content types.' },
            { step: '02', title: 'Creative', desc: 'Producing the ad creatives and copy.' },
            { step: '03', title: 'Launch', desc: 'Setting up the campaigns and targeting rules.' },
            { step: '04', title: 'Optimize', desc: 'A/B testing and budget reallocation for max ROAS.' }
        ],
        benefits: [
            { title: 'Instant Traffic', desc: 'Turn on the tap and get visitors immediately.' },
            { title: 'Brand Awareness', desc: 'Stay top-of-mind with your target audience.' },
            { title: 'Retargeting', desc: 'Bring back visitors who didn\'t convert the first time.' }
        ],
        industries: ['Consumer', 'E-commerce', 'Events', 'B2B'],
        projects: [
            {
                title: 'Viral TikTok Campaign',
                desc: 'Product launch campaign reaching 5M+ views organically on TikTok.',
                image: 'https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['TikTok', 'Viral', 'B2C'],
                link: '/work/tiktok-viral'
            },
            {
                title: 'LinkedIn Lead Gen',
                desc: 'Precision targeted ads generating high-ticket executive leads for a consultancy.',
                image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['LinkedIn', 'B2B', 'Ads'],
                link: '/work/linkedin-ads'
            },
            {
                title: 'Instagram Aesthetic',
                desc: 'Complete feed curation and content production for a beauty brand.',
                image: 'https://images.pexels.com/photos/3329292/pexels-photo-3329292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Beauty', 'Instagram', 'Content'],
                link: '/work/beauty-social'
            }
        ],
        faq: [
            { q: 'Which platforms are best?', a: 'It depends on your audience. B2B usually thrives on LinkedIn, while B2C does well on Instagram/TikTok.' },
            { q: 'What is the minimum budget?', a: 'We recommend a minimum ad spend of $1k/month to gather meaningful data.' },
            { q: 'Do you create the graphics?', a: 'Yes, our creative team designs all ad visuals, writes copy, and produces video assets for your campaigns.' }
        ]
    },

    // --- ZERO TO ONE ---
    'mvp-development': {
        title: 'MVP Development',
        subtitle: 'Go from idea to market-ready product in record time.',
        badge: 'Startups',
        heroImage: 'https://images.pexels.com/photos/7437489/pexels-photo-7437489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '4-8', label: 'Weeks' },
            { value: 'Lean', label: 'Budget' },
            { value: 'Market', label: 'Ready' },
            { value: 'User', label: 'Focused' }
        ],
        features: [
            { icon: 'FaRocket', title: 'Rapid Build', desc: 'Focusing strictly on core features to launch fast.' },
            { icon: 'FaChartLine', title: 'Scalable Arch', desc: 'Building on a solid foundation that can grow with your user base.' },
            { icon: 'FaUserFriends', title: 'User Feedback', desc: 'Integrating analytics to gather user insights from day one.' },
            { icon: 'FaLightbulb', title: 'Pivot Ready', desc: 'Flexible code structure allowing for quick changes based on market response.' }
        ],
        techStack: ['React', 'Node.js', 'Firebase', 'Supabase', 'Vercel'],
        process: [
            { step: '01', title: 'Scope', desc: 'Ruthlessly prioritizing features for the V1 launch.' },
            { step: '02', title: 'Build', desc: 'Intense development sprints to ship the core product.' },
            { step: '03', title: 'Launch', desc: 'Soft launch to early adopters.' },
            { step: '04', title: 'Iterate', desc: 'Analysing usage data to plan V2 features.' }
        ],
        benefits: [
            { title: 'Validation', desc: 'Test your hypothesis with real users before spending a fortune.' },
            { title: 'Funding', desc: 'It is much easier to raise capital with a working product than a slide deck.' },
            { title: 'Speed', desc: 'Be the first to market and capture the audience.' }
        ],
        industries: ['Startups', 'SaaS', 'Consumer Apps'],
        projects: [
            {
                title: 'Food Delivery MVP',
                desc: 'Built a functioning food delivery app for a niche market in just 6 weeks.',
                image: 'https://images.pexels.com/photos/4605021/pexels-photo-4605021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Delivery', 'React Native', 'MVP'],
                link: '/work/food-mvp'
            },
            {
                title: 'PropTech Proof of Concept',
                desc: 'Validated a real estate investment platform key assumption with a simple web app.',
                image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['PropTech', 'Web', 'Validation'],
                link: '/work/proptech-mvp'
            },
            {
                title: 'Social Audio MVP',
                desc: 'Clone of Clubhouse for a specific professional community, launched rapidly.',
                image: 'https://images.pexels.com/photos/6953835/pexels-photo-6953835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Social', 'Audio', 'Speed'],
                link: '/work/audio-mvp'
            }
        ],
        faq: [
            { q: 'How long does an MVP take?', a: 'Typically 4 to 8 weeks depending on complexity.' },
            { q: 'Is it throwaway code?', a: 'No, we build MVPs on scalable architectures (like MERN stack) that can evolve into the full product.' },
            { q: 'What happens after the MVP?', a: 'We analyze user feedback to prioritize the backlog, then transition into continuous agile development for V2.' }
        ]
    },
    'prototyping': {
        title: 'Rapid Prototyping',
        subtitle: 'Validate concepts and test usability before writing a single line of code.',
        badge: 'Product Design',
        heroImage: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: '10x', label: 'Faster' },
            { value: 'Zero', label: 'Code' },
            { value: 'User', label: 'Tested' },
            { value: 'High', label: 'Fidelity' }
        ],
        features: [
            { icon: 'FaDraftingCompass', title: 'Clickable Prototypes', desc: 'Fully interactive simulations that look and feel like the final product.' },
            { icon: 'FaUserFriends', title: 'User Testing', desc: 'Put the prototype in front of real users to gather feedback early.' },
            { icon: 'FaPalette', title: 'High Fidelity', desc: 'Pixel-perfect designs that leave nothing to the imagination.' },
            { icon: 'FaRocket', title: 'Developer Handoff', desc: 'Specs and assets ready for engineering to start building immediately.' }
        ],
        techStack: ['Figma', 'Protopie', 'Adobe XD', 'Principle', 'Maze'],
        process: [
            { step: '01', title: 'Flow', desc: 'Mapping out user journeys and information architecture.' },
            { step: '02', title: 'Wireframe', desc: 'Low-fidelity layout of screens and navigation.' },
            { step: '03', title: 'Interact', desc: 'Adding click targets, transitions, and animations.' },
            { step: '04', title: 'Validate', desc: 'Testing with stakeholders and users for approval.' }
        ],
        benefits: [
            { title: 'Save Money', desc: 'Fixing a usability issue in a prototype costs $1. In code, it costs $100.' },
            { title: 'Clarity', desc: 'Align stakeholders with a tangible vision, not just abstract requirements.' },
            { title: 'Speed', desc: 'Move to development with 100% confidence in what needs to be built.' }
        ],
        industries: ['Startups', 'Enterprise', 'Product Teams'],
        projects: [
            {
                title: 'FinTech App Prototype',
                desc: 'High-fidelity clickable prototype used to raise a $1.5M Seed round.',
                image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['FinTech', 'Figma', 'Fundraising'],
                link: '/work/fintech-proto'
            },
            {
                title: 'Dashboard Usability Test',
                desc: 'Prototyped 3 different navigation concepts to test with users before coding.',
                image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['SaaS', 'Testing', 'UX'],
                link: '/work/dash-test'
            },
            {
                title: 'Smart Home Interface',
                desc: 'Interactive simulation of a smart home control panel for a touch screen device.',
                image: 'https://images.pexels.com/photos/4255474/pexels-photo-4255474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['IoT', 'Interface', 'Interaction'],
                link: '/work/smarthome-proto'
            }
        ],
        faq: [
            { q: 'Why prototype first?', a: 'Prototyping mitigates risk by validating your idea and UX before expensive development begins.' },
            { q: 'Is it clickable?', a: 'Yes, we build high-fidelity interactive prototypes that you can install on your phone and test.' },
            { q: 'Can we use the prototype for fundraising?', a: 'Absolutely. A high-fidelity clickable prototype is significantly more convincing to investors than a static pitch deck.' }
        ]
    },
    // Default Fallback to avoid crashes
    'default': {
        title: 'Premium Technology Services',
        subtitle: 'Expert engineering solutions tailored to elevate your business in the digital age.',
        badge: 'Fraylon Services',
        heroImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stats: [
            { value: 'Global', label: 'Delivery Model' },
            { value: 'Expert', label: 'Engineering Team' },
            { value: '24/7', label: 'Support Available' },
            { value: 'Agile', label: 'Process' }
        ],
        features: [
            { icon: 'FaCheckCircle', title: 'Industry Best Practices', desc: 'We follow rigorous standards to ensure quality and maintainability.' },
            { icon: 'FaRocket', title: 'Rapid Delivery', desc: 'Optimized workflows to get your product to market faster.' },
            { icon: 'FaTools', title: 'Scalable Solutions', desc: 'Architecture designed to grow with your business needs.' },
            { icon: 'FaCode', title: 'Modern Tech Stack', desc: 'Leveraging the latest and most reliable technologies.' }
        ],
        techStack: ['React', 'Node.js', 'Python', 'Cloud', 'AI/ML'],
        process: [
            { step: '01', title: 'Consultation', desc: 'Understanding your unique needs and goals.' },
            { step: '02', title: 'Strategy', desc: 'Developing a roadmap for success.' },
            { step: '03', title: 'Execution', desc: 'Building and implementing the solution.' },
            { step: '04', title: 'Support', desc: 'Ongoing maintenance and optimization.' }
        ],
        benefits: [
            { title: 'Expert Team', desc: 'Work with senior engineers who have delivered redundant solutions.' },
            { title: 'Transparent Process', desc: 'Full visibility into progress with regular sprint demos and updates.' },
            { title: 'Future Proof', desc: 'Solutions built with scalability and maintenance in mind.' }
        ],
        industries: ['Technology', 'Finance', 'Retail', 'Healthcare', 'Energy'],
        projects: [
            {
                title: 'Global Tech Solution',
                desc: 'A scalable enterprise platform serving millions of users worldwide.',
                image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Enterprise', 'Cloud', 'Scale'],
                link: '/work/global-tech'
            },
            {
                title: 'Finance Dashboard',
                desc: 'Real-time analytics and reporting tool for a major financial institution.',
                image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Finance', 'Analytics', 'React'],
                link: '/work/finance-dash'
            },
            {
                title: 'Healthcare Portal',
                desc: 'Secure patient management system connecting doctors and patients.',
                image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                tags: ['Healthcare', 'Security', 'Portal'],
                link: '/work/healthcare-portal'
            }
        ],
        faq: [
            { q: 'How do run projects?', a: 'We follow Agile methodologies with 2-week sprints to ensure flexibility and rapid delivery.' },
            { q: 'What is your pricing model?', a: 'We offer both time-and-materials and fixed-price contracts depending on project clarity.' },
            { q: 'Where are you located?', a: 'We are a global team with headquarters in [City], serving clients worldwide.' }
        ]
    },
};

// Precomputed lookup map for project details by work ID (the segment after `/work/` in the link)
export const projectLookupByWorkId: Record<string, { project: Project; serviceTitle: string }> = (() => {
    const map: Record<string, { project: Project; serviceTitle: string }> = {};

    Object.values(servicesData).forEach((service) => {
        if (!service.projects) return;

        service.projects.forEach((project) => {
            const match = project.link.match(/^\/work\/(.+)$/);
            if (!match) return;

            const workId = match[1];
            // Only first occurrence is kept; later duplicates are ignored intentionally
            if (!map[workId]) {
                map[workId] = { project, serviceTitle: service.title };
            }
        });
    });

    return map;
})();
