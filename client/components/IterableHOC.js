export const makeIterable = (WrappedComponent, arr) => {
  return class Iterable extends React.Component {
    constructor(props) {
      super(props);
      this.details = {}
    }

    render() {
      return (
        <div>
          <Control.text placeholder="color" style={this.textStyle} model=".color" />
          { arr.map( (item) =>  <WrappedComponent key={item.id}  /> ) }
        </div>
      );
    }
  }
}