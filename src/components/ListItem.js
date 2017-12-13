import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return <Text>{library.description}</Text>;
    }
  }

  render() {
    const { textStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={textStyle}>{title}</Text>
          </CardSection>

          <CardSection>{this.renderDescription()}</CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
