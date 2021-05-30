import classes from './Card.module.scss';

function Card(props) {
    return (
        <div className={classes.card}>
            {/* props.children-ben van benne a Card tag közötti tartalom */}
            {props.children}
        </div>
    );
}

export default Card;