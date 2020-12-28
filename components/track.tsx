import React from "react";

interface TrackProps {
  track: any;
  i: number;
}

export const Track: React.FC<TrackProps> = ({ track, i }) => {
  return (
    <a href={track.uri} className={"flex my-4 bg-gray-100 p-4 rounded-lg"}>
      <div className={"font-bold"}>{i + 1}</div>
      <div className={"inline-block truncate ml-2"}>
        <span className={"text-gray-800 font-medium truncate"}>
          {track.name}
        </span>
        <p className={"text-gray-500 truncate"}>{track.artists[0].name}</p>
      </div>
    </a>
  );
};
