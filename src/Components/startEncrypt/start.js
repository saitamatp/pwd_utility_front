import React from "react";
import PostData from "../../Function/postData";
import RenderDecrypt from "../encrypt/RenderEncypt";
import DownloadFile from "../../Function/downloadFile";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import "./start.css";

 //Need to Add lock functionality for button
export default function StartPath(){
    const [DataElements, setDataElements] = React.useState([]);
    const [button, setButton] = React.useState(true);
    const [sbutton, setsButton] = React.useState(false);

    let Display = DataElements.map(item => (
        <RenderDecrypt acc={item.Acc} pwd={item.Data} key={item.Acc} />
    ));

    async function RPS(){
        var password = document.getElementById("password").value; //Read password
        var account = document.getElementById("account").value;//Read new Account
        var pwd = document.getElementById("pwd").value;//Read New password
        if(password.length === 0 || password.length < 32) {
            //Check if password is alright
            alert("Enter Valid Password accroding to password requirement");
        } else {
        let content = JSON.stringify(
            {
                "Password": password,
                "acc": account,
                "pwd": pwd
            }

        );
        const res=await PostData(content, "encrypt_first");
            if (res === "#TP#") {
                console.log("Error while posting");
            } else {
                //console.log(res);
                let a = JSON.parse(res);
                if (a.isValid === false) {
                    alert("Invalid Password");
                } else {
                    //console.log(a.values);
                    setDataElements([a.values]);
                    setButton(false);
                    setsButton(true);
                }
            }
    }
    }
    function downloadFile() {
        DownloadFile(DataElements);
    };

    return(
        <div id="Content">
            <div id="ChildItems">
            <input type="password" id="password" placeholder="Enter Master Password"></input>
            <input type="text" id="account" placeholder="Enter Account Password"></input>
            <input type="password" id="pwd" placeholder="Enter Password Password"></input>
            
            <PrimaryButton onClick={RPS} id="Submit-button" text="Submit" disabled={sbutton} />
            <PrimaryButton onClick={downloadFile} id="Download-button" text="Download Contents" disabled={button} />

            {Display}
        </div>
        </div>
    )
}