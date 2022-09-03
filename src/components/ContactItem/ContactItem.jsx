import PropTypes from 'prop-types';
import css from '../ContactItem/ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ContactItem = ({ name, number, id }) => {
    const [deleteContact, result] = useDeleteContactMutation();

    return (
        <li className={css.listItem}>
            <Card className={css.contactItem} sx={{
                width: 200, background: 'linear-gradient(25deg, rgba(2,0,36,1) 3%, rgba(9,109,121,1) 19%, rgba(0,212,255,1) 100%);'
            }}>
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="white" >
                        {name}
                    </Typography>
                    <Typography variant="body2" color="white">
                        {number}
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'right'}}>
                    <Button sx={{color: '#020024', fontWeight: 700}} className={css.deleteButton} type='button' size="small" onClick={()=>deleteContact(id)} disabled = {result.isLoading}>Delete</Button>
                </CardActions>
                </Card>
        </li>
    );
}

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}