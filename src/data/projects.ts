export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tier: 1 | 2;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    slug: 'real-time-finance-pipeline',
    title: 'Real-time Financial Transaction Pipeline', // TODO: EDIT
    description: 'A low-latency data pipeline processing financial transactions using Kafka and Spark Streaming.', // TODO: EDIT
    tier: 1,
    tech: ['Apache Kafka', 'Apache Spark', 'Python', 'Azure'],
    githubUrl: 'https://github.com/VegSja/real-time-finance-pipeline',
    featured: true,
    year: 2024,
  },
  {
    slug: 'dbt-portfolio-analytics',
    title: 'dbt Analytics Framework for Portfolio Reporting', // TODO: EDIT
    description: 'Scalable data modeling framework for investment portfolios, reducing reporting time by 80%.', // TODO: EDIT
    tier: 1,
    tech: ['dbt', 'Snowflake', 'SQL', 'GitHub Actions'],
    githubUrl: 'https://github.com/VegSja/dbt-portfolio-analytics',
    featured: true,
    year: 2023,
  },
  {
    slug: 'cost-optimized-dw',
    title: 'Cost-optimized Snowflake Data Warehouse', // TODO: EDIT
    description: 'Terraform modules for provisioning isolated, cost-controlled Snowflake virtual warehouses.', // TODO: EDIT
    tier: 1,
    tech: ['Terraform', 'Snowflake', 'Python'],
    githubUrl: 'https://github.com/VegSja/cost-optimized-dw',
    featured: true,
    year: 2023,
  },
  {
    slug: 'airflow-financial-ingestion',
    title: 'Airflow DAG Templates for Financial Data Ingestion', // TODO: EDIT
    description: 'Reusable Airflow operators for idempotently fetching end-of-day market data from external APIs.', // TODO: EDIT
    tier: 1,
    tech: ['Apache Airflow', 'Python', 'Docker'],
    githubUrl: 'https://github.com/VegSja/airflow-financial-ingestion',
    featured: false,
    year: 2022,
  },
  {
    slug: 'market-sentiment-analysis',
    title: 'Market Sentiment Analysis tool', // TODO: EDIT
    description: 'A side project parsing financial news to gauge market sentiment using NLP.', // TODO: EDIT
    tier: 2,
    tech: ['Python', 'FastAPI', 'HuggingFace'],
    githubUrl: 'https://github.com/VegSja/market-sentiment-analysis',
    year: 2022,
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio', // TODO: EDIT
    description: 'Minimal, statically generated portfolio built with Astro and Tailwind CSS.', // TODO: EDIT
    tier: 2,
    tech: ['Astro', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/VegSja/homepage',
    year: 2024,
  }
];
