import React from "react";
import TestC from "./TestC";
// intl
// import EnhanceDialog

//match special case
const codeMap = new Map([["1234", "<TestC />"]]);

//fetch 200
const fetchSuccess = (x) => x?.status === 200;
//define error code
const apiSuccess = (x) => x.toUpperCase() === "OK";

const readErrCode = (x) => codeMap.get(x);

// codeMap.get(status);

const handleErr = (status, setSome) => {
  //not specialresult in  case undefined
  readErrCode(status)
    ? setSome(readErrCode(status))
    : setSome(<TestC status={status} />);
};

export const senseError = (res, f, setSome) => {
  //fetch fall
  if (!fetchSuccess(res)) return;
  const { header, body } = res.data;
  const { status } = header;
  apiSuccess(status) ? f(body) : f([]);
  if (apiSuccess(status)) return;
  handleErr(status, setSome);
};
