import { comments, users } from "./data";
export async function GET(req) {
  //Assuming that the page limit is 10 comments only
  const pageLimit = 10;
  const totalNumOfComments = comments.length;
  const totalNumberOfPages = Math.ceil(totalNumOfComments / pageLimit);
  const searchParams = req.nextUrl.searchParams;
  const pageNumber = searchParams.get("pageNum");
  const startIndex = pageNumber * pageLimit - pageLimit;
  const endIndex = pageNumber * pageLimit >= comments.length ? undefined : pageNumber * pageLimit;
  const limitedComments = comments.slice(startIndex, endIndex);
  if (!endIndex) {
    return Response.json({ comments: limitedComments, loadedAllComments: true });
  } else {
    return Response.json({ comments: limitedComments, loadedAllComments: false });
  }
}

export async function POST(req) {
  const newCommentInfo = await req.json();
  const commentOwner = users.find((user) => user.id === newCommentInfo.userId);
  const newComment = {
    id: comments.length + 1,
    user: commentOwner,
    body: newCommentInfo.commentBody
  };
  comments.push(newComment);
  return Response.json({ newComment, status: 201 });
}
