import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect";

//Get Single Post
export const GET = async (req, { params }) => {
  const { slug } = params;
  console.log(slug);
  try {
    const comments = await prisma.comment.findMany({
      where: { ...(slug && { postId: slug }) },
      include: { user: true },
    });
    console.log(comments);
    return new NextResponse(JSON.stringify("working", { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ massage: "Something went wrong!" }, { status: 500 })
    );
  }
};
