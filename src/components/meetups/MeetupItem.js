import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.tilte,
        address: props.address,
        image: props.image,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "To favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
