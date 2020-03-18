import React from 'react';
import { Grid, List, Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {
  createStyles,
  makeStyles,
  StyleRules,
  Theme,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { HomeRounded, PersonRounded } from '@material-ui/icons';
import BusinessRounded from '@material-ui/icons/BusinessRounded';
import IUser from '../../models/user/User';
import ICompany from '../../models/Company';
import UserAddress from './UserAddress';

export interface IUserProps {
  user?: IUser | null;
}

const UserCompanyInfo = (props: {
  company?: ICompany;
  chipClass?: string;
}): React.ReactElement => (
  <Grid item={true} container={true} direction={'column'} xs={true} spacing={4}>
    <Typography gutterBottom={true} variant="subtitle1">
      {props.company?.name}
    </Typography>
    <Grid item={true} container={true} spacing={2}>
      {(props.company?.bs?.split(' ') || []).map(
        (bs: string): React.ReactElement => (
          <Chip
            key={bs}
            size={'small'}
            label={bs}
            className={props.chipClass}
          />
        )
      )}
    </Grid>
    <Grid item={true} container={true} spacing={2}>
      {(props.company?.catchPhrase?.split(' ') || []).map(
        (cp: string): React.ReactElement => (
          <Chip
            key={cp}
            size={'small'}
            label={cp}
            className={props.chipClass}
            color={'primary'}
          />
        )
      )}
    </Grid>
  </Grid>
);

const useStyles = makeStyles(
  (theme: Theme): StyleRules =>
    createStyles({
      detail: {
        paddingLeft: `${theme.spacing(2)}px`,
      },
      gap: {
        margin: `${theme.spacing(2)}px 0`,
      },
      chip: {
        padding: `${theme.spacing(1)}px`,
        margin: `${theme.spacing(1)}px`,
      },
    })
);

const User: React.FC<IUserProps> = (props: IUserProps): React.ReactElement => {
  const classes = useStyles();
  const { user } = props;

  return (
    <Grid container={true}>
      <Grid item={true} xs={false} md={3} />
      <Grid item={true} xs={12} md={6}>
        <Paper elevation={1}>
          <List aria-label="person info">
            <ListItem>
              <ListItemIcon>
                <PersonRounded color={'primary'} fontSize={'large'} />
              </ListItemIcon>
              <Grid
                item={true}
                container={true}
                spacing={4}
                xs={12}
                sm={true}
                direction={'column'}
                className={classes.detail}
              >
                <Typography variant={'h6'}> {user?.name}</Typography>
                <Typography variant={'body2'}>
                  {' '}
                  ( @{user?.username} ) {user?.email}{' '}
                </Typography>
              </Grid>
            </ListItem>
            <Divider className={classes.gap} />
            <ListItem>
              <ListItemIcon>
                <HomeRounded color={'primary'} fontSize={'large'} />
              </ListItemIcon>
              <UserAddress address={user?.address} />
            </ListItem>
            <Divider className={classes.gap} />
            <ListItem>
              <ListItemIcon>
                <BusinessRounded color={'primary'} fontSize={'large'} />
              </ListItemIcon>
              <UserCompanyInfo
                company={user?.company}
                chipClass={classes.chip}
              />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item={true} xs={false} md={6} />
    </Grid>
  );
};

export default User;
