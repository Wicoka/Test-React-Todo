import MeetupList from "../components/meetups/MeetupList";

export const DUMMY_DATA = [
    { id: 1, title: 'Meetup 1' },
    { id: 2, title: 'Meetup 2' },
    { id: 3, title: 'Meetup 3' },
    { id: 4, title: 'Meetup 4' }
];

function AllMeetupsPage(props) {
    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    );
}

export default AllMeetupsPage;
