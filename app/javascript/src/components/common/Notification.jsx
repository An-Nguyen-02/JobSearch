import Snackbar from '@mui/material/Snackbar';

const CONTAINER_ID = 'MuiSnackbar-root';
let root = null;

export default function Notification(props) {
  if (!document.getElementById(CONTAINER_ID)) {
    var div = document.createElement('div');
    div.id = CONTAINER_ID;
    document.body.appendChild(div);
  }
  if (!root){
    root = createRoot(document.getElementById(CONTAINER_ID));
  }
  root.render(<Snackbar keySnackbar={new Date().getTime()} {...props}/>);
};