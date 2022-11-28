import React from "react";
import RenderDecrypt from "./renderDecrypt";
import PreviewFile from "../../Function/previewFile";
import PostData from "../../Function/postData";
import './Decrypt.css';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { FontSizes } from '@fluentui/theme';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { Icon } from '@fluentui/react/lib/Icon';

export default function Decrypt(){
    const [DataElements, setDataElements] = React.useState([]);
    const containerStackTokens = { childrenGap: 5 };
    async function RPS(){
        
        var password = document.getElementById("password").value; 
        const a = await PreviewFile();
        if (a === "#TP@#") {
            console.log("Empty file");
        }
        else if (password.length === 0 || password.length<32) {
            alert("Enter Valid Password according to password requirement");
        }else {
            const content = JSON.stringify({ "Password": password, "values": a });
            const res=await PostData(content, "decrypt");
            if (res ==="#TP#"){
                console.log("Error while posting");
            }else{
                updateState(res);
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

    const getStyles = () => {
        return {
            root: {
                maxWidth: '280px'
            }
        }
    };
    return(
        <div id="Content_Decrypt">
           
            <div style={{ fontSize: FontSizes.size50 }}>
                <h1>View your Passwords <Icon iconName="Fingerprint" /> </h1>
            </div>
            <div id="ChildItems_Decrypt">
               
                <div style={{ fontSize: FontSizes.size20 }}>
                    <Stack tokens={containerStackTokens}>
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
                <input type="file" id="file" accept="application/JSON"></input> <br></br>
               </Stack.Item>
               
                <Stack.Item>
                <PrimaryButton onClick={RPS} className="Submit-button" text="Submit" />
                </Stack.Item>
                 <Stack.Item>
                {Display}
                 </Stack.Item>
                </Stack>
                </div>
                
            </div>
        </div>
    )
}