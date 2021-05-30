import { useHistory, } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupFrom';
import { DUMMY_DATA } from './AllMeetups';

function NewMeetupPage(props) {
    // Ez kell hozzá, hogy mondjuk elnavigáljon egy másik oldalra kódból
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        // Itt akarom elküldeni a HTTP kérést ha új Meetup-ot adok hozzá az alkalmazásomhoz
        DUMMY_DATA.push(meetupData);
        // Ez visszanavigál az eredeti oldalra
        history.replace('/');
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            {/* Itt "iratkozok fel" az onAddMeetup output eventre és meghívom az addMeetupHandler függvényt */}
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;
