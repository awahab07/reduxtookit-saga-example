import { ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Comment from '@material-ui/icons/Comment';
import IUserComment from '../../models/user/UserComment';

const UserComment: React.FC<{ comment: IUserComment }> = ({
  comment,
}: {
  comment: IUserComment;
}): React.ReactElement => {
  return (
    <ListItem>
      <ListItemIcon>
        <Comment color={'primary'} fontSize={'small'} />
      </ListItemIcon>
      <ListItemText>
        <Typography variant={'subtitle2'}>{comment?.title}</Typography>
        <Typography variant={'body2'}>{comment?.body}</Typography>
      </ListItemText>
    </ListItem>
  );
};

const UserComments: React.FC<{ comments?: IUserComment[] | null }> = ({
  comments,
}: {
  comments?: IUserComment[] | null;
}): React.ReactElement => {
  return (
    <>
      {comments && (
        <Paper elevation={1}>
          <List aria-label="comments">
            {comments.map(
              (comment: IUserComment, i: number): React.ReactElement => (
                <>
                  <UserComment key={comment.id} comment={comment} />
                  {i < comments.length - 1 && <Divider />}
                </>
              ),
            )}
          </List>
        </Paper>
      )}
    </>
  );
};

export default UserComments;
