import React, { Component } from 'react';
import axios from '../util/Api';

export default class PaypalSuccess extends Component {
    _isMounted = false;
    state = {
        isLoading: true
    }
    componentDidMount() {
        this._isMounted = true;
        const { planNo, priceId } = this.props.match.params;
        const payload = {
            plan_id: planNo,
            stripe_price_id: priceId
        };

        if (this._isMounted) {
            axios.post('/stripe-subscribe', payload).then(res => {
                this.setState({ isLoading: false });
                this.props.history.push('/pr');
            });
        }
    }
    render() {
        if(this.state.isLoading) {
            return (
                <h5>Just a few seconds ...</h5>
            );
        } else {
            return (
                <h5>Succeed</h5>
            );
        }
    }
}