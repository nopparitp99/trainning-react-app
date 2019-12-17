import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item6 from '../assets/images/item6.jpg'
import { addToCart, fetchItems } from '../actions/cartActions'

 class Home extends Component{
    
    componentDidMount = _ => {
        console.log('componentDidMount')
        this.props.fetchItems()
    }
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={Item6} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=> {dispatch(addToCart(id))},
        fetchItems: _ => dispatch(fetchItems())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)