export type CareerJob = {
  id: string;
  title: string;
  exp: string;
  location: string;
  skills: string[];
  description: string;
  type: string;
  posted: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
};

export const CAREER_JOBS: CareerJob[] = [
  {
    id: "power-bi-developer-sr-pune",
    title: "Power BI Developer (Sr.)",
    exp: "4-6 yr",
    location: "Pune",
    skills: ["Oracle", "Power BI", "SQL"],
    description:
      "Lead and drive the development in BI domain using Power BI eco-system with deep technical and BI ecosystem knowledge.",
    type: "Full-time",
    posted: "Recently",
    aboutRole:
      "As a Senior Power BI Developer in Pune, you will own end-to-end analytics delivery—from data modeling and DAX optimization to enterprise dashboard design. You will partner with consultants and clients to translate business needs into scalable Power BI solutions.",
    responsibilities: [
      "Design and develop enterprise-grade Power BI reports, dashboards, and semantic models.",
      "Optimize DAX measures, data models, and query performance for large datasets.",
      "Integrate Power BI with Oracle and SQL data sources via gateways and pipelines.",
      "Collaborate with BI consultants to gather requirements and deliver client-ready solutions.",
      "Establish development standards, documentation, and reusable templates for the team.",
      "Mentor junior developers and review code for quality and best practices.",
    ],
    requirements: [
      "4–6 years of experience in Power BI development and data visualization.",
      "Strong proficiency in DAX, Power Query (M), and data modeling concepts.",
      "Hands-on experience with Oracle and SQL for data extraction and transformation.",
      "Understanding of row-level security, deployment, and Power BI Service administration.",
      "Excellent communication skills for client-facing delivery.",
      "Bachelor's degree in Computer Science, IT, or a related field.",
    ],
  },
  {
    id: "power-bi-developer-sr-bangalore",
    title: "Power BI Developer (Sr.)",
    exp: "3-4 yr",
    location: "Bangalore",
    skills: ["Oracle", "Power BI", "SQL"],
    description:
      "Lead and drive the development in BI domain using Power BI eco-system with deep technical and BI ecosystem knowledge.",
    type: "Full-time",
    posted: "Recently",
    aboutRole:
      "Join our Bangalore team as a Senior Power BI Developer to build impactful analytics for enterprise clients. You will work on diverse industry projects while growing your technical depth in the Microsoft BI stack.",
    responsibilities: [
      "Build and maintain interactive Power BI dashboards aligned with business KPIs.",
      "Develop efficient data models and write optimized DAX for reporting accuracy.",
      "Connect and transform data from Oracle, SQL Server, and other enterprise sources.",
      "Work closely with project leads to scope, estimate, and deliver BI engagements.",
      "Troubleshoot performance issues in reports, datasets, and refresh schedules.",
      "Contribute to internal knowledge sharing and solution accelerators.",
    ],
    requirements: [
      "3–4 years of hands-on Power BI development experience.",
      "Solid SQL skills and experience working with relational databases (Oracle preferred).",
      "Proficiency in Power Query, data shaping, and star-schema modeling.",
      "Ability to work independently on client deliverables with minimal supervision.",
      "Strong analytical mindset and attention to detail.",
      "Bachelor's degree in a technical discipline.",
    ],
  },
  {
    id: "power-bi-developer-hg-pune",
    title: "Power BI Developer (H&G)",
    exp: "2-3 yr",
    location: "Pune",
    skills: ["Oracle", "Power BI", "SQL"],
    description:
      "Lead and drive the development in BI domain using Power BI eco-system with deep technical and BI ecosystem knowledge.",
    type: "Full-time",
    posted: "Recently",
    aboutRole:
      "This role focuses on Hospitality & Gaming (H&G) analytics—building specialized Power BI solutions for clients in these verticals. You will apply domain context while delivering polished, performance-tuned reports.",
    responsibilities: [
      "Develop Power BI dashboards tailored to Hospitality & Gaming business metrics.",
      "Model and integrate data from Oracle and SQL sources for H&G use cases.",
      "Implement calculated measures, hierarchies, and drill-through experiences for end users.",
      "Support UAT, defect fixes, and enhancements based on stakeholder feedback.",
      "Document data definitions, report logic, and deployment steps.",
      "Coordinate with senior developers on architecture and coding standards.",
    ],
    requirements: [
      "2–3 years of experience in Power BI or enterprise BI development.",
      "Working knowledge of SQL and Oracle data access patterns.",
      "Familiarity with hospitality, gaming, or similar operational reporting is a plus.",
      "Comfortable working in agile, client-facing project environments.",
      "Good problem-solving skills and eagerness to learn domain nuances.",
      "Bachelor's degree or equivalent practical experience.",
    ],
  },
  {
    id: "data-engineer-bi-specialist",
    title: "Data Engineer / BI Specialist",
    exp: "4-6 yr",
    location: "Pune",
    skills: ["Alteryx", "Denodo", "Tableau", "Teradata", "SQL"],
    description:
      "Design and develop scalable ETL workflows, data virtualization solutions, and interactive BI dashboards using Alteryx, Denodo, Tableau, and Teradata to support enterprise-scale analytics and business decision-making.",
    type: "Full-time",
    posted: "Recently",
    aboutRole:
      "You will bridge data engineering and business intelligence—building pipelines, virtualized data layers, and visual analytics that power enterprise decision-making across complex data landscapes.",
    responsibilities: [
      "Design and implement ETL/ELT workflows using Alteryx and related data integration tools.",
      "Build and maintain Denodo virtualized views for unified data access.",
      "Develop Tableau dashboards and support Teradata-based analytics workloads.",
      "Optimize SQL queries and pipeline performance for large-scale data processing.",
      "Collaborate with architects on data modeling, lineage, and quality standards.",
      "Support production issues, monitoring, and continuous improvement of data platforms.",
    ],
    requirements: [
      "4–6 years in data engineering, BI development, or analytics engineering.",
      "Strong experience with Alteryx, Denodo, Tableau, and Teradata.",
      "Advanced SQL skills and understanding of enterprise data warehouse concepts.",
      "Experience with data virtualization, ETL design, and performance tuning.",
      "Ability to communicate technical designs to business and consulting teams.",
      "Bachelor's degree in Computer Science, Engineering, or related field.",
    ],
  },
  {
    id: "azure-data-engineer-adf",
    title: "Azure Data Engineer (ADF)",
    exp: "3+ yr",
    location: "Pune",
    skills: [
      "Azure Data Factory",
      "SQL",
      "Azure Data Lake",
      "ETL/ELT",
      "ADF Pipelines",
    ],
    description:
      "Design and implement scalable ETL/ELT pipelines using Azure Data Factory, SQL, and Azure data services to enable reliable data integration, transformation, and enterprise-scale analytics solutions.",
    type: "Full-time",
    posted: "Recently",
    aboutRole:
      "As an Azure Data Engineer, you will design cloud-native data pipelines on Microsoft Azure—enabling reliable ingestion, transformation, and delivery of data for analytics and reporting platforms.",
    responsibilities: [
      "Build and maintain ADF pipelines for batch and incremental data loads.",
      "Integrate Azure Data Lake, SQL databases, and downstream analytics systems.",
      "Implement error handling, logging, monitoring, and retry strategies in pipelines.",
      "Optimize pipeline performance, cost, and scheduling across environments.",
      "Work with DevOps practices for CI/CD and environment promotion (dev/test/prod).",
      "Document pipeline architecture, dependencies, and operational runbooks.",
    ],
    requirements: [
      "3+ years of experience with Azure data services, especially Data Factory.",
      "Strong SQL skills and understanding of ETL/ELT design patterns.",
      "Hands-on experience with Azure Data Lake Storage and related Azure components.",
      "Familiarity with security, IAM, and networking basics in Azure.",
      "Scripting knowledge (Python or PowerShell) is advantageous.",
      "Bachelor's degree in Computer Science or equivalent experience.",
    ],
  },
  {
    id: "data-engineer-pyspark",
    title: "Data Engineer (Python & PySpark)",
    exp: "3+ yr",
    location: "Pune",
    skills: ["Python", "PySpark", "SQL", "Spark", "ETL/ELT"],
    description:
      "Design and develop scalable data pipelines using Python, PySpark, and SQL while contributing to data architecture, distributed processing, and enterprise-scale data platform optimization.",
    type: "Full-time",
    posted: "Recently",
    aboutRole:
      "You will engineer large-scale data pipelines using Python and PySpark—processing high-volume datasets and supporting modern analytics platforms with robust, performant data infrastructure.",
    responsibilities: [
      "Develop PySpark jobs and Python scripts for data ingestion and transformation.",
      "Design scalable ETL/ELT workflows on distributed processing frameworks.",
      "Write and optimize SQL for staging, validation, and analytical layers.",
      "Implement data quality checks, logging, and pipeline orchestration.",
      "Collaborate on data architecture decisions and platform modernization initiatives.",
      "Troubleshoot production pipeline failures and performance bottlenecks.",
    ],
    requirements: [
      "3+ years of data engineering experience with Python and PySpark/Spark.",
      "Strong SQL and understanding of distributed computing concepts.",
      "Experience building production-grade ETL pipelines and data lake patterns.",
      "Familiarity with cloud or on-prem big-data ecosystems is a plus.",
      "Good coding practices, version control, and documentation habits.",
      "Bachelor's degree in Computer Science, Data Engineering, or related field.",
    ],
  },
  {
    id: "qlik-sense-developer",
    title: "Qlik Sense Developer",
    exp: "3-4 yr",
    location: "Pune",
    skills: ["Qlik Sense", "QlikScript", "SQL", "ETL", "Data Modeling"],
    description:
      "Design and develop interactive Qlik Sense dashboards, data models, and ETL solutions to deliver scalable business intelligence and data visualization solutions for enterprise analytics.",
    type: "Full-time",
    posted: "Recently",
    aboutRole:
      "As a Qlik Sense Developer, you will create associative data models, compelling visualizations, and reliable reload processes that help clients explore data and act on insights quickly.",
    responsibilities: [
      "Develop Qlik Sense applications with optimized data models and expressions.",
      "Write QlikScript and SQL for data extraction, transformation, and loading.",
      "Build interactive dashboards with drill-down, bookmarks, and user-friendly UX.",
      "Manage app publishing, security rules, and reload schedules in Qlik environments.",
      "Partner with consultants to translate requirements into Qlik solutions.",
      "Support troubleshooting, enhancements, and performance tuning of Qlik apps.",
    ],
    requirements: [
      "3–4 years of experience developing with Qlik Sense or QlikView.",
      "Proficiency in QlikScript, set analysis, and data modeling best practices.",
      "Strong SQL skills and ETL workflow experience.",
      "Understanding of section access, governance, and enterprise deployment.",
      "Client-facing communication skills for requirements and demos.",
      "Bachelor's degree in IT, Computer Science, or a related discipline.",
    ],
  },
];

export const getCareerJobById = (jobId: string | undefined): CareerJob | undefined =>
  CAREER_JOBS.find((job) => job.id === jobId);
