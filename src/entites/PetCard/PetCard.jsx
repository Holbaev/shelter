import React, { useState } from 'react'
import styles from './PetCard.module.scss'
import Button from '../../shared/Button/Button'
import ReactModal from 'react-modal'
import ModalWindow from '../../shared/Modalwindow/Modalwindow'

const PetCard = ({pet}) => {
  // states 
  const [visible , setVisible] = useState();

  //funtions


  return (
    <div className={styles.shelter_card}>
    <img className={styles.shelter_card_img} src={pet.img} alt=""/>
    <div className={styles.shelter_card_info}>
        <p className={styles.shelter_card_text}>{pet?.name}</p>
        <Button className={styles.slider_item_button} data-number="1" onClick={() => setVisible(true)}>Learn more</Button>
    </div>
    <ModalWindow visible={visible} setVisible={setVisible}>
    <div className={styles.modal_card}>
      <div className={styles.modal_card_img}>
        <img src={pet?.img} alt="" className={styles.modal_card_image} />
      </div>
        <div className={styles.modal_card_content}>
          <h3 className={styles.modal_card_title}>{pet?.name}</h3>
          <p className={styles.modal_card_text}>{pet?.text}</p>
          <p className={styles.modal_card_desc}>{pet?.info}</p>
        </div>
    </div>
    </ModalWindow>
</div>
  )
}

export default PetCard