import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import React, { FunctionComponent } from 'react';
import NoLogo from '../../assets/no-logo.png';
import './style.css'
import { Link } from "react-router-dom";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo();

interface card {
    type: string,
    created_at: Date | number,
    company_name: string,
    location: string
    title: string
    company_logo?: string,
    id: number,
    salary: string
}

const Card: FunctionComponent<card> = ({ title, type, created_at, company_name, company_logo, location, id, salary }) => {
    return (
        <Link to={`jobs/${id}`}>
            <div className="w-full h-full bg-gray-200 relative rounded-lg cursor-pointer shadow-sm card card-color">
                <div className="color_background_card rounded-lg overflow-hidden absolute -top-7 left-4 h-14 w-14 img-container">
                    <img className="object-contain" width="56px" height="56px" src={company_logo ? company_logo : NoLogo} alt={`logo-${company_name}`} />
                </div>
                <div className="p-3 description h-full">
                    <div className="mt-5 flex items-center">
                        <div className="text-gray-600">{timeAgo.format(created_at)}</div>
                        <div className="rounded-full h-2 w-2 card__Rounded-color ml-2" />
                        <div className="ml-2 text-gray-600">{type}</div>
                    </div>
                    <div><strong className="text-black inline-block my-1 text-md">{title}</strong></div>
                    <div className="text-gray-600 mb-4">{company_name}</div>
                    <div className="mt-auto text-indigo-600">Remote {location.split(',').length > 1 ? `${location.split(',')[0]},Location...` : location}</div>
                </div>
            </div>
        </Link>
    );
}

export default Card;