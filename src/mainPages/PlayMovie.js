import React from 'react';
import { connect } from 'react-redux';
import axios from '../util/Api';

class PlayMovie extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            category: {},
            cover: "",
            source: "",
            rating: null,
            price: null,
            views: null,
        };
    }
    componentDidMount() {
        this._isMounted = true;
        const { videoId } = this.props.match.params;
        if (this._isMounted && videoId) {
            axios.get(`video/${videoId}`)
                .then(({ data }) => {
                    const { title, description, category, cover, source, rating, price, views } = data.video;
                    this.setState({ title, description, category, cover, source, rating, price, views });
                })
                .catch(error => {
                    console.error(" Get Video api Error: ", error);
                })
        }
    }
    render() {
        const { videoId } = this.props.match.params;
        console.log("video_id : ", videoId);
        const { title, description, category, cover, source, rating, price, views } = this.state;
        return (
            <React.Fragment>
                <div className="bg-black pt-6">
                    <div className="content content-full">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-xs-12 col-sm-12 mb-4">
                                <div className="mb-1">
                                    <video src={source} controls autostart="true" style={{ width: "100%" }} />
                                </div>
                                <div className="sv-title box mb-3">
                                    <h2>{title}</h2>
                                    <p className="mb-0">
                                        <i className="fas fa-eye mr-1"></i>2,729,347 views
                                        <i className="fas fa-star ml-4 mr-1"></i>{rating} rating
                                    </p>
                                </div>
                                <div className="sv-info-content box mb-3">
                                    <h6>Category :</h6>
                                    <p><span className="badge badge-primary">{ category && category.name }</span></p>
                                    <h6>About :</h6>
                                    <p>{ description }</p>
                                    <h6>Price :</h6>
                                    <p>{ price || "No set" }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default PlayMovie;