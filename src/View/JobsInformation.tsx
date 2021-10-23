import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useParams, useHistory } from "react-router-dom";
import GithubJobsApi from '../API/Api';
import HeaderJobs from '../Components/JobsInformation/Header/HeaderJobs'
import './style.css'
import { Job } from '../API/model';

const JobsInformation = ({ apiGithub }: { apiGithub: GithubJobsApi; }) => {
    const { id }: { id: string } = useParams();
    const [job, setjob] = useState<Job>();
    let history = useHistory();

    useEffect(() => {
        const StringifiedJobs = localStorage.getItem('jobs');
        if (StringifiedJobs) {
            const jobs = JSON.parse(StringifiedJobs).jobs;
            const currentJob = jobs.find((job: Job) => job.id === parseInt(id));
            console.log(currentJob);
            if (currentJob)
                setjob(currentJob);
            else
                history.push("/");
        }
        else history.push("/");
        // eslint-disable-next-line
    }, [id]);
    return (
        <>
            {job && <section className="m-1 mt-14 p-4 rounded-xl bg-gray-200 sm:m-8 sm:mt-3">
                <HeaderJobs salary={job.salary} how_to_apply={job.url} location={job.candidate_required_location} title={job.title} type={job.job_type}
                    created_at={new Date(job.publication_date)} company={job.company_name} company_logo={job.company_logo_url} />
                <div className="job--description my-3 px-2 border-gray-300 border-t-2 pt-4">
                    {parse(job.description)}
                </div>
            </section>
            }
        </>

    )

}

export default JobsInformation;