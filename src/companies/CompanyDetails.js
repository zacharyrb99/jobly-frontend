import JoblyAPI from "../JoblyAPI";
import { Spinner } from "reactstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobCard from '../jobs/JobCard';

const CompanyDetails = () => {
    const [companyInfo, setCompanyInfo] = useState(null);
    const {handle} = useParams();

    useEffect(() => {
        getCompanyInfo(handle);
    }, [handle]);

    async function getCompanyInfo(handle) {
        let company = await JoblyAPI.getCompany(handle);
        setCompanyInfo(company);
    }

    if(!companyInfo) {
        return (
            <div className='CompanyDetails-loading'>
                <h1>Loading...</h1> <br></br>
                <Spinner style={{width: '7.5rem', height: '7.5rem'}} color='dark'>{' '}</Spinner>
            </div>
        )
    }

    console.log(companyInfo.jobs);

    return (
        <div>
            <h1>{companyInfo.name}</h1>
            <p>{companyInfo.description}</p>
            
            {companyInfo.jobs.map(job => {
                return <JobCard job={job} />
            })}
        </div>
    )
}

export default CompanyDetails;