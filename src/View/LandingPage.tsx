import RemotiveApi from '../API/Api';
import CardLoader from '../Components/skeletonLoader/Card/CardLoader'
import Card from '../Components/Card/Card'
import { FunctionComponent, useEffect, useState } from 'react';
import { RemotiveApiResult } from '../API/model';

const LandingPage: FunctionComponent = () => {
    const githubAPI = new RemotiveApi();
    const [jobs, setJobs] = useState<RemotiveApiResult>();
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<any>(null);
    const loaderComponents = (() => {
        let loaderComponentsHandler = [];
        for (let i = 0; i < 16; i++)
            loaderComponentsHandler.push(<CardLoader key={i} />);
        return loaderComponentsHandler;
    })();

    const initialLoading = async () => {
        const StringifiedJobs = localStorage.getItem('jobs');
        const date = localStorage.getItem('date');
        let elapsed = 0;
        if (date)
            elapsed = (new Date().getTime() - new Date(JSON.parse(date)).getTime()) / (3600000 * 8);
        if (elapsed < 1 && StringifiedJobs) {
            setJobs(JSON.parse(StringifiedJobs));
            setError(false);
        }
        else {
            setLoading(true);
            const res = await githubAPI.getJobs().then(res => res).catch(() => setError(true)).finally(() => setLoading(false));
            if (res) {
                setJobs(res);
                setError(false);
            }
        }
        setLoading(false);
    }
    useEffect(() => {
        initialLoading();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: "#fcf7f2" }}>
            <div className="demo_wrap"></div>
            {(jobs && jobs.jobs.length < 1) && <div className="flex justify-center pt-24 sm:pt-12 text-4xl text-gray-600 min-h-screen" style={{ backgroundColor: "#fcf7f2" }}> <div>No jobs listed</div></div>}
            {(error && !loading) && <div className="flex flex-col items-center justify-start pt-20 sm:pt-9 text-gray-600 min-h-screen" style={{ backgroundColor: "#fcf7f2" }}>
                <h2 className="mb-7 text-xl">An Error occured please reload</h2>
                <button disabled={loading === true} onClick={() => initialLoading()} className="bg-red-500 p-3 px-14 mb-4 focus:outline-none hover:bg-red-700 rounded-xl text-white transition-colors duration-300">Reload</button></div>}
            {loading && <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#fcf7f2" }}>
                <section className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-10 my-20 sm:my-8">
                    {loaderComponents}
                </section>
            </div>}
            <section className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-10 my-20 sm:my-8">
                {jobs?.jobs && jobs!.jobs.map(({ salary, id, candidate_required_location, title, publication_date, company_name, company_logo_url, job_type }, i) =>
                    <Card key={i} salary={salary} id={id} location={candidate_required_location} title={title} type={job_type} created_at={new Date(publication_date)} company_name={company_name} company_logo={company_logo_url} />
                )}
            </section>
        </div>

    );
}

export default LandingPage;