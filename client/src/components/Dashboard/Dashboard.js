import './Dashboard.css';
import Page from '../Pages/Page';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard=()=>
{
    const [path,setPath] = useState(useLocation().pathname || "");
    useEffect(()=>{
        setPath(path);
    }, [path])
    
    console.log('Current path: ',path);
    
    return(
        <div className='dashboard'>
            {/* <h1>Dashboard</h1> */}
            <Page path={path} onItemClick = {setPath}/>
        </div>
    )
}

export default Dashboard;