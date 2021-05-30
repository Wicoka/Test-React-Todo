import { useRef } from 'react';
import Card from '../../ui/Card';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    // Itt lehet több useRef ha több input mezőnk van

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;

        const meetupData = {
            id: Math.random(),
            title: enteredTitle
        };

        console.log(meetupData);

        props.onAddMeetup(meetupData);
    }
    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;