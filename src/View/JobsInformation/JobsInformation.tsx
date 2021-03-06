import React, { FunctionComponent, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useParams, useHistory } from "react-router-dom";
import HeaderJobs from '../../Components/JobsInformation/Header/HeaderJobs'
import { Job } from '../../API/model';
import SkeletonLoaderHeaderJobs from '../../Components/skeletonLoader/Card/MoreInformation/SkeletonLoaderHeaderJobs';
import './style.css'

const JobsInformation: FunctionComponent = () => {
    const { id }: { id: string } = useParams();
    const [job, setjob] = useState<Job>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    let history = useHistory();

    useEffect(() => {
        const StringifiedJobs = localStorage.getItem('jobs');
        if (StringifiedJobs) {
            const jobs = JSON.parse(StringifiedJobs).jobs;
            const currentJob = jobs.find((job: Job) => job.id === parseInt(id));
            if (currentJob)
                setjob(currentJob);
            else
                history.push("/");
            setIsLoading(false);
        }
        else history.push("/");
        // eslint-disable-next-line
    }, [id]);
    return (
        <div className='flex flex-col relative min-h-screen'>
            <section className="m-1 mt-24 p-4 rounded-xl sm:m-8 sm:mt-3 card-color">
                {isLoading && <SkeletonLoaderHeaderJobs />}
                {job && <><HeaderJobs salary={job.salary} how_to_apply={job.url} location={job.candidate_required_location} title={job.title} type={job.job_type}
                    created_at={new Date(job.publication_date)} company={job.company_name} company_logo={job.company_logo_url} />
                    <div className="job--description my-3 px-2 border__color__desc border-t-2 pt-4">
                        {parse(job.description)}
                    </div></>}
            </section>
        </div>

    )

}

export default JobsInformation;