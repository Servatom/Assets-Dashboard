import {AiFillFile} from 'react-icons/ai';
import './Entity.css';

const File = () =>{
    return(
        <div className="file entity">
            <AiFillFile size={100} color={'#00C3E8'}/>
            <span>File Name</span>
        </div>
    );
}

export default File;