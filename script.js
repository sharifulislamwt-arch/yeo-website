
"use strict";

/* =====================================
   YEO - Opportunity Directory
   Plain JavaScript; no libraries or APIs
   ===================================== */

// These are illustrative examples, not verified live openings.
// Each link leads to an official source or opportunity directory.

const opportunities = [
  {
    id: 1,
    title: "Environmental Programme Assistant",
    category: "job",
    organization: "Example role · UN Careers directory",
    location: "Various locations",
    eligibility: "Check each vacancy for education and experience requirements.",
    description:
      "An illustrative environmental programme role involving project coordination, field activities, reporting, and community engagement.",
    skills: ["Project coordination", "Reporting", "Environmental awareness"],
    url: "https://careers.un.org/",
    icon: "🌍"
  },
  {
    id: 2,
    title: "Climate Research Assistant",
    category: "job",
    organization: "Example role · UNEP careers",
    location: "Various locations",
    eligibility: "Requirements vary by vacancy.",
    description:
      "An illustrative role for people interested in climate research, environmental data, sustainability, and programme support.",
    skills: ["Research", "Data analysis", "Climate awareness"],
    url: "https://www.unep.org/careers",
    icon: "🌱"
  },
  {
    id: 3,
    title: "Environmental Studies Scholarship",
    category: "scholarship",
    organization: "Example pathway · DAAD scholarship information",
    location: "Germany and other eligible study pathways",
    eligibility: "Check programme-specific nationality, academic, and language requirements.",
    description:
      "An illustrative scholarship search pathway for students exploring environmental science, sustainability, and related study programmes.",
    skills: ["Academic preparation", "Study planning"],
    url: "https://www.daad.de/en/studying-in-germany/scholarships/",
    icon: "🎓"
  },
  {
    id: 4,
    title: "Climate and Sustainability Study Funding",
    category: "scholarship",
    organization: "Example pathway · DAAD",
    location: "Depends on the selected programme",
    eligibility: "Eligibility and funding conditions differ between programmes.",
    description:
      "A starting point for researching study funding relevant to environmental science, climate action, and sustainable development.",
    skills: ["Research", "Academic writing"],
    url: "https://www.daad.de/en/studying-in-germany/scholarships/",
    icon: "📚"
  },
  {
    id: 5,
    title: "Community Environmental Action Grant",
    category: "grant",
    organization: "Example project idea · GEF Small Grants Programme",
    location: "Eligible countries and communities",
    eligibility: "Check the country programme, eligible applicants, and current calls.",
    description:
      "An illustrative community project concept focused on biodiversity, environmental protection, and locally led sustainable solutions.",
    skills: ["Project design", "Community engagement", "Budgeting"],
    url: "https://www.thegef.org/what-we-do/topics/gef-small-grants-programme",
    icon: "🌿"
  },
  {
    id: 6,
    title: "Youth Climate Leadership Fellowship",
    category: "fellowship",
    organization: "Example pathway · UNEP careers and programmes",
    location: "Depends on the programme",
    eligibility: "Check individual programme requirements and current application calls.",
    description:
      "An illustrative fellowship concept for people interested in climate leadership, environmental advocacy, and sustainability initiatives.",
    skills: ["Leadership", "Communication", "Climate action"],
    url: "https://www.unep.org/careers",
    icon: "🌏"
  }
];

const categoryNames = {
  job: "Job",
  scholarship: "Scholarship",
  grant: "Grant",
  fellowship: "Fellowship"
};

// Find page elements.
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

// Escape text before inserting it into HTML.
// This is a useful safety measure when adding future data.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
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

// Create one opportunity card.
function createOpportunityCard(opportunity) {
  const title = escapeHTML(opportunity.title);
  const category = escapeHTML(opportunity.category);
  const categoryName = escapeHTML(categoryNames[opportunity.category]);
  const organization = escapeHTML(opportunity.organization);
  const location = escapeHTML(opportunity.location);
  const description = escapeHTML(opportunity.description);
  const icon = escapeHTML(opportunity.icon);

  return `
    <article class="opportunity-card">
      <div class="card-topline">
        <span class="card-icon" aria-hidden="true">${icon}</span>
        <span class="category-badge ${category}">${categoryName}</span>
      </div>

      <span class="example-label">Illustrative example</span>

      <h3 class="card-title">${title}</h3>

      <p class="card-description">${description}</p>

      <div class="card-meta">
        <div class="meta-row">
          <span aria-hidden="true">🏢</span>
          <span>${organization}</span>
        </div>

        <div class="meta-row">
          <span aria-hidden="true">📍</span>
          <span>${location}</span>
        </div>
      </div>

      <div class="card-actions">
        <button
          class="details-button"
          type="button"
          data-details-id="${opportunity.id}"
        >
          View Details →
        </button>

        <a
          class="apply-link"
          href="${escapeHTML(opportunity.url)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Source ↗
        </a>
      </div>
    </article>
  `;
}

