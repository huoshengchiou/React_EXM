import React from "react";
import PropTypes from "prop-types";

const Image = ({
  src,
  fallbackExt = "jpg",
  type = "image/webp",
  alt = "",
  media,
  ...props
}) => {
  const fileName = src.split(".")[0];
  const str = `${process.env.PUBLIC_URL}/static/media/images/`;
  return (
    <picture>
      <source srcSet={`${str}${src}`} type={type} media={media} />
      <img src={`${str}${fileName}.${fallbackExt}`} alt={alt} {...props} />
    </picture>
  );
};

Image.propTypes = {
  /** 提供欲呈現的檔名 eg. background_image.webp */
  src: PropTypes.string,
  /** 欲呈現圖片的檔案型態 */
  type: PropTypes.string,
  /** 替代圖片的副檔名 eg. png */
  fallbackExt: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;

let isSupported;
export const isWebpSupported = () => {
  if (isSupported === undefined) {
    const elm = document.createElement("canvas");
    if (!!(elm.getContext && elm.getContext("2d"))) {
      isSupported = elm.toDataURL("image/webp").indexOf("data:image/webp") >= 0;
    } else {
      isSupported = false;
    }
  }
  return isSupported;
};

export const uploadImage = (event) => {
  return new Promise((resolve, reject) => {
    if (event.target.files.length === 0) reject("No file uploaded");

    const imageFile = event.target.files[0];
    const ext = imageFile.name.split(".").pop();
    const support = ["jpeg", "jpg", "png"];

    if (support.indexOf(ext) >= 0) {
      const img = document.createElement("img");
      img.onload = () => {
        resolve(img);
      };
      img.src = URL.createObjectURL(imageFile);
    } else {
      reject(`Only supports ${support.join(", ")} files`);
    }
  });
};

export const resizeImage = (image, size, offset = { x: 0, y: 0 }) => {
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

      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.rect(0, 0, width, height);
      ctx.fill();

      ctx.drawImage(image, x, y, width, image.height * ratio);
      const dataURL = canvas.toDataURL("image/jpg");
      //解base64
      const blobBin = atob(dataURL.split(",")[1]);
      const array = blobBin.split("").map((c) => c.charCodeAt());
      const imageFile = new Blob([new Uint8Array(array)], {
        type: "image/jpg",
      });

      resolve({ imageFile, dataURL });
    } else {
      reject("No image");
    }
  });
};
