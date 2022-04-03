import './Dashboard.css';
import URL from '../../Url';
import Page from '../Pages/Page';

const Dashboard=()=>
{
    return(
        <div className='dashboard'>
            <Page url={URL}/>
        </div>
    )
}

export default Dashboard;