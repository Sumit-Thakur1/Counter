import React, { useState } from "react";
import { Button, Grid, Icon, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Card = (Props) => {
  const [isNegative, setIsNegative] = useState(true);
  return (
    <div
      style={{
        margin: "20vh 0"
      }}
      className="ui center aligned  grid"
    >
      <Segment compact raised>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign="center" as={"h1"}>
              Count
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column textAlign="center" as={"h2"}>
              {Props.counts}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={2}>
            <Grid.Column textAlign="center">
              <Button
              icon labelPosition="left"
                size="medium"
                color="green"
                onClick={() => {
                  let count = Props.counts;
                  Props.setCounts(++count);
                  count > 0 ? setIsNegative(false) : setIsNegative(true);
                }}
              >
                Increment <Icon name='arrow up'/>
              </Button>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Button
              icon labelPosition="right"
                size="medium"
                color="red"
                disabled={isNegative}
                onClick={() => {
                  let count = Props.counts;
                  Props.setCounts(--count);
                  count <= 0 ? setIsNegative(true) : setIsNegative(false);
                }}
              >
                 Decrement<Icon name="arrow down" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Card;
