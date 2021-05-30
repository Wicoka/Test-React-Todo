import { useHistory, } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupFrom';

function NewMeetupPage(props) {
    // Ez kell hozzá, hogy mondjuk elnavigáljon egy másik oldalra kódból
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        // Itt akarom elküldeni a HTTP kérést ha új Meetup-ot adok hozzá az alkalmazásomhoz

        // Ez visszanavigál az eredeti oldalra
        history.replace('/');
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;
