import React, {Component} from 'react';

class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        console.log('Show error info START');
        console.log(error);
        console.log(info);
        console.log('Show error info END');
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1> Oooops! That is not good. </h1>
        }
        return this.props.children;
    }

}

export default ErrorBoundry;