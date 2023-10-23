import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect";

//Get Single Post
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: slug,
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ massage: "Something went wrong!" }, { status: 500 })
    );
  }
};
