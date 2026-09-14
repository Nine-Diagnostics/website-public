// All news articles with full content, reverse chronological order
// Content sourced from ninediagnostics.xyz

const articles = [
  {
    id: "gray-foundation-2026",
    date: "June 29, 2026",
    title: "Nine Diagnostics Co-Founder Named Gray Foundation Grant Recipient",
    body: `Daniel A. Heller, PhD, Co-Founder and Chief Science Officer of Nine Diagnostics and Head of the Cancer Nanomedicine Laboratory at Memorial Sloan Kettering Cancer Center, has been named one of 16 grant recipients selected by The Gray Foundation as part of its Team Science program.

The Gray Foundation announced a three-year, $35 million investment to advance innovative approaches to the prevention, early detection, and interception of BRCA-associated cancers. Recipients were selected from more than 85 applications through an extensive evaluation led by the Foundation's Chief Science Advisor. This latest funding brings total BRCA-related philanthropic support from Mindy and Jon Gray to more than $235 million.

Dr. Heller's research focuses on developing nanosensor technologies that detect disease at the earliest stages using blood-based molecular signals and artificial intelligence. This work forms the scientific foundation underlying Nine Diagnostics' multi-omic platform.

The Gray Foundation's Team Science program prioritizes collaborative, multi-disciplinary research teams working on the most urgent questions in BRCA-related cancer biology. Dr. Heller's selection reflects continued external validation of nanosensor-based approaches to cancer early detection.`,
  },
  {
    id: "damon-runyon-invest-2026",
    date: "June 25, 2026",
    title: "Nine Diagnostics Joins Damon Runyon Cancer Research Foundation InVEST Program",
    body: `Nine Diagnostics has been selected for the Damon Runyon Cancer Research Foundation Innovative Ventures in Early-Stage Technologies (InVEST) program, which provides direct seed investment to early-stage companies founded by Damon Runyon alumni scientists. Nine Diagnostics was approved for participation in June 2026.

The InVEST program was established to advance Damon Runyon's mission of accelerating breakthroughs in cancer treatment, diagnosis, and prevention by backing companies founded by its scientists at the fundraising stage, when support is most critical. The program provides a $50,000 investment structured as a Simple Agreement for Future Equity (SAFE) to eligible companies actively raising seed or Series A rounds.

Daniel A. Heller, PhD, co-founder and CSO of Nine Diagnostics and Head of the Cancer Nanomedicine Lab at Memorial Sloan Kettering Cancer Center, completed a Damon Runyon Cancer Research Foundation Postdoctoral Fellowship at the David H. Koch Institute for Integrative Cancer Research at MIT in 2012. As a Damon Runyon alumnus and scientific co-founder of Nine Diagnostics, Dr. Heller established the company's eligibility for InVEST.

Nine Diagnostics' AI-enabled nanosensor platform is built on published peer-reviewed validation. In Nature Nanotechnology (Goerzen et al., 2026), the platform demonstrated 98% accuracy in brain tumor detection and 71% accuracy in tumor type identification across 739 plasma samples. In Nature Biomedical Engineering (Kim et al., 2022), the platform demonstrated 87% sensitivity at 98% specificity for high-grade serous ovarian cancer detection across 269 serum samples.`,
  },
  {
    id: "drive-graduates-2026",
    date: "May 13, 2026",
    title: "Nine Diagnostics Graduates from DRIVE Accelerator with SCbio and MassBio",
    body: `Nine Diagnostics has completed the Spring 2026 cohort of the Drive Accelerator, presenting its platform at the program's Demo Day on May 13, 2026, in Charleston, South Carolina. Drive is run by SCbio in partnership with MassBio, and Nine Diagnostics' participation was part of the Biomarkers and Diagnostics track.

Demo Day brought together life sciences investors and industry experts to hear pitches from the cohort's companies. The program included a panel discussion on positioning early-stage companies for investment and strategic partnerships, featuring Holly Soares, global head of neuroscience and rare disease biomarkers at Roche, and Matt Clancey, director of new ventures and strategic alliances at Labcorp.

Over the eight weeks, Nine Diagnostics participated in curriculum modules led by industry experts, with track partners including Labcorp, Eli Lilly, K&L Gates, Maynard Nexsen, The Matchstick Group, and VentureSouth, alongside a dedicated mentor advisory board and structured introductions across the life sciences ecosystem.`,
  },
  {
    id: "pitt-hexai-podcast-2026",
    date: "May 14, 2026",
    title: "Freddy Nguyen Featured on Pitt HexAI Podcast for Precision Medicine Innovation",
    body: `Nine Diagnostics CEO and Co-Founder Freddy T. Nguyen, MD, PhD, appeared on Episode 40 of the Pitt HexAI Podcast to discuss AI-enabled cancer diagnostics and the entrepreneurship pathway behind Nine Diagnostics.`,
  },
  {
    id: "from-models-to-medicine-2026",
    date: "May 13, 2026",
    title: "Freddy Nguyen Featured on From Models to Medicine for Diagnostic AI Equity",
    body: `Nine Diagnostics CEO and Co-Founder Freddy T. Nguyen, MD, PhD, joined KAMI Think Tank's From Models to Medicine podcast for Episode 8, "The Equity Gap in Diagnostic AI," a candid discussion on how diagnostic innovation must address equity to achieve clinical impact.`,
  },
  {
    id: "drive-joins-2026",
    date: "March 31, 2026",
    title: "Nine Diagnostics Joins DRIVE Accelerator with SCbio and MassBio",
    body: `Nine Diagnostics is participating in the Spring 2026 DRIVE Accelerator Biomarkers and Diagnostics track, a national program run by SCbio in partnership with MassBio supporting early-stage companies advancing next-generation diagnostic technologies. The program provides expert mentorship, curriculum, and access to strategic partners, including Eli Lilly and LabCorp, focused on accelerating clinical translation. Participation advances Nine Diagnostics' positioning within the precision medicine ecosystem and builds pathways toward commercialization.`,
  },
  {
    id: "biotools-2026",
    date: "March 25, 2026",
    title: "Nine Diagnostics Pitches at BioTools Innovator East Coast Road Tour",
    body: `Nine Diagnostics participated in the BioTools Innovator East Coast Road Tour pitch event, a competitive selection process run by BioTools Innovator, the first accelerator focused exclusively on life science tools and diagnostics startups powered by MedTech Innovator. Nine Diagnostics presented its nanosensor-enabled, machine learning-driven approach to molecular fingerprinting and its potential for biomarker-agnostic diagnostics across challenging disease areas.`,
  },
  {
    id: "nano-letters-2026",
    date: "March 17, 2026",
    title: "Industrial Adoption of Carbon Nanotubes - Nano Letters",
    body: `Nine Diagnostics co-founders Daniel A. Heller, PhD, and Mijin Kim, PhD, co-authored a perspective in Nano Letters reviewing the current landscape and outlook for the industrial integration of carbon nanotubes across biomedical and materials applications.`,
  },
  {
    id: "fnih-2026",
    date: "February 9, 2026",
    title: "Nine Diagnostics Selected to Present at FNIH Biomarkers Consortium 20th Anniversary Symposium",
    body: `Nine Diagnostics was selected to present at the FNIH Biomarkers Consortium 20th Anniversary Symposium, a leading forum convening senior leaders across academia, industry, and government to advance biomarker science. The selection reflects growing recognition of the Nine Diagnostics platform and alignment with the field's shift toward integrated, data-driven diagnostic approaches.`,
  },
  {
    id: "the-scientist-2026",
    date: "January 20, 2026",
    title: "Freddy Nguyen Featured in The Scientist on NSF Tech Labs Initiative",
    body: `Nine Diagnostics CEO and co-founder Freddy T. Nguyen, MD, PhD, was featured in The Scientist in an article by Laura Tran, PhD, gathering researcher and entrepreneur responses to the National Science Foundation's Tech Labs initiative.`,
  },
  {
    id: "arpa-h-light-2026",
    date: "January 20, 2026",
    title: "Heller and Kim Selected for ARPA-H LIGHT Program on Lymphatic Disease Diagnostics",
    body: `Nine Diagnostics co-founders Daniel Heller and Mijin Kim are contributing to the ARPA-H LIGHT program as part of the Weill Cornell Medicine-led LANTERN team, one of 11 groups funded through a $135.7M federal initiative to advance lymphatic disease diagnostics. Heller and Kim are developing nanosensor-based detection technologies integrated with AI, building tools to measure and interpret molecular signals from the lymphatic system. This work advances a historically under-characterized area of biology with broad relevance to cancer, infectious disease, and immune disorders.`,
  },
  {
    id: "orbits-2026",
    date: "January 16, 2026",
    title: "Nine Diagnostics and Orbits Oncology Launch Exploratory Partnership on Precision Oncology Platform",
    body: `Nine Diagnostics and Orbits Oncology have entered into an exploratory partnership to jointly develop a next-generation precision oncology diagnostics platform. The collaboration pairs Nine Diagnostics' nanosensor-based molecular fingerprinting, which captures systemic disease signals from blood, with Orbits' AI-powered computer vision platform that analyzes patient-derived organoid microscope imagery to provide a more dynamic and clinically relevant picture of drug responses.`,
  },
  {
    id: "nature-nanotech-2025",
    date: "December 24, 2025",
    title: "Nanosensor Liquid Biopsy Detects and Classifies Brain Tumors - Nature Nanotechnology",
    body: `Nine Diagnostics co-founders Daniel A. Heller, PhD, and Mijin Kim, PhD, co-authored a cover article in Nature Nanotechnology (February 2026) demonstrating 98% accuracy in brain tumor detection and 71% accuracy in tumor type identification across 739 plasma samples at Memorial Sloan Kettering Cancer Center, Northwestern University, and NYU, representing the first multi-site clinical validation of the nanosensor liquid biopsy approach. The approach captures complex system-level molecular patterns without relying on predefined biomarkers, introducing a new paradigm for liquid biopsy.`,
  },
  {
    id: "acs-brightedge-graduates-2025",
    date: "October 30, 2025",
    title: "Nine Diagnostics Graduates from ACS BrightEdge Entrepreneurs Program",
    body: `Nine Diagnostics graduated from the American Cancer Society BrightEdge Entrepreneurs Program, culminating in a Demo Day pitch presentation of the Nine Diagnostics nanosensor-enabled, machine learning-driven diagnostic platform. The 10-month program, run by BrightEdge, ACS's impact investment and innovation arm, provided structured mentorship on scientific strategy, clinical translation, and early go-to-market planning, alongside access to oncology thought leaders and investors.`,
  },
  {
    id: "kvia-abc7-2025",
    date: "October 3, 2025",
    title: "Daniel Heller Featured on KVIA-TV ABC-7 for Nanosensor Ovarian Cancer Detection Research",
    body: `Nine Diagnostics co-founder Daniel A. Heller, PhD, was featured on KVIA-TV ABC-7 News El Paso in October 2025 for his work developing a nanosensor-based liquid biopsy for early ovarian cancer detection. The segment covered how carbon nanotube nanosensors and machine learning can identify cancer molecular fingerprints from blood samples.`,
  },
  {
    id: "medical-alley-2025",
    date: "September 22, 2025",
    title: "Nine Diagnostics Selected for Medical Alley Q3 Innovation Showcase",
    body: `Nine Diagnostics presented at the Q3 Medical Alley Innovation Showcase on September 22, 2025, one of six companies selected to present within Minnesota's health innovation ecosystem, one of the most concentrated medtech and healthcare clusters in the world.`,
  },
  {
    id: "boston-biotech-investor-day-2025",
    date: "September 18, 2025",
    title: "Nine Diagnostics Selected for Second Annual Boston Biotech Investor Day",
    body: `Nine Diagnostics was selected to present at the second annual Boston Biotech Investor Day, an invitation-only Seaport event co-hosted by LabCentral, BioLabs, The Engine, and the Termeer Institute, bringing together 48 early-stage companies with more than 90 leading investors and pharma partners. Nine Diagnostics shared its vision for a biomarker-agnostic, nanosensor-driven platform that uses machine learning to translate complex molecular patterns into clinically actionable insights for oncology.`,
  },
  {
    id: "resi-boston-2025",
    date: "September 17, 2025",
    title: "Nine Diagnostics Wins Runner-Up at RESI Boston Longevity Competition",
    body: `Nine Diagnostics placed second in the Longevity Global Pitch Competition at RESI Boston on September 17, 2025, part of a newly launched longevity and aging track organized by Life Science Nation.`,
  },
  {
    id: "womens-health-2025",
    date: "August 28, 2025",
    title: "Nine Diagnostics Co-Founder Daniel Heller in Women\u2019s Health Magazine",
    body: `Nine Diagnostics co-founder Dr. Daniel Heller was featured in Women's Health Magazine discussing why ovarian cancer remains so difficult to detect early and how AI-enabled nanosensor technology is changing that story. His research uses carbon nanotube nanosensors and AI to identify molecular fingerprints in blood that already outperform CA-125, today's primary but unreliable ovarian cancer biomarker.`,
  },
  {
    id: "applied-spectroscopy-2025",
    date: "August 3, 2025",
    title: "Building a Measurement Science Startup - Applied Spectroscopy Practica",
    body: `Freddy T. Nguyen, MD, PhD, CEO and Co-Founder of Nine Diagnostics, co-authored a paper in Applied Spectroscopy Practica presenting a framework for translating measurement science into healthcare products, drawn from the experience of building Nine Diagnostics.`,
  },
  {
    id: "nam-scholar-2025",
    date: "May 22, 2025",
    title: "Nine Diagnostics CEO Freddy Nguyen Named 2025 National Academy of Medicine Scholar in Diagnostics",
    body: `Nine Diagnostics CEO and co-founder Freddy T. Nguyen, MD, PhD has been named a 2025 Scholar in Diagnostic Excellence by the National Academy of Medicine, one of eleven health professionals selected nationwide through the program's annual competitive process.

The National Academy of Medicine Scholars in Diagnostic Excellence program is funded by the Gordon and Betty Moore Foundation and operated in partnership with the Council of Medical Specialty Societies (CMSS). It supports mid-career leaders advancing transformative work in diagnostic quality, safety, and equity.

As a Scholar, Nguyen will develop a patient-centered framework for guiding the equitable design and validation of diagnostic technologies. His project, titled "Developing a Patient-Centered Framework to Guide Medical Diagnostic Technology Development," addresses challenges in bias, validation, study design, data representation, and clinical implementation for next-generation tools.`,
  },
  {
    id: "mit-health-forum-2025",
    date: "May 18, 2025",
    title: "Nine Diagnostics CEO Freddy Nguyen at MIT Health Science Forum 2025",
    body: `Nine Diagnostics CEO Dr. Freddy Nguyen delivered an MIT Startup Exchange Lightning Talk at the 2025 MIT Health Science Forum, hosted by the MIT Industrial Liaison Program, an event convening researchers, global industry leaders, and select startups advancing transformative healthcare. His talk, "Determining Treatment Effectiveness, Discovering New Biology Using AI-Enabled Nanosensor Technology," highlighted Nine Diagnostics' nanosensor and AI platform for treatment monitoring and biomarker discovery.`,
  },
  {
    id: "handbook-carbon-2025",
    date: "April 14, 2025",
    title: "The Definitive Reference on Carbon Nanotubes in Biomedicine - Handbook of Carbon Nanomaterials",
    body: `Nine Diagnostics co-founders Daniel A. Heller, PhD, and Mijin Kim, PhD, co-edited a two-volume reference work on carbon nanomaterials in biomedicine, published by World Scientific in 2025 as part of the Handbook of Carbon Nanomaterials series.`,
  },
  {
    id: "acs-brightedge-joins-2025",
    date: "February 12, 2025",
    title: "Nine Diagnostics Joins ACS BrightEdge Entrepreneurs Program",
    body: `Nine Diagnostics was selected to join the American Cancer Society's BrightEdge Entrepreneurs Program, a competitive initiative supporting oncology startups with high-impact potential through top-tier mentorship, investment opportunities, and strategic connections across the oncology innovation ecosystem.`,
  },
  {
    id: "bbc-news-2024",
    date: "December 20, 2024",
    title: "Nine Diagnostics Co-Founder Daniel Heller Featured in BBC News",
    body: `Nine Diagnostics co-founder Dr. Daniel Heller was featured in BBC News as part of its "AI Breakthroughs" series, discussing how AI and nanotechnology could transform detection of ovarian and other gynecological cancers. His research at Memorial Sloan Kettering combines carbon nanotube nanosensors with AI to identify molecular fingerprints in blood, with the vision to triage gynecological disease broadly and help clinicians distinguish cancer from benign conditions earlier and more accurately.`,
  },
  {
    id: "us-dutch-consortium-2024",
    date: "December 6, 2024",
    title: "Nine Diagnostics Joins U.S.-Dutch Consortium for Women\u2019s Health Diagnostics",
    body: `Nine Diagnostics joined a U.S.-Dutch consortium to co-produce a white paper on advancing diagnostic tools and treatments for gynecological cancers, serving as the molecular diagnostics partner with its AI-enabled multiomics platform.`,
  },
  {
    id: "merck-dss-2024",
    date: "November 14, 2024",
    title: "Nine Diagnostics Selected for Merck Digital Sciences Studio Cohort 3",
    body: `Nine Diagnostics was accepted into Merck Digital Sciences Studio Cohort 3, a 10-month digital accelerator providing direct investment, strategic mentorship, and industry connections to early-stage biomedical startups advancing AI and machine learning for drug discovery and development. Backed by Merck, Northpond Ventures, McKesson Ventures, and Microsoft for Startups, the program connects companies to leading networks across pharma, health systems, and technology. This selection marks Nine Diagnostics' first major direct investment and accelerates development of its AI-enabled nanosensor platform.`,
  },
  {
    id: "cancerhackerlab-2024",
    date: "October 6, 2024",
    title: "Nine Diagnostics Selected for Inaugural CancerHackerLab Accelerator Cohort",
    body: `Nine Diagnostics was selected for the inaugural cohort of the CancerHackerLab Accelerator. CancerHackerLab is a cancer-focused innovation accelerator supporting early-stage companies developing technologies to improve cancer prevention, detection, and treatment outcomes.

CancerHackerLab was established to accelerate cancer innovation by connecting early-stage companies with clinical mentors, biopharma industry advisors, cancer patient advocates, and a peer community spanning the oncology ecosystem. The inaugural cohort ran through the fall of 2024, with the weekly program built around peer-to-peer collaboration, external advisory input, and structured problem-solving.

Nine Diagnostics joined the inaugural cohort as the company was advancing its platform's application to solid tumor immunotherapy monitoring, alongside The Engine's Blueprint program (September 2024) and the Merck Digital Sciences Studio Cohort 3 (November 2024).`,
  },
  {
    id: "novo-nordisk-2024",
    date: "September 19, 2024",
    title: "Nine Diagnostics Wins Novo Nordisk Golden Ticket for LabCentral Residency",
    body: `Nine Diagnostics was selected as one of two recipients of the 2024 Novo Nordisk Golden Ticket, a competitive award run jointly by Novo Nordisk's Bio Innovation Hub and LabCentral recognizing early-stage life sciences companies with transformative potential. The award provides a year-long residency at LabCentral, a premier nonprofit launchpad for life sciences startups in Cambridge, MA, including lab space, mentorship, and access to a collaborative innovation ecosystem.`,
  },
  {
    id: "the-engine-2024",
    date: "September 13, 2024",
    title: "Nine Diagnostics Selected to Participate in The Engine\u2019s Blueprint Program",
    body: `Nine Diagnostics was selected to participate in The Engine's Blueprint program, a competitive early-stage cohort for tough tech companies co-founded by MIT, with participation beginning September 13, 2024. The program provides mentorship, resources, and access to MIT's innovation ecosystem for companies developing breakthrough technologies.`,
  },
  {
    id: "nsf-icorps-2024",
    date: "July 17, 2024",
    title: "Nine Diagnostics Selected to Participate in NSF I-Corps Program at MIT",
    body: `Nine Diagnostics was selected to participate in the NSF I-Corps Program at MIT, a structured customer discovery program administered through the New England Regional Innovation Node at MIT. The team included Freddy T. Nguyen, MD, PhD as Entrepreneurial Lead, alongside Stanislav Piletsky, PhD and Sam Riegel. The core focus was the on-treatment monitoring use case: understanding how oncologists, pathologists, diagnostic laboratory directors, and biopharma clinical development teams think about treatment response assessment today.`,
  },
  {
    id: "founded-2024",
    date: "March 8, 2024",
    title: "Nine Diagnostics Founded to Advance AI-Enabled Nanosensor Diagnostics",
    body: `Nine Diagnostics was incorporated on March 8, 2024, as a Delaware corporation headquartered in Cambridge, Massachusetts. The company was established to advance the clinical translation of an AI-enabled multi-omic nanosensor platform, bringing together a physician-scientist, a cancer nanomedicine pioneer, and a quantum-defect nanotube engineer with a shared goal: giving clinicians a way to measure how a patient's cancer is responding to treatment in real time.

The scientific foundation was established through peer-reviewed studies from the Cancer Nanomedicine Laboratory at Memorial Sloan Kettering Cancer Center. A 2021 study in Science Advances introduced the perception-based nanosensor approach. A 2022 study in Nature Biomedical Engineering extended this to clinical validation in ovarian cancer, achieving 87% sensitivity at 98% specificity across 269 serum samples.

Nine Diagnostics is co-founded by Freddy T. Nguyen, MD, PhD (CEO), Daniel A. Heller, PhD (CSO), and Mijin Kim, PhD (Scientific Advisor).`,
  },
  {
    id: "nbc-new-york-2024",
    date: "February 15, 2024",
    title: "Daniel Heller Featured on NBC New York for AI-Enabled Ovarian Cancer Blood Test Research",
    body: `Daniel A. Heller, PhD, lead researcher in the Cancer Nanomedicine Lab at Memorial Sloan Kettering Cancer Center, was featured on NBC New York (WNBC-TV 4) in February 2024 for his work developing a nanosensor-based liquid biopsy that uses AI to detect ovarian cancer from blood samples.`,
  },
  {
    id: "stat-wunderkind-2023",
    date: "October 17, 2023",
    title: "Mijin Kim Named a 2023 STAT Wunderkind for Nanosensor Cancer Detection Research",
    body: `Mijin Kim, PhD, a postdoctoral researcher in the Heller Lab at Memorial Sloan Kettering Cancer Center, was named a 2023 STAT Wunderkind, an annual honor recognizing 28 early-career researchers across medicine and biology whose work is reshaping their fields. Her research applies carbon nanotube nanosensors and machine learning to detect ovarian cancer from blood, achieving precision that surpasses existing biomarkers.`,
  },
  {
    id: "mit-tr35-2022",
    date: "June 29, 2022",
    title: "Mijin Kim Named a 2022 MIT Technology Review Innovator Under 35",
    body: `Mijin Kim, PhD, a postdoctoral researcher in the Cancer Nanomedicine Lab at Memorial Sloan Kettering Cancer Center, was named to MIT Technology Review's 2022 Innovators Under 35 list in the Pioneers category for her work developing carbon nanotube nanosensors for cancer detection.`,
  },
  {
    id: "nature-bme-2022",
    date: "March 17, 2022",
    title: "Nanosensor Liquid Biopsy Detects Ovarian Cancer with 87% Sensitivity - Nature Biomedical Engineering",
    body: `Mijin Kim, PhD, and Daniel A. Heller, PhD, at Memorial Sloan Kettering Cancer Center published a cover article in Nature Biomedical Engineering (March 2022) demonstrating that quantum-defect-modified carbon nanotube nanosensor arrays combined with machine learning can detect high-grade serous ovarian cancer from blood with 87% sensitivity at 98% specificity across 269 serum samples. This represented the first large-cohort clinical validation of the nanosensor liquid biopsy approach.`,
  },
  {
    id: "science-advances-2021",
    date: "November 19, 2021",
    title: "Nanosensor Liquid Biopsy to Detect Cancer Biomarkers - Science Advances",
    body: `Daniel A. Heller, PhD, and colleagues at Memorial Sloan Kettering Cancer Center published a study in Science Advances (November 2021) introducing a perception-based nanosensor platform for detecting cancer biomarkers, demonstrating that arrays of carbon nanotube sensors can generate composite molecular fingerprints from patient samples without requiring prior selection of specific target biomarkers.`,
  },
];

export default articles;
