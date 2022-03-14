import { Component } from 'react';

import './card-list.styles.css';
import '../card/card.component';
import Card from '../card/card.component';

class CardList extends Component {
  render() {
    console.log('cardList render');
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return <Card name={name} email={email} id={id} />;
        })}
      </div>
    );
  }
}

export default CardList;
