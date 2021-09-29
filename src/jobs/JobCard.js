import { useContext, useEffect, useState } from "react";
import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap";
import UserContext from "../auth/UserContext";
import './JobCard.css';

const JobCard = ({job}) => {
    const salary = parseInt(job.salary).toLocaleString();
    const {alreadyApplied, apply} = useContext(UserContext);
    const [applied, setApplied] = useState();
    
    useEffect(() => {
        console.debug("JobCard useEffect updateAppliedStatus", "id=", job.id, "applied=", applied);
        console.log(alreadyApplied(job.id));

        setApplied(alreadyApplied(job.id));
    }, [job.id, alreadyApplied]);

    const handleApply = async (e) => {
        if(alreadyApplied(job.id)) return;
        apply(job.id);
        setApplied(true);
    }

    return (
        <Card className='JobCard'>
            <CardBody>
                <CardTitle tag='h5'>{job.title}</CardTitle>
                <CardSubtitle tag='h6' className='text-muted'>Salary: {salary !== "NaN" ? `$${salary}`: 'Not Specified'}</CardSubtitle>
                <CardSubtitle tag='h6' className='text-muted'>Equity: {job.equity}</CardSubtitle>
            
                {!applied 
                    ? <Button className='JobCard-button' color='danger' onClick={handleApply}>Apply</Button>
                    : <Button className='JobCard-button' color='success' disabled>Already Applied</Button>}
            </CardBody>
        </Card>
    )
}

export default JobCard;
