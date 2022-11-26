import React from "react";
import RenderDecrypt from "./renderDecrypt";
import PreviewFile from "../../Function/previewFile";
import PostData from "../../Function/postData";
import './Decrypt.css';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export default function Decrypt(){
    const [DataElements, setDataElements] = React.useState([]);

    async function RPS(){
   
        //Read Post and set Data
        var password = document.getElementById("password").value; //Read password
        const a = await PreviewFile();
        //Check if file is empty
        if (a === "#TP@#") {
            console.log("Empty file");
        }
        else if (password.length === 0 || password.length<32) {
            //Check if password is alright
            alert("Enter Valid Password accroding to password requirement");
        }else {
            const content = JSON.stringify({ "Password": password, "values": a });
            //console.log(content);
            const res=await PostData(content, "decrypt");
            if (res ==="#TP#"){
                console.log("Error while posting");
            }else{
                updateState(res);
                //setDataElements(value);
            }
        }

    }
    
    async function updateState(value){
        let a =JSON.parse(value)
        setDataElements(a);
    }

    let Display = DataElements.map(item => (
        <RenderDecrypt acc={item.acc} pwd={item.pwd} key={item.acc} />
    ));

    return(
        <div id="Content">
            <div id="ChildItems">
            <input type="password" id="password" placeholder="Enter Master Password"></input>
                <input type="file" id="file" accept="application/JSON"></input>
                <PrimaryButton onClick={RPS} className="Submit-button" text="Submit" />
            {Display}
            </div>
        </div>
    )
}