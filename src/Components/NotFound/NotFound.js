import React from "react";
import './NotFound.css';
import { FontSizes } from '@fluentui/theme';
import { Icon } from '@fluentui/react/lib/Icon';
//DictionaryRemove

export default function NotFound(){
    return(
        <div id="Content_Notfound" style={{ fontSize: FontSizes.size50 }}>
            <h2>Page Not Found &nbsp; <Icon iconName="DictionaryRemove" /></h2>
        </div>
    )
}