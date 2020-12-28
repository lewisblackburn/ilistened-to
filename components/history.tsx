import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { Track } from "./track";

interface HistoryProps {
  token: string;
}

export const History: React.FC<HistoryProps> = ({ token }) => {
  const { data }: { data?: any } = useSWR(
    `/api/recently-played?token=${token}`,
    fetcher
  );

  if (data) {
    return (
      <div className="max-w-5xl mx-auto py-8 sm:p-0 p-5">
        <h1 className="font-bold text-3xl py-8 text-center">Recently Played</h1>
        {data.map((item: any, i: number) => (
          <div key={i}>
            <Track track={item.track} i={i} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex h-full justify-center items-center">
        <h1 className="font-bold text-3xl py-8 text-center">Loading...</h1>
      </div>
    );
  }
};
