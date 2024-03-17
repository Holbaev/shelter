import React, { useEffect, useState } from 'react'
import styles from './PetList.module.scss'
import axios from 'axios';
import PetCard from '../../entites/PetCard/PetCard';
import cards from '../../shared/data/data';

const PetList = () => {

  return (
    <div className={styles.shelter_grid}>
        {cards?.map((pet) =>(
            <PetCard pet={pet} key={pet?.id}/>
        ))}
    </div>
  )
}

export default PetList