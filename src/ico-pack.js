import $ from "jquery";

import * as alignCenter from "@fortawesome/fontawesome-free-solid/faAlignCenter.js";
import * as alignJustify from "@fortawesome/fontawesome-free-solid/faAlignJustify.js";
import * as alignLeft from "@fortawesome/fontawesome-free-solid/faAlignLeft.js";
import * as alignRight from "@fortawesome/fontawesome-free-solid/faAlignRight.js";

export function pushIcon(container, iconObj) {
    $("" + container).append(`
    <div style="width:100px;
                height:100px;
                border: 1px solid grey;
                padding:5px 10px;
                background-color:#673AB7;
                box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.65);
                margin:5px;">
        <svg data-prefix="${iconObj.prefix}"
             data-icon="${iconObj.iconName}"
             role="img" viewBox="0 0 ${iconObj.icon[0]}
             ${iconObj.icon[1]}">
            <path fill="orange" d="${iconObj.icon[4]}"></path>
        </svg>
    </div>`);
}

export {alignCenter,alignJustify,alignLeft,alignRight};