import Card from '../../ui/Card';

function MeetupItem(props) {
    return (
        <li>
            {/* A Card props.children-jébe fog belekerülni a Card tag közötti tartalom */}
            <Card>
                <div>{props.title}</div>
                <button>To Favorites</button>
            </Card>
        </li>
    );
}

export default MeetupItem;