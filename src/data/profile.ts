/**
 * Site content for Saurav Anand (@sauravanand542).
 *
 * How to edit
 * -----------
 * This is the only file you need to change to update the portfolio.
 * Edit the values below, then run `npm run dev` to preview. A production
 * build (`npm run build`) reads the same file.
 *
 * Sections that hide themselves
 * -----------------------------
 * `experience`, `education`, and `certifications` start as empty arrays.
 * An empty array is not rendered, and its link is left out of the nav.
 * Append an object that matches the interface and the section appears
 * on the next build. Remove every entry to hide the section again.
 *
 *   experience:      { role, organization, start, end, summary, location?, highlights? }
 *   education:       { school, credential, detail?, start?, end? }
 *   certifications:  { name, issuer?, year? }
 *
 * Projects
 * --------
 * Set `featured: true` on the card that should lead the projects section.
 * Set `homepage` only when that GitHub repository lists a homepage URL.
 * That is the only field that renders a "Live demo" link.
 * `stars` and `forks`, when set, are shown with `factsAsOf` as the fetch date.
 *
 * Where the current facts came from
 * ----------------------------------
 * Name, handle, GitHub URL, join date, and public repository count are from
 * the GitHub API for @sauravanand542. Project copy, tags, and links are from
 * those public repositories (API metadata, READMEs, and source). Fetched
 * 2026-09-24. On that date the profile had no bio, location, company, blog,
 * or social accounts, so none are filled in here. Add a link only if it is
 * actually yours.
 */

export interface ProfileLink {
  label: string;
  href: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  /** One or two sentences. Keep it factual. */
  summary: string;
  /** Short points taken from the repo. Omit the field to hide the list. */
  highlights?: string[];
  /** Language, topics, and libraries actually present in the repo. */
  tags: string[];
  language: string;
  repo: string;
  /** GitHub homepage field. Renders a "Live demo" link when set. */
  homepage?: string;
  /** Other URLs the repository itself documents (write-up, package page). */
  links?: ProjectLink[];
  featured?: boolean;
  /** Star count from the GitHub API on `factsAsOf`. Omit to hide. */
  stars?: number;
  /** Fork count from the GitHub API on `factsAsOf`. Omit to hide. */
  forks?: number;
  license?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  summary: string;
  highlights?: string[];
}

export interface EducationItem {
  school: string;
  credential: string;
  start?: string;
  end?: string;
  detail?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  year?: string;
}

/** Date the GitHub API fields in this file were read (YYYY-MM-DD). */
export const factsAsOf = "2026-09-24";

