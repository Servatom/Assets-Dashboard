import Folder from '../Entities/Folder';
import File from '../Entities/File';
import './Page.css';
import { useEffect, useState } from 'react';
import URL from '../../Url';

const Page=({url})=>
{
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                result.map(item =>{
                    if (item.isFolder == true)
                    {
                        setFolders((prevState)=>[...prevState, item]);
                    }
                    else{
                        setFiles((prevState)=>[...prevState, item]);
                    }
                })
            })
            .catch(error => console.log('error', error));
    },[url])

    const nameExtractor = (name) => {
        return name.replace(URL, '');
    }

    console.log(folders);
    console.log(files);
    let count = 0;

    return(
        <div className="page">
            {
                folders.map(item =>{
                    count++;
                    return(
                        <Folder 
                        name={nameExtractor(item.url)} 
                        key={count}
                        onClick={()=>{
                            return(<>
                                <h1>lol</h1>
                            </>);
                        }}
                        />
                    )
                }
                )
            }
            {
                files.map(item =>{
                    count++;
                    return(
                        <File name={nameExtractor(item.url)} key={count}/>
                    )
                }
                )
            }
        </div>
    )
}

export default Page;