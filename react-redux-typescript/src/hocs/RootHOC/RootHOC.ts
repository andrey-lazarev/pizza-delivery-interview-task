import { connect } from 'react-redux';
import { AppState } from '../../store/types/types';
import { RootComponentStateProps } from '../../components/RootComponent/types';
import RootComponent from '../../components/RootComponent/RootComponent';

const mapStateToProps = (
  state: AppState
): RootComponentStateProps => {
  return {
    isModalOpen: false,
  };
};

export const RootHOC = connect(
  mapStateToProps,
  null
)(RootComponent);

RootHOC.displayName = 'RootHOC';
