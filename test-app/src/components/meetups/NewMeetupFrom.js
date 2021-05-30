import { useRef } from 'react';
import Card from '../../ui/Card';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    // Itt lehet több useRef ha több input mezőnk van

    function submitHandler(event) {
        event.preventDefault();

        // Form elementjei vannak itt
        const enteredTitle = titleInputRef.current.value;

        // Itt létrehozok egy visszatérési object-et
        const meetupData = {
            id: Math.random(),
            title: enteredTitle
        };

        // Itt van lényegében az Angular féle output.emit()
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