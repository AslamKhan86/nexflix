import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Toolbar, Divider, withTheme, Icon } from 'react-native-material-ui';
import ImageFit from 'react-native-fit-image';

import * as detailsActions from '../../actions/details';
import ContainerView from '../../components/ContainerView';
import DetailsHeader from '../../components/DetailsHeader';
import DetailsDescription from '../../components/DetailsDescription';

const styles = StyleSheet.create({
  moviePoster: {
  },
  result: {
  },
});

class MovieDetails extends React.Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    result: PropTypes.object,

    detailsActions: PropTypes.object.isRequired,
  };

  static defaultProps = {
    loading: true,
    result: null,
  };

  componentWillMount() {
    if (!this.props.result) {
      const movieId = this.props.movie.imdbID;
      this.props.detailsActions.fetchDetails(movieId);
    }
  }

  handleLeftIconPress = () => {
    this.props.navigation.goBack();
  }

  render() {
    const {
      movie, loading, result, theme,
    } = this.props;
    return (
      <ContainerView>
        <Toolbar
          leftElement="md-arrow-back"
          onLeftElementPress={this.handleLeftIconPress}
          centerElement="Movie Details"
        />
        <ScrollView>
          <ImageFit
            source={{ uri: movie.Poster }}
          />
          {loading ?
            <View>
              <Text>Loading</Text>
            </View>
            :
            <View>
              <DetailsHeader result={result} />
              <DetailsDescription result={result} />
            </View>
          }
        </ScrollView>
      </ContainerView>
    );
  }
}

const stateToProps = ({ details}, ownProps) => {
  const movie = ownProps.navigation.getParam('movie');
  const movieId = movie.imdbID;
  const movieDetails = details.resultsById[movieId] || {};

  return {
    movie,
    loading: movieDetails.loading,
    result: movieDetails.result,
  };
};

const dispatchToProps = dispatch => ({
  detailsActions: bindActionCreators(detailsActions, dispatch)
});

export default connect(stateToProps, dispatchToProps)(withTheme(MovieDetails));
