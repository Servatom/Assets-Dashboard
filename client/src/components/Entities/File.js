import {AiFillFile} from 'react-icons/ai';
import './Entity.css';

const File = ({name, onClick}) =>{
    return(
        <div className="file entity" onClick={onClick}>
            <AiFillFile size={100} color={'#00C3E8'}/>
            <span>{name}</span>
        </div>
    );
}

export default File;