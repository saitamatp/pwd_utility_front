import React from "react";
import "./Guide.css"
import { FontSizes } from '@fluentui/theme';
import { Icon } from '@fluentui/react/lib/Icon';

export default function Guide(){
    return(
        <div id="Content">

            <div style={{ fontSize: FontSizes.size50 }}>
                <h1>Guide  &nbsp;  <Icon iconName="BookAnswers" /></h1>
            </div>


            <div style={{ fontSize: FontSizes.size25 }}>
                <h2>How to Begin &nbsp;  <Icon iconName="QuickNote" /></h2>
            </div>
            <div style={{ fontSize: FontSizes.size20 }}>
           <ol>
                <li>Start by clicking on <a id="Anchor" href="/new">“Fresh Start”</a> on the Nav bar.</li>
                <li >Create a Master password which suits yourself,  of 32 characters .</li>
                <li>Once you have added your Password you can download the encrypted file with your password.</li>
           </ol>
           </div>


            <div style={{ fontSize: FontSizes.size25 }}>
                <h2>Adding a new password to File &nbsp;  <Icon iconName="Lock12" /></h2>
            </div>
            <div style={{ fontSize: FontSizes.size20 }}>
            <ol>
                <li>Click on <a href="/encrypt">“Encrypt”</a>.</li>
                <li>Type in your Master password, email id/user id for which you require a password to remember and type in your corresponding password.</li>
                <li>Choose your existing encrypted file from your local device to save the details or add in a new location to save your passwords.</li>
                <li>Recheck the details and click on submit.</li>
                <li>If you want to add more more Passwords, a prompt will pop up asking the same. Click okay to add more passwords else cancel</li>
                <li>You can also click on Download Contents to view your account details and your Encrypted passwords.</li>
            </ol>
            </div>


            <div style={{ fontSize: FontSizes.size25 }}>
                <h2>How to decrypt file? &nbsp;  <Icon iconName="Fingerprint" /> </h2>
            </div>
            <div style={{ fontSize: FontSizes.size20 }}>
            <ol>
                <li>Click on <a href="/decrypt">“Decrypt”</a>.</li>
                <li>Enter your 32 character master password.</li>
                <li>Choose the encrypted file from the local device and click Submit.</li>
                <li>Your Account details with the decrypted passwords will be loaded on your screen.</li>
            </ol>
        </div> 
        </div>
    )
}