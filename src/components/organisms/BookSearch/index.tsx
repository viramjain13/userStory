import { List } from '@material-ui/core'
import React,{ useState,useEffect} from 'react'
import HomeSearch from '../../molecules/Search'

 const Search:React.FC = () => {
    const [searchTerm,setSearchTerm]=useState("");

useEffect(() => {

},[])
let searchResult=   <List>
    {/* list of search results */ }
</List>

    return (
        <div>
            <HomeSearch/>

          {searchResult}
        </div>
    )
}

export default Search;