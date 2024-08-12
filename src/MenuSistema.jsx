import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { logout } from './views/util/AuthenticationService';

class MenuSistema extends React.Component{

    state = {
       activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    logout = () => {
        logout()
    }

    render(){
       return(
            <>
                <Menu inverted>

                    <Menu.Item
                        className='navbar__item--mobile'
                        onClick={this.logout}
                        content='Sair'
                        as={Link}
                        to='/'
                    />

                </Menu>
            </>
        )
    }
}

export default MenuSistema;