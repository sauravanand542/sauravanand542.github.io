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
 * An empty array is not rendered, and its link is left out of the nav.
 * Append an object that matches the interface and the section appears
 * on the next build. Remove every entry to hide the section again.
 *
 *   experience:      { role, organization, start, end, summary, location?, highlights?, tags? }
 *   education:       { school, credential, detail?, start?, end? }
 *   certifications:  { name, issuer?, year? }
 *
 * `tags` on an experience entry are tools named in that role only.
 *
 * Projects
 * --------
 * Set `featured: true` on the card that should lead the projects section.
 * Set `homepage` only when that GitHub repository lists a homepage URL.
 * That is the only field that renders a "Live demo" link.
 * `stars` and `forks`, when set, are shown with `factsAsOf` as the fetch date.
 * `summary` is the one-line value statement. `points` are the problem,
 * approach, and outcome. `tags` are libraries verified in that repo.
 * `demonstrated` is the short role line under the story.
 *
 * Where the current facts came from
 * ----------------------------------
 * Career facts (headline, about, location, experience, education) are from
 * the public LinkedIn profile https://www.linkedin.com/in/saurava542, read
 * 2026-09-24. No certifications were listed there. Name, handle, GitHub URL,
 * join date, and public repository count are from the GitHub API for
 * @sauravanand542. Project copy, tags, and links are from those public
 * repositories (source, dependencies, and READMEs), fetched the same day.
 */

