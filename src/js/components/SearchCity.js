import React from 'react';
import PropTypes from 'prop-types';

export default class SearchCity extends React.Component {

    render() {

        return (

            <div className="col-xs-12">
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your city name"/>
                    </div>
                    <button type="submit" className="btn btn-default">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}