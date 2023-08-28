

const MovingCard = ({ title, content, currentCardIndex, cardIndex }) => {
    return (
      
        <div className="animated-card" draggable="true">
          <div style={{color: 'palevioletred' , paddingBottom:"20px"}}  >{title}</div>
          <div style={{color: 'burlywood'}}>{content}</div>
        </div>
     
    );
  };

  
  export default MovingCard;
  