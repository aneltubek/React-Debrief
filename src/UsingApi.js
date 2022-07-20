//import React from 'react';
import  React, {useState, useEffect} from 'react';


export const UsingApi = () => {
    //const [ key , setKey ] = useState([]);
    const [ resourceType, setResourceType ] = useState('posts');
    const [ items, setItems ] = useState([]);

    useEffect(() => {
            fetch (`https://jsonplaceholder.typicode.com/${resourceType}`)
                .then(response => response.json())
                .then(json => setItems(json))
    }, [resourceType])
    return (
        <div className='bodyCont'>
            <div className='btnDiv'>
            <button className="resourceBtn" onClick={()=> 
setResourceType('posts')}>posts</button>
            <button className="resourceBtn" onClick={()=> 
setResourceType('users')}>users</button>
            <button className="resourceBtn" onClick={()=> 
setResourceType('comments')}>comments</button>
            </div>
            <h1 className='resourceHeading'>{resourceType}</h1>
            <div className='outputField'>
            {items.map(item=>{
            return <pre className='preField'>{items.indexOf(item) + 
JSON.stringify(item)}</pre>
        })}
            </div>
        </div>
    )
}