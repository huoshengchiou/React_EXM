import React from 'react'
import testImg from './123.avif'

function TestBlob() {

    //透過 a DOM
    function saveData(blob, fileName) {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';

        // 將 blob 放到 URL 上
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();

        // 釋放記憶體
        a.href = '';
        URL.revokeObjectURL(url);
    }

    const handleClick = () => {
        const htmlDOM = ['<div>i am DOM </div>']
        const htmlBlob = new Blob(htmlDOM, { type: 'text/html' })

        saveData(htmlBlob, 'blob2html.html');

    }


    const handleClick2 = () => {
        const blob = new Blob(['body { background-color: yellow; }'], { type: 'text/css' });
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = URL.createObjectURL(blob);

        console.log(link)
        // document.body.appendChild(link);
    }
    const handleClick3 = () => {
        //ArrayBuffer
        const buffer = new ArrayBuffer(2)
        const bytes = new Uint8Array(buffer)
        bytes[0] = 65
        bytes[1] = 66

        const blob = new Blob([buffer], { type: 'text/plain' })
        const dataUri = window.URL.createObjectURL(blob)
        //在另外一頁開啟
        window.open(dataUri)
        // https://pjchender.github.io/2018/02/06/webapis-blob-file-%E5%92%8C-filereader/#keywords-new-Blob-Blob-prototype-size-Blob-prototype-type-Blob-prototype-slice
    }



    return (
        <>
            <button onClick={handleClick}>HTMLsave</button>
            <button onClick={handleClick2}>Blob URL CSS</button>
            <button onClick={handleClick3}>ArrayBuffer</button>
            <img src={testImg} alt="" />


        </>
    )
}

export default TestBlob
