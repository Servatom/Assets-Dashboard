import { useState } from 'react';
import {AiFillFile} from 'react-icons/ai';
import './Entity.css';

const File = ({name, url, onClick}) =>{
    
    const [isImage, setIsImage] = useState(false);
    let splitName = name.split(".");
    let extension = splitName[splitName.length -1];
    extension=extension.toLowerCase();
    const imgExtensions = ['png', 'jpeg', 'jpg', 'gif', 'webp', 'svg'];

    return(
        <div className="file entity" onClick={onClick}>
            {
                imgExtensions.includes(extension)?
                <img className='mediaImage' src={url} alt={name}/>
                :
                <AiFillFile size={100} color={'#00C3E8'}/>
            }
            <span>{name}</span>
        </div>
    );
}

export default File;