import axios from "axios";
import React, { useState, useEffect } from "react";
import Spiner from "./Spiner";

function Docs() {
  const [docs, setDocs] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get('https://www.markdownguide.org/api/v1/basic-syntax.json')
      .then((response) => {
        const data=response.data.basic_syntax
        console.log(response.data.basic_syntax);
        setDocs(data);
        setIsLoading(true)
      }).catch(()=>{
        console.log("error");
        setIsLoading(false)
      });
  }, []);

  return (
    <div className="docs">
 {isLoading?docs.map((item,index)=>{
        return (
            <div  key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {item.additional_examples.map((elem,num)=>{
                return <div  className="example" key={num}>
               <h2>Example {num+1} :</h2>
              <p className="title">name -</p>
              <code>{elem.name}</code>
              <p  className="title">description -</p>
              <code>{elem.description}</code>
              <p  className="title"> markdown -</p>
              <code>{elem.markdown}</code>
              <p  className="title">html -</p>
              <code>{elem.html}</code>
                </div>
            })}
          </div>
        )
     }):<Spiner/>
     }
    </div>
  );
}

export default Docs;