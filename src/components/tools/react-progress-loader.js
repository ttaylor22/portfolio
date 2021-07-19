import React, { useCallback, useEffect, useState } from 'react';



const ProgressLoader = ({ title, percentage, timeInterval, path, isStatic, titleStyle, percentageStyle, progressStyle, progressContainerStyle }) => {
    // let history = useHistory()

    const randID = Math.random().toString(36);

    const frameStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px"
    }

    progressStyle = progressStyle === undefined ? {
        height: "15px",
        borderRadius: "16px",
        background: "crimson",
    } : progressStyle

    progressContainerStyle = progressContainerStyle === undefined ? {
        borderRadius: "16px",
        background: "lightgrey",
        overflow: "auto"
    } : progressContainerStyle

    titleStyle = titleStyle === undefined ? {
        fontVariantCaps: "all-petite-caps",
        fontSize: "larger"
    } : titleStyle

    percentageStyle = percentageStyle === undefined ? {
        fontVariantCaps: "all-petite-caps",
        fontSize: "large"
    } : percentageStyle

    const [bool, setBool] = useState(false)
    const move = useCallback((l) => {

        var per = document.getElementsByClassName(`percentage-${randID}`)[0];
        var bar = document.getElementsByClassName(`bar-${randID}`)[0];

        if (path === '#skills' && !bool) {


            var width = 1;
            var id = setInterval(frame, timeInterval);
            function frame() {
                if (width >= l) {
                    clearInterval(id);

                } else {
                    width++;
                    bar.style.width = width + "%";
                    per.innerHTML = width + "%";
                }
            }


            setBool(true)
        } else if (path !== '#skills' && !bool) {
            bar.style.width = 0 + "%";
            per.innerHTML = 0 + "%";
        }
    }, [path, bool, setBool, randID, timeInterval])

    const dontMove = () => {
        var per = document.getElementsByClassName(`percentage-${randID}`)[0];
        var bar = document.getElementsByClassName(`bar-${randID}`)[0];
        bar.style.width = percentage + "%";
        per.innerHTML = percentage + "%";
    }

    // const [bool, setBool] = useState(false)
    useEffect(() => {
        // if (!bool) {
        !isStatic ?
            move(percentage)
            : isStatic.toLowerCase() === "yes" ? dontMove() : move(percentage)
        //         setBool(true)
        // }


    })


    return <div>
        <div style={frameStyle}>
            <div style={titleStyle}>
                {title}
            </div>
            <div style={percentageStyle} className={`percentage-${randID}`} />

        </div>
        <div style={progressContainerStyle} className={`progress-${randID}`}>
            <div style={progressStyle} className={`bar-${randID}`} />
        </div>
    </div>


}

export default ProgressLoader