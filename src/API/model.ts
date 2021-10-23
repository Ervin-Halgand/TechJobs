export interface RemotiveApiResult {
    "0-legal-notice": string,
    "job-count": string,
    jobs: Job[],
}

export interface Job {
    id: number,
    url: string,
    title: string,
    company_name: string
    category: string,
    job_type: string,
    publication_date: string,
    candidate_required_location: string,
    salary: string,
    description: string,
    tags: [],
    company_logo_url?: string,
}