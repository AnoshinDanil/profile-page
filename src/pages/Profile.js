import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ username }) => {
        return (
            <div>
                <h1>{username}</h1> 
            </div>
        )
}

const mapStateToProps = ({ username }) => ({ username })

export default connect(mapStateToProps)(Profile);