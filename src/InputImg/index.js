import React, { useState, useRef } from "react";

function InputImg() {
  const arr = ["123", "456"];
  const [passImg, setPassImg] = useState(null);

  //   Array
  // ArrayBuffer
  // ArrayBufferView
  // Blob
  // DOMString
  const data = new Blob(arr); //size type

  const sliceBlob = data.slice(0, 2); //切割Blob
  console.log(data, sliceBlob);

  const fileReader = new FileReader();
  fileReader.readAsDataURL(sliceBlob);
  console.log(fileReader);

  function getFileBase64Encode(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  function createImageFromFile(img, file) {
    return new Promise((resolve, reject) => {
      //製作src綁上DOM
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(img.src);
        resolve(img);
      };

      img.onerror = () => reject("Failure to load image.");
    });
  }

  const imgPos = useRef(null);

  const handleUp = (e) => {
    // const img = new Image();
    const [file] = e.target.files;
    // const reader = new FileReader()
    // reader.onload = function ({ target: { result } }) {
    //   console.log('hello', result.byteLength) // result 是一個 ArrayBuffer
    // }
    console.table(e.target.files); //沒有URL資訊
    //file or Blob
    // const objectURL = URL.createObjectURL(blob);
    const imgDOM = new Image();

    createImageFromFile(imgDOM, file)
      .then((img) => {
        img.width = 200;
        img.height = 200;
        //   getFileBase64Encode(file).then((b64) => console.log(b64));
        //   setPassImg(img.src);
        //   console.log(img.src);
        //   setPassImg(img.src);
        return img;
      })
      .then(() => getFileBase64Encode(file).then((b64) => setPassImg(b64)));

    // setPassImg(e.target.value);
  };
  //   name: "0f2d66e6-2eb0-4b2a-9aeb-15e77cf271a3.png"
  // size: 10678
  // type: "image/png"

  const resizeImage = (image, size, offset = { x: 0, y: 0 }) => {
    return new Promise((resolve, reject) => {
      if (image !== null) {
        const { width, height } = size;
        const { x, y } = offset;

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const ratio = width / image.width;

        if (!height) {
          canvas.width = width;
          canvas.height = image.height * ratio;
        } else {
          canvas.width = width;
          canvas.height = height;
        }

        // ctx.fillStyle = "rgb(0, 0, 0)"; //default
        ctx.rect(0, 0, width, height);
        // ctx.fill();

        ctx.drawImage(image, x, y, width, image.height * ratio);
        const dataURL = canvas.toDataURL("image/jpg");

        console.log(' dataURL', dataURL)
        //解base64
        const blobBin = atob(dataURL.split(",")[1]);
        const array = blobBin.split("").map((c) => c.charCodeAt());
        const imageFile = new Blob([new Uint8Array(array)], {
          type: "image/jpg",
        });
        // console.log("imageFile", imageFile);

        resolve({ imageFile, dataURL });
      } else {
        reject("No image");
      }
    });
  };

  const handleUp2 = (e) => {
    const [file] = e.target.files;
    if (file.length === 0) return;
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      resizeImage(img, { width: 300, height: 300 }).then(
        (r) => setPassImg(r.dataURL)
        // getFileBase64Encode(r.imageFile).then((b64) => {
        //   URL.revokeObjectURL(img.src);
        //   setPassImg(b64);
        // })
      );
    };
  };

  // ---------------file obj 處理-------
  //   FileReader 物件是可以讓網頁非同步的去讀取在客戶端的檔案
  // FileReader 所接受的參數就是 File 和 Blob 的物件。


  const handleDL = (e) => {
    const [file] = e.target.files
    const reader = new FileReader()
    reader.readAsDataURL(file)
    //下載流程
    reader.onload = () => {
      const a = document.createElement('a')
      a.href = reader.result
      a.download = 'fileName'
      a.click()
    }
  }

  return (
    <>
      <input id="upload-file" type="file" multiple onChange={handleUp} />
      <img src={passImg} alt="" style={{ width: "200px", height: "200px" }} />
      {passImg}
      <input type="file" onChange={handleUp2} />
      {/* <img ref={imgPos} alt="" /> */}

      <hr />
      <div>download</div>
      <input type="file" onChange={handleDL} />

    </>
  );
}

export default InputImg;
