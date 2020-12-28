import { NextApiRequest, NextApiResponse } from "next";
import { getRecentlyPlayed } from "../../lib/spotify";

interface Request extends NextApiRequest {
  query: {
    token: string;
  };
}

export default async (req: Request, res: NextApiResponse) => {
  const { token } = req.query;
  const response = await getRecentlyPlayed(token);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json(response.items);
};
