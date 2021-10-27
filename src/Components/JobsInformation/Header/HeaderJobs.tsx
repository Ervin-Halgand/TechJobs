import React, { FunctionComponent } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import NoLogo from '../../../assets/no-logo.png'
import Button from '../../Buttons/Button';
import { useHistory } from 'react-router-dom';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo();

interface HeaderJobsProps {
    type: string,
    created_at: Date | number,
    company: string,
    location: string
    title: string,
    salary: string,
    company_logo?: string,
    how_to_apply: string
}

const HeaderJobs: FunctionComponent<HeaderJobsProps> = ({ title, type, created_at, company, company_logo, location, how_to_apply, salary }) => {
    let history = useHistory();
    return (
        <div className="w-full flex text-md relative flex-wrap md:flex-nowrap">
            <div className="absolute -top-20 h-20 w-20 img-container sm:h-32 sm:w-32 md:h-60 md:w-60 sm:static rounded-2xl overflow-hidden color_background_card">
                <img className="object-contain w-full h-full" src={company_logo ? company_logo : NoLogo} alt={`logo-${company}`} />
            </div>
            <div className="lg:ml-10 ml-2 relative flex flex-1 flex-col">
                <div className="flex items-center ">
                    <div className="text-gray-600">{timeAgo.format(created_at)}</div>
                    <div className="rounded-full h-2 w-2 card__Rounded-color ml-2" />
                    <div className="ml-2 text-gray-600">{type}</div>
                </div>
                <h2><strong className="text-black inline-block  mt-3 mb-1 md:text-xl">{title}</strong></h2>
                {salary && <div className='text-gray-600 mb-2'><strong>{salary}</strong></div>}
                <div className="text-gray-600">{company}</div>

                <div className="mt-auto sm:bottom-2 text-indigo-600">Remote {location}</div>

            </div>
            <div className="ml-auto self-center w-full md:w-auto flex flex-col">
                <Button text="Apply now" addClass="p-5 w-full mt-10 md:mt-0 md:w-auto flex sm:text-xl font-semibold justify-center" clicked={() => window.open(how_to_apply, "_blank")} />
                <Button text="Back" addClass="p-5 w-full mt-2 sm:mt-3 md:w-auto flex sm:text-xl font-semibold justify-center" clicked={() => history.push("/")} />
            </div>
        </div>
    );
};

export default HeaderJobs;