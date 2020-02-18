import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, TextInput, TextView } from 'react-native';
import { Toolbar, withTheme } from 'react-native-material-ui';

import * as searchActions from '../../actions/search';
import ContainerView from '../../components/ContainerView';
import SearchList from '../../components/SearchList';

const styles = StyleSheet.create({
  titleText: {
    marginLeft: 0,
    color: 'white',
    padding: '10px'
  },
});

class MovieSearch extends React.Component {
  static propTypes = {
    searchedText: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired,

    searchActions: PropTypes.objectOf(PropTypes.func).isRequired,
  };

  changeSearchText = (searchedText) => {
    this.props.searchActions.searchTextChange(searchedText);
  }

  handleSearchSubmit = () => {
    const searchedText = this.props.searchedText.trim();
    this.props.searchActions.search(searchedText);
  }

  handleBackIconPress = () => {
    this.props.navigation.goBack();
  }

  handleClearIconPress = () => {
    this.changeSearchText('');
  }

  handleDetailRequest = (movie) => {
    this.props.navigation.navigate('Details', {
      movie,
    });
  }

  render() {
    const {
      searchedText, loading, results,
      theme
    } = this.props;

    return (
      <ContainerView>
        <Toolbar
          leftElement="md-arrow-back"
          onLeftElementPress={this.handleBackIconPress}
          centerElement={(
            <TextInput autoFocus value={searchedText}
              onChangeText={this.changeSearchText}
              onSubmitEditing={this.handleSearchSubmit}
              placeholder="Search for movies..."
              style={[
                styles.titleText
              ]}
              underlineColorAndroid="transparent"
            />
          )}
          rightElement={searchedText.length > 0 ? 'md-close' : undefined}
          onRightElementPress={this.handleClearIconPress}
        />
        <SearchList
          loading={loading}
          results={results}
          onDetailRequest={this.handleDetailRequest}
        />
      </ContainerView>
    );
  }
}

const stateToProps = ({ search }) => ({
  searchedText: search.term,
  loading: search.loading,
  results: search.results,
});

const dispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(stateToProps, dispatchToProps)(
  withTheme(MovieSearch)
);
