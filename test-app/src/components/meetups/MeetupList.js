import MeetupItem from "./MeetupItem";

function MeetupList(props) {
    return (
        <ul>
            {props.meetups.map(meetup => (
                <MeetupItem
                    key={meetup.id}
                    title={meetup.title} />
            ))}
        </ul>
    );
}

export default MeetupList;