function MeetupItem(props) {
    return (
        <li>
            <div>{props.title}</div>
            <button>To Favorites</button>
        </li>
    );
}

export default MeetupItem;