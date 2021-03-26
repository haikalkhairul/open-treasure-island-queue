import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { queueUser } from "../../actions/authActions";
import axios from "axios";
import classnames from "classnames";

class QueueButton extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }

    // componentDidMount() {
    //     axios.get('')
    //         .then(res => this.setState({items: res.data}))
    //         .catch(err => {
    //             this.setState({errorMessage: err.message}); 
    //         })
    // }

    onQueueClick = e => {
        this.props.queueUser();
        this.setState({ clicked: true })
    };

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //     }
    // }
   
    render() {
        const { errors } = this.state;
        return (
            <div>
                <button
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    onClick={this.onQueueClick}
                    disabled={this.state.clicked}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                    Queue
                </button>
            </div>
        );
    }
}

QueueButton.propTypes = {
    queueUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { queueUser }
)(QueueButton);