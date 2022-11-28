import React from "react";
import RenderEncypt from "./RenderEncypt";
import PreviewFile from "../../Function/previewFile";
import PostData from "../../Function/postData";
import DownloadFile from "../../Function/downloadFile";
import './Encrypt.css';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { FontSizes } from '@fluentui/theme';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { Icon } from '@fluentui/react/lib/Icon';

 //Need to Add clear functionality(UserName and Password)
export default function Encypt(){
    const [DataElements, setDataElements] = React.useState([]);
    const [button, setButton] = React.useState(true);
    const [sbutton, setsButton] = React.useState(false);
    const containerStackTokens = { childrenGap: 10 };

    let Display = DataElements.map(item => (
        <RenderEncypt acc={item.Acc} pwd={item.Data} key={item.Acc} />
    ));

    async function RPS(){
        //Read Post and set Data
        if(DataElements.length===0){
        var password = document.getElementById("password").value; //Read password
        var account = document.getElementById("account").value;//Read new Account
        var pwd = document.getElementById("pwd").value;//Read New password
        const a = await PreviewFile();
        if (a === "#TP@#") {
            console.log("Empty file");
        }
        else if (password.length === 0 || password.length < 32) {
            //Check if password is alright
            alert("Enter Valid Password accroding to password requirement");
        } else {
            const content=JSON.stringify({
                "Password": password,
                "values": a,
                "acc":account,
                "pwd":pwd

            });
            //console.log(content);
            const res = await PostData(content, "encrypt");
            if (res === "#TP#") {
                console.log("Error while posting");
            } else {
                //console.log(res);
                let a = JSON.parse(res);
                if (a.isValid===false){
                    alert("Invalid Password");
                }else{
                    setDataElements(a.values);
                    //setButton(false);
                    SubmitButton()
                    
                }
            }
        }
    }else {
            password = document.getElementById("password").value; //Read New password
            account = document.getElementById("account").value;//Read new Account Values
            pwd = document.getElementById("pwd").value;//Read New password
            const content = JSON.stringify({
                "Password": password,
                "values": DataElements,
                "acc": account,
                "pwd": pwd

            });
            const res = await PostData(content, "encrypt");
            if (res === "#TP#") {
                console.log("Error while posting");
            } else {
                let a = JSON.parse(res);
                if (a.isValid === false) {
                    alert("Invalid Password");
                } else {
                    setDataElements(a.values);
                    //setButton(false);
                    SubmitButton();
                }
            }

    }
    
};
    function downloadFile(){
        DownloadFile(DataElements);
    };

    function SubmitButton(){

        if (window.confirm("Do you want to continue Adding Passwords")) {
            document.getElementById("account").value = "";
            document.getElementById("pwd").value="";

        } else {
            setsButton(true);
            setButton(false);
        }
    }
    const getStyles = () => {
        return {
            root: {
                maxWidth: '280px'
            }
        }
    };

    return(    
        <div id="Content_Encrypt">
            
            <div style={{ fontSize: FontSizes.size50 }}>
                <h1>Add Passwords to existing File <Icon iconName="Lock12" /></h1>
            </div>

            <div id="ChildItems_Encrypt">
                 <Stack tokens={containerStackTokens}>
                <div style={{ fontSize: FontSizes.size20 }}>
            <Stack.Item>
                <TextField
                        label="Enter Master Password"
                        type="password"
                        canRevealPassword
                        revealPasswordAriaLabel="Show password"
                        id="password" placeholder="Password"
                        styles={getStyles}
                    />
                </Stack.Item>
                <Stack.Item>
                <TextField
                        label="Enter Account Name"
                        canRevealPassword
                        id="account" placeholder="Account/User Name"
                        styles={getStyles}
                    />
                </Stack.Item>
                <Stack.Item>
                <TextField
                        label="Enter Account Password"
                        type="password"
                        canRevealPassword
                        revealPasswordAriaLabel="Show password"
                        id="pwd" placeholder="Account/User Name Password"
                        styles={getStyles}
                    />
                </Stack.Item>
                <Stack.Item>
                <br></br>
                <input type="file" id="file" accept=".json"></input>
                </Stack.Item>
                <br></br>
                <Stack.Item>
                <PrimaryButton onClick={RPS} id="Submit-button" text="Submit" disabled={sbutton} />
                </Stack.Item>
                <br></br>
                <Stack.Item>
                <PrimaryButton onClick={downloadFile} id="Download-button" text="Download Contents" disabled={button} />
                </Stack.Item>
                <Stack.Item>
                {Display}
                </Stack.Item>
                </div>
                </Stack>
            </div>
        </div>
    )
}