export interface ProfileLink {
  label: string;
  href: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectPoint {
  label: string;
  text: string;
}

export interface Project {
  title: string;
  /** One sentence a hiring manager can read first. */
  summary: string;
  /** Problem, approach, and outcome. Omit to hide. */
  points?: ProjectPoint[];
  /** What the work shows, in one line. Omit to hide. */
  demonstrated?: string;
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
  /** Tools named in this role's bullets. Omit when the role has none. */
  tags?: string[];
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
    "Data engineer for scalable pipelines, cloud migration, and healthcare analytics.",
  roles: [
    "Scalable pipelines",
    "Cloud migration",
    "SQL",
    "Python",
    "Healthcare analytics",
  ],
  availability: "Open to full-time data engineering roles",
  location: "Carteret, New Jersey",
  metaDescription:
    "Saurav Anand is a data engineer in Carteret, New Jersey. Scalable pipelines, cloud migration, SQL, Python, and healthcare analytics. Open to full-time roles.",
  siteUrl: "https://sauravanand542.github.io",
  githubUrl: "https://github.com/sauravanand542",
  /** GitHub profile `created_at`. */
  githubJoined: "2020-05-25",
  /** GitHub profile `public_repos` on `factsAsOf`. */
  publicRepos: 8,
  about: [
    "Saurav Anand is a data engineer in Carteret, New Jersey. He builds cloud-native data workflows that reduce cost, simplify infrastructure, and leave a team ready to scale. He is open to full-time data engineering roles.",
    "Recently he helped lead a migration from SQL Server to Databricks, building an internal tool around DuckDB and Delta Lake so the team could replace a traditional database with lightweight, file-based storage. That change reduced infrastructure costs by 30% and made the pipelines more modular and ready for analysis.",
    "He has worked in healthcare, product, and services, and he likes designing systems that make data fast, accessible, and reliable for the people who use it next. The tools he uses regularly are SQL, Python, DuckDB, Delta Lake, Databricks, Airflow, and Spark. He is looking for a full-time role where he can lead or contribute to cloud and data migrations, work with real-time pipelines, and help build architectures that stay cost-efficient as they grow.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/sauravanand542",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saurava542",
    },
  ] as ProfileLink[],
  skills: [
    {
      title: "Languages",
      items: ["SQL", "PL/SQL", "Python", "R", "Jupyter"],
    },
    {
      title: "Pipelines and cloud",
      items: [
        "PySpark",
        "Spark",
        "Azure Databricks",
        "Delta Lake",
        "DuckDB",
        "Airflow",
        "PostgreSQL",
        "SQLAlchemy",
        "Selenium",
      ],
    },
    {
      title: "Analytics, BI, and modeling",
      items: [
        "Power BI",
        "Tableau",
        "Excel",
        "SAP",
        "pandas",
        "NumPy",
        "Matplotlib",
        "scikit-learn",
        "statsmodels",
        "tidyverse",
        "ggplot2",
        "glmnet",
        "xgboost",
        "ranger",
        "NLTK",
        "tidytext",
      ],
    },
    {
      title: "Applications and bioinformatics",
      items: [
        "FastAPI",
        "Flask",
        "OpenAI API",
        "Twilio",
        "Typer",
        "Pydantic",
        "Rich",
        "HTTPX",
        "tree-sitter",
        "fastp",
        "HISAT2",
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
      tags: ["Python", "Typer", "Pydantic", "Rich", "PyYAML", "HTTPX", "tree-sitter"],
      summary:
        "One command writes the project brief that each AI coding assistant expects in a different file.",
      points: [
        {
          label: "Problem",
          text: "Claude Code, Cursor, Codex, and Windsurf all work better with a description of the repository, but each tool wants its own file, and those files go stale as the code changes.",
        },
        {
          label: "Approach",
          text: "A Python 3.11+ command-line app scans a repository, detects languages and architecture, reads dependency manifests, and infers naming and layout. Optional tree-sitter parsing covers Python, JavaScript, and TypeScript. It can check package health on PyPI and npm, answer a question about the repo with TF-IDF ranking, and refresh the files from a git hook.",
        },
        {
          label: "Outcome",
          text: "One scan produces six files: CLAUDE.md, .cursorrules, AGENTS.md, codex.md, .windsurfrules, and PROJECT_CONTEXT.md. The package is published on PyPI as codebase-md 0.1.0 under the MIT license. The README reports 354 passing tests.",
        },
      ],
      demonstrated:
        "Shipped a developer tool end to end: scanning, data modeling, file generation, packaging, and tests.",
    },
    {
      title: "restaurant-ai-host",
      language: "Python",
      repo: "https://github.com/sauravanand542/restaurant-ai-host",
      tags: ["Python", "FastAPI", "Uvicorn", "Twilio", "OpenAI API", "Requests"],
      summary:
        "A phone host that books a table or takes a takeout order by voice, then texts a confirmation.",
      points: [
        {
          label: "Problem",
          text: "Someone still has to answer the restaurant phone, check whether a table is free, and write down a takeout order.",
        },
        {
          label: "Approach",
          text: "Callers reach a FastAPI service through Twilio. The app turns speech into text, asks GPT-3.5-turbo for Sofia’s reply, and speaks it back. It checks a small in-memory seating chart, matches dishes against a fixed menu, and appends every turn to a log. A confirmed reservation sends a Twilio text message. A finished order is printed for the restaurant.",
        },
        {
          label: "Outcome",
          text: "The repository is a working call flow: greet the caller, reserve a table or build an order, then confirm. It does not report call volume or recognition accuracy.",
        },
      ],
      demonstrated:
        "Connected a phone system, a language model, and a simple booking record in one service.",
    },
    {
      title: "rna_seq_pipeline",
      language: "Python",
      repo: "https://github.com/sauravanand542/rna_seq_pipeline",
      tags: ["Python", "pandas", "statsmodels", "Flask", "fastp", "HISAT2", "featureCounts"],
      summary: "A scripted path from raw RNA sequencing files to a table of which genes changed.",
      points: [
        {
          label: "Problem",
          text: "Comparing gene activity between two conditions means trimming reads, aligning them to a genome, counting them, and testing the counts. Those steps usually live in separate tools.",
        },
        {
          label: "Approach",
          text: "Python scripts call fastp to trim FASTQ files, HISAT2 to align them to the human GRCh38 reference, and featureCounts to build a gene-count table. pandas and statsmodels then fit an ordinary least-squares model for each gene. The sample sheet lists four public sequencing runs split across two conditions. A small Flask app can start the statistical step over HTTP.",
        },
        {
          label: "Outcome",
          text: "The run writes a table with a coefficient, a p-value, and an R-squared for each gene, plus a short regression summary. The README explains how to read those columns. The repository does not include a finished gene list or a performance score.",
        },
      ],
      demonstrated:
        "Assembled a bioinformatics workflow and a regression a reader can open as a spreadsheet.",
    },
    {
      title: "Fetch-rewards-assessment",
      language: "Jupyter Notebook",
      repo: "https://github.com/sauravanand542/Fetch-rewards-assessment",
      tags: ["Jupyter", "Python", "pandas", "NumPy", "Matplotlib", "SQLAlchemy", "PostgreSQL", "SQL"],
      summary:
        "Turned nested rewards data into tables, then told stakeholders where the data could not answer their question.",
      points: [
        {
          label: "Problem",
          text: "Receipts, brands, and users arrived as JSON. Nested fields and missing keys make a basic question — which brands were scanned most often last month — hard to trust.",
        },
        {
          label: "Approach",
          text: "A Jupyter notebook flattens the three files into receipts, line items, users, and brands, charts missing values and unusual numbers, and loads the tables into PostgreSQL. A SQL query asks for the top five brands by receipts in the latest month. The repository includes an entity-relationship diagram, and the notebook closes with a note to the business team.",
        },
        {
          label: "Outcome",
          text: "The top-five query came back without brand names, because brand codes were missing for the latest month. The note flags missing barcodes and brand codes, a few extreme values (800+ points, 500+ items, or 4000+ dollars), and the risk of forcing this JSON into relational tables.",
        },
      ],
      demonstrated:
        "Data modeling, quality checks, SQL, and a plain-language note for non-technical stakeholders.",
    },
    {
      title: "Job-salary-prediction",
      language: "Jupyter Notebook",
      repo: "https://github.com/sauravanand542/Job-salary-prediction",
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
      tags: ["Python", "Jupyter", "Selenium", "pandas", "NumPy", "NLTK", "SQL", "Tableau"],
      summary: "Collected job ads, turned salary text into numbers, and laid them out for a dashboard.",
      points: [
        {
          label: "Problem",
          text: "Posted salaries are buried in listing text, so they cannot be compared until someone gathers the ads and cleans them.",
        },
        {
          label: "Approach",
          text: "A Selenium scraper pulls Glassdoor listings into a table: title, pay estimate, description, company, rating, location, and company facts. A second notebook drops hourly and blank rows, splits each pay range into a minimum, maximum, and average, separates city and state, groups role and seniority, and marks whether the description mentions skills such as Python, SQL, Spark, or Tableau. The notebook ends with a SQL Server table definition. The README describes the exercise as an ETL pipeline stored in an Azure database.",
        },
        {
          label: "Outcome",
          text: "The README says 188,789 jobs were collected over a week, and it links a public Tableau dashboard of the derived metrics plus a Medium write-up. The notebooks prepare those fields. They do not train a salary-prediction model.",
        },
      ],
      demonstrated: "Extraction, cleaning, and structuring of messy web data so it can be reported.",
    },
    {
      title: "Data-Analytics-Projects",
      language: "R Markdown",
      repo: "https://github.com/sauravanand542/Data-Analytics-Projects",
      tags: ["R", "tidyverse", "ggplot2", "lubridate", "glmnet", "xgboost", "ranger", "tidytext", "e1071"],
      summary:
        "Course analyses of consumer loans and restaurant reviews: do the numbers match the promise, and do the words match the stars?",
      points: [
        {
          label: "Problem",
          text: "Two classroom questions. For a sample of Lending Club’s 3-year loans, does the interest rate describe what borrowers actually repaid? And can the words in Yelp reviews separate higher and lower star ratings?",
        },
        {
          label: "Approach",
          text: "Three R Markdown files, and no README. The Lending Club exploration, credited to Li Lin, Saurav Anand, and Abhishek Biswas (25 September 2021), charts grade, rate, amount, and status on lcData100K.csv and computes an annualized return from payment dates. A modeling file then estimates payoff and that return with penalized regression, gradient-boosted trees, and random forests. The Yelp file, credited to Abhishek Biswas, Saurav Anand, and Li Lin (12 November 2021), charts stars against funny, cool, and useful votes, scores review words with the Bing, NRC, and AFINN lexicons, and classifies high versus low ratings with naive Bayes and random forests.",
        },
        {
          label: "Outcome",
          text: "The notebooks are the analysis: charts plus the model-training code. They do not state a final accuracy or name a winning model.",
        },
      ],
      demonstrated:
        "Shared analysis, named with two co-authors, covering exploration, text, and classical models in R.",
    },
  ] as Project[],
  experience: [
    {
      role: "Data Engineer",
      organization: "SpectraMedix",
      location: "New Jersey, United States",
      start: "Mar 2023",
      end: "Present",
      summary:
        "Builds healthcare data pipelines on Azure Databricks, including a SQL Server migration and the incentive calculations that sit on top of them.",
      highlights: [
        "Worked with the data science team on ETL pipelines shaped to state-specific business rules for a client.",
        "Turned ingested data into tables for different software products with Python, PySpark, and SQL on Azure Databricks.",
        "Validated pipeline data for quality assurance with SQL scripts across databases and tables.",
        "Optimized incentive calculation modules by 50% with Python and PySpark on Azure Databricks, increasing their efficiency.",
        "Took a key role in optimizing incentive modules and ETL pipelines, leading to a 20% improvement in customer satisfaction.",
        "Helped lead a migration from SQL Server to Databricks with an internal tool built around DuckDB and Delta Lake, reducing infrastructure costs by 30%.",
      ],
      tags: ["Python", "PySpark", "SQL", "Azure Databricks", "SQL Server", "DuckDB", "Delta Lake"],
    },
    {
      role: "Data Analyst",
      organization: "Insight",
      location: "United States",
      start: "Aug 2022",
      end: "Dec 2022",
      summary:
        "Data analyst at Insight. The public profile lists the title, dates, and country, and does not describe the work.",
    },
    {
      role: "Financial Operations Analyst Intern",
      organization: "Insight",
      location: "Addison, Illinois, United States",
      start: "Jun 2022",
      end: "Aug 2022",
      summary:
        "Pulled operational data out of SAP and moved reporting from Excel and SAP toward Power BI and Databricks.",
      highlights: [
        "Extracted large datasets from SAP with queries built on relational database principles, then used them for weekly reports.",
        "Increased the efficiency of reporting by developing and automating monthly analysis reports in Microsoft Excel.",
        "Led the move from Excel and SAP to Power BI and Databricks, increasing reporting efficiency by 80%.",
        "Worked with interns on other teams to create recruitment options aimed at technical talent in the United States.",
      ],
      tags: ["SAP", "Excel", "Power BI", "Databricks"],
    },
    {
      role: "Data Analyst",
      organization: "UM Green Lighting Private Limited",
      location: "Delhi, India",
      start: "May 2019",
      end: "Jun 2021",
      summary:
        "Wrote SQL and PL/SQL, built Tableau and Excel reports, and used scikit-learn to analyze data for management.",
      highlights: [
        "Developed and reviewed SQL queries with inner, left, and right joins in Tableau Desktop to validate static and dynamic data.",
        "Rendered insights and analytical reports, with recommendations, so management could plan.",
        "Wrote, tested, and implemented triggers, stored procedures, and functions in PL/SQL.",
        "Designed weekly and monthly reports in Excel, using charts, graphs, and pivot tables, and built PowerPoint presentations.",
        "Wrote SQL to fetch complex data from remote databases using joins, database links, and bulk collects.",
        "Analyzed and formatted data with machine-learning algorithms in Python using scikit-learn, and built graphical reports with NumPy and Matplotlib.",
        "Designed, developed, and maintained Tableau reports — scatter plots, geographic maps, and pie, bar, and density charts — from user requirements.",
      ],
      tags: ["SQL", "Tableau", "PL/SQL", "Excel", "PowerPoint", "Python", "scikit-learn", "NumPy", "Matplotlib"],
    },
  ] as ExperienceItem[],
  education: [
    {
      school: "University of Illinois Chicago",
      credential: "Master of Science, Business Analytics",
      start: "2021",
      end: "2022",
      detail: "GPA 3.75/4.00 · Chicago, IL",
    },
    {
      school: "SRM Institute of Science and Technology (SRM IST)",
      credential: "Bachelor of Technology, Electrical, Electronics and Communications Engineering",
      start: "2016",
      end: "2020",
      detail: "GPA 3.3/4.00 · Chennai, India",
    },
  ] as EducationItem[],
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
