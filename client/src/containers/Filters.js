import { connect } from 'react-redux';
import {
    setRules,
    getFilteringStatus,
    addFilter,
    removeFilter,
    toggleFilterStatus,
    toggleFilteringModal,
    refreshFilters,
    handleRulesChange,
    editFilter,
    checkHost,
} from '../actions/filtering';
import Filters from '../components/Filters';

const mapStateToProps = (state) => {
    const { filtering } = state;
    const props = { filtering };
    return props;
};

const mapDispatchToProps = {
    setRules,
    getFilteringStatus,
    addFilter,
    removeFilter,
    toggleFilterStatus,
    toggleFilteringModal,
    refreshFilters,
    handleRulesChange,
    editFilter,
    checkHost,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filters);
