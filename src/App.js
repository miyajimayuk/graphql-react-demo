import React from 'react';
import client from './client';
import { ApolloProvider } from "react-apollo";
import { Query } from 'react-apollo';
import { ME } from './graphql';

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

                            return <div>{data.user.login}</div>
                        }
                    }
                </Query>
            </ApolloProvider>
        )
    }
}

export default App;