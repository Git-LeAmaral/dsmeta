import axios from 'axios';
import icon from '../../assets/img/notication-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

//Criando paramentro do botão para envio de sms
type Props = {
  saleId: number;
}

function handleClick(id :number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
      .then(response => {
          console.log("SUCESSO");
      });
}

function NotificationButton( {saleId} : Props) {
  return(
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Imagem icone de notificação" />
    </div>
  )
}

export default NotificationButton;