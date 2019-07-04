import React from 'react';

class Form extends React.Component {
  async componentDidMount() {
    // console.warn(this.props.navigation.state);
  };
  static propTypes = {
  };
  state = {
      localTerm: this.props.initialLocalTerm,
      phone: '',
  };
  handleChange = (localTerm) => {
    this.setState({ localTerm }, () => {
            //
        // this.debounceSearchDeals(this.state.localTerm);
    });
  };
//   constructor(props) {
//     super(props);
//     this.state = { activeIndex: 0 };
// }
handleClick(index, props) {
  // do something with props
  // ...    

  // now update activeIndex
  this.setState({ activeIndex: index });
}

render() {
  return (
    <div>
      {
        this.props.people.map(function(person, index) {
          const className = this.state.activeIndex === index ? 'media active' : 'media';  
          return (
            <div className={className} key={index} onKeyDown={this.handleClick.bind(this, index, this.props)}>
              <item className="media-body">{person.name}</item>
            </div>
          );
        }, this)
      }
    </div>
  );
}

}

export default Form;
