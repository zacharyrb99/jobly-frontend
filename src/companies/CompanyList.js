import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import JoblyAPI from '../JoblyAPI';
import CompanyCard from './CompanyCard';
import CompanySearchForm from './CompanySearchForms';
import './CompanyList.css';

const CompanyList = () => {
    const [companies, setCompanies] = useState(null);

    useEffect(() => {
      searchCompanies();  
    }, []);

    async function searchCompanies(name, minEmployees, maxEmployees) {
        let companies = await JoblyAPI.getCompanies(name, minEmployees, maxEmployees);
        setCompanies(companies);
    }

    if(!companies){
        return (
            <div className='CompanyList-loading'>
                <h1>Loading...</h1> <br></br>
                <Spinner style={{width: '7.5rem', height: '7.5rem'}} color='dark'>{' '}</Spinner>
            </div>
        )
    }

    return (
        <div className='CompanyList'>
            <CompanySearchForm search={searchCompanies}/>
            <br/>

            <h1>Company List:</h1>

            {companies.map(company => {
                return <CompanyCard key={company.handle} company={company}/>
            })}
        </div>
    )
}

export default CompanyList;