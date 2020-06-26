import React, { Component } from 'react';
import VideoTile from '../components/VideoTile';
import { connect } from 'react-redux';
import { getCartList, getCategoryList, searchByTitle } from "../actions";

function search(list, category_id, key) {
    console.log("cateogory _id : ", category_id);
    if (category_id >= 1) {
        let res = list.filter(item => {
            console.log("item:", item);
            console.log(category_id);
            console.log(item.category_id == category_id);
            return item.category_id == category_id;

        });
        console.error(" res: ", list)
        if (key === "") {
            return res;
        } else
            return res.filter(item => item.title.toUpperCase().includes(key.toUpperCase()));
    }
    else if(key !== "") {
        console.log(" list : ", list);
        let res = list.filter(item => item.title.toUpperCase().includes(key.toUpperCase()));
        console.log(" filtered : ", res)
        return res;
    } else {
        return [];
    }
}

class MyList extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            searchKey: "",
            selectedCategory: 0
        };
    }
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this
                .props
                .getCartList();
            this
                .props
                .getCategoryList();
        }
    }
    render() {
        const myList = this.props.cartList || [];
        const categoryList = this.props.categoryList || [];
        const result = search(myList, this.state.selectedCategory, this.state.searchKey);
        return (
            <React.Fragment>
                {/* hero */}
                <div
                    className="bg-image"
                    style={{
                        backgroundImage: "url('/assets/media/photos/background.jpg')"
                    }}>
                    <div
                        className="bg-black-50"
                        style={{
                            height: "100%",
                            background: "linear-gradient(0deg, #000000 0, rgba(1, 1, 1, 0))"
                        }}>
                        <div className="content content-top content-full text-center">
                            <h1
                                className="font-w700 text-white mt-5 mb-2 js-appear-enabled animated fadeIn"
                                data-toggle="appear">
                                Check out your cart items
                            </h1>
                            <h3
                                className="text-white-75 mb-5 js-appear-enabled animated fadeIn"
                                data-toggle="appear"
                                data-timeout="400">..... Lorem ispr ...</h3>
                        </div>
                    </div>
                </div>

                {/* list content */}
                <div className="bg-black min-vh-100">
                    <div className="content bg-black">
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="item-title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="item-title"
                                    name="item-title"
                                    placeholder="Search for a title..."
                                    value={this.state.searchKey}
                                    onChange={(event) => this.setState({ searchKey: event.target.value })} />
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="category-select">Select Category</label>
                                    <select
                                        className="form-control text-secondary text-uppercase"
                                        defaultValue="0"
                                        id="category-select"
                                        name="category-select"
                                        onChange={(event) => this.setState({ selectedCategory: event.target.value })}>
                                        <option value="0">No selected</option>
                                        {categoryList.length
                                            ? categoryList.map((category, index) => <option
                                                key={index}
                                                value={category.id}
                                                className="text-secondary text-uppercase">{category.name}</option>)
                                            : <option value="1" className="text-secondary" disabled>Content Not Found</option>
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Search result --> */}
                        {result.length
                            ? <React.Fragment>
                                <h1 className="text-white mb-2">Search result</h1>
                                <div className="row row-deck">
                                    {result.map((item, index) => <VideoTile key={index} data={item} />)
                                    }
                                </div>
                            </React.Fragment>
                            : null
                        }

                        {/* <!-- By category --> */}
                        {myList.length
                            ? <React.Fragment> <h2 className="text-white mb-2">My List</h2> 
                            <div className="row row-deck" > 
                                { myList.map((item, index) => <VideoTile key={index} data={item} />) } 
                            </div>
                            </React.Fragment>
                            : <h2>No Item in your cart</h2>
}

                        {/* <!-- End By category --> */}
                            </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({video}) => {
    const {cartList, categoryList} = video;
    return {cartList, categoryList};
}
const mapDispatchToProps = {
                    getCartList,
                    getCategoryList,
                    searchByTitle
                };
export default connect(mapStateToProps, mapDispatchToProps)(MyList);