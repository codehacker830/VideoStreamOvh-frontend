import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../util/Api';
import { searchByTitle, fetchedCartList, fetchedTrendingVideos, fetchedWatchingVideos, removeFromCart, addToCart } from "../../actions";
import { Link } from 'react-router-dom';
import LoadingRow from '../../components/LoadingRow';
import SlideRow from '../../components/SlideRow';
import AddListIcon from '../../components/icons/AddListIcon';
import CheckedIcon from '../../components/icons/CheckedIcon';
import { uniqueId } from 'lodash';
import { isInvoledAtCart } from '../../util';

class Movies extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            data: null,

            cartList: [],
            trendingVideos: [],
            watchingVideos: [],
            searchKey: "",
            isLoading: false,
            isJawOpen: true,
        };
    }
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({ isLoading: true });

            const randomID = 1;
            const promise0 = axios.get(`/video/${randomID}`);
            const promise1 = axios.get('/cart');
            const promise2 = axios.get('/state/trending');
            const promise3 = axios.get('/watching');
            Promise.all([promise0, promise1, promise2, promise3]).then((values) => {
                console.log("$$$$$$ api response : ", values);

                this.props.fetchedCartList(values["1"].data.list);
                this.props.fetchedTrendingVideos(values["2"].data.videos);
                this.props.fetchedWatchingVideos(values["3"].data.videos);

                this.setState({
                    isLoading: false,
                    data: values["0"].data.video,
                    trendingVideos: values["2"].data.videos,
                    watchingVideos: values["3"].data.videos,
                });
            })
        }

    }
    onJawHandle = (isOpen) => {
        this.setState({ isJawOpen: isOpen });
    }
    render() {
        const id = 1;       // this is test randome id

        console.log(" uniqueId = ", uniqueId());
        const { isLoading, data } = this.state;
        const { cartList, trendingVideos, watchingVideos } = this.props;
        const { isJawOpen } = this.props;
        const result = this.props.searchTitleResult || [];


        const isCarted = isInvoledAtCart(cartList, id);
        return (
            <React.Fragment>
                <div className="mainView" role="main">
                    <div className="aro-genre">
                        <div className={`lolomo${isJawOpen ? " has-open-jaw" : ""}`}>
                            {isLoading ? <LoadingRow /> :
                                <React.Fragment>
                                    <h1 className="visually-hidden">
                                        <span className="v-align-inherit">
                                            <span className="v-align-inherit">Netflix Homepage</span>
                                        </span>
                                    </h1>

                                    {/* my list */}
                                    {
                                        cartList && cartList.length ?
                                            <SlideRow r_id={1} title="List" data={cartList} />
                                            : null
                                    }

                                    {/* most popular */}
                                    {
                                        trendingVideos && trendingVideos.length ?
                                            <SlideRow r_id={2} title="Most popular" data={trendingVideos} />
                                            : null
                                    }
                                    {/* keep watching */}
                                    {
                                        watchingVideos && watchingVideos.length ?
                                            <SlideRow r_id={3} title="Keep watching..." data={watchingVideos} />
                                            : null
                                    }
                                </React.Fragment>
                            }
                        </div >
                    </div >
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({ video }) => {
    const { searchTitleResult, isJawOpen, cartList, trendingVideos, watchingVideos } = video;
    return { searchTitleResult, isJawOpen, cartList, trendingVideos, watchingVideos };
}
const mapDispatchToProps = { searchByTitle, fetchedCartList, fetchedTrendingVideos, fetchedWatchingVideos, removeFromCart, addToCart };
export default connect(mapStateToProps, mapDispatchToProps)(Movies);