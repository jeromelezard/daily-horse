"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Component props.
export interface ErrorLayoutProps {
  errorCode: string;
  errorText: string;
  action: "home" | "refresh";
}
export default function ErrorLayout({
  errorCode,
  errorText,
  action,
}: ErrorLayoutProps) {
  const router = useRouter();

  /**
   * Determines the action of the error page button.
   */
  function reset() {
    if (action == "home") return router.replace("/");
    window.location.reload();
  }

  return (
    <div className="fixed w-dvw h-dvh flex items-center justify-center p-8">
      <div className="max-w-full w-[32rem] bg-white rounded-2xl shadow-2xl flex flex-col gap-4 items-center overflow-hidden p-8 py-12 justify-center">
        <FontAwesomeIcon
          icon={faHeartCrack}
          className="text-rose-400 text-5xl"
        />

        <div className="flex flex-col w-full items-stretch gap-3 my-5">
          <h1 className="font-extrabold text-5xl text-slate-500 text-center">
            {errorCode}
          </h1>
          <div className="text-sm !select-text font-medium text-slate-400 text-center">
            {errorText}
          </div>
        </div>
        <p className="text-sm">
          <Button
            onClick={reset}
            // icon={action == "home" ? faChevronLeft : faRefresh}
            // accent="rose"
            className="text-slate-500 capitalize"
            variant={"outline"}
          >
            {action}
          </Button>
        </p>
      </div>
    </div>
  );
}
