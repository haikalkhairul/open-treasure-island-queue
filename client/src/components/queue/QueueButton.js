import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { queueUser } from "../../actions/authActions";

class QueueButton extends Component {
    onQueueClick = e => {
        this.props.queueUser();
    };
   
    render() {
        // const { user } = this.props.auth;
        return (
            <button
                style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                }}
                onClick={this.onQueueClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
                Queue
            </button>

        );
    }
}

QueueButton.propTypes = {
    queueUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { queueUser }
)(QueueButton);