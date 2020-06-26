import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from "../actions";
import { Link } from 'react-router-dom';

function isInvoled (cartList, id) {
    if ( cartList.length ) {
        for(let i = 0; i < cartList.length; i++){
            if(cartList[i].id === id) return true;
        }
        return false;
    }
    return false;
}

class VideoTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCarted: false
        };
    }
    render() {
        const { id, title, description, cover, source, rating, price, views } = this.props.data;
        const cartList = this.props.cartList || [];
        console.log("__ cartList : ", cartList)
        console.log("__ id : ", id)

        const isCarted = isInvoled(cartList, id);
        console.log("__ isCarted : ", isCarted)
        return (
            <div className="col-md-6 col-xl-3">
                {/* <!-- Story #9 --> */}
                <div className="block block-rounded bg-image img-hover-zoom img-hover-zoom--basic">
                    <img src={`${cover}`} alt="Video image" />
                    <div className="block-content">
                        <div className="mb-4 d-sm-flex justify-content-sm-between align-items-sm-center">
                            <p>
                                <span className="text-white font-w600 mr-1">
                                    <i className="fa fa-fw fa-eye text-white-50"></i> {views}
                                </span>
                                <span className="align-items-center text-white font-w600 mr-1">
                                    <i className="fa fa-fw fa-star text-white-50"></i> {rating}
                                </span>
                            </p>
                            <p className="font-size-sm">
                                {/* Toggle Start */}
                                <button
                                    className="btn text-white border-focus-none btn-toggle"
                                    onClick={
                                        isCarted ?
                                            () => this.props.removeFromCart(id)
                                            : () => this.props.addToCart(id)
                                    }
                                >
                                    {
                                        isCarted ?
                                        <i className="fa fa-check-circle fa-2x text-primary"></i>
                                            : <i className="si si-plus fa-2x"></i>
                                    }
                                </button>
                                <Link to={`/home/playmovie/${id}`} className="btn text-primary border-focus-none"><i className="far fa-play-circle fa-3x"></i></Link>
                            </p>
                        </div>
                        <div className="align-items-sm-center">
                            <p className="font-size-lg font-w400 text-white mb-1 video-title">
                                {title}
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- END Story #9 --> */}
            </div>
        );
    }
}
const mapStateToProps = ({ video }) => {
    const { cartList } = video;
    console.log(" Cart List : ", cartList);
    return { cartList };
};
const mapDispatchToProps = {
    addToCart,
    removeFromCart
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoTile);