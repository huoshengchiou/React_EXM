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

const payloadWhenErr = [];

// codeMap.get(status);

const handleErr = (status, setState, f) => {
  f(payloadWhenErr);
  //not specialresult in  case undefined
  readErrCode(status)
    ? setState(readErrCode(status))
    : setState(<TestC status={status} />);
};

export const senseError = (res, setState, f) => {
  //fetch fall
  if (!fetchSuccess(res)) {
    f(payloadWhenErr);
    return;
  }
  const { header, body } = res.data;
  const { status } = header;
  apiSuccess(status) ? f(body) : handleErr(status, setState, f);
};

const handleErr2 = (status, f, errF) => {
  f(payloadWhenErr);
  //not specialresult in  case undefined
  readErrCode(status)
    ? errF(readErrCode(status))
    : errF(<TestC status={status} />);
};

export const senseError2 = (res, f, errF) => {
  //fetch fall
  if (!fetchSuccess(res)) {
    f(payloadWhenErr);
    return;
  }
  const { header, body } = res.data;
  const { status } = header;
  apiSuccess(status) ? f(body) : handleErr2(status, f, errF);
};