export function formatFactsDate(iso: string = factsAsOf): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const profile = {
  name: "Saurav Anand",
  handle: "sauravanand542",
  handleLabel: "@sauravanand542",
  greeting: "Hi, I'm Saurav Anand",
  headline:
    "Open-source work in data science, machine learning, bioinformatics, and LLM apps.",
  roles: [
    "Data science",
    "Machine learning",
    "Bioinformatics",
    "AI tooling",
    "LLM apps",
  ],
  metaDescription:
    "Portfolio of Saurav Anand (@sauravanand542). Public repositories in data science, machine learning, bioinformatics, and AI tooling, including codebase-md.",
  siteUrl: "https://sauravanand542.github.io",
  githubUrl: "https://github.com/sauravanand542",
  /** GitHub profile `created_at`. */
  githubJoined: "2020-05-25",
  /** GitHub profile `public_repos` on `factsAsOf`. */
  publicRepos: 8,
  about: [
    "Saurav Anand is the name on the GitHub account @sauravanand542. The public repositories are Python, R, and Jupyter projects: data analysis, machine learning, an RNA-seq pipeline, and tools that call large language models.",
    "The most-starred repository is codebase-md, a command-line tool that writes project-context files for AI coding assistants. Alongside it are a FastAPI voice host that uses the OpenAI API and Twilio, differential-expression analysis with OLS regression, a Fetch Rewards SQL notebook, scraped job listings, and R analyses of Lending Club loans and Yelp reviews.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/sauravanand542",
    },
  ] as ProfileLink[],
  skills: [
    {
      title: "Languages and notebooks",
      items: ["Python", "R", "SQL", "Jupyter Notebook"],
    },
    {
      title: "Data, statistics, and modeling",
      items: [
        "pandas",
        "NumPy",
        "Matplotlib",
        "statsmodels",
        "tidyverse",
        "ggplot2",
        "tidytext",
        "caret",
        "glmnet",
        "xgboost",
        "ranger",
      ],
    },
    {
      title: "AI tooling and LLM apps",
      items: [
        "FastAPI",
        "OpenAI API",
        "Twilio",
        "Typer",
        "Pydantic",
        "tree-sitter",
        "Rich",
        "HTTPX",
      ],
    },
    {
      title: "Pipelines and bioinformatics",
      items: [
        "Selenium",
        "PostgreSQL",
        "SQLAlchemy",
        "NLTK",
        "Flask",
        "HISAT2",
        "fastp",
        "featureCounts",
      ],
    },
  ] as SkillGroup[],
  projects: [
    {
      title: "codebase-md",
      featured: true,
      language: "Python",
      license: "MIT",
      stars: 3,
      forks: 2,
      repo: "https://github.com/sauravanand542/codebase-md",
      links: [
        {
          label: "PyPI",
          href: "https://pypi.org/project/codebase-md/",
        },
      ],
      tags: ["Python", "Typer", "Pydantic", "tree-sitter", "CLI", "LLM"],
      summary:
        "A Python 3.11+ command-line tool, published on PyPI as codebase-md 0.1.0 under the MIT license. It scans a repository and writes context files so several AI coding tools share one project description.",
      highlights: [
        "Output covers CLAUDE.md, .cursorrules, AGENTS.md, codex.md, .windsurfrules, and PROJECT_CONTEXT.md.",
        "The README describes tree-sitter convention detection for Python, JavaScript, and TypeScript, dependency checks against PyPI and npm, and TF-IDF ranking for context queries.",
        "Git hooks can regenerate the files after a commit. The GitHub description calls it the universal project brain for AI coding tools.",
      ],
    },
    {
      title: "restaurant-ai-host",
      language: "Python",
      repo: "https://github.com/sauravanand542/restaurant-ai-host",
      tags: ["Python", "FastAPI", "OpenAI", "Twilio", "Uvicorn"],
      summary:
        "A FastAPI service the README names Sofia. A caller reaches it through a Twilio voice webhook. The app checks an in-memory seat schedule, takes takeout orders, writes each turn to a log, and sends SMS confirmations with Twilio.",
      highlights: [
        "Spoken replies come from the OpenAI chat completions API using GPT-3.5.",
        "The README’s setup uses a Twilio voice webhook pointed at the FastAPI route /incoming-call.",
      ],
    },
    {
      title: "rna_seq_pipeline",
      language: "Python",
      repo: "https://github.com/sauravanand542/rna_seq_pipeline",
      tags: ["Python", "pandas", "statsmodels", "Flask", "HISAT2"],
      summary:
        "A Python RNA-seq pipeline. fastp trims FASTQ reads, HISAT2 aligns them, and featureCounts builds a gene count matrix. differential_expression.py then fits an ordinary least-squares model with pandas and statsmodels.",
      highlights: [
        "app.py is a Flask server with a POST /run_pipeline route.",
        "The repository description summarizes the work as reading RNA sequences and testing genes with OLS regression. The README credits Saurav Anand.",
      ],
    },
    {
      title: "Fetch-rewards-assessment",
      language: "Jupyter Notebook",
      repo: "https://github.com/sauravanand542/Fetch-rewards-assessment",
      tags: ["Jupyter", "pandas", "PostgreSQL", "SQLAlchemy", "NumPy"],
      summary:
        "A Jupyter notebook for a Fetch Rewards exercise. It flattens receipts, brands, and users JSON into tables and answers data-quality, SQL, and stakeholder questions.",
      highlights: [
        "The notebook imports pandas, NumPy, Matplotlib, and SQLAlchemy, and the README says the queries run on PostgreSQL.",
        "An ER diagram in the repository shows how those datasets relate.",
      ],
    },
    {
      title: "Job-salary-prediction",
      language: "Jupyter Notebook",
      repo: "https://github.com/sauravanand542/Job-salary-prediction",
      tags: ["Jupyter", "Selenium", "pandas", "NLTK"],
      links: [
        {
          label: "Article",
          href: "https://medium.com/@sauravanand542/your-data-engineering-project-from-scratch-c71da4201b2a",
        },
        {
          label: "Tableau",
          href: "https://public.tableau.com/views/JobSalaryGlassdoor/Dashboard1DarkTheme?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        },
      ],
      summary:
        "Two notebooks. One scrapes job listings with Selenium and pandas. The other cleans description text with pandas, regular expressions, and NLTK stopwords.",
      highlights: [
        "The README says the project was a way to learn ETL pipelines and reports 188,789 jobs collected over a week.",
        "That same README links a Medium write-up and a public Tableau dashboard.",
      ],
    },
    {
      title: "Data-Analytics-Projects",
      language: "R Markdown",
      repo: "https://github.com/sauravanand542/Data-Analytics-Projects",
      tags: ["R", "tidyverse", "ggplot2", "caret", "xgboost", "tidytext"],
      summary:
        "Three R Markdown files and no README. They explore Lending Club loans and run a sentiment analysis of Yelp restaurant reviews.",
      highlights: [
        "Lending Club Part A lists authors Li Lin, Saurav Anand, and Abhishek Biswas, dated Sept 25, 2021, and uses the tidyverse and ggplot2.",
        "LendingClud_prediction.Rmd models that loan file with caret, glmnet, xgboost, ranger, and rpart.",
        "Yelp_sentimentanalysis.Rmd lists authors Abhishek Biswas, Saurav Anand, and Li Lin, dated 11/12/2021, and uses tidytext.",
      ],
    },
  ] as Project[],
  experience: [] as ExperienceItem[],
  education: [] as EducationItem[],
  certifications: [] as CertificationItem[],
};

export interface SiteSection {
  id: string;
  label: string;
}

/** Nav targets for sections that have something to show. */
export function navItems(): SiteSection[] {
  const items: SiteSection[] = [{ id: "about", label: "About" }];
  if (profile.experience.length > 0) items.push({ id: "experience", label: "Experience" });
  items.push({ id: "projects", label: "Projects" }, { id: "skills", label: "Skills" });
  if (profile.education.length > 0) items.push({ id: "education", label: "Education" });
  if (profile.certifications.length > 0) {
    items.push({ id: "certifications", label: "Certifications" });
  }
  items.push({ id: "contact", label: "Contact" });
  return items;
}
