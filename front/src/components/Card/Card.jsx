import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
//!----------------------------------------------------+/

export function Card({
   onClose,
   name,
   status,
   species,
   gender,
   origin,
   image,
   id,
   addFav,
   removeFav,
   myFavourites,
}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavourite = () => {
      const character = {
         name, 
         status, 
         species, 
         gender, 
         origin, 
         image,
         id, 
      };

      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav(character)
      }
   }

   useEffect(() => {
      myFavourites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavourites]);

   return (
      <div className={styles.tarjeta}>
         <div className={styles.botones}>
            {
               isFav ? (
                  <button className={styles.boton2} onClick={handleFavourite}>❤️</button>
               ):(
                  <button className={styles.boton2} onClick={handleFavourite}>🤍</button>
               )
            }
            <button className={styles.boton} onClick={() => onClose(id)}>X</button>
         </div>
         <Link to={`/detail/${id}`}>
            <img className={styles.image} src={image} alt={name} />
         </Link>
         <h2 className={styles.name}>{name} | {id} </h2>

            <div className={styles.text}>
                  <h4>STATUS | {status}</h4>
                  <h4>SPECIES | {species}</h4>
                  <h4>GENDER | {gender}</h4>
                  <h4>ORIGIN | {origin}</h4>
            </div>
      </div>
   );
}

export const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      },
   };
};

export const mapStateToProps = (state) => {
   return {
      myFavourites: state.myFavourites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
