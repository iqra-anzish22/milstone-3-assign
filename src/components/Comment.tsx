import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };

      setComments([...comments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  const handleSaveComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold">Comments</h2>
      <div>
        <Input
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your Name"
          className=' bg-gray-200 mt-6'
        />
        <Input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Your Comment"
          className='bg-gray-200 mt-8'
        />
        {editingCommentId ? (
          <Button onClick={handleSaveComment}className='bg-blue-600 text-white mt-6'>Save Comment</Button>
        ) : (
          <Button onClick={handleAddComment} className='bg-blue-600 text-white mt-6'>Add Comment</Button>
        )}
      </div>
      <div className='mt-6'>
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent>
              <p className='mt-4 px-12'>
                <strong>{comment.author}:</strong> {comment.text}
              </p>
              <Button onClick={() => handleEditComment(comment.id)} className='bg-blue-600 text-white mt-4'>Edit</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
