import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MapIcon from '@material-ui/icons/Map';

import IUserAddress from '../../models/user/UserAddress';
import { getGMapQueryUrl } from '../../shared/utils';

const UserAddress: React.FC<{ address?: IUserAddress }> = (props: {
  address?: IUserAddress;
}): React.ReactElement => {
  const { address } = props;
  return (
    <Grid item={true} xs={true}>
      <Typography gutterBottom={true} variant="subtitle1">
        {address?.suite} {address?.street}
      </Typography>
      <Typography variant="body2" gutterBottom={true}>
        {address?.city}
      </Typography>
      <Grid container={true} justify={'space-between'} alignItems={'center'}>
        <Typography variant="body2" color="textSecondary">
          {address?.zipcode}
        </Typography>
        {address?.geo ? (
          <IconButton
            aria-label="see on maps"
            component="a"
            href={getGMapQueryUrl(address.geo)}
          >
            <MapIcon fontSize={'small'} color={'secondary'} />
          </IconButton>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default UserAddress;
