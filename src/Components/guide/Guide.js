import React from "react";
import "./Guide.css"

export default function Guide(){
    return(
        <div id="Content">
           <h1>Guide</h1>
           <h2>How to Begin</h2>
           <ol>
                <li>Start by clicking on <a id="Anchor" href="/new">“Fresh Start”</a> on the main web page.</li>
                <li >Create a Master password which suits yourself, a minimum of 32 character consisting password is required to ensure safety.</li>
                <li>Once you have added your Password yoou can download the encrypted file with your password</li>
           </ol>
            <h2>Adding a new password to File</h2>
            <ol>
                <li>Click on <a href="/encrypt">“Encrypt”</a>.</li>
                <li>Type in your Master password, email id/user id for which you require a password to remember and type in your corresponding password.</li>
                <li>Choose your existing encrypted file from your local device to save the details or add in a new location to save your passwords.</li>
                <li>Recheck the details and click on submit.</li>
                <li>If you want to add more more Passwords, a prompt will pop up asking the same. Click okay to add more passwordselse cancel</li>
                <li>You can also click on Download Contents to view your account details and your Encrypted passwords.</li>
            </ol>
            <h2>How to decrypt file?</h2>
            <ol>
                <li>Click on <a href="/decrypt">“Decrypt”</a>.</li>
                <li>Enter your 24 character master password.</li>
                <li>Choose the encrypted file from the local device and click Submit.</li>
                <li>Your Account details with the decrypted passwords will be loaded on your screen.</li>
            </ol>
          
        </div>
    )
}