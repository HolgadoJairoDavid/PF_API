import Comment from "../../models/Comment";

const findComment = async (Game: any) => {
  const comments = await Comment.find(Game);
  const average = (
    comments.reduce((total, comment) => {
      return total + Number(comment.stars);
    }, 0) / comments.length
  ).toFixed(1);

  return { average, comments };
};

export default findComment;
