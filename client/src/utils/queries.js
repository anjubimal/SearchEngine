import {gql} from '@apollo/client' //might change to '@apollo-client'


export const GET_ME = gql`
{
    me{
        _id
        username
        email
        savedBooks{
            bookId
            authors
            image
            title
            link
            description
        }
        
    }
}

`
