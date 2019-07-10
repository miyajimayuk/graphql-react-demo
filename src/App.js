import React from 'react';
import client from './client';
import { ApolloProvider } from "react-apollo";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const ME = gql`
    query me {
        user(login: "miyajimayuk") {
            login
            avatarUrl
       }
    }
`;

class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div>GraphQL with React</div>
                
                <Query query={ME}>
                    {
                        ({ loading, error, data}) => {
                            if (loading) return "loading...";
                            if (error) return `Error! ${error.message}`;
                            console.log(data);

                            return <div>ログイン名 : {data.user.login}</div>
                        }
                    }
                </Query>
            </ApolloProvider>
        )
    }
}

export default App;