import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import Folder from './Entities/Folder';
import File from './Entities/File';
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const URL = "https://assets.servatom.com/";
  const { pathname } = useLocation();
  console.log(pathname);

  const [data, setData] = useState([]);
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  useEffect( () => {
    
    const fetchData = async () => {
        try {
          console.log(URL + pathname);
          let res = await axios.get(URL + pathname);
          setData(res.data);
          console.log(res.data);
    
          setFolders(res.data.filter((item) => item.isFolder));
          setFiles(res.data.filter((item) => !item.isFolder));
    
          console.log(files,folders);
          
        } catch (error) {
          console.log("Eroor:", error);
        }
    }
    fetchData();
  }, [pathname]);

  const getName = (url) =>{
    const params = url.split("/");
    return params[params.length - 1];
  }

  let name = "";
  return (
    <div className="dashboard">
    
      {
        folders.map((folder, index) => {
            name = getName(folder.url);
            return(
                
                <Folder name={name} key={index} />
            )
        })
      }
      {
        files.map((file, index) => {
            
            name = getName(file.url);

            return(
                <a href={file.url} target="_blank">
                    <File name={name} key={index} url={file.url}/>
                </a>
            )
        })
    }
    </div>
  );
};

export default Dashboard;
