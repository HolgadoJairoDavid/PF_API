import Comment from '../../models/Comment'

const createComment = async (commentData: any) => {

  const newComment = await Comment.create(commentData)

  return newComment
}

export default createComment