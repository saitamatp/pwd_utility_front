import React from "react";
import './HomePage.css';
import { FontSizes } from '@fluentui/theme';
import { Icon } from '@fluentui/react/lib/Icon';

export default function HomePage(){
    return(
        <div id="Content_Home">
            <div style={{ fontSize: FontSizes.size50 }}>
                <h2>Welcome! and Greetings Internet Traveller &nbsp; <Icon iconName="TrainSolid" /></h2>
            </div>
            <div style={{ fontSize: FontSizes.size20 }}>
            <p>
             With the increase in online platforms, it has become redundant to remember passwords. I try to solve that problem by saving username and passwords by encrypting them in JSON file with a primary password. This JSON file then can be taken anywhere and decrypted with Master password
            
            </p>
            <p>
                Please feel free to try out our Web App, use one Password to view Passwords of multiple accounts. We don't store anything on server and the Passwords you enter will be encrypted and saved to a file which you can download.
                Use the encrypted file which you create to view all your passwords anywhere.
            </p>
            <p>
                If you are visiting us for the first time , please feel free to read our <a href="/guide">guide</a>. 
            </p>
            </div>
        </div>
    )
}