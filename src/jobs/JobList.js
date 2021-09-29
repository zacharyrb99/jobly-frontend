import { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import JoblyAPI from "../JoblyAPI";
import JobCard from "./JobCard";
import JobSearchForm from './JobSearchForm';
import './JobList.css'

const JobList = () => {
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        searchJobs();
    }, [])

    async function searchJobs(name, minSalary, hasEquity) {
        let jobs = await JoblyAPI.getJobs(name, minSalary, hasEquity);
        setJobs(jobs);
    }

    if(!jobs) {
        return (
            <div className='JobList-loading'>
                <h1>Loading...</h1> <br></br>
                <Spinner style={{width: '7.5rem', height: '7.5rem'}} color='dark'>{' '}</Spinner>
            </div>
        )
    }

    return (
        <div className='JobList'>
            <JobSearchForm search={searchJobs}/>
            <br/>

            <h1>Job List:</h1>

            {jobs.map(job => {
                return <JobCard job={job}/>
            })}
        </div>
    )
}

export default JobList;