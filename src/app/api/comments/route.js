import { NextResponse } from "next/server";
import prisma from "../../../utils/connect";

//Get Single Post
export const GET = async (req) => {
  const { searchparams } = new URL(req.url);
  console.log(searchparams);
  const postId = searchparams.get("postid");
  console.log(postId);
  try {
    // const comments = await prisma.comment.findMany({
    //   where: { ...(postId && { postId }) },
    //   include: { user: true },
    // });
    console.log("comments");
    return new NextResponse(JSON.stringify("woring", { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ massage: "Something went wrong!" }, { status: 500 })
    );
  }
};
