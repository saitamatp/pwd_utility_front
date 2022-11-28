import React from "react";
import PostData from "../../Function/postData";
import RenderDecrypt from "../encrypt/RenderEncypt";
import DownloadFile from "../../Function/downloadFile";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import "./start.css";
import { FontSizes } from '@fluentui/theme';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { Icon } from '@fluentui/react/lib/Icon';

 //Need to Add lock functionality for button
export default function StartPath(){
    const [DataElements, setDataElements] = React.useState([]);
    const [button, setButton] = React.useState(true);
    const [sbutton, setsButton] = React.useState(false);
    const containerStackTokens = { childrenGap: 10 };

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

     const getStyles = () => {
        return {
            root: {
                maxWidth: '280px'
            }
        }
    };



    return(
        <div id="Content_Start">
             <div style={{ fontSize: FontSizes.size50 }}>
                <h1>Start Encrypting your Passwords   <Icon iconName="QuickNote" /></h1>
            </div>

            <div id="ChildItems_Start">
            <Stack tokens={containerStackTokens}>
                <Stack.Item>
                <TextField
                        label="Enter Master Password"
                        type="password"
                        canRevealPassword
                        revealPasswordAriaLabel="Show password"
                        id="password" placeholder="Password"
                        styles={getStyles}
                        description='Please create a password of exactly 32 characters long'
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
                </Stack>
            </div>
        </div>
    )
}