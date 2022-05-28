import {AiFillFolder} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Entity.css';

const Folder = ({name, onClick}) =>{

    return(
            <div className="folder entity" onClick={onClick}>
                <AiFillFolder size={100} color={'#FBB624'}/>
                <span>{name}</span>
            </div>
    );
}

export default Folder;