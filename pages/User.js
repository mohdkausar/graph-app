import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`{
  client {
    ipAddress {
      address
      city {
        name
        population
      }
      country {
        name
        population
        capital {
          name
        }
        currencies {
          name
        }
      }
    }
  }
}`

class User extends Component {
  render() {

    var { client } = this.props.data
    if (!client) return null
    console.log("client: ", client)
    return (
      <div className="max-w-lg w-full lg:max-w-full lg:flex ">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t countryImage lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
        </div>
        <div className="border-r border-b border-l shadow-lg border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="mb-4 text-sm text-gray-600 flex items-center">
              <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              <span>IP: {client.ipAddress.address}</span>
            </p>
            <div className="text-gray-900 font-bold text-xl">
              {client.ipAddress.country.name}
            </div>
            <div className="text-gray-600 text-xs">(Population: {client.ipAddress.country.population})</div>
            <div className="mt-4 bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
              <div className="flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                <p>Capital - {client.ipAddress.city.name} -  <span> (Population: {client.ipAddress.city.population})</span>
                </p>
              </div>
            </div>
            <div className="mt-4 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                <div>
                  <p className="font-bold">Currencies</p>
                  {client.ipAddress.country.currencies.map((currency, index) => {
                    return <p key={index} className="text-sm">{currency.name}</p>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default graphql(getBooksQuery)(User)