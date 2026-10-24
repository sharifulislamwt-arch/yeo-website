"use strict";

/*
 * YEO — Opportunity Directory
 * Listings checked against provider pages on 24 October 2026.
 * Verify the official source before publishing or applying; providers may update deadlines.
 */

const opportunities = [
  {
    id: 1,
    title: "The Resilience Fund — Climate Resilience Grants",
    image: "assets/resilience-fund.webp",
    imageAlt: "A diverse community group discussing a local sustainability project outdoors",
    category: "grant",
    organization: "The Resilience Fund",
    location: "Community-based organisations",
    country: "Bangladesh, Cambodia, India and Vietnam",
    deadlineDate: "2026-10-25",
    deadlineAt: "2026-10-25T23:59:00+01:00",
    deadlineLabel: "25 October 2026",
    deadlineTime: "11:59 pm CET",
    description: "Flexible two-year funding for women- and non-binary-led community organisations strengthening climate resilience and the wellbeing of women workers and communities.",
    overview: "The Resilience Fund's current funding round supports community-based NGOs working across women’s health, safety and economic resilience, community-led climate adaptation, and links to global value chains. Selected partners may receive USD 15,000–50,000 over two years.",
    eligibility: "Women- or non-binary-led, community-based NGOs in Bangladesh, Cambodia, India or Vietnam. Organisations must be formally registered, authorised to receive foreign funding, and report annual income of at least USD 10,000 using 2024, 2025 or 2026 figures.",
    criteria: "The organisation's work must connect all three focus areas: women's health and safety; community-led climate adaptation; and communities connected to global value chains. Organisations should be embedded in and representative of the communities they serve. A long history of climate programming is not required, but some existing experience responding to climate or environmental impacts is expected.",
    requirements: [
      "Confirm that the organisation meets the country, leadership, registration, foreign-funding and annual-income requirements.",
      "Review the three focus areas and the official eligibility questions before submitting.",
      "Request between USD 15,000 and USD 50,000 for a two-year grant, within the funding rules on the official page."
    ],
    duration: "Two-year grant",
    funding: "USD 15,000–50,000 over two years",
    applicationInstructions: "Start with the official Apply for Funding page and review its eligibility and FAQ sections. The Phase 1 deadline is very close; confirm the live application status before preparing a submission.",
    url: "https://www.resiliencefundforwomen.org/apply",
    icon: "🌿"
  },
  {
    id: 2,
    title: "BRAC Climate & Environmental Innovation Internship",
    image: "assets/brac-sustainability-intern.webp",
    imageAlt: "Young sustainability practitioners presenting a model of an environmentally friendly building",
    category: "internship",
    organization: "BRAC — Bangladesh Sustainability Alliance",
    location: "BRAC Centre, Mohakhali, Dhaka",
    country: "Bangladesh",
    deadlineDate: "2026-10-31",
    deadlineLabel: "31 October 2026",
    deadlineTime: "Time not specified in the notice",
    description: "A three-month, stipend-supported internship supporting sustainability activities, stakeholder engagement, research, reporting and environmental communications.",
    overview: "The Climate and Environmental Innovation Programme (CEIP), within the Bangladesh Sustainability Alliance (BSA), offers hands-on experience in project coordination and sustainability initiatives. Work includes engagement activities, research on sustainability and waste-management trends, workshop content, presentations, reports and communications materials.",
    eligibility: "Bachelor's degree holders and final-year students are encouraged to apply. Relevant fields include Environmental Science, Environmental Management or Engineering, Sustainability, Climate Change, Natural Resources Management, Geography, Development Studies or a related discipline.",
    criteria: "Good written and spoken Bangla and excellent written and spoken English. The notice also asks for skills in MS Office and tools such as Adobe Illustrator, Premiere Pro, Photoshop and Canva, along with sustainability interest, storytelling, interpersonal communication, climate-action awareness and public speaking.",
    requirements: [
      "Check the official vacancy notice for the complete responsibilities and requirements.",
      "The internship is listed as three months, starting 8 November 2026.",
      "The notice lists a monthly stipend of BDT 8,000 and an eight-hour working day."
    ],
    duration: "3 months; listed start date: 8 November 2026",
    funding: "BDT 8,000 monthly stipend",
    applicationInstructions: "Open BRAC's official internship listing and the linked CEIP/BSA vacancy notice. Follow the application route and instructions currently published by BRAC; the linked notice contains the role requirements and deadline.",
    url: "https://www.brac.net/documents/1005/ID-CEIP-BSA-14-10-2026.pdf",
    listingUrl: "https://www.brac.net/get-involved/internship/regular-internship/",
    icon: "🌱"
  },
  {
    id: 3,
    title: "CEPF Indo-Burma Biodiversity Conservation Grants",
    image: "assets/cepf-biodiversity-grant.webp",
    imageAlt: "Young conservation volunteers planting a tree in a restoration area",
    category: "grant",
    organization: "Critical Ecosystem Partnership Fund (CEPF) / IUCN",
    location: "Indo-Burma Biodiversity Hotspot",
    country: "Cambodia, southern China, Lao PDR, Myanmar, Thailand and Vietnam",
    deadlineDate: "2026-11-02",
    deadlineLabel: "2 November 2026",
    deadlineTime: "Time not specified on the IUCN page",
    description: "An active call for Letters of Inquiry for biodiversity-conservation projects in the Indo-Burma hotspot, with small and large grant pathways.",
    overview: "CEPF and IUCN are currently accepting Letters of Inquiry for projects that support biodiversity conservation in eligible parts of the Indo-Burma hotspot. The call targets specified strategic directions and investment priorities; applicants should review the official call documents before applying.",
    eligibility: "Local or international NGOs, community groups, Indigenous peoples' organisations, women's groups, private companies and other civil-society organisations may apply if their projects meet the call requirements and operate within the eligible hotspot geography.",
    criteria: "Projects must address one or more eligible Strategic Directions 1 or 2 and Investment Priorities 9.2, 9.3 or 9.4. The call favours strong fit with priorities, credible conservation outcomes, complementary work, value for money and demonstrated institutional capacity.",
    requirements: [
      "Submit a Letter of Inquiry (LOI) using the official call guidance.",
      "Check the official call documents for the eligible investment priorities and country/area rules.",
      "Small grants may be submitted in listed local languages; the large-grant language rules differ."
    ],
    duration: "Project duration and conditions are defined in the official call documents",
    funding: "Small grants up to USD 50,000; large grants USD 50,000–250,000",
    applicationInstructions: "Read the current CEPF/IUCN call and the relevant guidance documents, then submit a Letter of Inquiry using the official process for the relevant country or regional team.",
    url: "https://iucn.org/our-work/region/asia/our-work/regional-projects/critical-ecosystem-partnership-fund-cepf-indo-0",
    icon: "🌳"
  },
  {
    id: 4,
    title: "EWAP Research Fellowship — Founding Cohort 2027",
    image: "assets/ewap-research-fellowship.webp",
    imageAlt: "Environmental field researcher documenting ecosystem conditions in a forest",
    category: "fellowship",
    organization: "Enhanced Weathering Africa Partnership (EWAP)",
    location: "Primarily online; Africa-centred research network",
    country: "International cohort focused on African climate and sustainability contexts",
    deadlineDate: "2026-11-06",
    deadlineLabel: "6 November 2026",
    deadlineTime: "EOI closing time not specified on the official page",
    description: "A selective 12-week learning and research fellowship introducing enhanced weathering, research practice and African climate, agriculture and sustainability priorities.",
    overview: "The programme brings together up to 10 emerging researchers for expert-led sessions, practical exercises, mentoring and peer collaboration. The first stage is an Expression of Interest; selected applicants are then invited to complete a fuller application.",
    eligibility: "Final-year undergraduate students, Master's students, PhD candidates and early-career researchers from disciplines relevant to enhanced-weathering research, including environmental and climate science, agriculture, soil science, geochemistry, engineering, MRV, sustainability, economics, policy, governance, carbon markets and climate finance.",
    criteria: "Applicants should be interested in enhanced weathering and how it relates to African climate, agriculture and sustainability priorities. The programme is interdisciplinary and primarily online. It is unpaid and does not provide a stipend, salary or travel funding.",
    requirements: [
      "Submit the official Expression of Interest by 6 November 2026.",
      "Describe your academic or professional background, research interests and motivation.",
      "If shortlisted after the EOI stage, complete the full application when invited."
    ],
    duration: "12 weeks; fellowship programme planned for February–April 2027",
    funding: "Unpaid learning and research programme; no stipend or travel funding",
    applicationInstructions: "Submit an Expression of Interest through the official EWAP fellowship page. Applicants selected at the EOI stage will be invited to submit a full application.",
    url: "https://ewap-project.org/fellowship",
    icon: "🔬"
  },
  {
    id: 5,
    title: "MIT Solve — 2027 Global Climate Challenge",
    image: "assets/mit-solve-climate-challenge.webp",
    imageAlt: "A climate and sustainability conference with a large green planet display",
    category: "competition",
    organization: "MIT Solve",
    location: "Global challenge; solutions from around the world",
    country: "Global",
    deadlineDate: "2026-11-06",
    deadlineAt: "2026-11-06T12:00:00-05:00",
    deadlineLabel: "6 November 2026",
    deadlineTime: "12:00 pm EST",
    description: "A global innovation challenge seeking human-centred, technology-enabled solutions for equitable climate adaptation and lower-carbon ways of living and eating.",
    overview: "MIT Solve invites solutions addressing the linked needs of adapting fairly to a warming climate and decarbonising how people live and eat. The challenge considers solutions across geography and development stage, with a focus on real-world impact and practical implementation.",
    eligibility: "The challenge page encourages applications from people of all backgrounds. Applicants should bring a technology-enabled, human-centred solution that aligns with the challenge. If an applicant or organisation was selected by Solve previously, the submission must be a new solution rather than the same previously selected solution.",
    criteria: "The published challenge criteria include alignment with the challenge, potential impact, feasibility, innovation and human-centred design. Applicants should show that their team understands the problem and has a realistic plan to develop and implement the solution.",
    requirements: [
      "Develop a solution addressing equitable climate adaptation and/or decarbonisation in how people live and eat.",
      "Prepare the application and supporting information requested on the official challenge page.",
      "Submit before 12:00 pm Eastern Standard Time on 6 November 2026."
    ],
    duration: "Challenge application; later timelines depend on selection",
    funding: "Review the official challenge page for Solver benefits and award details",
    applicationInstructions: "Use the Start Solution button on the official MIT Solve challenge page and complete the challenge application before the deadline.",
    url: "https://solve.mit.edu/index.php/challenges/2027-global-climate-challenge",
    icon: "💡"
  },
  {
    id: 6,
    title: "FEE Data & Research Intern — Spring 2027",
    image: "assets/fee-data-research-intern.webp",
    imageAlt: "A researcher checking environmental monitoring equipment in a mountain landscape",
    category: "internship",
    organization: "Foundation for Environmental Education (FEE)",
    location: "100% remote; collaboration mainly across GMT/CET time zones",
    country: "Remote / international; time-zone compatibility preferred",
    deadlineDate: "2026-11-08",
    deadlineLabel: "8 November 2026",
    deadlineTime: "Time not specified on the official page",
    description: "A remote, unpaid four-to-six-month internship using data and research to strengthen environmental education programmes, communications, funding proposals and impact reporting.",
    overview: "The intern will help turn data and research into clearer insights and measurable impact across FEE's global programmes. The role is remote, starts on 11 January 2027 and is expected to run for four to six months, with a preference for someone who can stay until mid/end July 2027.",
    eligibility: "The organisation welcomes applicants from different backgrounds and nationalities. Applicants should be able to work primarily within GMT or Central European time zones for collaboration. The internship is unpaid and is suitable for a student or post-study intern.",
    criteria: "The role is intended for someone detail-driven and analytically minded, with relevant research, data, reporting or visual communication skills. The published schedule is 35 hours per week, including a 30-minute lunch break.",
    requirements: [
      "Submit a CV and a short motivation letter.",
      "Include 2–3 samples of analytical, research or visual work, such as a dashboard, spreadsheet, report, research project or data visualisation.",
      "Apply through the form linked on the official FEE vacancy page by 8 November 2026."
    ],
    duration: "4–6 months; planned start 11 January 2027",
    funding: "Unpaid internship",
    applicationInstructions: "Submit your CV, motivation letter and portfolio samples through the application form linked from the official FEE vacancy page.",
    url: "https://www.fee.global/vacancies/spring-2027/data-research-intern",
    icon: "📊"
  },
  {
    id: 7,
    title: "UNDP Ocean Innovation Challenge — Call 5",
    image: "assets/ocean-innovation-challenge.webp",
    imageAlt: "Volunteers collecting plastic waste along a coastal beach",
    category: "grant",
    organization: "United Nations Development Programme (UNDP) / Ocean Innovation Challenge",
    location: "Projects must benefit eligible coastal or marine areas",
    country: "Bangladesh, Indonesia, Philippines, Thailand and Vietnam",
    deadlineDate: "2026-11-15",
    deadlineAt: "2026-11-15T23:59:00-04:00",
    deadlineLabel: "15 November 2026",
    deadlineTime: "11:59 pm GMT−4",
    description: "A call for implementation-ready innovations that reduce marine pollution, restore coastal and marine ecosystems, or advance a sustainable blue economy.",
    overview: "UNDP's Ocean Innovation Challenge Call 5 seeks practical innovations that can deliver measurable environmental, social and economic benefits and be replicated or scaled. The call focuses on marine pollution, ecosystem restoration and sustainable, inclusive blue-economy development.",
    eligibility: "The notice invites private-sector organisations worldwide to submit solutions that directly benefit Bangladesh, Indonesia, the Philippines, Thailand or Vietnam. The proposed solution must address at least one of the listed marine and coastal themes. Women- and youth-led or owned innovations receive preference.",
    criteria: "Solutions should be implementation-ready, able to generate measurable impacts and demonstrate potential for replication and scale. Eligible themes include marine plastics and other pollution, restoration of coral reefs, mangroves, seagrass and coastal wetlands, and sustainable use of ocean resources.",
    requirements: [
      "Confirm that the project directly benefits one or more of the five eligible countries.",
      "Describe an implementation-ready solution within one or more eligible themes.",
      "Use the official call information to check the full eligibility and application requirements before submitting."
    ],
    duration: "Project timing and milestones are defined in the call documents",
    funding: "Funding details and selection terms are set out in the official call",
    applicationInstructions: "Open the official UNDP call notice and follow the linked Ocean Innovation Challenge application instructions. The UNGM notice is included as a verified public record of the call and deadline.",
    url: "https://www.ungm.org/Public/Notice/317024",
    applicationUrl: "https://dev.oceaninnovationchallenge.org/5th-call-marine-pollution-reduction-coastal-and-marine-ecosystem-restoration-and-sustainable-blue",
    icon: "🌊"
  },
  {
    id: 8,
    title: "John G. Bene Fellowship 2026",
    image: "assets/idrc-bene-fellowship.webp",
    imageAlt: "A researcher collecting notes beside a lake during environmental fieldwork",
    category: "fellowship",
    organization: "International Development Research Centre (IDRC)",
    location: "Canadian universities; research duration varies",
    country: "Canada — restricted to eligible Canadians and permanent residents studying in Canada",
    deadlineDate: "2026-11-30",
    deadlineAt: "2026-11-30T23:59:00-05:00",
    deadlineLabel: "30 November 2026",
    deadlineTime: "11:59 pm Eastern Time",
    description: "A funded research fellowship for eligible Canadian graduate students whose work connects forests, environment, ecology or food systems with social-science perspectives.",
    overview: "The John G. Bene Fellowship supports graduate research in international development. The call focuses on climate-resilient food systems, forests, landscapes, restoration, forestry, agroforestry, environment, ecology and natural resources, combined with a social-science lens.",
    eligibility: "For Canadian citizens and permanent residents of Canada pursuing a master's or doctoral degree at a Canadian university. Candidates should have a relevant academic background and research interest that combines environment, forests, ecology, food systems or natural resources with social-science perspectives.",
    criteria: "The project should align with IDRC's climate-resilient food systems and natural-resource themes. The fellowship runs for 10 weeks to 12 months. The call lists up to ten awards, each worth a maximum of CAD 30,000.",
    requirements: [
      "Check the complete eligibility and application instructions on the IDRC page.",
      "Prepare a graduate-level research proposal that fits the fellowship scope.",
      "Submit the application by 23:59 Eastern Time on 30 November 2026."
    ],
    duration: "10 weeks to 12 months",
    funding: "Up to 10 awards; maximum CAD 30,000 each",
    applicationInstructions: "Use the official IDRC call page to review requirements and access the current application process. Questions listed by IDRC can be sent to bene fellowship contact shown on the page.",
    url: "https://idrc-crdi.ca/en/funding/idrc-invites-applications-john-g-bene-fellowship-2026",
    icon: "🌲"
  },
  {
    id: 9,
    title: "Mittal Family Climate Fellowship 2027–2028",
    image: "assets/mittal-climate-fellowship.webp",
    imageAlt: "Environmental researchers reviewing a solar energy installation in a green landscape",
    category: "fellowship",
    organization: "Harvard University's Lakshmi Mittal and Family South Asia Institute",
    location: "In residence at Harvard, Cambridge, Massachusetts",
    country: "Hosted in the United States; research must focus on South Asia",
    deadlineDate: "2026-12-08",
    deadlineLabel: "8 December 2026",
    deadlineTime: "Time not specified on the official page",
    description: "A postdoctoral climate-research fellowship at Harvard focused on climate-change impacts and sustainable solutions across South Asia.",
    overview: "The fellow will be in residence at the Mittal Institute for the 2027–2028 academic year and develop a research project with a faculty mentor. Eligible topics include climate adaptation and resilience, mitigation, climate-related public health, water resources, biodiversity, ecosystem protection, policy, governance and climate technology.",
    eligibility: "Applicants must have received a PhD. Preference is given to scholars who received their PhD within the past five years. Scholars primarily educated at institutions in South Asia and those with fewer prior opportunities to access Harvard resources will be prioritised.",
    criteria: "The research proposal should produce new scholarly knowledge and contribute to sustainable solutions across South Asia. The selected fellow is expected to be in residence from 20 August 2027 to 20 May 2028. Applicants must submit a five-page research plan, current CV, writing sample, PhD diploma scan and two recommendation letters.",
    requirements: [
      "Create an account in Harvard's ARIeS application system.",
      "Upload all application materials and ensure both recommendation letters are received by the deadline.",
      "Confirm any current application updates on the official fellowship page."
    ],
    duration: "Academic year 2027–2028; expected residence 20 August 2027–20 May 2028",
    funding: "USD 51,000 gross stipend; travel and visa reimbursement from South Asia is available for participants residing in South Asia, subject to the official terms",
    applicationInstructions: "Apply through Harvard's ARIeS application system from the official fellowship page. All materials, including recommendation letters, must arrive by 8 December 2026.",
    url: "https://mittalsouthasiainstitute.harvard.edu/climate-fellowship/",
    icon: "🎓"
  },
  {
    id: 10,
    title: "HSSE Senior Associate — Environmental Management",
    image: "assets/unops-environmental-management.webp",
    imageAlt: "Environmental engineers inspecting a solar installation in a green landscape",
    category: "job",
    organization: "United Nations Office for Project Services (UNOPS)",
    location: "On-site; Dhaka duty station",
    country: "Bangladesh",
    deadlineDate: "2026-11-05",
    deadlineAt: "2026-11-05T23:59:00+01:00",
    deadlineLabel: "5 November 2026",
    deadlineTime: "Applications due before midnight Copenhagen time (CET)",
    description: "A 12-month environmental-management role supporting health, safety, social and environmental compliance for a medical-waste programme across six government hospitals.",
    overview: "The HSSE Senior Associate will coordinate environmental and social safeguards, documentation, risk assessments, inspections, incident follow-up, reporting, training and contractor compliance for UNOPS' Integrated Medical Waste Program for the Advanced Community Transformation (IMPACT) project in Bangladesh.",
    eligibility: "Required: a bachelor's degree (or equivalent) in Occupational Health and Safety, Public Health, Engineering, Risk Management, Gender, Social Inclusion, Human Rights, International Relations or a related field plus three years of relevant experience; alternatively, secondary education or equivalent with seven years of relevant experience. A relevant master's degree may substitute some required years of experience.",
    criteria: "Experience in HSSE project management, risk assessments, inspections, incident investigations and training is required. Computer/software and web-based systems experience is required. Fluent English and Bengali are required. Multicultural, UN-system, development or humanitarian experience is desirable.",
    requirements: [
      "Review the official UNOPS vacancy notice for full education, experience and competency requirements.",
      "Prepare the application through the official UNOPS careers portal; UNOPS does not accept unsolicited resumes.",
      "Submit before midnight Copenhagen time (CET) on 5 November 2026. UNOPS does not charge application or recruitment fees."
    ],
    duration: "12-month service contract",
    funding: "Compensation follows the local salary scale for the duty station; salary amount is not published in the listing summary",
    applicationInstructions: "Apply only through the official UNOPS Careers Marketplace vacancy page. Check the notice for the exact closing time and the latest application instructions before submitting.",
    url: "https://careers.unops.org/careersmarketplace/JobDetail/Health-Safety-Social-and-Environmental-Senior-Associate-Environmental-Management/4939",
    icon: "🦺"
  }
];

