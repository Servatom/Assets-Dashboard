import {AiFillFolder} from 'react-icons/ai';
import './Entity.css';

const Folder = ({name}) =>{
    return(
        <div className="folder entity">
            <AiFillFolder size={100} color={'#FBB624'}/>
            <span>{name}</span>
        </div>
    );
}

export default Folder;