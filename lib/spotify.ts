import urlcat from "urlcat";

export const REDIRECT_URI = urlcat("https://accounts.spotify.com/authorize", {
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID || null,
  redirect_uri:
    process.env.NODE_ENV === "production"
      ? "https://ilistened-to.vercel.app/"
      : "http://localhost:3000",
  response_type: "token",
  scope: ["user-read-recently-played"].join(" "),
});

export const parseToken = (): string | null => {
  const hash = window.location.href.split("#")[1];
  if (!hash) return null;

  const querystring = hash.split("&").map((part) => {
    const [key, value] = part.split("=");
    return { key, value };
  });

  return querystring.find(({ key }) => key === "access_token")?.value || null;
};

export const getRecentlyPlayed = async (token: string) => {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=50",
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return response;
};
