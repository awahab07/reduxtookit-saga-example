import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { RootState } from '../../store/root-reducer';
import { getData } from './state/common';
import User from './User';
import UserComments from './UserComments';

const UserContainer: React.FC<{}> = (): React.ReactElement => {
  const { userId } = useParams();
  const { user, comments } = useSelector(
    (state: RootState): Partial<RootState> => ({
      user: state.user,
      comments: state.comments,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch(getData(Number(userId)));
  }, []);

  return (
    <>
      <User user={user?.user} />
      <UserComments comments={comments?.comments} />
    </>
  );
};

export default UserContainer;
