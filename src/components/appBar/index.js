import React, { Component } from 'react';
import Page from './page';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import findSuggestions from "../../redux/actions/findSuggestions";
import findResults from "../../redux/actions/findResults";

class IAppBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            suggestions: []
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    onChangeText(text){
        this.setState({text});
        this.props.findSuggestions(text);
    }

    onChangeSelection(text){
        this.setState({text});
        this.props.findResults(text);
        this.props.history.push('/results');
    }

    render() {

        const { text } = this.state;
        const { suggestions } = this.props;

        return (
            <Page
                text={ text }
                suggestions={ suggestions }
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

// export default IAppBar;

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    };
};

// Opcion 1 no recomendada por React
// const mapDispatchToProps = (dispatch) => {
//     return {
//         findSuggestions: text => dispatch(findSuggestions(text)),
//     }
// };

// Opcion 2, lo recomendado
const mapDispatchToProps = {
    findSuggestions,
    findResults
};

// const wrapper = connect(mapStateToProps);
// const component = wrapper(Results);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);
