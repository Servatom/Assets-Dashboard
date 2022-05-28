import {AiFillFolder} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Entity.css';

const Folder = ({name}) =>{

    let history = useHistory();
    return(
            <div className="folder entity" onClick = {()=>{
                console.log(history);
                history.location.pathname!=="/"?
                history.push(history.location.pathname + "/" + name):
                history.push(name);
            }}>
                <AiFillFolder size={100} color={'#FBB624'}/>
                <span>{name}</span>
            </div>
    );
}

export default Folder;