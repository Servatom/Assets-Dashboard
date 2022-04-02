import Folder from '../Entities/Folder';
import File from '../Entities/File';
import './Dashboard.css';
import { useEffect, useState } from 'react';
import URL from '../../Url';

const Dashboard=()=>
{
    const [data,setData]=useState([]);
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(URL, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result);
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
    },[])

    const nameExtractor = (name) => {
        return name.split('/')[name.split('/').length - 1];
    }

    console.log('folders', folders);
    console.log('files', files);
    let count = 0;

    return(
        <div className="dashboard">
            {
                folders.map(item =>{
                    count++;
                    return(
                        <Folder name={nameExtractor(item.url)} key={count}/>
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

export default Dashboard;