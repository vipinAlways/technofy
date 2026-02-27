"use client";
import { atom, useSetAtom } from "jotai";
import { useEffect } from "react";

export const entryUrlAtom = atom("");
export const sessionIdAtom = atom("");

export function Provider({ children }: { children: React.ReactNode }) {
  const setEntryUrl = useSetAtom(entryUrlAtom);
  const setSessionId = useSetAtom(sessionIdAtom);

  useEffect(() => {
    setEntryUrl(window.location.href);
  }, []);
  useEffect(() => {
    setSessionId(window?.crypto?.randomUUID?.());
  }, []);
  return <>{children}</>;
}