const categoryNames = {
  job: "Job",
  scholarship: "Scholarship",
  grant: "Grant",
  fellowship: "Fellowship",
  internship: "Internship",
  conference: "Conference",
  award: "Award",
  competition: "Competition"
};

const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("sortFilter");
const categoryChips = document.querySelectorAll(".chip");
const opportunityGrid = document.getElementById("opportunityGrid");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const resetFiltersButton = document.getElementById("resetFilters");
const detailsDialog = document.getElementById("detailsDialog");
const dialogBody = document.getElementById("dialogBody");
const closeDialogButton = document.getElementById("closeDialog");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

let selectedCategory = "all";

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (character) {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return replacements[character];
  });
}

function isLive(opportunity) {
  // Use the provider's stated time zone when an exact deadline time is published.
  // If no time is stated, treat the date as open through the end of that date.
  const deadlineEnd = opportunity.deadlineAt
    ? new Date(opportunity.deadlineAt)
    : new Date(`${opportunity.deadlineDate}T23:59:59`);
  return Date.now() <= deadlineEnd.getTime();
}

function statusText(opportunity) {
  return isLive(opportunity) ? "Live opportunity" : "Deadline passed";
}

function formatDeadlineDate(deadlineDate) {
  const parts = deadlineDate.split("-").map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric"
  });
}

