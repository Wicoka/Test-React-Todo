import NewMeetupForm from '../components/meetups/NewMeetupFrom';

function NewMeetupPage(props) {
    function addMeetupHandler(meetupData) {
        // Itt akarom elküldeni a HTTP kérést ha új Meetup-ot adok hozzá az alkalmazásomhoz

    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;
