import { NextResponse } from "next/server";
import prisma from "../../../utils/connect";
import { getAuthSession } from "@/utils/auth";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postid = searchParams.get("postid");

  try {
    if (!postid) {
      return new NextResponse(
        JSON.stringify(
          { message: "Missing 'postid' parameter" },
          { status: 400 }
        )
      );
    }

    const comments = await prisma.comment.findMany({
      where: {
        postSlug: postid,
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();
  // console.log(session);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email, slug: body.postSlug },
    });
    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
