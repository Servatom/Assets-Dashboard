import {AiFillFolder} from 'react-icons/ai';
import './Entity.css';

const Folder = () =>{
    return(
        <div className="folder entity">
            <AiFillFolder size={100} color={'#FBB624'}/>
            <span>Folder Name</span>
        </div>
    );
}

export default Folder;