export interface TimelineEntry {
  period: string;
  role: string;
  organization: string;
  subheader: string;
  kind: 'work' | 'education' | 'verv';
}

// Ordered newest → oldest.
export const timeline: TimelineEntry[] = [
  {
    period: 'Aug 2025 – present',
    role: 'Data Engineer, Consultant',
    organization: 'Bekk',
    subheader: 'Building modern data platforms — modeling, orchestration and pipelines with dbt, Dagster, dlt and Databricks.',
    kind: 'work',
  },
  {
    period: 'Jun – Aug 2024',
    role: 'Consultant',
    organization: 'PwC Norway',
    subheader: 'Built a RAG-based chatbot using LLMs, embeddings and vector databases to make internal knowledge accessible.',
    kind: 'work',
  },
  {
    period: '2020 – 2025',
    role: 'MSc Computer Science (Datateknologi)',
    organization: 'NTNU',
    subheader: 'Specialization in AI. Thesis on generating synthetic multivariate time series to make forecasting models more robust in the power market.',
    kind: 'education',
  },
  {
    period: '2022 – 2025',
    role: 'Developer (Volunteer)',
    organization: 'Studentermediene i Trondheim',
    subheader: 'Modernized iBok.no, a PHP site from 2006, by migrating it to Next.js + Tailwind on the frontend and Kotlin + Spring Boot on the backend, containerized with Docker and moved from on-prem to Azure with Terraform.',
    kind: 'verv',
  },
  {
    period: 'Jun – Aug 2023',
    role: 'Data Engineer (Intern)',
    organization: 'Airthings',
    subheader: 'Processed large volumes of sensor data with Python and Pandas, exposed datasets through a REST API, and built infrastructure on AWS with Terraform.',
    kind: 'work',
  },
  {
    period: 'Jun – Aug 2022',
    role: 'IT Consultant',
    organization: 'Capra Consulting',
    subheader: 'Built a travel planner for Campio with Next.js and Kotlin on GCP, integrating multiple external APIs for route optimization.',
    kind: 'work',
  },
  {
    period: '2021 – 2022',
    role: 'Developer (Volunteer)',
    organization: 'Propulse NTNU',
    subheader: 'Built the UI for the rocket simulator Penumbra — an Electron app in React + TypeScript with D3.js for statistics and Three.js for 3D visualization of simulation runs.',
    kind: 'verv',
  },
  {
    period: '2019 – 2021',
    role: 'Programmer',
    organization: 'FourC',
    subheader: 'Early software development experience.',
    kind: 'work',
  },
];