function sharePageUrl(opportunity) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = `opportunity-${opportunity.id}`;
  return url.href;
}

function shareLinksHTML(opportunity, extraClass = "") {
  const pageUrl = sharePageUrl(opportunity);
  const shareText = `${opportunity.title} — deadline: ${opportunity.deadlineLabel}. Details via YEO.`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;

  return `
    <div class="share-actions ${extraClass}" aria-label="Share this opportunity">
      <span class="share-caption">Share</span>
      <a class="share-button share-facebook" href="${facebookUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share ${escapeHTML(opportunity.title)} on Facebook" title="Share on Facebook"><span aria-hidden="true">f</span><span>Facebook</span></a>
      <a class="share-button share-x" href="${xUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share ${escapeHTML(opportunity.title)} on X" title="Share on X"><span aria-hidden="true">𝕏</span><span>X</span></a>
      <a class="share-button share-linkedin" href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share ${escapeHTML(opportunity.title)} on LinkedIn" title="Share on LinkedIn"><span aria-hidden="true">in</span><span>LinkedIn</span></a>
    </div>
  `;
}

function createOpportunityCard(opportunity) {
  const category = escapeHTML(opportunity.category);
  const categoryName = escapeHTML(categoryNames[opportunity.category] || "Opportunity");
  const statusClass = isLive(opportunity) ? "is-live" : "is-closed";
  const displayedDeadline = formatDeadlineDate(opportunity.deadlineDate);

  return `
    <article class="opportunity-card" id="opportunity-${opportunity.id}">
      <div class="card-media" data-fallback="${escapeHTML(opportunity.icon)}">
        <img class="card-feature-image" src="${escapeHTML(opportunity.image)}" alt="${escapeHTML(opportunity.imageAlt)}" loading="lazy" decoding="async">
        <span class="category-badge ${category}">${categoryName}</span>
        <span class="image-status ${statusClass}"><span class="status-dot" aria-hidden="true"></span>${escapeHTML(statusText(opportunity))}</span>
      </div>

      <div class="card-content">
        <h3 class="card-title">${escapeHTML(opportunity.title)}</h3>
        <p class="card-description">${escapeHTML(opportunity.description)}</p>

        <div class="deadline-card ${isLive(opportunity) && daysUntilDeadline(opportunity.deadlineDate) <= 7 ? "closes-soon" : ""}">
          <span class="deadline-icon" aria-hidden="true">◷</span>
          <span><small>Application deadline</small><strong>${escapeHTML(displayedDeadline)}</strong></span>
        </div>

        <div class="card-meta">
          <div class="meta-row"><span aria-hidden="true">🏢</span><span>${escapeHTML(opportunity.organization)}</span></div>
          <div class="meta-row"><span aria-hidden="true">📍</span><span>${escapeHTML(opportunity.country)}</span></div>
        </div>

        <div class="card-actions">
          <button class="details-button" type="button" data-details-id="${opportunity.id}">View Details →</button>
          <a class="apply-link" href="${escapeHTML(opportunity.url)}" target="_blank" rel="noopener noreferrer">Official Details ↗</a>
        </div>
        ${shareLinksHTML(opportunity)}
      </div>
    </article>
  `;
}

