import {makeStyles} from "@material-ui/core"

export default makeStyles((theme) => ({
    formControl:{
        margin: theme.spacing(1),
        width:"120px"
    },
    paper: {
        padding: theme.spacing(2),
        maxWidth:"300px",
        height:"250px"
    },
    form: {
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        
    },
    
}))