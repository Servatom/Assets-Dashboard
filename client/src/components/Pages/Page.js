import Folder from "../Entities/Folder";
import File from "../Entities/File";
import "./Page.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import URL from "../../Url";
import { Link } from "react-router-dom";

const Page = () => {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname);
    const [data, setData] = useState([]);
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        console.log("Current path: ", URL + path);
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(URL + path, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                console.log(data);
            })
            .catch((error) => console.log("error", error));

        setFiles(data.filter((item) => item.isFolder === false));
        setFolders(data.filter((item) => item.isFolder === true));
    }, [location]);

    const nameExtractor = (name) => {
        return String(name).replace(URL, "");
    };

    let count = 0;

    return (
        <div className="dashboard">
            <div className="page">
                {folders.map((item) => {
                    count++;
                    let name = nameExtractor(item.url);
                    return (
                        <Link to={path + "/" + name} onClick={()=>{console.log(path + name)}}>
                            <Folder
                                name={nameExtractor(item.url)}
                                key={count}
                                url={item.url}
                                path={path}
                            />
                        </Link>
                    );
                })}
                {files.map((item) => {
                    count++;
                    return (
                        <File
                            name={nameExtractor(item.url)}
                            key={count}
                            url={item.url}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Page;