function daysUntilDeadline(deadlineDate) {
  const parts = deadlineDate.split("-").map(Number);
  const deadline = new Date(parts[0], parts[1] - 1, parts[2]);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((deadline.getTime() - today.getTime()) / 86400000);
}

function getFilteredOpportunities() {
  const query = searchInput.value.trim().toLowerCase();
  return opportunities.filter(function (opportunity) {
    const searchableText = [
      opportunity.title,
      opportunity.category,
      categoryNames[opportunity.category],
      opportunity.organization,
      opportunity.location,
      opportunity.country,
      opportunity.deadlineLabel,
      opportunity.description,
      opportunity.overview,
      opportunity.eligibility,
      opportunity.criteria,
      opportunity.skills,
      opportunity.funding
    ].join(" ").toLowerCase();
    const matchesSearch = searchableText.includes(query);
    const matchesCategory = selectedCategory === "all" || opportunity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
}

function renderOpportunities() {
  const filtered = getFilteredOpportunities().sort(function (a, b) {
    return a.deadlineDate.localeCompare(b.deadlineDate);
  });
  opportunityGrid.innerHTML = filtered.map(createOpportunityCard).join("");

  opportunityGrid.querySelectorAll(".card-feature-image").forEach(function (imageElement) {
    imageElement.addEventListener("error", function () {
      const media = imageElement.closest(".card-media");
      if (media) media.classList.add("image-failed");
      imageElement.remove();
    }, { once: true });
  });

  resultsCount.textContent = `Showing ${filtered.length} of ${opportunities.length} opportunities`;
  emptyState.hidden = filtered.length !== 0;
  opportunityGrid.hidden = filtered.length === 0;
}

function setCategory(category) {
  selectedCategory = category;
  categorySelect.value = category;
  categoryChips.forEach(function (chip) {
    const isActive = chip.dataset.category === category;
    chip.classList.toggle("active", isActive);
    chip.setAttribute("aria-pressed", String(isActive));
  });
  renderOpportunities();
}

function openOpportunityDetails(id, updateHash = false) {
  const opportunity = opportunities.find(function (item) { return item.id === Number(id); });
  if (!opportunity) return;

  const statusClass = isLive(opportunity) ? "is-live" : "is-closed";
  const deadlineText = `${opportunity.deadlineLabel}${opportunity.deadlineTime ? ` · ${opportunity.deadlineTime}` : ""}`;
  const requirementsHTML = opportunity.requirements.map(function (item) {
    return `<li>${escapeHTML(item)}</li>`;
  }).join("");
  const applyUrl = opportunity.applicationUrl || opportunity.url;

  dialogBody.innerHTML = `
    <div class="details-status-row">
      <span class="opportunity-status ${statusClass}"><span class="status-dot" aria-hidden="true"></span>${escapeHTML(statusText(opportunity))}</span>
      <span class="category-badge ${escapeHTML(opportunity.category)}">${escapeHTML(categoryNames[opportunity.category])}</span>
    </div>
    <h2>${escapeHTML(opportunity.title)}</h2>
    <p class="details-organization">${escapeHTML(opportunity.organization)}</p>

    <div class="details-facts">
      <div class="detail-fact detail-deadline"><span>Deadline</span><strong>${escapeHTML(deadlineText)}</strong></div>
      <div class="detail-fact"><span>Country / region</span><strong>${escapeHTML(opportunity.country)}</strong></div>
      <div class="detail-fact"><span>Location / mode</span><strong>${escapeHTML(opportunity.location)}</strong></div>
      <div class="detail-fact"><span>Duration</span><strong>${escapeHTML(opportunity.duration)}</strong></div>
      <div class="detail-fact detail-funding"><span>Funding / benefits</span><strong>${escapeHTML(opportunity.funding)}</strong></div>
    </div>

    <h3>About this opportunity</h3>
    <p>${escapeHTML(opportunity.overview)}</p>

    <h3>Eligibility</h3>
    <p>${escapeHTML(opportunity.eligibility)}</p>

    <h3>Criteria and selection focus</h3>
    <p>${escapeHTML(opportunity.criteria)}</p>

    <h3>Application checklist</h3>
    <ul class="details-requirements">${requirementsHTML}</ul>

    <h3>How to apply</h3>
    <p>${escapeHTML(opportunity.applicationInstructions)}</p>

    <div class="details-source-actions">
      <a class="button button-primary" href="${escapeHTML(applyUrl)}" target="_blank" rel="noopener noreferrer">Open Official Link ↗</a>
      ${opportunity.listingUrl ? `<a class="button button-outline" href="${escapeHTML(opportunity.listingUrl)}" target="_blank" rel="noopener noreferrer">Official Listing ↗</a>` : ""}
    </div>
    <p class="details-note">YEO is an independent information-sharing platform. Check the provider's official page for last-minute changes to eligibility, dates and application instructions.</p>
    ${shareLinksHTML(opportunity, "share-actions-modal")}
  `;

  if (updateHash) {
    const currentUrl = `${window.location.pathname}${window.location.search}#opportunity-${opportunity.id}`;
    window.history.replaceState(null, "", currentUrl);
  }

  if (typeof detailsDialog.showModal === "function") {
    if (!detailsDialog.open) detailsDialog.showModal();
  } else {
    alert("This browser does not support the opportunity details dialog.");
  }
}

searchInput.addEventListener("input", renderOpportunities);
categorySelect.addEventListener("change", function () { setCategory(categorySelect.value); });
categoryChips.forEach(function (chip) {
  chip.addEventListener("click", function () { setCategory(chip.dataset.category); });
});
resetFiltersButton.addEventListener("click", function () {
  searchInput.value = "";
  setCategory("all");
  searchInput.focus();
});

opportunityGrid.addEventListener("click", function (event) {
  const button = event.target.closest("[data-details-id]");
  if (!button) return;
  openOpportunityDetails(button.dataset.detailsId, true);
});

closeDialogButton.addEventListener("click", function () { detailsDialog.close(); });
detailsDialog.addEventListener("click", function (event) {
  if (event.target === detailsDialog) detailsDialog.close();
});

menuToggle.addEventListener("click", function () {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
renderOpportunities();

// Shared links point to a specific card and automatically open its detailed view.
function openDetailsFromHash() {
  const match = window.location.hash.match(/^#opportunity-(\d+)$/);
  if (!match) return;
  const targetId = Number(match[1]);
  const targetCard = document.getElementById(`opportunity-${targetId}`);
  if (targetCard) targetCard.scrollIntoView({ block: "start", behavior: "smooth" });
  openOpportunityDetails(targetId, false);
}
window.addEventListener("hashchange", openDetailsFromHash);
if (/^#opportunity-\d+$/.test(window.location.hash)) {
  window.requestAnimationFrame(openDetailsFromHash);
}
