import Folder from '../Entities/Folder';
import File from '../Entities/File';
import './Dashboard.css';

const Dashboard=()=>
{
    return(
        <div className="dashboard">
            <Folder/>
            <Folder/>
            <Folder/>
            <Folder/>
            <Folder/>
            <File/>
            <File/>
            <File/>
        </div>
    )
}

export default Dashboard;