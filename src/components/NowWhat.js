import React from "react";
import * as Constants from './constants';
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import AvatarRaw from "@material-ui/core/Avatar";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const avatarStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const Avatar = withStyles(avatarStyles)(AvatarRaw);
const styles = {
  card: {
    margin: "5% 25%"
  }
};

const NowWhat = props => {
  const { classes, tempData } = props;
  const { metric, latitude, longitude, timestamp } = tempData;
  return (
    <Card className={classes.card}>
      <CardHeader title="Here come dashboard...!!" />
      <CardContent>
        <List>
          <ListItem>
            <Avatar>1</Avatar>
            <ListItemText primary="Temperature:" ></ListItemText>
            <ListItemText primary={tempData ? metric : ''} ></ListItemText>
          </ListItem>
          <ListItem>
            <Avatar>2</Avatar>
            <ListItemText primary="Latitude:" />
            <ListItemText primary={tempData ? latitude : ''} ></ListItemText>
          </ListItem>
          <ListItem>
            <Avatar>3</Avatar>
            <ListItemText primary="Longitude:" />
            <ListItemText primary={tempData ? longitude: ''} ></ListItemText>
          </ListItem>
          <ListItem>
            <Avatar>4</Avatar>
            <ListItemText primary="Last Received:" />
            <ListItemText primary={ timestamp ? `${Constants.FETCH_INTERVAL} seconds ago` : ''}></ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(NowWhat);
