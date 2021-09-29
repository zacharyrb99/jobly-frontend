import { useHistory } from 'react-router';
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import './CompanyCard.css'

const CompanyCard = ({company}) => {
    const history = useHistory();

    const redirect = () => {
        history.push(`/companies/${company.handle}`)
    }

    return (
        <Card className='CompanyCard' onClick={redirect}>
            <CardBody>
                <CardTitle tag='h5'>{company.name}</CardTitle>
                <CardSubtitle tag='h6' className='text-muted'>{company.numEmployees} Employees</CardSubtitle>
                <CardText>{company.description}</CardText>
            </CardBody>
        </Card>
    )
}

export default CompanyCard;