import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ itemQuantity }) => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping</Link>

                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">My cart({ itemQuantity })</Link></li>
                    <li><Link to="/cart">
                        <i className="material-icons">
                        shopping_cart
                            </i>
                            
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
}

const mapStateToProps = (state) => {
    return {
        itemQuantity: state.addedItems.map( item => item.quantity ).reduce((qA, qB) => Number(qA) + Number(qB), 0)
    }
}

export default connect(mapStateToProps, {})(Navbar)