// Apply both the search term and category filter.
function getFilteredOpportunities() {
  const query = searchInput.value.trim().toLowerCase();

  return opportunities.filter(function (opportunity) {
    const searchableText = [
      opportunity.title,
      opportunity.category,
      categoryNames[opportunity.category],
      opportunity.organization,
      opportunity.location,
      opportunity.description,
      opportunity.eligibility,
      opportunity.skills.join(" ")
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(query);

    const matchesCategory =
      selectedCategory === "all" ||
      opportunity.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
}

// Display the filtered cards and result count.
function renderOpportunities() {
  const filtered = getFilteredOpportunities();

  opportunityGrid.innerHTML = filtered
    .map(createOpportunityCard)
    .join("");

  resultsCount.textContent =
    `Showing ${filtered.length} of ${opportunities.length} illustrative opportunities`;

  emptyState.hidden = filtered.length !== 0;
  opportunityGrid.hidden = filtered.length === 0;
}

// Keep the dropdown and category chips synchronized.
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

// Search as the user types.
searchInput.addEventListener("input", renderOpportunities);

// Filter from the dropdown.
categorySelect.addEventListener("change", function () {
  setCategory(categorySelect.value);
});

// Filter from category chips.
categoryChips.forEach(function (chip) {
  chip.addEventListener("click", function () {
    setCategory(chip.dataset.category);
  });
});

// Clear both filters.
resetFiltersButton.addEventListener("click", function () {
  searchInput.value = "";
  setCategory("all");
  searchInput.focus();
});

// Open a card's detailed information in a modal.
opportunityGrid.addEventListener("click", function (event) {
  const button = event.target.closest("[data-details-id]");

  if (!button) {
    return;
  }

  const id = Number(button.dataset.detailsId);

  const opportunity = opportunities.find(function (item) {
    return item.id === id;
  });

  if (!opportunity) {
    return;
  }

  const skillsHTML = opportunity.skills
    .map(function (skill) {
      return `<li>${escapeHTML(skill)}</li>`;
    })
    .join("");

  dialogBody.innerHTML = `
    <span class="category-badge ${escapeHTML(opportunity.category)}">
      ${escapeHTML(categoryNames[opportunity.category])}
    </span>

    <h2>${escapeHTML(opportunity.title)}</h2>

    <p><strong>Source:</strong> ${escapeHTML(opportunity.organization)}</p>

    <p><strong>Location:</strong> ${escapeHTML(opportunity.location)}</p>

    <h3>About this example</h3>
    <p>${escapeHTML(opportunity.description)}</p>

    <h3>Eligibility</h3>
    <p>${escapeHTML(opportunity.eligibility)}</p>

    <h3>Relevant skills</h3>
    <ul>${skillsHTML}</ul>

    <p class="directory-disclaimer">
      This is an illustrative example, not a verified live opportunity.
      Visit the official source to find current listings and confirm
      eligibility, deadlines, and application instructions.
    </p>

    <a
      class="button button-primary"
      href="${escapeHTML(opportunity.url)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      Explore Official Source ↗
    </a>
  `;

  if (typeof detailsDialog.showModal === "function") {
    detailsDialog.showModal();
  } else {
    alert("Your browser does not support the details dialog.");
  }
});

// Close the details modal.
closeDialogButton.addEventListener("click", function () {
  detailsDialog.close();
});

// Close when clicking the backdrop outside the dialog content.
detailsDialog.addEventListener("click", function (event) {
  if (event.target === detailsDialog) {
    detailsDialog.close();
  }
});

// Mobile navigation.
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

// Automatically update the footer year.
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// Set up the initial page.
renderOpportunities();
