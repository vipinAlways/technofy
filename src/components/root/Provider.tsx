"use client";
import { atom, useSetAtom } from "jotai";
import { useEffect } from "react";

export const entryUrlAtom = atom("");
export const sessionIdAtom = atom("");

export function Provider({ children }: { children: React.ReactNode }) {
  const setEntryUrl = useSetAtom(entryUrlAtom);
  const setSessionId = useSetAtom(sessionIdAtom);

  useEffect(() => {
    setSessionId(window?.crypto?.randomUUID?.());
    setEntryUrl(window.location.href);
  }, []);
  return <>{children}</>;
}
