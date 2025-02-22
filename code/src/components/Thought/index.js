import React, { useState } from 'react';
import moment from 'moment';

import Button from 'components/Styled/Button';
import Card from 'components/Styled/Card';

import { URL_LIKE } from 'helpers/reusables';

const Thought = ({ message, category, name, hearts, createdAt, _id, index, updateThought }) => {
  const [clickedHeart, setClickedHeart] = useState(false);

  const onClickLike = () => {
    fetch(URL_LIKE(_id), { method: 'POST' }).then((res) => {
      res.json();
      setClickedHeart(true);
      // Instead of calling fetch method, we update
      // the heart key value in the thoughts state array
      updateThought(hearts + 1, index, 'hearts');
    });
  };

  return (
    <>
      <Card>
        <Card.Title>{message}</Card.Title>
        <Card.Pills>{category}</Card.Pills>
        <Card.Footer>
          <Button
            type="button"
            faded={!clickedHeart}
            disabled={clickedHeart}
            onClick={onClickLike}>
            <Button.Emoji role="img" aria-label="heart">
              ❤️
            </Button.Emoji>
          </Button>
          <Card.FooterText faded aria-label="Amount of likes">
            x {hearts}
          </Card.FooterText>
          <Card.FooterText faded alignRight>
            {moment(createdAt).fromNow()}
          </Card.FooterText>
        </Card.Footer>
        <Card.Footer>
          <Card.FooterText faded alignRight>
            by {name}
          </Card.FooterText>

        </Card.Footer>
      </Card>
    </>
  );
};

export default Thought;
