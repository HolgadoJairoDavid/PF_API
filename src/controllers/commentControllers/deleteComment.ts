import Comment from '../../models/Comment'

const deleteComment = async (id:string) => {

   await Comment.findByIdAndDelete(id)

  return {message: 'Successfully'}
}

export default deleteComment