# react-options

![Travis][build-badge]
![Coveralls][coveralls-badge]
![npm version][npm-version]

React component for animated toggling of additional options

This is a small and lighweight npm react module built in order to animate additional options pannel, which slides on top on main row content, using pure css animation

Feel free to use and suggest features or improve

## Installations

`npm install react-options`

## Usage

`import ReactOptions from "react-options";`

```
[...array].map(
    item => (
        <ReactOptions
            key={item.id}
            id={item.id}
            optionsActive={this.state.optionsActive}
            details={this._renderDetails(item)}
        >
            {this._renderMainData(item)}
        </ReactOptions>
    ))
```

example of data object:

```
[{
    id: 1,
    mainData: {},
    details: {
        ...
    }
}]
```

## Demo

[DEMO](https://github.com/AlexCoderBit/react-options/tree/master/demo/src)

![DEMO_image](https://github.com//AlexCoderBit/react-options/blob/master/demo.gif?raw=true)

#### Basic Expample

```
class App extends PureComponent {
  state = {
    activeOption: null
  };

  _renderDetails = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "black",
          color: "white"
        }}
      >
        <p>details details details details</p>
        <button onClick={() => this.setState({ activeOption: null })}>
          HIDE
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <div>
          <ReactOptions
            key="1"
            id="1"
            optionsActive={this.state.activeOption}
            details={this._renderDetails()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <p>THIS IS A MAIN DATA BLOCK</p>
              <button onClick={() => this.setState({ activeOption: "1" })}>
                SHOW
              </button>
            </div>
          </ReactOptions>
        </div>
      </div>
    );
  }
}
```

## Tests

`npm test`

### License

MIT

---

This in an initial version of module with minimal core functionality which I neede for my own purposes, hope it might be usefull for others aswell.

[build-badge]: https://travis-ci.org/AlexCoderBit/react-options.svg?branch=master
[coveralls-badge]: https://coveralls.io/repos/github/AlexCoderBit/react-options/badge.svg?branch=master
[npm-version]: https://badge.fury.io/js/react-options.svg
