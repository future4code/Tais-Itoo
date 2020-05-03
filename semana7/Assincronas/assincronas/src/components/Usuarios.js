import React from "react";
import styled from "styled-components";
import axios from "axios";

const UserItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
`; 

class Usuarios extends React.Component {
    state = {
        usersList: []
    };

    componentDidMount() {
        this.getUsersList();
        }

        getUsersList = () => {
        axios
        .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    {
        headers: {
            Authorization: "tais-itoo-julian"
        }
      }
    )
    .then(response => {
        this.setState({ usersList: response.data});
    })
    .catch(error => {
        console.log(error.response);
    });
    };

    onClickDeleteUser = userId => {
        axios
        .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
            {
                headers: {
                    Authorization: "tais-Itoo-julian"
                   }
            } 
        )
        .then(response => {
            window.alert('Usuario deletado com sucesso');
            this.getUsersList();
        })
        .catch(error => {
            window.alert("Deu um erro :(");
        });
    };

    render() {
        return (
        <div>
          <h1>Usuários Cadastrados</h1>
          <div>
            {this.state.usersList.map(user => {
              return (
                  <UserItem>
                      <p>{user.name}</p>
                      <button onClick={() => this.onClickDeleteUser(user.id)}>
                        Apagar
                      </button>
                  </UserItem>
                );
            })}
          </div>
        </div>
        );
    }
}

export default Usuarios;