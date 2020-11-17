import { useEffect, useState } from "react";

export const useScrollFetch = ({ goFetch }) => {
  useEffect(() => {
    if (!goFetch) return;
  }, [goFetch]);

  return {};
};
