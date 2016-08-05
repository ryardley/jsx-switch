import React from 'react';
import ReactDOMServer from 'react-dom/server';
import htmlToText from 'html-to-text';
import { Switch, Case, Default } from '../lib';
import { assert } from 'chai';

describe('jsx-switch', () => {
  let hasRunIds;

  beforeEach(() => {
    hasRunIds = [];
  });

  const HasRun = (props) => {
    hasRunIds.push(props.id);
    return <span>{props.children}</span>;
  }

  const Main = (props) => {
    return (
      <div>
        <Switch>
          <Case expr={props.choice===1}><HasRun id="1">1</HasRun></Case>
          <Case expr={props.choice===2}><HasRun id="2">2</HasRun></Case>
          <Case expr={props.choice===3}><HasRun id="3">3</HasRun></Case>
          <Default><HasRun id="default">Foo</HasRun></Default>
        </Switch>
      </div>
    );
  }

  const NoDefault = (props) => {
    return (
      <div>
        <Switch>
          <Case expr={props.choice===1}><HasRun id="1">1</HasRun></Case>
          <Case expr={props.choice===2}><HasRun id="2">2</HasRun></Case>
          <Case expr={props.choice===3}><HasRun id="3">3</HasRun></Case>
        </Switch>
      </div>
    );
  }
  const NoCase = (props) => {
    return (
      <div>
        <Switch>
          <Default><HasRun id="default">Foo</HasRun></Default>
        </Switch>
      </div>
    );
  }

  const Nothing = (props) => {
    return (
      <div>
        <Switch>
          <div>Bar</div>
          <div>Ding</div>
          <div>Zip</div>
        </Switch>
      </div>
    );
  }

  it('should run the correct Case', () => {
    [1,2,3].forEach((num) => {
      const actual = htmlToText.fromString(ReactDOMServer.renderToString(<Main choice={num} />));
      const expected = `${num}`;
      assert.equal(actual, expected);
    })
  });

  it('should run the default case', () => {
    const actual = htmlToText.fromString(ReactDOMServer.renderToString(<Main choice={789} />));
    const expected = 'Foo';
    assert.equal(actual, expected);
  });

  it('should run only the content it was given', () => {
    htmlToText.fromString(ReactDOMServer.renderToString(<Main choice={2} />));
    const actual = hasRunIds;
    const expected = ['2'];
    assert.deepEqual(actual, expected);
  });

  it('should show the default if no case is given', () => {
    const actual = htmlToText.fromString(ReactDOMServer.renderToString(<NoCase />));
    const expected = 'Foo';
    assert.deepEqual(actual, expected);
  });


  it('should not show anything if it is given no Case or Default subcomponents', () => {
    const actual = htmlToText.fromString(ReactDOMServer.renderToString(<Nothing />));
    const expected = '';
    assert.deepEqual(actual, expected);
  });
});
