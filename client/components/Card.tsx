import Card from '@mui/material/Card';

const GameCard = (props: any) => {
  return (
    <Card id='card' sx={{ borderRadius: '15px' }}>
      <h2 className='action'>{props.word}</h2>
      <h3>{props.stipulations[0]}</h3>
      <h3>{props.stipulations[1]}</h3>
      <h3>{props.stipulations[2]}</h3>
      <h3>{props.stipulations[3]}</h3>
    </Card>
  );
};

export default GameCard;
