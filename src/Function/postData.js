import axios from "axios";
import Error_message from "./Error";

export default async function postData(val,path){

    let string = "";
    let url=string+path;
    //console.log(url);
    const Data = await new Promise((resolve,reject)=>{
        const value=JSON.parse(val);
        axios.post(url, value)
            .then(function (response) {
                const Data = JSON.stringify(response.data);
                resolve(Data);

            })
            .catch(function (error) {
                Error_message(error);
                console.log(`Error message is ${error}`);
                reject("#TP#");
            });

    });
    return Data;
  
}