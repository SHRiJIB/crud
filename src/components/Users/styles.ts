import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  title: {
    padding: "10px",
  },
  paper: {
    marginBottom: "10px",
    position: "relative",
    border: "1px solid #dbdbdb"
  },
  details: {
    padding: "10px"
  },
  icons: {
    fontSize: "20px",
    top: "5px",
    right: "5px",
    position: "absolute",
    cursor: "pointer",
  }
}));
